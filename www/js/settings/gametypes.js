module.controller('gametypesController', function($scope, $timeout){
	const ctl = this;
	ctl.typeList = gameTypeList;

	ctl.proceed = function(gameType){
    	settingsNavigator.once('prepop', function(){
      		$timeout(function(){
        		ctl.typeList = gameTypeList;
      		}, 100);
    	});
    	settingsNavigator.pushPage('gametypes_detail.html', {data: gameType});
	}
});

module.controller('typedetailController', function($scope, $timeout){
  	const ctl = this;
  	ctl.type = settingsNavigator.topPage.data;
  	if(!ctl.type.id){
		ctl.type = {
      		name: "",
			isRegular: false,
			index: gameTypeList.length + 1,
    	};
  	}
  	ctl.register = ctl.type.id;
  	ctl.isLoading = false;
  
  	ctl.updateType = function(){
    	var register = ctl.register;
    	var gameType = ctl.type;

    	var errors = [];
    	if(!gameType.name)errors.push("名前を入力してください。");
    	if(errors.length > 0){
      		ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
      		return;
    	}

    	ctl.isLoading = true;
		insertGameType(gameType).then(function(){
      		ons.notification.alert("試合形式を登録しました。", {title: "試合形式登録"});
      		settingsNavigator.popPage();
    	});
  	}
  
  	ctl.confirmDelete = function(){
		ons.notification.confirm(
     		"本当に削除してもいいですか？",
      		{
        		title: "確認",
        		callback: function(index){
        	  		if(index == 1) ctl.deleteType();
        		}
      		}
		);
  	}
  
  	ctl.deleteType = function(){
    	$scope.$apply(function(){
			ctl.isLoading = true;
    	});

		insertGameType(ctl.type).then(function(){
			ons.notification.alert("登録情報を削除しました。", {title: "情報削除"});
      		settingsNavigator.popPage();
    	});
  	}
});