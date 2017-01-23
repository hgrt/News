(function () {
    'use strict';
    angular
        .module('gnews.article')
        .controller('articleCtrl', newsCtrl);

    newsCtrl.$inject = ['$scope', 'gnewsArticlesData', '$stateParams'];
    function newsCtrl($scope, gnewsArticlesData, $stateParams) {
        /****************************************************
                    VARIABLES
        *****************************************************/
        var vm = this;


        /*****************************************************
         *                  METHODS                          *
        *****************************************************/

        /*****************************************************
        *               METHODS - PRIVATE                   *
        *****************************************************/
        function init() {
            gnewsArticlesData.getById($stateParams.id).then(function (article) {
                vm.article = article;
            });
        }
        /*****************************************************
        *                  EXECUTIONS                       *
        *****************************************************/
        init();

    }
})();
