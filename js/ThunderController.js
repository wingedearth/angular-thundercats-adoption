(function() {
  'use strict';

  angular
      .module("thunderApp")
      .controller("ThunderController", ThunderController);

  ThunderController.$inject = [];

  function ThunderController() {
    var vm = this;

    // seed data
    vm.thundercats = [
			{
				catName: 'Liono',
				yearsOld: 25,
				gender: 'male',
				image: "images/liono.jpg",
				adopted: true,
			},
			{
				catName: 'Panthro',
				yearsOld: 42,
				gender: 'male',
				image: "images/panthro.jpg",
				adopted: false
			},
			{
				catName: 'Cheetara',
				yearsOld: 22,
				gender: 'female',
				image: "images/cheetara.jpg",
				adopted: false
			},
			{
				catName: 'Snarf',
				yearsOld: 17,
				gender: 'male',
				image: "images/snarf.jpg",
				adopted: false
			},
			{
				catName: 'WilyKit',
				yearsOld: 11,
				gender: 'female',
				image: "images/wilykit.jpg",
				adopted: false
			},
			{
				catName: 'WilyKat',
				yearsOld: 12,
				gender: 'male',
				image: "images/wilykat.jpg",
				adopted: false
			}
		];
	}
})();
