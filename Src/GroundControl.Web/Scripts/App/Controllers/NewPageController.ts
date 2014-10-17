/// <reference path="../Bootstrapper.ts" />

module GroundControl.Controllers {

    export class NewPageController {

        public static $inject = [
            '$scope',
            '$modalInstance',
            '$location',
            'pageTypesService',
            'pagesService'
        ];

        private pageTypesService: Services.IPageTypeService;
        private pagesService: Services.IPagesService;

        private locationService: ng.ILocationService;

        private modal: ng.ui.bootstrap.IModalServiceInstance;
        private viewModel: ViewModels.INewPageViewModel;
        
        constructor(
            $scope: ViewModels.INewPageViewModel,
            $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            $location: ng.ILocationService,
            pageTypesService: Services.IPageTypeService,
            pagesService: Services.IPagesService) {

            this.pageTypesService = pageTypesService;
            this.pagesService = pagesService;
            this.locationService = $location;

            this.viewModel = $scope;
            this.modal = $modalInstance;
            this.registerEvents($scope, $modalInstance);

            this.index();
        }

        public index() {

            this.viewModel.pageTypes = this.pageTypesService.getAll(() => {
                
                this.viewModel.selectedPageType = this.viewModel.pageTypes[0];
            });
        }

        public select = (pageType: Models.IPageType): void => {

            this.viewModel.selectedPageType = pageType;
        }
        
        public create = (): void => {

            var xx = this.viewModel.pageTitle;
            var y = this.viewModel.selectedPageType;


            this.pagesService.createPage(
                this.viewModel.pageTitle,
                this.viewModel.selectedPageType,
                (savedPage) => {
                    this.modal.close();
                    this.locationService.path("/page/" + savedPage.id);
                });
            
        }

        private registerEvents(viewModel: ViewModels.INewPageViewModel, modal: ng.ui.bootstrap.IModalServiceInstance) {

            viewModel.select = this.select;
            viewModel.close = modal.close;
            viewModel.create = this.create;
        }
    }

    angular.module('GroundControlApp').controller("NewPageController", NewPageController);
} 