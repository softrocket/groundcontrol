/// <reference path="../Bootstrapper.ts" />

module GroundControl.Models {

    export interface IPage {

        id: number;
        title: string;
        pageTypeId: number;
    }

    export class Page implements IPage {

        id: number;
        title: string;
        pageTypeId: number;
    }
}