(function(){
	angular
		.module('iBook.search')
		.factory('searchService', searchService);

	searchService.$inject = ['$http']

	function searchService($http) {
		return {
			search: function(queryString, start, count) {
				return $http({
				    method: 'GET',
				    url: 'https://api.douban.com/v2/book/search',
				    params: {
				        q: queryString,
				        start: start,
				        count: count
				    }
				});

			}
		}
	
	}
})();