(function () {
    'use strict';

    angular.module('components').
            directive("tnavbar", navbar);

    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/components/tglNavbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {
            
            var vm = this;
             vm.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
        }
    }
})();