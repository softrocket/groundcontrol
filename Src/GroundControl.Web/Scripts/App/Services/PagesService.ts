/// <reference path="../Bootstrapper.ts" />

module GroundControl.Services {

    export interface IPagesService {

    }

    export class PagesService implements IPagesService {

    }

    angular.module('GroundControlApp').service("pagesService", PagesService);
} 