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
				yearsOld: '25',
				gender: 'male',
				image: "images/liono.jpg",
				adopted: true,
			},
			{
				catName: 'Panthro',
				yearsOld: '42',
				gender: 'male',
				image: "images/panthro.jpg",
				adopted: false
			},
			{
				catName: 'Cheetara',
				yearsOld: '22',
				gender: 'female',
				image: "images/cheetara.jpg",
				adopted: false
			},
			{
				catName: 'Snarf',
				yearsOld: '17',
				gender: 'male',
				image: "images/snarf.jpg",
				adopted: false
			},
			{
				catName: 'WilyKit',
				yearsOld: '11',
				gender: 'female',
				image: "images/wilykit.jpg",
				adopted: false
			},
			{
				catName: 'WilyKat',
				yearsOld: '12',
				gender: 'male',
				image: "images/wilykat.jpg",
				adopted: false
			}
		];

		// assign function variables for export via controller
		vm.notAdopted = notAdopted;
		vm.adopted 		= adopted;
		vm.deleteCat 	= deleteCat;
		vm.addCat 		= addCat;
		vm.newCat 		= {
			catName  : "",
			yearsOld : "",
			gender 	 : "",
			image    : "",
			adopted  : false
		};

		function notAdopted() {
			return vm.thundercats.filter(function(cat) {
				return !cat.adopted;
      });
		}

		function adopted() {
			return vm.thundercats.filter(function(cat) {
				return cat.adopted;
      });
		}

		function addCat() {
			vm.thundercats.push({
				catName: vm.newCat.catName,
				yearsOld: vm.newCat.yearsOld,
				gender: vm.newCat.gender,
				image: vm.newCat.image,
				adopted: false
			});
			vm.newCat.catName 	= "";
			vm.newCat.yearsOld 	= "";
			vm.newCat.gender 	 	= "";
			vm.newCat.image    	= "",
			vm.newCat.adopted  	= false;
		}

		function deleteCat(removeCat) {
			vm.thundercats = vm.thundercats.filter(function(cat) {
				return cat.catName !== removeCat.catName;
			});
		}

	}

})();
