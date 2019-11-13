module.controller('songersController', function($scope, $timeout){
	const ctl = this;
	ctl.songerList = songerList;

	ctl.proceed = function(songer){
    	settingsNavigator.once('prepop', function(){
      		$timeout(function(){
        		ctl.songerList = songerList;
      		}, 100);
    	});
    	settingsNavigator.pushPage('songers_detail.html', {data: songer});
  	}
});

module.controller('songerdetailController', function($scope, $timeout){
	const ctl = this;
	ctl.songer = settingsNavigator.topPage.data;
  	if(!ctl.songer.id){
    	ctl.songer = {
      		name: "",
    	};
  	}
  	ctl.register = ctl.songer.id;
  	ctl.isLoading = false;
    
	  ctl.updateSonger = function(){
    	var register = ctl.register;
    	var songer = ctl.songer;

    	var errors = [];
    	if(!songer.name)errors.push("名前を入力してください。");
    	if(errors.length > 0){
      		ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
      		return;
    	}
    
    	ctl.isLoading = true;
		insertSonger(songer).then(function(){
      		ons.notification.alert("読手を登録しました。", {title: "読手登録"});
      		settingsNavigator.popPage();
		});
  	}
  
  	ctl.confirmDelete = function(){
    	ons.notification.confirm(
      		"本当に削除してもいいですか？",
      		{
        		title: "確認",
        		callback: function(index){
          			if(index == 1)ctl.deleteSonger();
        		}
      		}
		);
  	}
  
  	ctl.deleteSonger = function(){
    	$scope.$apply(function(){
			ctl.isLoading = true;
    	});

		deleteSonger(ctl.songer).then(function(){
      		ons.notification.alert("登録情報を削除しました。", {title: "情報削除"});
      		settingsNavigator.popPage();
    	});
  	}
});