(function(){
	angular
		.module('iBook.search')
		.controller("SearchdetailController", SearchdetailController);

	
	SearchdetailController.$inject = [
		'$scope',
		'$stateParams'
	];
	
	function SearchdetailController($scope, $stateParams) {
		$scope.book = JSON.parse($stateParams.book);
	}

})();