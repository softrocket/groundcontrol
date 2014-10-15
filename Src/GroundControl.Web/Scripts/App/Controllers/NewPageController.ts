/// <reference path="../Bootstrapper.ts" />

module GroundControl.Controllers {

    export interface IAppScope extends ng.IScope {

        //page: Services.IPagesService;
        pageTypes: Array<Models.IPageType>;

        select(pageType: Models.IPageType): void;
        close(): void;
    }

    export class NewPageController {

        public static $inject = [
            '$scope',
            '$modalInstance',
            'pageTypesService'
        ];

        private selectedPageType: Models.IPageType;

        constructor(
            $scope: IAppScope,
            $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            pageTypesService: Services.IPageTypeService) {

            $scope.pageTypes = pageTypesService.getAll();

            $scope.select = this.select;
            $scope.close = $modalInstance.close;
        }

        public select = (pageType: Models.IPageType): void => {

            this.selectedPageType = pageType;
        }

        public close  =(): void => {
            

        }
    }

    angular.module('GroundControlApp').controller("NewPageController", NewPageController);
} 

//function ($scope, $modalInstance, $location, pageTypesService, pagesService) {

//    $scope.Page = new pagesService();
//    $scope.Page.Title = '';

//    $scope.PageTypes = pageTypesService.query(function (pageTypes) {
//        $scope.SelectedPageType = pageTypes[0];
//    });

//    $scope.select = function (pageType) {
//        $scope.SelectedPageType = pageType;
//    };

//    $scope.create = function () {

//        $scope.Page.PageTypeId = $scope.SelectedPageType.id;
//        pagesService.save($scope.Page, function (savedPage) {
//            $modalInstance.close();
//            $location.path("/page/" + savedPage.Id);
//        });
//    };

//    $scope.close = function () {
//        $modalInstance.dismiss('cancel');
//    };