(function () {

  'use strict';

  angular
    .module('app')
    .controller('apiController', ($scope, $http) => {
      $scope.formData = {};
      $scope.personData = {};
      
      // Get all persons
      $http.get('/api/persons')
      .success((data) => {
        $scope.personData = data;
        console.log(data);
      })
      .error((error) => {
        console.log('Error: ' + error);
      });
      
      // Create a new person
      $scope.createPerson = () => {
        $http.post('/api/persons', $scope.formData)
        .success((data) => {
          $scope.formData = {};
          $scope.personData = data;
          console.log(data);
        })
        .error((error) => {
          console.log('Error: ' + error);
        });
      };
      
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
    });
    
})();