/// <reference path="../Bootstrapper.ts" />
module GroundControl.Scopes {

    export interface IMenuScope extends ng.IScope {
        newPage(): void;
    }
}
 
module GroundControl.Controllers {

    export class MenuController {

        public static $inject = [
            '$scope',
            '$modal'
        ];

        private scope: Scopes.IMenuScope;
        private modal: ng.ui.bootstrap.IModalService;
        
        constructor($scope: Scopes.IMenuScope, $modal: ng.ui.bootstrap.IModalService) {

            this.scope = $scope;
            this.modal = $modal;

            $scope.newPage = this.newPage;
        }

        public newPage = (): void => {

            this.modal.open({
                templateUrl: '/App/Views/newpagemodal.html',
                controller: 'NewPageController',
                size: 'lg'
            });
        }
    }

    angular.module('GroundControlApp').controller("MenuController", MenuController);
}