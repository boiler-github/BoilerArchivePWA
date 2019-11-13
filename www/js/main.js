module.controller('mainController', function($scope, $timeout){
    const ctl = this;

    ctl.isLoading = true;

    $timeout(function() {
        ctl.isLoading = false;
    }, 1000);

    ctl.setupEditNavigator = function() {
        ctl.title = '記録入力';
        $timeout(function() {
            ctl.contestList = contestList;
        }, 10);
    }

    ctl.setupViewNavigator = function () {
        ctl.title = '記録閲覧';
    }

    ctl.setupSettingsNavigator = function () {
        ctl.title = '記録管理';
    }
    
    ctl.resetPage = function(){
        const index = tabbar.getActiveTabIndex();
        if(index == 3) return;
        
        var page = "html/";
        if(index == 0){
            page += "record.html";
            editNavigator.resetToPage(page, {animation: "fade"});
        }
        
        if(index == 1){
            page += "view.html";
            viewNavigator.resetToPage(page, {animation: "fade"});
        }
        
        if(index == 2){
            page += "settings.html";
            settingsNavigator.resetToPage(page, {animation: "fade"});
        }
    }
});