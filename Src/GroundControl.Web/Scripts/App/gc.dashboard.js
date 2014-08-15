

var groundcontrol = angular.module('groundcontrol', [
    'ngRoute',
    'gcControllers'
]);

groundcontrol.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/dashboard', {
                templateUrl: 'dashboard.html',
                controller: 'DashboardController'
                }).
            when('/wiki/:Id', {
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
