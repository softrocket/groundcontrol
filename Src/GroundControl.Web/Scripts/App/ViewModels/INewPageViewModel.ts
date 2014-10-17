/// <reference path="../Bootstrapper.ts" />

module GroundControl.ViewModels {

    export interface INewPageViewModel extends ng.IScope {

        pageTitle: string;
        selectedPageType: Models.IPageType;
        pageTypes: Array<Models.IPageType>;

        select(pageType: Models.IPageType): void;
        close(): void;
        create(): void;
    }
}