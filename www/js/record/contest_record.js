module.controller('crecordController', function($scope, $timeout){
    const ctl = this;
    ctl.contest = editNavigator.topPage.data;
    ctl.kana = kana;
    ctl.groupIndex = groupIndex;
    ctl.playerIndex = playerIndex;

    ctl.loadClasses = function() {
        getContestClassIndex(ctl.contest).then(function(classIndex) {
            ctl.classIndex = classIndex;
        });
    }

    ctl.loadClasses();

    ctl.loadPlayers = function() {
        return getContestPlayers(ctl.contest).then(function(players) {
            var winningPlayerIndex = {};
            var lostPlayerIndex = {};
    
            players.forEach(function(player) {
                if (player.round > 0) {
                    if(!winningPlayerIndex[player.class]) winningPlayerIndex[player.class] = [];
                    winningPlayerIndex[player.class].push(player);
                } else {
                    if(!lostPlayerIndex[player.class]) lostPlayerIndex[player.class] = [];
                    lostPlayerIndex[player.class].push(player);                
                }
            })
    
            $timeout(function() {
                ctl.winningPlayerIndex = winningPlayerIndex;
                ctl.lostPlayerIndex = lostPlayerIndex;
                ctl.players = players;
            }, 100);
        });
    }

    ctl.loadPlayers();
    
    ctl.loadRecords = function() {
        return getContestRecords(ctl.contest).then(function(records) {
            ctl.records = records;
        });
    }

    ctl.showRound = function(cl, round) {
        if (!ctl.classIndex[cl]) return round + "回戦";

        const count = ctl.classIndex[cl].count;
        const remain = count / (2 ** (round - 1));
        if (remain == 1) return "優勝";
        if (remain == 2) return "決勝";
        if (remain <= 4) return "準決勝";
        if (remain <= 8) return "準々決勝";
        return round + "回戦";
    }
    
    ctl.isRegisteredPlayer = function(name) {
        return ctl.players.map(player => player.name).includes(name);
    }

    ctl.setPlayer = function(player){
        if (ctl.showRound(player.class, player.round) == "優勝") return;

        ctl.player = player;
        ctl.record = {
            round: player.round,
            result: false,
            diff: 10,
            opponent: "",
            belong: groupList[0].name,
        };

        crecordMenu.setMainPage('crecord_form.html', {closeMenu: true});
    }

    ctl.setNewPlayer = function() {
        ctl.setPlayer({
            class: "",
            name: "",
            round: 1,
        });
    }

    ctl.setClassCount = function() {
        if(!ctl.classIndex[ctl.player.class]) ctl.classCount = 64;
        else ctl.classCount = ctl.classIndex[ctl.player.class].count;
    }

    ctl.addDiff = function(diff) {
        ctl.record.diff += diff;
    }

    ctl.savePlayer = function(player) {
        return insertContestPlayer(ctl.contest, {
            id: player.id,
            name: player.name,
            round: player.round,
            class: player.class,
        });
    }

    ctl.saveRecord = function(record, player) {
        return insertContestRecord(ctl.contest, {
            id: record.id,
            round: record.round,
            player: player.name,
            class: player.class,
            opponent: record.opponent,
            belong: record.belong,
            result: !record.result,
            diff: record.diff,
        });
    }
   
    ctl.sendData = function(){
        var errors = [];
        if (ctl.player.round == 1) {
            if (!ctl.player.class) errors.push("クラスを入力してください。");
            if (!ctl.classCount) errors.push("クラス人数を入力してください。");    
        }

        if(!ctl.record.opponent){
            if(ctl.record.round > 1) errors.push("対戦者名が登録されていません。");

            if(errors.length == 0){
                ons.notification.confirm(
                    "不戦勝として処理します。よろしいですか？",
                    {
                        title: "確認",
                        callback: function(index){
                            if(index == 1){
                                ctl.saveRecord(ctl.record, ctl.player);
                                
                                ctl.player.round += 1;
                                ctl.savePlayer(ctl.player).then(ctl.loadPlayers);
                                
                                ons.notification.alert("対戦結果を記録しました。", {title: "対戦結果入力"});
                                crecordMenu.setMainPage('crecord_index.html', {closeMenu: true});
                            }
                        }
                    }
                );  
            }
        }
        else{
            if(!ctl.record.opponent.match(/^[^\w!-~]+$/)) errors.push("正しい名前を入力してください。");
            
            if(errors.length == 0) {
                ctl.saveRecord(ctl.record, ctl.player);
                                            
                if(!ctl.record.result) ctl.player.round += 1;
                else ctl.player.round *= -1;
    
                ctl.savePlayer(ctl.player).then(ctl.loadPlayers);
                
                ons.notification.alert("対戦結果を記録しました。", {title: "対戦結果入力"});
                crecordMenu.setMainPage('crecord_index.html', {closeMenu: true});
            }
        }

        if (errors.length > 0) {
            ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
        } else {
            if (!ctl.classIndex[ctl.player.class]) {
                insertContestClass(ctl.contest, {
                    name: ctl.player.class,
                    count: ctl.classCount,
                }).then(ctl.loadClasses);
            }    
        }
    }
        
    ctl.exit = function(){
        ons.notification.confirm(
            "入力を終了し、結果を確定します",
            {
                title: "確認",
                callback: function(index){
                    if(index == 1) {
                        ctl.contest.isDone = true;
                        insertContest(ctl.contest)
                            .then(ctl.loadRecords)
                            .then(function() {
                                crecordMenu.setMainPage('crecord_result.html', {closeMenu: true});                                            
                            });                            
                    }
                }
            }
        );
    }
    
    ctl.outputResult = function(){
        var paras = [];
        paras.push(ctl.contest.date + "に行われた" + ctl.contest.name + "の結果です。");
        paras.push("");

        var playerIndex = {};
        ctl.players.forEach(function(player) {
            if(!playerIndex[player.class]) playerIndex[player.class] = [];
            playerIndex[player.class].push(player.name);
        });

        paras.push("参加者");
        for(cl in playerIndex) {
            paras.push(cl + "級（" + ctl.classIndex[cl].count + "人）");
            paras.push(playerIndex[cl].join("、"));
        }

        var round = 0;
        var cl = "";

        ctl.records.forEach(function(record) {
            if (record.round != round) {
                round = record.round
                cl = "";
                paras.push("");
                paras.push("");
                paras.push(round + "回戦");
            }

            if (record.class != cl) {
                if (cl != "") paras.push("");
                cl = record.class;
                paras.push(cl + "級");
            }
            
            if (record.opponent == "") paras.push(record.player + " 不戦勝");
            else paras.push(
                record.player + " " 
                + (record.result ? "○" : "×") + record.diff + (record.result ? "×" : "○")
                + " " + record.opponent + "（" + record.belong + "）"
            );
        });

        return paras.join('\r\n');
    }
});