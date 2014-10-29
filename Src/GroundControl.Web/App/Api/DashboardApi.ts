/// <reference path="../Bootstrapper.ts" />

module GroundControl.Api {

    export interface IDashboardResource extends ng.resource.IResource<Models.IDashboardItem>, Models.IDashboardItem {
    }

    export interface IDashboardApi extends ng.resource.IResourceClass<IDashboardResource> {
    }

}
