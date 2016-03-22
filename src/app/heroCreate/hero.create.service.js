(function () {
    'use strict';

    angular
            .module('HeroCreate')
            .service('HeroCreateService', HeroCreateService);


    function HeroCreateService($http) {
        return ({
            initHero: initHero
        });

        function initHero() {
            return $http.get('http://localhost:9999/createHero/initHero');
        }
    }
})();