/// <reference path="../Bootstrapper.ts" />

module GroundControl.Scopes {

    export interface IWikiPageScope extends ng.IScope {
       
        publication: Models.IPage;
    }

}

module GroundControl.RouteParams {

    export interface IPageRouteParams extends ng.route.IRouteParamsService {
            pageId: number;
        }
}

module GroundControl.Controllers {

    export class WikiPageController {

        public static $inject = [
            '$scope',
            '$routeParams',
            'pagesService'
        ];

        private pagesService: Services.IPagesService;
        private scope: Scopes.IWikiPageScope;

        constructor($scope: Scopes.IWikiPageScope, $routeParams: RouteParams.IPageRouteParams, pagesService: Services.IPagesService) {

            this.pagesService = pagesService;
            this.scope = $scope;

            var pageId: number = <number>$routeParams.pageId;
            this.index(pageId);
        }

        public index(id:number): void {

            this.scope.publication = this.pagesService.getPage(id);
        }
    }

    angular.module('GroundControlApp').controller("WikiPageController", WikiPageController);
}