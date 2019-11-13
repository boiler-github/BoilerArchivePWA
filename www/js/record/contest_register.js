module.controller('cregisterController', function($scope, $timeout){
    const ctl = this;

    $timeout(function(){
        ctl.date = today();
    }, 100);
    
    ctl.sendData = function(){
        var errors = [];

        if(!ctl.name)
            errors.push("大会名称が入力されていません。");
        else if(!ctl.name.match(/^[^\s\w!-~]+$/))
            errors.push("大会名称が正しくありません。");
            
        if(errors.length > 0) ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
        else{
            insertContest({
                name: ctl.name,
                date: ctl.date,
                isDone: false,
            }).then(function() {
                ons.notification.alert("大会を登録しました。", {title: "大会登録"});
                editNavigator.popPage();    
            });
        }
    }
});
