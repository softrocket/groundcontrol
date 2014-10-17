/// <reference path="../Bootstrapper.ts" />

module GroundControl.Controllers {

    export class DashboardController {

        public static $inject = [
            '$scope',
            'dashboardService'
        ];

        private dashboardService: Services.IDashboardService;
        private viewModel: ViewModels.IDashboardViewModel;

        constructor($scope: ViewModels.IDashboardViewModel, dashboardService: Services.IDashboardService) {

            this.dashboardService = dashboardService;
            this.viewModel = $scope;

            this.index();
        }

        public index(): void {

            var widgets = this.dashboardService.getWidgets();
            this.viewModel.dashboardItems = widgets;
        }
    }

    angular.module('GroundControlApp').controller("DashboardController", DashboardController);
}