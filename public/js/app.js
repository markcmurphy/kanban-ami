const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http) {
  const controller = this;
  this.friends = {};
  this.formdata = {};
  this.lists = {};
  this.list = {};

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
          first_name: this.first_name,
          list: this.list,
          listId: this.formdata.listId
        }
      }).then(response => {
        console.log(response.data);
        controller.formdata = {};
        this.getFriends();
        this.getLists();
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

  //get list of lists
  this.getLists = () => {
    $http({
        method: 'GET',
        url: '/lists'
      }).then(response => {
        this.lists = response.data;
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  //create list
  this.createList = function() {
    $http({
        method: 'POST',
        url: '/lists',
        data: {
          Id: this._id,
          title: this.title
        }
      }).then(response => {
        console.log(response.data);
        controller.formdata = {};
        this.getLists();
        this.getFriends();
      })
      .catch(err => console.log(err));
  }

  // delete list
  this.deleteList = (list) => {
    $http({
      method: 'DELETE',
      url: '/lists/' + list._id
    }).then(
      function(res) {
        controller.getLists();
      },
      function(err) {
        console.log(err);
      }
    );
  }

  // end of MyController
}]);