mainApp.controller('LoginController', function($scope) {
	
	    $scope.userName = "";
	    $scope.passWord = "";
	    $scope.invalidUNandPW = "valid";
	    
	    $scope.apply();
	    
	    $scope.submit = function(){
	    	if(userName == "root" && passWord == "tiger")
	    		$location.href = '/Home';
	    	else{
	    		invalidUNandPW = "invalid";
	    		$scope.apply();
	    	}
	    }
	
});