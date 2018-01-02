(function () {

  'use strict';

  angular
    .module('app')
    .controller('UserApiController', ($scope, $http, $state) => {
      $scope.formData = {};
      $scope.personData = {};
    
      // Create a new person
      $scope.createUser = () => {
        $http.post('/users', $scope.formData)
        .success((data) => {
          $scope.formData = {};
          $scope.personData = data;
          $state.go('home');
          console.log(data);
        })
        .error((error) => {
          console.log('Error: ' + error);
        });
      };
      /*  
      // Delete a person
      $scope.deletePerson = (personID) => {
        $http.delete('/api/persons/' + personID)
        .success((data) => {
          $scope.personData = data;
          console.log(data);
        })
        .error((data) => {
          console.log('Error: ' + data);
        });
      };
      */
    });
    
})();