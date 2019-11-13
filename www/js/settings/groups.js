module.controller('groupsController', function($scope, $timeout){
	const ctl = this;
	ctl.groupList = groupList;

	ctl.proceed = function(group){
		settingsNavigator.once('prepop', function(){
    		$timeout(function(){
        		ctl.groupList = groupList;
      		}, 100);
    	});
    	settingsNavigator.pushPage('groups_detail.html', {data: group});
  	}
});

module.controller('groupdetailController', function($scope, $timeout){
  	const ctl = this;
  	ctl.group = settingsNavigator.topPage.data;
  	if(!ctl.group.id){
    	ctl.group = {
      		name: "",
      		head: "",
    	};
  	}
	ctl.register = ctl.group.id;
  	ctl.isLoading = false;
  
  	ctl.updateGroup = function(){
    	const register = ctl.register;
    	const group = ctl.group;

    	var errors = [];
    	if(!group.name) errors.push("名前を入力してください。");
    	if(!group.head) errors.push("頭文字を入力してください。");
    	else if(!group.head.match(/^[ぁ-ん]$/)) errors.push("頭文字が正しくありません。");
	
	    if(errors.length > 0){
    		ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
			return;
    	}

		ctl.isLoading = true;

	    insertGroup(group).then(function(){
    		ons.notification.alert("かるた会を登録しました。", {title: "かるた会登録"});
      		settingsNavigator.popPage();
    	});
	}
  
	ctl.confirmDelete = function(){
    	ons.notification.confirm(
      		"本当に削除してもいいですか？",
      		{
        		title: "確認",
        		callback: function(index){
          			if(index == 1) ctl.deleteGroup();
        		}
      		}
		);
	}
  
	ctl.deleteGroup = function(){
    	$scope.$apply(function(){
			ctl.isLoading = true;
    	});
    
    	deleteGroup(ctl.group).then(function(){
      		ons.notification.alert("登録情報を削除しました。", {title: "情報削除"});
      		settingsNavigator.popPage();
    	});
  	}
});