

var groundcontrol = angular.module('groundcontrol', []);

groundcontrol.controller('DashboardController', function ($scope) {
    $.getJSON('/api/Dashboard/', function(results) {
        $scope.dashboarditems = results;
    });
});

