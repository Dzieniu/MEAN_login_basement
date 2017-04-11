angular.module('easyshopping').controller('testCtrl', [
'$scope','$location','auth', 

function($scope,$location,auth){


	$scope.test="siema"

	$scope.logout = auth.logOut;
}]);