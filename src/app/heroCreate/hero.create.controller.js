(function () {
    'use strict';

    angular.module("HeroCreate").controller("HeroCreateController", heroCreateController);

    function heroCreateController(initHero) {
        var vm = this;
        vm.exitValidation = exitValidation;
        vm.enterValidation = enterValidation;
        vm.createHero = createHero;
        vm.hero = initHero.data;


        function exitValidation() {
            return false;
        }

        function enterValidation() {
            return true;
        }
        
        function createHero(){
            alert("Hero Created");
        }

    }
}());


