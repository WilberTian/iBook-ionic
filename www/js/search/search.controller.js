(function(){
	angular
		.module('iBook.search')
		.controller('SearchController', SearchController);

	SearchController.$inject = ['$scope', '$http', '$state', '$ionicLoading', 'searchService', 'bookService'];

	function SearchController($scope, $http, $state, $ionicLoading, searchService, bookService) {
		$scope.query = {
			queryString: '',
			start: 1,
			count: 10
		}

		$scope.totalPages = 0;
		$scope.foundBooklist = [];

		$scope.startSearch = function() {
            // reset the start, count and foundBooklist for a new search
            $scope.query.start = 1;
            $scope.query.count = 10;
            $scope.foundBooklist = [];
            
			_performSearch();
		};

		function _performSearch() {
			$ionicLoading.show({
		      	template: '<ion-spinner icon="android"></ion-spinner>'
		    }).then(function(){
		       	console.log('The loading indicator is now displayed');
		    });

			searchService.search($scope.query.queryString, $scope.query.start*$scope.query.count, $scope.query.count).then(
				function(data){
					$scope.foundBooklist = data.data.books;
					$scope.totalPages = Math.ceil(data.data.total/$scope.query.count);
				},
				function(error){
					alert(JSON.stringify(error));
				})
				.then(function(){
					$ionicLoading.hide().then(function(){
						console.log('The loading indicator is now hidden');
				    });
				})
		}

		function _bookFormater(book) {
			var result = book;
			result.image = result.images.large;
			result.isbn = result.isbn13;
			result.tags= '';
			return result;
		}

		$scope.showDetail = function(book) {
			$state.go('tab.searchdetail', {book: JSON.stringify(_bookFormater(book))});
		};

		$scope.add = function(book) {
			bookService.add(_bookFormater(book)).then(
				function(data) {
					$state.go('tab.books');
				}, function(error) {
					alert(error);
				});
		};

		$scope.back = function() {
			$scope.query.start -= 1;
			_performSearch();
		};

		$scope.forward = function() {
			$scope.query.start += 1;
			_performSearch();
		};
	}
})();