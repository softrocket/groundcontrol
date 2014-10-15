/// <reference path="../Bootstrapper.ts" />

module GroundControl.Controllers {

   export interface IAppScope extends ng.IScope {
        dashboardItems: Array<Models.IDashboardItem>;
    }

    export class DashboardController {

        public static $inject = [
            '$scope',
            'dashboardService'
        ];

        constructor($scope: IAppScope, dashboardService: Services.IDashboardService) {

            var widgets = dashboardService.getWidgets();

            $scope.dashboardItems = widgets;
        }
    }

    angular.module('GroundControlApp').controller("DashboardController", DashboardController);
}