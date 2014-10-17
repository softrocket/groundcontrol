/// <reference path="../Bootstrapper.ts" />

module GroundControl.Controllers {

    export class MenuController {

        public static $inject = [
            '$scope',
            '$modal'
        ];

        private scope: ViewModels.IMenuViewModel;
        private modal: ng.ui.bootstrap.IModalService;
        
        constructor($scope: ViewModels.IMenuViewModel, $modal: ng.ui.bootstrap.IModalService) {

            this.scope = $scope;
            this.modal = $modal;

            $scope.newPage = this.newPage;
        }

        public newPage = (): void => {

            this.modal.open({
                templateUrl: 'ngViews/NewPage/modal.html',
                controller: 'NewPageController',
                size: 'lg'
            });
        }
    }

    angular.module('GroundControlApp').controller("MenuController", MenuController);
}