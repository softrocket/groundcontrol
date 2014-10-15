/// <reference path="../Bootstrapper.ts" />

module GroundControl.Models {

    export interface IDashboardItem extends ng.resource.IResource<IDashboardItem> {

        id: number;
        title: string;
        contents: string;
    }
}