/// <reference path="../Bootstrapper.ts" />

module GroundControl.Controllers {

    export interface IAppScope extends ng.IScope {
        newPage(): void;
    }

    export class MenuController {

        public static $inject = [
            '$scope',
            '$modal'
        ];

        private scope: IAppScope;
        private modal: ng.ui.bootstrap.IModalService;
        
        constructor($scope: IAppScope, $modal: ng.ui.bootstrap.IModalService) {

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