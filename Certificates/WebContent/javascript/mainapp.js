var mainApp = angular.module("myapp", []);

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