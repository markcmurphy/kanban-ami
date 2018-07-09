const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){

this.createTodo = function(){
$http({
method:'POST',
url: '/todos',
data: {
description: this.description,
complete: this.complete
}
}).then(function(response){
console.log(response);
}, function(){
console.log('error');
});
}


// end of MyController
}]);
