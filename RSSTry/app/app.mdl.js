(function () {
    'use strict';
    angular.module('gnews.news', []);
    angular.module('gnews.article', []);
    angular.module('gnews.services', []);
    angular.module('gnews.directives', []);
    angular.module('gnewsApp', [
        // Angular modules 
        'ui.router',
        'LocalStorageModule',
        'ngSanitize',
        // Custom modules 
         'gnews.article',
         'gnews.news',
         'gnews.services',
         'gnews.directives',
    ])
    .run(['$rootScope','$state', function ($rootScope,$state) {
        $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, resolve) {
            if (angular.isObject(resolve) && resolve.type === 'redirect') {
                $state.go(resolve.state.state, resolve.state.stateParams);
                return false;
            }
        });
    }])
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('gnewsData:');
    });
})();