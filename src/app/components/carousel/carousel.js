(function () {
    'use strict';

    angular.module('components').
            directive("tglCarousel", carousel);

    /** @ngInject */
    function carousel() {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/components/carousel/carousel.html',
            controller: Carousel,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function Carousel() {
            var vm = this;
            vm.slides = [{"image": "app/img/carousel/01.jpg", "text": "", "id": 0, "active": false}, {"image": "app/img/carousel/02.jpg", "text": "", "id": 1, "active": false}, {"image": "app/img/carousel/04.jpg",
                    "text": "", "id": 2, "active": false}, {"image": "app/img/carousel/05.jpg", "text": "", "id": 3, "active": false}, {"image": "app/img/carousel/08.jpg", "text": "", "id": 4, "active": false},
                {"image": "app/img/carousel/07.jpg", "text": "", "id": 5, "active": false}];

        }
    }
})();