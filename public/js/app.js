const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){

this.createFriend = function(){
$http({
method:'POST',
url: '/friends',
data: {
name: this.name
}
}).then(function(response){
console.log(response);
}, function(){
console.log('error');
});
}

this.getFriend = () => {
    $http({
        method: 'GET',
        url: '/friends'
      }).then(response => {
        this.friends = response.data;
      })
      .catch(err => console.log(err));
  }


// end of MyController
}]);
