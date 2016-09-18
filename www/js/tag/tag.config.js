(function(){
    angular
        .module('iBook.tag')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('tab.tags', {
                url: '/tags',
                views: {
                    'tab-tags': {
                        templateUrl: 'js/tag/tab-tags.html',
                        controller: 'TagController',
                        controllerAs: 'tags',
                        resolve: {
                            tagListData: function (tagService) {
                                return tagService.all();
                            }
                        }
                    }
                }
            })
    }

})();