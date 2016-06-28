(function(){
	angular
		.module('iBook.search')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
	    $stateProvider
		    .state('tab.search', {
				url: '/search',
				views: {
					'tab-search': {
					  	templateUrl: 'js/search/tab-search.html',
					  	controller: 'SearchController'
					}
				}
		    })
		    .state('tab.searchdetail', {
				url: '/search/:book',
				views: {
					'tab-search': {
					  	templateUrl: 'js/search/bookdetail.html',
					  	controller: 'SearchdetailController'
					}
				}
		    })
	}

})();