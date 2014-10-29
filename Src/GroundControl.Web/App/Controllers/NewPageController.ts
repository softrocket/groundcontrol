/// <reference path="../Bootstrapper.ts" />

module GroundControl.Scopes {

    export interface INewPageScope extends ng.IScope {

        page: Models.IPage;
        selectedPageType: Models.IPageType;
        pageTypes: Array<Models.IPageType>;

        select(pageType: Models.IPageType): void;
        close(): void;
        create(pageTitle: string): void;
    }
}

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
        private scope: Scopes.INewPageScope;
        
        constructor(
            $scope: Scopes.INewPageScope,
            $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            $location: ng.ILocationService,
            pageTypesService: Services.IPageTypeService,
            pagesService: Services.IPagesService) {

            this.pageTypesService = pageTypesService;
            this.pagesService = pagesService;
            this.locationService = $location;

            this.scope = $scope;
            this.modal = $modalInstance;
            this.registerEvents($scope, $modalInstance);

            this.index();
        }

        public index() {

            this.scope.page = new Models.Page();
            this.scope.pageTypes = this.pageTypesService.getAll(() => {
                
                this.scope.selectedPageType = this.scope.pageTypes[0];
            });
        }

        public select = (pageType: Models.IPageType): void => {

            this.scope.selectedPageType = pageType;
        }
        
        public create = (): void => {

            this.pagesService.createPage(
                this.scope.page,
                this.scope.selectedPageType,
                (savedPage: Models.IPage) => {
                    this.modal.close();
                    this.locationService.path("/page/" + savedPage.Id);
                });
            
        }

        private registerEvents(viewModel: Scopes.INewPageScope, modal: ng.ui.bootstrap.IModalServiceInstance) {

            viewModel.select = this.select;
            viewModel.close = modal.close;
            viewModel.create = this.create;
        }
    }

    angular.module('GroundControlApp').controller("NewPageController", NewPageController);
} 