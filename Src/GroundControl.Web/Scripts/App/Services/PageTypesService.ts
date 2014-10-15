/// <reference path="../Bootstrapper.ts" />

module GroundControl.Services {

    export interface IPageTypeService {

        getAll(): Array<Models.IPageType>;
    }


    export interface IPageTypeRepository extends ng.resource.IResourceClass<Models.IPageType> {
    }

    export class PageTypesService implements IPageTypeService {

        resource: ng.resource.IResourceService;
        repository: IPageTypeRepository;

        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource;
            this.repository = <IPageTypeRepository> this.resource('/api/PageType/:id', null, {});

        }

        getAll() {

            return this.repository.query();

            //return $resource('/api/PageType', {}, {
            //    query: { method: 'GET', isArray: true }
            //});
        }
    }

    angular.module('GroundControlApp').service("pageTypesService", PageTypesService);
}