/// <reference path="../Bootstrapper.ts" />

module GroundControl.Models {

    export interface IPageType extends ng.resource.IResource<IPageType> {

        Id: number;
        name: string;
    }
}