/// <reference path="../Bootstrapper.ts" />

module GroundControl.ViewModels {

    export interface IDashboardViewModel extends ng.IScope {
        dashboardItems: Array<Models.IDashboardItem>;
    }
}