angular.module("Spa").factory("Api", function($q, $http){
    return {
        list: function(){
            var info= $q.defer();
            $http.get("https://run.mocky.io/v3/2b604729-3a6f-4926-b7c6-5922ea883b98").then(
                function(result) {
                    var res = [];

                    angular.forEach(result.data, function(person, id, ){
                        person.id = id;
                        res.push(person);
                    });
                    info.resolve(res);
            });
            return info.promise;
        } 
    };
});