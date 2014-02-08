angular.module("microcarros")
.controller("index",function main($scope,$http){

	//$http.get("http://localhost:3001/js/vehicle.json")
	$http.get("http://192.168.1.43:3000/api/vehicle?min-year=2013")
	.then(function(response){

		$scope.carros = response.data.result;

	},function(error){

		console.log(error);

	})

});