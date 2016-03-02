var mainApp = angular.module("myapp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    
    when('/Home', {
       templateUrl: 'HomePage.html',
       controller: 'HomeController'
    }).
    
    when('/Contact', {
       templateUrl: 'ContactPage.html',
       controller: 'ContactController'
    }).
    
    otherwise({
       redirectTo: '/Home'
    });
 }]);