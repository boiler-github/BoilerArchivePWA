module.controller('csearchController', function($scope, $timeout){
    const ctl = this;
  
    ctl.loadContests = function() {
        getPastContests().then(function(contests) {
            $timeout(function() {
                ctl.contests = contests;
            }, 100);
        });    
    }

    ctl.loadContests();

    ctl.proceed = function(contest) {
        viewNavigator.once('prepop', ctl.loadContests);

        getContestRecords(contest).then(function(records) {
            viewNavigator.pushPage('csearch_detail.html', {
                data: {
                    contest: contest,
                    records: records,
                }
            });
        });
    }
});

module.controller('csearchdetailController', function($scope, $timeout){
    const ctl = this;
    const data = viewNavigator.topPage.data;
    ctl.contest = data.contest;

    ctl.isLoading = true;
    getContestClassIndex(ctl.contest).then(function(classIndex) {
        ctl.classIndex = classIndex;
    }).then(function() {
        getContestPlayers(ctl.contest).then(function(players) {
            var playerIndex = {};
            players.forEach(function(player) {
                if(!playerIndex[player.class]) playerIndex[player.class] = [];
                playerIndex[player.class].push(player.name);
            });

            $timeout(function() {
                ctl.playerIndex = playerIndex;
                ctl.isLoading = false;
            }, 10);
        });

        var records = {};
        data.records.forEach(function(record) {
            if(!records[record.round]) records[record.round] = {};
            if(!records[record.round][record.class]) records[record.round][record.class] = [];
            records[record.round][record.class].push(record);
        });    

        $timeout(function() {
            ctl.records = records;
        }, 10);
    });

    ctl.widths = ["25%", "15%", "25%", "35%"];

    ctl.arrange = function(game){
        if (game.opponent == "") {
            return [game.player, "", "不戦勝", ""];
        }

        var ret = [];
        ret.push(game.player);
        if(game.result)ret.push("○" + game.diff + "×");
        else ret.push("×" + game.diff + "○");
        ret.push(game.opponent);
        ret.push(game.belong);
        return ret;
    }

    ctl.confirmDelete = function() {
    	ons.notification.confirm(
      		"本当に削除してもいいですか？",
      		{
        		title: "確認",
        		callback: function(index){
          			if(index == 1) ctl.deleteContest();
        		}
      		}
		);
	}
  
	ctl.deleteContest = function() {
    	$scope.$apply(function(){
			ctl.isLoading = true;
    	});
    
    	deleteContest(ctl.contest).then(function(){
      		ons.notification.alert("登録情報を削除しました。", {title: "情報削除"});
      		viewNavigator.popPage();
    	});
    }
      
    ctl.proceed = function(record) {
        viewNavigator.pushPage('csearch_edit.html', {
            data: {
                contest: ctl.contest,
                record: record,
            }
        });
    }
});

module.controller('csearcheditController', function($scope, $timeout) {
    const ctl = this;
    const data = viewNavigator.topPage.data;
    ctl.contest = data.contest;
    const record = data.record;
    const nameSplit = record.opponent.split(" ");
    record.opponentLastName = nameSplit[0];
    record.opponentFirstName = nameSplit[1];
    ctl.record = record;

    ctl.kana = kana;
    ctl.groupIndex = groupIndex;

    ctl.addDiff = function(diff) {
        ctl.record.diff += diff;
    }
   
    ctl.sendData = function(){
        if(!ctl.record.opponent){
            ons.notification.alert("対戦者名が登録されていません。", {title: "入力の不備"});
        } else if(!ctl.record.opponent.match(/^[^\w!-~]+$/)){
            ons.notification.alert("正しい名前を入力してください。", {title: "入力の不備"});
        } else {
            insertContestRecord(ctl.contest, record).then(function() {
                ons.notification.alert("対戦結果を更新しました。", {title: "対戦結果更新"});
                viewNavigator.popPage();    
            });                             
        }
    }
});