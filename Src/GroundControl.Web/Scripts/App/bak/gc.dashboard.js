
var groundcontrol = angular.module('groundcontrol', [
    'ngRoute',
    'ui.bootstrap',
    'gcControllers',
    'gcServices'
]);

groundcontrol.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/dashboard', {
                templateUrl: 'dashboard.html',
                controller: 'DashboardController'
                }).
            when('/page/:pageId', {
                templateUrl: '/Templates/',
                controller: 'WikiPageController'
            }).
            otherwise({
                redirectTo: '/dashboard'
            });

        //.
        //otherwise({
        //    redirectTo: '/'
        //});
    }]);
