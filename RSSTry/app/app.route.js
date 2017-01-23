(function () {
    'use strict';
    angular.module('gnewsApp')
    .config(['$stateProvider', '$urlRouterProvider', function config($stateProvider, $urlRouterProvider) {
        var DIR = '';
        $stateProvider
            .state('news', {
                url: '/article',
                abstract: true,
                resolve: {
                    topics: function (gnewsArticlesData) {
                        return gnewsArticlesData.getTopics();
                    }
                },
                templateUrl: DIR + 'core/news/news.tmpl.html',
                controller: 'newsCtrl',
                controllerAs: 'vm',

            })
            .state('news.article', {
                url: '/:id',
                controller: 'articleCtrl',
                controllerAs: 'vm',
                templateUrl: DIR + 'core/article/article.tmpl.html',
                resolve: {
                    isValid: function ($state, $q, $stateParams, topics) {
                        if (!$stateParams.id && topics.length) {
                            $stateParams.id = topics[0].Id;
                            return $q.resolve();
                        }
                        else
                            return $q.resolve();
                    }
                }

            });

        $urlRouterProvider.otherwise('/article/');

        // use the HTML5 History API
        // $locationProvider.html5Mode(true);
    }]);

})();
