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
        repository: Repositories.IDashboardRepository;

        constructor($resource: ng.resource.IResourceService) {
            this.resource = $resource;
            this.repository = <Repositories.IDashboardRepository> this.resource('/api/Dashboard/:id', null, {});

        }

        getWidgets() {
            var res = this.repository.query();

            return res;
        }
    }

    angular.module('GroundControlApp').service("dashboardService", DashboardService);
} 