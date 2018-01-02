(function () {

  'use strict';

  angular
    .module('app')
    .controller('UserController', userController);

  userController.$inject = ['authService'];

  function userController(authService) {

    var vm = this;
    vm.auth = authService;

  }

})();