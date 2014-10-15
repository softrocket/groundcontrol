var gcServices = angular.module('gcServices', ['ngResource']);

gcServices.factory('pageTypesService', ['$resource',
  function ($resource) {
      return $resource('/api/PageType', {}, {
          query: { method: 'GET', isArray: true }
      });
  }]);

gcServices.factory('pagesService', ['$resource',
    function($resource) {
        return $resource('/api/WikiPages/', {}, {
                query: { method: 'GET', isArray: true},
                get: { method: 'GET', params: { key: "@id" } },
                save: { method: "POST" }
            });
    }]);
