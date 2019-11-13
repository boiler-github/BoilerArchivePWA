module.controller('membersController', function($scope, $timeout){
    const ctl = this;
    ctl.memberList = memberList;

    ctl.proceed = function(member){
        settingsNavigator.once('prepop', function(){
            $timeout(function(){
                ctl.memberList = memberList;
            }, 100);
        });
        settingsNavigator.pushPage('members_detail.html', {data: member});
    }
});

module.controller('memberdetailController', function($scope, $timeout){
    const ctl = this;
    ctl.classes = classes;
    ctl.grades = grades;
    ctl.groupIndex = groupIndex;
    ctl.kana = kana;
    ctl.show = "";

    ctl.member = settingsNavigator.topPage.data;
    if(!ctl.member.id){
        ctl.member = {
            name: "",
            lastName: "",
            firstName: "",
            head: "",
            class: classes[0],
            grade: grades[0],
            belong: "京大かるた会",
            rating: 1500,
            registerDate: today(),
            classupDate: today(),
        };
    } else {
        const nameSplit = ctl.member.name.split(" ");
        ctl.member.lastName = nameSplit[0];
        ctl.member.firstName = nameSplit[1];
    }

    ctl.register = ctl.member.id;
    ctl.isLoading = false;
    
    ctl.validate = function(member){
        var errors = [];
        
        if(!member.lastName)
            errors.push("姓を入力してください。");
        else if(!member.lastName.match(/^[^\s\w!-~]+$/))
            errors.push("姓が正しくありません。");

        if(!member.firstName)
            errors.push("名を入力してください。");
        else if(!member.firstName.match(/^[^\s\w!-~]+$/))
            errors.push("名が正しくありません。");

        if(!member.head)
            errors.push("頭文字を入力してください。");
        else if(!member.head.match(/^[ぁ-ん]$/))
            errors.push("頭文字が正しくありません。");
        
        if(!member.class)
            errors.push("級を選択してください。");
    
        if(!member.grade)
            errors.push("学年を入力してください。");

        if(!member.registerDate)
            errors.push("入会日を入力してください。");

        if(!member.classupDate)
            errors.push("昇段日を入力してください。");

        return errors;
    }
  
    ctl.updateMember = function(){
        const member = ctl.member;

        const errors = ctl.validate(member);
        if(errors.length > 0){
            ons.notification.alert(errors.join("<br/>"), {title: "入力の不備"});
            return;
        }

        member.name = member.lastName + " " + member.firstName;

        ctl.isLoading = true;
		insertMember(member).then(function(){
            ons.notification.alert("部員登録を登録しました。", {title: "部員登録"});
            settingsNavigator.popPage();
        });
    }
  
    ctl.confirmDelete = function(){
        ons.notification.confirm(
            "本当に削除してもいいですか？",
            {
                title: "確認",
                callback: function(index){
                    if(index == 1)ctl.deleteMember();
                }
            }
        );
    }
  
    ctl.deleteMember = function(){
        $scope.$apply(function(){
            ctl.isLoading = true;
        });
    
        deleteMember(ctl.member).then(function(){
            ons.notification.alert("登録情報を削除しました。", {title: "情報削除"});
            settingsNavigator.popPage();
        });
    }
});