var gcControllers = angular.module('gcControllers', []);


gcControllers.controller('DashboardController', function ($scope, $http) {

    $http.get('/api/Dashboard').success(function (data) {
        $scope.dashboarditems = data;
    });
});

gcControllers.controller('MenuController', ['$scope', '$modal',
    function ($scope, $modal) {

        $scope.newPage = function () {

            var dialog = $modal.open({
                templateUrl: '/Templates/Modals/?key=newpage',
                controller: 'NewPageController',
                size: 'lg'
            });
        };

    }]);

gcControllers.controller('NewPageController', ['$scope', '$modalInstance', '$location', 'pageTypesService', 'pagesService',
   function ($scope, $modalInstance, $location, pageTypesService, pagesService) {

       $scope.Page = new pagesService();
       $scope.Page.Title = '';
       
       $scope.PageTypes = pageTypesService.query(function (pageTypes) {
           $scope.SelectedPageType = pageTypes[0];
       });

       $scope.select = function (pageType) {
           $scope.SelectedPageType = pageType;
       };

       $scope.create = function () {

           $scope.Page.PageTypeId = $scope.SelectedPageType.id;
           pagesService.save($scope.Page, function (savedPage) {
               $modalInstance.close();
               $location.path("/page/" + savedPage.Id);
           });
       };

       $scope.close = function () {
           $modalInstance.dismiss('cancel');
       };
   }]);


gcControllers.controller('WikiPageController', function ($scope, $routeParams, pagesService) {

    $scope.Publication = pagesService.get({ id: $routeParams.pageId }, function (details) {
    });

});
