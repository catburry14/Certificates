mainApp.controller('headerController', function($scope, $location) {
	$scope.heading = "Certificates";
	$scope.pathPage = $location.path();
	$scope.getPageURL = function(){
		return $location.path();
	}
});