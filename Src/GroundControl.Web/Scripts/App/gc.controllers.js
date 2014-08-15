var gcControllers = angular.module('gcControllers', []);


gcControllers.controller('DashboardController', function ($scope, $http) {

    $http.get('/api/Dashboard').success(function (data) {
        $scope.dashboarditems = data;
    });
});

gcControllers.controller('NewPageController', function ($scope, $http) {

    //$('#myModal').modal('show');


});

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
