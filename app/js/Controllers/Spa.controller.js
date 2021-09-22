angular.module("Spa").controller("SpaController", function($scope, infodata ){
   
    $scope.personas =[];    
    infodata.list().then(function(res){
    $scope.personas = res;
   });
    
});

