/// <reference path="../Bootstrapper.ts" />

module GroundControl.Services {

    export interface IPagesService {

        createPage(title: string, pageType: Models.IPageType, callback: (savedPage: Models.IPage) => void): void;
         
    }

    export class PagesService implements IPagesService {

        private resource: ng.resource.IResourceService;
        private api: Api.IPagesApi;

        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource;
            this.api = <Api.IPagesApi> this.resource('/api/WikiPage/:id', null, {});

        }

        public createPage(title: string, pageType: Models.IPageType, callback: (savedPage: Models.IPage) => void): void {

            var newPage = new Models.Page();
            newPage.title = title;
            newPage.pageTypeId = pageType.id;

            this.api.save(newPage, () => callback(newPage) );
        }
    }

    angular.module('GroundControlApp').service("pagesService", PagesService);
} 