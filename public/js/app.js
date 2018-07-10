const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.friends = {};
this.getFriend = () => {
    $http({
        method: 'GET',
        url: '/friends'
      }).then(response => {
        this.friends = response.data;
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

this.createFriend = function() {
      $http({
          method: 'POST',
          url: '/friends',
          data: {
            Id: this._id,
            first_name: this.first_name
          }
        }).then(response => {
          console.log(response.data);
          controller.formdata = {};
          this.getFriend();
        })
        .catch(err => console.log(err));
    }

// end of MyController
}]);
