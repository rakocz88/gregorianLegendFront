


(function () {
    'use strict';

    angular
            .module('loginModule')
            .controller('LoginController', LoginController);


    function LoginController(LoginService, $state) {
        
        var vm = this;
        vm.logIn=logIn;
        
        function logIn(){
            LoginService.save(vm.logUser).$promise.then(function(){
                $state.go('bands');
            }, function(){
                alert("błąd w logowaniu");
            });
        }


    }
})();
