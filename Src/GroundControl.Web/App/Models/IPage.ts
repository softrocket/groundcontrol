/// <reference path="../Bootstrapper.ts" />

module GroundControl.Models {

    export interface IPage {

        Id: number;
        title: string;
        pageTypeId: number;
    }

    export class Page implements IPage {

        Id: number;
        title: string;
        pageTypeId: number;
    }
}