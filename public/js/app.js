angular.module("microcarros",["ngRoute"])
.controller("principal",function main($scope,carros){

	// Yo traigo datos
	// El intermediario entre el VIEW y el MODEL
	// Scope: Soy un canal para pasar el modelo al view??
	// Directiva: Se utiliza para interactuar con el DOM...
/*
	$scope.message = "AngularJS";
	$scope.carros = carros; // inception..

	$scope.cambiar = function (carrito){
		$scope.message = carrito.model.name;
	}

	$scope.eliminar = function (carrito){
		var index = $scope.carros.indexOf(carrito);
		$scope.carros.splice(index,1);
	}
*/
})
.config(function($routeProvider){

	$routeProvider
		.when('/', {templateUrl: '/views/index.html', controller: "index" })
		.when('/details/:id', {templateUrl: '/views/details.html', controller: "details" })
		.otherwise({redirectTo: '/'});

})