module.controller('envController', function($scope, $timeout){
    const ctl = this;

    $timeout(function(){
        const preDate = localStorage.getItem('pre_date');
        ctl.date = preDate ? preDate : today();
        ctl.songer = songerList[0].name;
        ctl.songerList = songerList;
    }, 100);
  
    const preRound = parseInt(localStorage.getItem('pre_round'));
    ctl.round = preRound ? preRound + 1 : 1;

    //+-ボタン
    ctl.addRound = function(num){
        ctl.round = Math.max(parseInt(ctl.round) + num, 1);
    }
  
    ctl.proceed = function(){
        localStorage.setItem('pre_date', ctl.date);
        localStorage.setItem('pre_round', ctl.round);
        
        editNavigator.pushPage('player_all.html', {
            data: {
                date: ctl.date, 
                round: ctl.round, 
                songer: ctl.songer,
            }
        });
    }
});

module.controller('playerController', function($scope, $timeout){
    const ctl = this;

    ctl.kana = kana;
    ctl.show = "";
    ctl.checked = {};
    ctl.order = [];
    ctl.playerIndex = playerIndex;
    ctl.groupIndex = groupIndex;
    //前画面からの引き継ぎデータ
    ctl.env = editNavigator.topPage.data;

    //ゲスト追加用
    ctl.classes = classes;
    ctl.guest = {
        name: "",
        head: "",
        class: classes[0],
        belong: groupList[0].name,
    };
    ctl.registered = [];
  
    var prePlayers = JSON.parse(localStorage.getItem('pre_players'));
    if(!prePlayers) prePlayers = [];
    prePlayers.forEach(function(player){
        ctl.checked[player.name] = player;
    });

    //参加者管理
    ctl.toggleCheck = function(player){
        if(ctl.checked[player.name]) delete player.checked[player.name];
        else ctl.checked[player.name] = player;
    }
  
    ctl.setOrder = function(name){
        var index = ctl.order.indexOf(name);
        if(index == -1){
            var i;
            for(i = 0; i < ctl.order.length; i++){
                if(!ctl.order[i]){
                    ctl.order[i] = name;
                    break;
                }
            }
            if(i == ctl.order.length)ctl.order.push(name);
        }
        else ctl.order[index] = "";
    }

    //対戦相手取得
    ctl.getOrderIndex = function(name){
        var index = ctl.order.indexOf(name);
        if(index == -1) return "";

        return parseInt((index / 2) + 1);
    }
  
    //次の画面への遷移
    ctl.proceed = function(){
        var selected = [];
        for(var i = 0; i < ctl.order.length; i++){
            if(ctl.order[i]){
                selected.push(ctl.checked[ctl.order[i]]);
            }
        }
    
        if(selected.length == 0){
            ons.notification.alert("対戦者を選択してください。", {title: "入力の不備"});
            return;
        }

        localStorage.setItem('pre_players', JSON.stringify(selected));
    
        editNavigator.pushPage('result_all.html',{
            data: {
                env: ctl.env, 
                players: selected,
            }
        });
    }
  
    ctl.validate = function(guest){
        var errors = [];

        if(!guest.lastName)
            errors.push("姓を入力してください。");
        else if(!guest.lastName.match(/^[^\s\w!-~]+$/))
            errors.push("姓が正しくありません。");

        if(!guest.firstName)
            errors.push("名を入力してください。");
        else if(!guest.firstName.match(/^[^\s\w!-~]+$/))
            errors.push("名が正しくありません。");

        if(!guest.head)
            errors.push("頭文字を入力してください。");
        else if(!guest.head.match(/^[ぁ-ん]$/))
            errors.push("頭文字が正しくありません。");
    
        if(!guest.class)
            errors.push("級を選択してください。");
    
        if(!guest.belong)
            errors.push("所属を選択してください。");
    
        return errors;
    }

    //ゲスト登録
    ctl.registerGuest = function(){
        var guest = ctl.guest;
    
        var errors = ctl.validate(guest);
        if(errors.length > 0){
            ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
        }
        else {
            guest.name = guest.lastName + " " + guest.firstName;

            insertGuest(guest).then(function() {
                ons.notification.alert("ゲストを登録しました。", {title: "ゲスト登録完了"});

                $timeout(function() {
                    ctl.registered.push({
                        name: guest.name,
                        class: guest.class,
                        isMember: false,
                        index: playerIndex.length,
                    });
        
                    ctl.guest = {
                        name: "",
                        head: "",
                        class: ctl.classes[0],
                        belong: groupList[0].name,
                    };        
                }, 100);
            });
        }
    }
});

