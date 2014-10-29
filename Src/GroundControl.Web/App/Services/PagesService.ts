/// <reference path="../Bootstrapper.ts" />

module GroundControl.Services {

    export interface IPagesService {

        createPage(newPage: Models.IPage, pageType: Models.IPageType, callback: (savedPage: Models.IPage) => void): void;
        getPage(id: number): Models.IPage;
    }

    export class PagesService implements IPagesService {

        private resource: ng.resource.IResourceService;
        private api: Api.IPagesApi;

        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource;
            this.api = <Api.IPagesApi> this.resource('/api/WikiPage/:id', { id: '@id' }, {});
        }

        public createPage(newPage: Models.IPage,  pageType: Models.IPageType, callback: (savedPage: Models.IPage) => void): void {

            newPage.pageTypeId = pageType.Id;
            this.api.save(newPage, (savedPage: Models.IPage) => callback(savedPage), null);
        }

        public getPage(id: number): Models.IPage {

            var page = <Models.IPage>this.api.get({ id: id });
            return page;
        }
    }

    angular.module('GroundControlApp').service("pagesService", PagesService);
} 