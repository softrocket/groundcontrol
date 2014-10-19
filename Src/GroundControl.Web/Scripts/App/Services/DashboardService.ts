/// <reference path="../Bootstrapper.ts" />

module GroundControl.Services {

    export interface IDashboardService {

        getWidgets(): Array<Models.IDashboardItem>;
    }

    export class DashboardService implements IDashboardService {

        public static $inject = [
            '$resource'
        ];

        resource: ng.resource.IResourceService;
        api: Api.IDashboardApi;

        constructor($resource: ng.resource.IResourceService) {

            this.resource = $resource;
            this.api = <Api.IDashboardApi> this.resource('/api/Dashboard/:id', null, {});

        }

        getWidgets(): Array<Models.IDashboardItem> {
            var res = this.api.query();
            return res;
        }
    }

    angular.module('GroundControlApp').service("dashboardService", DashboardService);
} 