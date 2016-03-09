var mainApp = angular.module("myapp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    
    when('/Home', {
       templateUrl: 'viewPages/HomePage.html',
       controller: 'HomeController'
    }).
    
    when('/About', {
        templateUrl: 'viewPages/AboutPage.html',
        controller: 'AboutController'
     }).
    
    when('/Contact', {
       templateUrl: 'viewPages/ContactPage.html',
       controller: 'ContactController'
    }).
    
    when('/Login', {
        templateUrl: 'viewPages/LoginPage.html',
        controller: 'LoginController'
     }).
     
     when('/Register', {
         templateUrl: 'viewPages/RegisterPage.html',
         controller: 'RegisterController'
      }).
     
     when('/LogOut', {
         templateUrl: 'viewPages/LogOutPage.html',
         controller: 'LogOutController'
      }).
    
    otherwise({
       redirectTo: '/Home'
    });
    
 }]);