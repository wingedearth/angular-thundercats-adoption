(function() {
  'use strict';

  angular
      .module("thunderApp")
      .controller("thunderDataService", thunderDataService);

  thunderDataService.$inject = ['$log'];

  function thunderDataService($log) {
    return {
      thundercats = [
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
      ],
      deleteCat: deleteCat
    };

    function deleteCat(cat) {
      var index = this.thundercats.indexOf(cat);
      var deletedCat = this.thundercats.splice(index, 1)[0];

      $log.info("Euthanized Thundercat:", deletedCat);
      $log.info("Thundercats Remaining:"), this.thundercats);
    }
  }
})();
