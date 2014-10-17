/// <reference path="../Bootstrapper.ts" />

module GroundControl.Services {

    export interface IPageTypeService {

        getAll(callback: () => void): Array<Models.IPageType>;
    }

    export class PageTypesService implements IPageTypeService {

        resource: ng.resource.IResourceService;
        api: Api.IPageTypeApi;

        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource;
            this.api = <Api.IPageTypeApi> this.resource('/api/PageType/:id', null, {});

        }

        getAll(callback: () => void) {

            return this.api.query(() => callback());

            //return $resource('/api/PageType', {}, {
            //    query: { method: 'GET', isArray: true }
            //});
        }
    }

    angular.module('GroundControlApp').service("pageTypesService", PageTypesService);
}