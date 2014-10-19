/// <reference path="../Bootstrapper.ts" />

module GroundControl.Scopes {

    export interface IDashboardScope extends ng.IScope {
        dashboardItems: Array<Models.IDashboardItem>;
    }

}

module GroundControl.Controllers {

    export class DashboardController {

        public static $inject = [
            '$scope',
            'dashboardService'
        ];

        private dashboardService: Services.IDashboardService;
        private scope: Scopes.IDashboardScope;

        constructor($scope: Scopes.IDashboardScope, dashboardService: Services.IDashboardService) {

            this.dashboardService = dashboardService;
            this.scope = $scope;

            this.index();
        }

        public index(): void {

            var widgets = this.dashboardService.getWidgets();
            this.scope.dashboardItems = widgets;
        }
    }

    angular.module('GroundControlApp').controller("DashboardController", DashboardController);
}