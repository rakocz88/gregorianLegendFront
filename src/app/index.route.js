(function () {
    'use strict';
    angular
            .module('frontend')
            .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/loginModule/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
              
                .state('register', {
                    url: '/register',
                    templateUrl: 'app/registerModule/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                })
                .state('fileUpload', {
                    url: '/fileUpload',
                    templateUrl: 'app/fileUploadModule/file.html',
                    controller: 'FileUploadController',
                    controllerAs: 'vm'
                })
      
                .state('mainPage', {
                    url: '/mainPage',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainPageController',
                    controllerAs: 'vm'
                })
               ;
        $urlRouterProvider.otherwise('/mainPage');
    }

})();
