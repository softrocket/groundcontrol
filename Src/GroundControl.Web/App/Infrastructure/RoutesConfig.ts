/// <reference path="../Bootstrapper.ts" />

module GroundControl.Infrastructure {

    export class RoutesConfig {

        public static $inject = [
            '$routeProvider'
        ];

        constructor($routeProvider: ng.route.IRouteProvider) {

            $routeProvider.
                when('/dashboard', {
                    templateUrl: '/App/Views/dashboard.html',
                    controller: 'DashboardController'
                }).
                when('/page/:pageId', {
                    templateUrl: '/Templates/',
                    controller: 'WikiPageController'
                }).
                otherwise({
                    redirectTo: '/dashboard'
                });
        }
    }

    angular.module('GroundControlApp').config(RoutesConfig);
}