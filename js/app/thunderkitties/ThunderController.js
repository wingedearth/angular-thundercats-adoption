(function() {
  'use strict';

  angular
      .module("thunderApp")
      .controller("ThunderController", ThunderController);

  ThunderController.$inject = ['thunderDataService'];

  function ThunderController(thunderDataService) {
    var vm = this;

    vm.data = thunderDataService;

   }

})();
