module.controller('guestsController', function($scope, $timeout){
    const ctl = this;
    ctl.guestList = guestList;

    ctl.proceed = function(guest){
        settingsNavigator.once('prepop', function(){
            $timeout(function(){
                ctl.guestList = guestList;
            }, 100);
        });
        settingsNavigator.pushPage('guests_detail.html', {data: guest});
    }
});

module.controller('guestdetailController', function($scope, $timeout){
    const ctl = this;
    ctl.classes = classes;
    ctl.groupIndex = groupIndex;
    ctl.kana = kana;
    ctl.show = "";

    ctl.guest = settingsNavigator.topPage.data;
    if(!ctl.guest.id){
        ctl.guest = {
            name: "",
            head: "",
            class: classes[0],
        };
    } else {
        const nameSplit = ctl.guest.name.split(" ");
        ctl.guest.lastName = nameSplit[0];
        ctl.guest.firstName = nameSplit[1];
    }
    ctl.register = ctl.guest.id;
    ctl.isLoading = false;
    
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
  
    ctl.updateGuest = function(){
        var register = ctl.register;
        var guest = ctl.guest;

        var errors = ctl.validate(guest);
        if(errors.length > 0){
            ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
            return;
        }

        guest.name = guest.lastName + " " + guest.firstName;

        ctl.isLoading = true;
		insertGuest(guest).then(function(){
            ons.notification.alert("登録情報を更新しました。", {title: "情報更新"});
            settingsNavigator.popPage();
        });
    }
  
    ctl.confirmDelete = function(){
        ons.notification.confirm(
            "本当に削除してもいいですか？",
            {
                title: "確認",
                callback: function(index){
                    if(index == 1) ctl.deleteGuest();
                }
            }
        );
    }
  
    ctl.deleteGuest = function(){
        $scope.$apply(function(){
            ctl.isLoading = true;
        });

        deleteGuest(ctl.guest).then(function(){
            ons.notification.alert("ゲストを登録しました。", {title: "ゲスト登録"});
            settingsNavigator.popPage();
        });
    }
});