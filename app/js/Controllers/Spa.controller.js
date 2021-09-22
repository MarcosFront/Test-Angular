angular.module("Spa").controller("SpaController", function($scope, Api ){
   
    $scope.personas =[];    
    Api.list().then(function(res){
    $scope.personas = res;
   });
   var sOptions = [
    'name',
    'isActive',
    'age',
    'gender',
    'about',

];
$scope.sOptions = sOptions;
$scope.optionsSelected = null;
});

