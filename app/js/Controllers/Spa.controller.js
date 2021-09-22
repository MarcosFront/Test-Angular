angular.module("Spa").controller("SpaController", function($scope, Api ){
   
    $scope.personas =[];    
    Api.list().then(function(res){
    $scope.personas = res;
   });
   
   $scope.data = {
    model: null,
    availableOptions: [
      {id: 'name', name: 'Name'},
      {id: 'isActive', name: 'isAcvtive'},
      {id: 'age', name: 'Age'},
      {id:'gender', name:'Gender'},
      {id: 'about', name: 'About'}
      
    ]
   };
});

