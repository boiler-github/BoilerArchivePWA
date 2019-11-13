module.controller('resultController', function($scope, $timeout){
    const ctl = this;
    ctl.kana = kana;
    ctl.show = [false, false, false, false, false, false, false, false, false, false, false];
    ctl.playerIndex = playerIndex;
    ctl.isLoading = false;

    ctl.showClass = showClass;
    ctl.showGrade = showGrade;
    
    //表示切替
    ctl.showChange = function(index){
        ctl.show[index] = !ctl.show[index];
    }
    
    ctl.ratingColor = function(rating){
        if(rating >= 2200)return "#e83929";
        else if(rating >= 2000)return "#f08300";
        else if(rating >= 1800)return "#aa4c8f";
        else if(rating >= 1500)return "#38a1db";
        else if(rating >= 1200)return "#82ae46";
        else return "black";
    }
    
    ctl.toggleDetail = function(game){
        if(game != ctl.shown){
            if(ctl.shown){
                ctl.shown.showOpponent = false;
                ctl.shown.showDetail = false;
            }
            ctl.shown = game;
        }

        game.showDetail = !game.showDetail;
    }

    ctl.toggleOpponent = function(game){
        if(game != ctl.shown){
            if(ctl.shown){
                ctl.shown.showOpponent = false;
                ctl.shown.showDetail = false;
            }
            ctl.shown = game;
        }
        game.showOpponent = !game.showOpponent;
    }

    ctl.gameStar = function(res, compare){
        if (compare == -1){
            return res ? "☆": "★";
        }
        return "";
    }
    
    // ctl.calcSummary = function(type, index){
    //     var name = result.player.name;
    //     var upgrade_date = result.player.upgradeDate;
    //     var wcond = Record.equalTo("winner", name);
    //     var lcond = Record.equalTo("loser", name);
        
    //     var regular = [];
    //     type_list.forEach(function(type){
    //     if(type.isRegular){
    //         regular.push(type.name);
    //     }
    //     });
    //     wcond.in("type", regular);
    //     lcond.in("type", regular);

    //     var from_date = semester;
    //     if(type == "今学期"){
    //     wcond.greaterThanOrEqualTo("date", semester);
    //     lcond.greaterThanOrEqualTo("date", semester);
    //     from_date = sysstart;
    //     }
    //     else if(type != "通算"){
    //     wcond.greaterThanOrEqualTo("date", upgrade_date);
    //     lcond.greaterThanOrEqualTo("date", upgrade_date);      

    //     if(type != "昇級後"){
    //         var player_class = result.player.class;
    //         wcond.equalTo("compareClass", index - 4);
    //         lcond.equalTo("compareClass", 4 - index);
    //     }
    //     from_date = upgrade_date;
    //     }
    //     var win, lose;
    //     var interval = dateDiff(from_date, today());
    //     if(type == "通算"){
    //     var total = result.player.total;
    //     var win = result.player.win;
        
    //     var summary = {
    //         type: type,
    //         values: [
    //         {title: "試合数", value: (total > 0 ? total : NODATA)},
    //         {title: "勝率", value: (total > 0 ? (win / total).toFixed(2) : NODATA)},
    //         {title: "平均枚数差", value: (total > 0 ? (result.sum_diff[index] / total).toFixed(2) : NODATA)},
    //         {title: "平均試合数", value: (total > 0 ? (total / interval).toFixed(2): NODATA)},
    //         ],
    //     };
            
    //     $scope.$apply(function(){
    //         result.summaries[index] = summary;
    //     });
    //     return;
    //     }
        
    //     var p1 = wcond.count()
    //             .fetchAll()
    //             .then(function(results){
    //                 win = results.count;
    //             });
    //     var p2 = lcond.count()
    //             .fetchAll()
    //             .then(function(results){
    //                 lose = results.count;
    //             });
                    
    //     Promise.all([p1, p2])
    //     .then(function(){
    //         var total = win + lose;
    //         var summary = {
    //         type: type,
    //         values: [
    //             {title: "試合数", value: (total > 0 ? total : NODATA)},
    //             {title: "勝率", value: (total > 0 ? (win / total).toFixed(2) : NODATA)},
    //             {title: "平均枚数差", value: (total > 0 ? (result.sum_diff[index] / total).toFixed(2) : NODATA)},
    //             {title: "平均試合数", value: (total > 0 ? (total / interval).toFixed(2): NODATA)},
    //         ],
    //         };
            
    //         $scope.$apply(function(){
    //         result.summaries[index] = summary;
    //         });
    //     });
    // }

    // //勝率計算
    // result.calcWinrate = function(history){
    //     if(history.length == 0)return NODATA;
    //     var win = history.split("○").length - 1;
    //     return (win / history.length).toFixed(2);
    // }
    
    ctl.search = function(){
        resultMenu.setMainPage('result_index.html');

        ctl.player = findMemberByName(ctl.playerName);

        findAllRecordOfPlayer(ctl.playerName).then(function(records) {
            if (records.length == 0) return;

            records.sort(function(record1, record2) {
                if (record1.date < record2.date) return -1;
                if (record1.date > record2.date) return 1;                
                return record1.round - record2.round;
            });

            var dateRecords = [];
            var date = records[0].date;
            var games = [];

            const registerDate = ctl.player.registerDate;
            const classupDate = ctl.player.classupDate;
            const seminarDate = seminar();

            var aggregations = [
                {title: "通算", total: 0, win: 0, sumDiff: 0, from: registerDate},
                {title: "格下", total: 0, win: 0, sumDiff: 0, from: registerDate},
                {title: "同格", total: 0, win: 0, sumDiff: 0, from: registerDate},
                {title: "格上", total: 0, win: 0, sumDiff: 0, from: registerDate},
                {title: "昇級後", total: 0, win: 0, sumDiff: 0, from: classupDate},
                {title: "今学期", total: 0, win: 0, sumDiff: 0, from: seminarDate},
            ];

            var indivisuals = {};

            records.forEach(function(record) {
                if (record.date != date) {
                    dateRecords.push({
                        date: date,
                        games: games,
                    });

                    date = record.date;
                    games = [];
                }

                const result = record.winner == ctl.playerName;
                const opponentName = result ? record.loser : record.winner;
                const opponent = findPlayerByName(opponentName);
                const compareClass = result ? record.compareClass : -record.compareClass;
                const diff = result ? record.diff : -record.diff;

                games.push({
                    date: date,
                    round: record.round,
                    result: result,
                    diff: record.diff,
                    songer: record.songer,
                    type: record.type,
                    comment: record.comment,
                    opponent: opponent,
                    star: ctl.gameStar(compareClass),
                    showDetail: false,
                    showOpponent: false,
                });

                if (isRegularType(record.type)) {
                    aggregations[0].total += 1;
                    aggregations[0].sumDiff += diff;
                    if (record.result) aggregations[0].win += 1;

                    switch (compareClass) {
                        case 1:
                            aggregations[1].total += 1;
                            aggregations[1].sumDiff += diff;
                            if (record.result) aggregations[1].win += 1;
                            break;
                        case 0:
                            aggregations[2].total += 1;
                            aggregations[2].sumDiff += diff;
                            if (record.result) aggregations[2].win += 1;
                            break;
                        case -1:
                            aggregations[3].total += 1;
                            aggregations[3].sumDiff += diff;
                            if (record.result) aggregations[3].win += 1;
                            break;
                    }

                    if (record.date >= classupDate) {
                        aggregations[4].total += 1;
                        aggregations[4].sumDiff += diff;
                        if (record.result) aggregations[4].win += 1;
                    }

                    if (record.date >= seminarDate) {
                        aggregations[5].total += 1;
                        aggregations[5].sumDiff += diff;
                        if (record.result) aggregations[5].win += 1;
                    }

                    if (opponent.isMember) {
                        const opponentName = opponent.name;
                        if (!indivisuals[opponentName]) indivisuals[opponentName] = {total: 0, win: 0, history: ""};
                        
                        indivisuals[opponentName].total += 1;
                        if (result) indivisuals[opponentName].win += 1;
                        indivisuals[opponentName].history += result ? "◯" : "×";
                    }
                }
            });

            dateRecords.push({
                date: date,
                games: games,
            });

            var summaries = [];
            aggregations.forEach(function(aggregation) {
                const total = aggregation.total;

                summaries.push({
                    title: aggregation.title,
                    values: [
                        {title: "試合数", value: total},
                        {title: "勝率", value: total > 0 ? (aggregation.win / total).toFixed(2) : "---"},
                        {title: "平均枚数差", value: total > 0 ? (aggregation.sumDiff / total).toFixed(2) : "---"},
                        // {title: "平均試合数", value: (total / dateDiff(aggregation.from, today())).toFixed(2)},
                    ],
                });
            });

            var indivisualSummaries = [];
            for (name in indivisuals) {
                const total = indivisuals[name].total;
                const recent = indivisuals[name].history.substr(-10, 10);
                const recentWinCount = (recent.match(/◯/g) || []).length;

                indivisualSummaries.push({
                    name: name,
                    total: total,
                    winRate: total > 0 ? indivisuals[name].win / total : "---",
                    recentWinRate: recent.length > 0 ? recentWinCount / recent.length : "---",
                });
            }

            $scope.$apply(function() {
                ctl.records = dateRecords;
                ctl.summaries = summaries;
                ctl.indivisualSummaries = indivisualSummaries;
            })
        });
        

            // .then(function(member){
            //     result.player = member;
            //     $timeout(function(){
            //     result.isLoading = false;
            //     result.results = JSON.parse(member.results);
            //     }, 2000);
            // })
            // .then(function(){
            //     //コンボ計算
            //     Record.equalTo("loser", name)
            //     .order("date", true)
            //     .order("round", true)
            //     .fetch()
            //     .then(function(record){
            //         var last_def = (record ? record.date : sysstart);
            //         var last_round = (record ? record.round : 0);
            //         Record.or([Record.greaterThan("date", last_def),
            //         Record.equalTo("date", last_def).greaterThan("round", last_round)
            //         ]).equalTo("winner", name)
            //         .count()
            //         .fetchAll()
            //         .then(function(results){
            //             result.combo = results.count;
            //         });
            //     });
            //     //試合一覧
            //     Record.or([Record.equalTo("winner", name),
            //                 Record.equalTo("loser", name)
            //     ]).order("date", true)
            //     .order("round", true)
            //     .fetchAll()
            //     .then(function(results){
            //         var records = [];
            //         var last_date = "";
            //         var index = -1;
            //         results.forEach(function(record){
            //         var res = (record.winner == name);
            //         var date = record.date;
            //         if(date != last_date){
            //             last_date = date;
            //             records.push({
            //             date: last_date,
            //             games: []
            //             });
            //             index++;
            //         }
            //         var opponent_name = (res ? record.loser : record.winner);
            //         var opponent;
            //         Object.keys(player_list).forEach(function(head){
            //             player_list[head].forEach(function(player){
            //             if(player.name == opponent_name)opponent = player;
            //             });
            //         });
            //         records[index].games.push({
            //             date: date,
            //             round: record.round,
            //             result: res,
            //             opponent: opponent,
            //             diff: record.diff,
            //             songer: record.songer,
            //             type: record.type,
            //             comment: record.comment,
            //             star: result.isStar(res, record.compareClass),
            //             showDetail: false,
            //             showOpponent: false,
            //         });
            //         });
            //         $scope.$apply(function(){
            //         result.records = records;
            //         });
            //     });

            // result.sum_diff = [result.player.sumDiff, 0, 0, 0, 0, 0];
            // //集計
            // Record.or([Record.equalTo("winner", name),
            //             Record.equalTo("loser", name)
            // ]).order("date", true)
            // .order("round", true)
            // .fetchAll()
            // .then(function(results){
            //     results.forEach(function(record){
            //     var diff = record.diff;
            //     if(!diff)diff = 0;
            //     var date = record.date;
            //     if(record.winner == name){
            //         if(date >= semester)result.sum_diff[1] += diff;
            //         if(date >= result.player.upgradeDate){
            //         result.sum_diff[2] += diff;
            //         var comp = record.compareClass;
            //         result.sum_diff[4 + comp] += diff;
            //         }
            //     }
            //     else{
            //         if(date >= semester)result.sum_diff[1] -= diff;
            //         if(date >= result.player.upgradeDate){
            //         result.sum_diff[2] -= diff;
            //         var comp = record.compareClass;
            //         result.sum_diff[4 - comp] -= diff;
            //         }
            //     }
            //     });

            //     result.summaries = [{}, {}, {}, {}, {}, {}];

            //     //通算
            //     result.calcSummary("通算", 0);
    
            //     //今学期
            //     result.calcSummary("今学期", 1);
            //     //昇級後
            //     result.calcSummary("昇級後", 2);
                
            //     //格上
            //     result.calcSummary("格上", 3);
            //     //同格
            //     result.calcSummary("同格", 4);
            //     //格下
            //     result.calcSummary("格下", 5);
            // });
        // });
    }

    // //ログイン時
    // if(login_player){
    //     result.player_name = login_player;
    //     $timeout(result.search, 100);
    // }  
});