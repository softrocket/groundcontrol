/// <reference path="../Bootstrapper.ts" />

module GroundControl.Api {

    export interface IPageResource extends ng.resource.IResource<Models.IPage>, Models.IPage {
    }

    export interface IPagesApi extends ng.resource.IResourceClass<IPageResource> {
    }
}