module.controller('resultsController', function(){
    const ctl = this;
    const data = editNavigator.topPage.data;
    const players = data.players;
    var games = [];
    var pracs = [];
  
    //組み合わせの計算
    for(i = 0; players[i] || players[i + 1]; i += 2) {
        if(players[i] && players[i + 1]) {
            var diff = classDiff(players[i].class, players[i + 1].class);
            games.push({
                player1: players[i],
                player2: players[i + 1],
                result: diff > 0,
                diff: (Math.abs(diff) + 1) * 5,
                typeIndex: "0",
                comment: "",
            });
        }
        else if(players[i]) pracs.push({player: players[i], comment: ""});
        else pracs.push({player: players[i + 1], comment: ""});
    }
  
    ctl.games = games;
    ctl.pracs = pracs;
    ctl.gameTypeList = gameTypeList;
    ctl.env = data.env;
  
    //+-ボタン
    ctl.addDiff = function(index, num){
        var diff = ctl.games[index].diff + num;
        if (diff < 1) diff = 1;
        if (diff > 50) diff = 50;

        ctl.games[index].diff = diff;
    }
      
    //情報送信
    ctl.sendData = function(){
        const date = ctl.env.date;
        const round = parseInt(ctl.env.round);
        const songer = ctl.env.songer;

        //試合
        ctl.games.forEach(function(game) {
            var winner = game.player1;
            var loser = game.player2;
            var order = true;
            const type = gameTypeList[game.typeIndex];

            if(game.result){
                winner = game.player2;
                loser = game.player1;
                order = false;
            }

            var ratingChange = 0;
            if(winner.isMember && loser.isMember && type.isRegular) {
                var mWinner = findMemberByName(winner.name);
                var mLoser = findMemberByName(loser.name);

                ratingChange = calcRatingChange(mWinner.rating, mLoser.rating, game.diff);
            }

            insertRecord({
                date: date,
                round: round,
                songer: songer,
                winner: winner.name,
                loser: loser.name,
                compareClass: compareClass(winner.class, loser.class),
                diff: parseInt(game.diff),
                type: type.name,
                comment: game.comment,
                order: order,
                ratingChange: ratingChange,
            });

            if (ratingChange > 0) {
                mWinner.rating += ratingChange;
                mLoser.rating -= ratingChange;

                insertMember(mWinner).then(function() {
                    return insertMember(mLoser);
                });
            }
        });
                    

        //         updateMember(winner.name, function(member_obj){
        //         var p_results = JSON.parse(member_obj.results);
        //         if(!p_results)p_results = {};
        //         if(p_results[loser.name]){
        //             var res = p_results[loser.name];
        //             p_results[loser.name] = [res[0] + 1, res[1] + 1, addHistory(res[2], "○")];
        //         }
        //         else p_results[loser.name] = [1, 1, "○"];
        //         return member_obj.setIncrement("rating", r_change)
        //                 .setIncrement("sumDiff", game.diff)
        //                 .setIncrement("total", 1)
        //                 .setIncrement("win", 1)
        //                 .set("results", JSON.stringify(p_results))
        //                 .update();
        //         });
                
        //         updateMember(loser.name, function(member_obj){
        //         var p_results = JSON.parse(member_obj.results);
        //         if(!p_results)p_results = {};
        //         if(p_results[winner.name]){
        //             var res = p_results[winner.name];
        //             p_results[winner.name] = [res[0] + 1, res[1], addHistory(res[2], "×")];
        //         }
        //         else p_results[winner.name] = [1, 0, "×"];
        //         return member_obj.setIncrement("rating", -r_change)
        //                 .setIncrement("sumDiff", -game.diff)
        //                 .setIncrement("total", 1)
        //                 .set("results", JSON.stringify(p_results))
        //                 .update();
        //         });
        //     }
        //     else{
        //         if(winner.isMember){
        //         updateMember(winner.name, function(member_obj){
        //             return member_obj.setIncrement("sumDiff", game.diff)
        //                     .setIncrement("total", 1)
        //                     .setIncrement("win", 1)
        //                     .update();
        //         });
        //         }

        //         if(loser.isMember){
        //         updateMember(loser.name, function(member_obj){
        //             return member_obj.setIncrement("sumDiff", -game.diff)
        //                     .setIncrement("total", 1)
        //                     .update();
        //         });
        //         }
        //     }
        // });

        //一人取り
        ctl.pracs.forEach(function(prac){
            insertRecord({
                date: date,
                round: round,
                songer: songer,
                winner: prac.player.name,
                loser: "",
                compareClass: 0,
                diff: 0,
                type: "一人取り",
                comment: prac.comment,
                order: true,
            });
        });

        const count = ctl.games.length + ctl.pracs.length;
        editNavigator.pushPage('submit_all.html', {data: {count: count, games: ctl.games, pracs: ctl.pracs}});
    }
});

module.controller('submitController', function(){
    const ctl = this;
    const data = editNavigator.topPage.data;
    ctl.count = data.count;
    ctl.games = data.games;
    ctl.pracs = data.pracs;

    ctl.isStar = function(res, compare){
        if(compare == -1 && res)return "☆";
        if(compare == 1 && !res)return "★";
        return "";
    }

    ctl.widths = ["25%", "18%", "25%", "20%", "5%"];

    //表示用配列
    ctl.arrangePrac = function(prac){
        return [
            prac.player.name,
            "",
            "",
            "一人取り",
            "",
        ];
    }

    ctl.arrangeGame = function(game) {
        const type = gameTypeList[game.typeIndex];

        return [
            game.player1.name,
            !game.result ? "○ " + game.diff + " ×" : "× " + game.diff + " ○",
            game.player2.name,
            type.isRegular ? "" : type.name,
            ctl.isStar(!game.result, compareClass(game.player1.class, game.player2.class)),
        ];
    }
});