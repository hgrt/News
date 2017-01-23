(function () {
    'use strict';
    angular
        .module('gnews.services')
        .factory('gnewsArticlesData', gnewsArticlesData);

    gnewsArticlesData.$inject = ['$http', '$q', 'localStorageService'];

    function gnewsArticlesData($http, $q, localStorageService) {

        /****************************************************
                    VARIABLES
        **************************************************** */
        var service = {
            getTopics: getTopics,
            getById: getById
        };

        /*****************************************************
        *                  METHODS                          *
        *****************************************************/

        function getTopics() {
            var defered = $q.defer();
            $http.get('/api/GoogleNews')
                .then(
                    function (response) { defered.resolve(response.data); },
                    function (error) { defered.resolve(false); }
                );
            return defered.promise;
        }

        function getById(id) {
            var defered = $q.defer();
            $http.get('/api/GoogleNews/', { params: { id: id } })
                .then(
                    function (response) { defered.resolve(response.data); },
                    function (error) { defered.resolve(false); }
                );
            return defered.promise;
        }
        /*****************************************************
        *               METHODS - PRIVATE                   *
        *****************************************************/

      

        function init() {
        }

        /*****************************************************
      *                  EXECUTIONS                       *
      *****************************************************/
        init();
        return service;
    }
})();