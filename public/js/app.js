angular.module("microcarros",[])
.controller("principal",function main($scope,carros){

	// Yo traigo datos
	// El intermediario entre el VIEW y el MODEL

	// Scope: Soy un canal para pasar el modelo al view??

	// Directiva: Se utiliza para interactuar con el DOM...

	$scope.message = "AngularJS";

	// inception..
	$scope.carros = carros;

	//console.log(carros);

})