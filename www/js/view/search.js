module.controller('searchController', function($scope, $timeout){
    const ctl = this;
    ctl.isLoading = false;
    ctl.records = [];
    ctl.show = {};
    ctl.kana = kana;
    ctl.playerIndex = playerIndex;
    ctl.gameTypeList = gameTypeList;
    ctl.songerList = songerList;
    ctl.selectedType = {};
    ctl.details = ["運命戦", "束", "二束", "献上"];

    $timeout(function(){
        ctl.date1 = seminar();
        ctl.date2 = today();
    }, 200);
    
    ctl.showMatch = function(){
        var str = "";

        str += (ctl.player1 ? ctl.player1 : "＊＊＊");
        str += " ";

        if(ctl.result === undefined) str += "－";
        else str += (ctl.result ? "× ○" : "○ ×");

        str += " ";
        str += (ctl.player2 ? ctl.player2 : "＊＊＊");

        return str;
    }
    
    ctl.showChange = function(key){
        ctl.show[key] = !ctl.show[key];
    }
    
    ctl.showDetail = function(){
        var str = "";

        for(var key in ctl.selectedType){
            if(ctl.selectedType[key]) str += key + ", ";
        }

        if(ctl.detail) str += ctl.detail + ", ";
        if(ctl.songer) str += ctl.songer + ", ";
        if(ctl.comment) str += (ctl.comment ? "コメントあり" : "コメントなし");
        return str;
    }
    
    ctl.gameStar = function(res, compare){
        if (compare == -1){
            return res ? "☆": "★";
        }
        return "";
    }
    
    //検索実行
    ctl.searchRecord = function(){
        ctl.isLoading = true;
        searchMenu.setMainPage('search_result.html');

        var query = db.collection('Records');

        // //対戦
        // if(search.result !== undefined){
        // if(!search.result){
        //     if(search.player1)query.equalTo("winner", search.player1);
        //     if(search.player2)query.equalTo("loser", search.player2);
        // }else{
        //     if(search.player1)query.equalTo("loser", search.player1);
        //     if(search.player2)query.equalTo("winner", search.player2);
        // }
        // }
        // else{
        // if(search.player1 && search.player2){
        //     var players = [search.player1, search.player2];
        //     query.in("winner", players)
        //     .in("loser", players);
        // }
        // else{
        //     var name = "";
        //     if(search.player1)name = search.player1;
        //     if(search.player2)name = search.player2;
        //     if(name){
        //     query.or([
        //         Record.equalTo("winner", name),
        //         Record.equalTo("loser", name),
        //     ]);
        //     }
        // }
        // }
            
        // 日付
        query = query.where("date", ">=", ctl.date1).where("date", "<=", ctl.date2);
        
        // // //試合形式
        // // var q_type = [];
        // // for(var key in search.selected_type){
        // // if(search.selected_type[key])q_type.push(key);
        // // }
        // // if(q_type.length > 0)query.in("type", q_type);
        
        //試合結果
        const detail = ctl.detail;
        if (detail == "運命戦") query = query.where("diff", "==", 1);
        if(detail == "束") query = query.where("diff", ">=", 10);
        if(detail == "二束") query = query.where("diff", ">=", 20);
        if(detail == "献上") query = query.where("compareClass", "==", -1);
        
        //読手
        if(ctl.songer) query = query.where("songer", "==", ctl.songer);
        
        //コメント
        if(ctl.comment) query = query.where("comment", ">", "");

        findAllRecordOfQuery(query)
            .then(function(records){
                var dateRecords = [];

                if (records.length > 0) {
                    var date = records[0].date;
                    var games = [];
        
                    records.forEach(function(record) {
                        if (record.date != date) {
                            dateRecords.push({
                                date: date,
                                games: games,
                            });
        
                            date = record.date;
                            games = [];
                        }
    
                        games.push(record);
                    });
        
                    dateRecords.push({
                        date: date,
                        games: games,
                    });
                }

        /*          var winner, loser;
                Object.keys(player_list).forEach(function(head){
                    player_list[head].forEach(function(player){
                    if(player.name == opponent_name)opponent = player;
                    });
                });*/

                $timeout(function(){
                    ctl.count = records.length;
                    ctl.records = dateRecords;
                    ctl.isLoading = false;   
                }, 100);
            });
    }

    ctl.widths = ["7%", "25%", "18%", "25%", "20%", "5%"];

    //表示用配列
    ctl.arrange = function(game){
        var ret = [];

        ret.push(game.round);

        if(game.type == "一人取り") {
            ret.push(game.winner);
            ret.push("");
            ret.push("");
            ret.push(game.type);
        } else { 
            if(game.order) {
                ret.push(game.winner);
                ret.push("○ " + game.diff + " ×");
                ret.push(game.loser);
            } else {
                ret.push(game.loser);
                ret.push("× " + game.diff + " ○");
                ret.push(game.winner);
            }

            const type = (isRegularType(game.type) ? "" : game.type);
            ret.push(type);
        }

        ret.push(ctl.gameStar(game.order, game.compareClass));
        return ret;
    }
    
    ctl.pageDetail = function(game){
        ctl.game = game;
        ctl.forEdit = false;

        $timeout(function(){
            ctl.newDate = game.date;
            ctl.newRound = game.round;
            ctl.newDiff = game.diff;
            ctl.newResult = !game.order;
            ctl.newType = game.type;
            ctl.newComment = game.comment;
            ctl.newSonger = game.songer;
        }, 200);

        searchMenu.setMainPage('search_detail.html');
    }
    
    ctl.showResult = function(game){
        if (game.type == "一人取り") return game.winner;

        var str = "";

        if (game.order) str += game.winner + " ○ " + game.diff + " × " + game.loser;
        else str += game.loser + " × " + game.diff + " ○ " + game.winner;

        str += ctl.gameStar(game.order, game.compareClass);
        return str;
    }
    
    ctl.updateRecord = function(){
        ctl.isLoading = true;
        const game = ctl.game;

        insertRecord({
            id: game.id,
            date: ctl.newDate,
            round: parseInt(ctl.newRound),
            songer: ctl.newSonger,
            winner: game.winner,
            loser: game.loser,
            compareClass: game.compareClass,
            diff: parseInt(ctl.newDiff),
            type: game.type,
            comment: ctl.newComment,
            order: game.order, 
            ratingChange: game.ratingChange,
        }).then(function(){        
            ctl.searchRecord();
            ons.notification.alert("記録を更新しました。", {title: "記録更新"});
            searchMenu.setMainPage('search_result.html');
        });
    }
    
    ctl.deleteRecord = function(){
        const game = ctl.game;

        ons.notification.confirm(
        "本当に削除してよろしいですか？", 
        {
            title: "確認",
            callback: function(index){
                if(index == 1){
                    deleteRecord(game).then(function(){
                        if(game.ratingChange > 0) {
                            var mWinner = findMemberByName(game.winner);
                            var mLoser = findMemberByName(game.loser);
            
                            mWinner.rating -= game.ratingChange;
                            mLoser.rating += game.ratingChange;

                            insertMember(mWinner).then(function() {
                                return insertMember(mLoser);
                            });
                        }

                        ctl.searchRecord();
                        ons.notification.alert("記録を削除しました", {title: "記録削除"});
                        searchMenu.setMainPage('search_result.html');
                    });
                }
            }
        });
    }
});