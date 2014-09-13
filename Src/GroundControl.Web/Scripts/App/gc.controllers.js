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

gcControllers.controller('NewPageController', ['$scope', '$modalInstance', 'pageTypesService', 'pagesService',
   function ($scope, $modalInstance, pageTypesService, pagesService) {

       $scope.Page = new pagesService();
       $scope.Page.Title = '';
       
       $scope.PageTypes = pageTypesService.query(function (pageTypes) {
           $scope.SelectedPageType = pageTypes[0];
       });

       $scope.select = function (pageType) {
           $scope.SelectedPageType = pageType;
       };

       $scope.create = function () {

           $scope.Page.PageTypeId = $scope.SelectedPageType.Id;
           pagesService.save($scope.Page, function () {
               $modalInstance.close();
           });
       };

       $scope.close = function () {
           $modalInstance.dismiss('cancel');
       };
   }]);


gcControllers.controller('WikiPageController', function ($scope, $http) {

    $scope.Publication =
    {
        'Title': 'Lets get started',
        'Author': 'Christian Jungerius',
        'Date': 'August 24, 2013 at 9:00 PM',
        'Contents': '<p>asdfsdf</p>'
    };

    //$scope.PublicationDate = [{
    //     'Contents' : '<p>asdfsdf</p>'
    //}];
});
