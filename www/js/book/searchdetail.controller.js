(function(){
	angular
		.module('iBook.book')
		.controller("SearchdetailController", SearchdetailController);

	
	SearchdetailController.$inject = [
		'$scope',
		'$stateParams',
		'bookService'
	];
	
	function SearchdetailController($scope, $stateParams) {
		$scope.book = JSON.parse($stateParams.book)
	}

})();