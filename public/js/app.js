const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {
  const controller = this;
  this.friends = {};

  //get list of friends
  this.getFriends = () => {
    $http({
        method: 'GET',
        url: '/friends'
      }).then(response => {
        this.friends = response.data;
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  //create friend
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
        this.getFriends();
      })
      .catch(err => console.log(err));
  }

  // delete friend
  this.deleteFriend = (friend) => {
      $http({
        method: 'DELETE',
        url: '/friends/' + friend._id
      }).then(
        function(res) {
          controller.getFriends();
        },
        function(err) {
          console.log(err);
        }
      );
    }

    // end of MyController
}]);
