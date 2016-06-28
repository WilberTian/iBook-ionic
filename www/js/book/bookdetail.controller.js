(function(){
	angular
		.module('iBook.book')
		.controller("BookdetailController", BookdetailController);

	
	BookdetailController.$inject = [
		'$scope',
		'$stateParams',
		'bookService'
	];
	
	function BookdetailController($scope, $stateParams, bookService) {
		bookService.get($stateParams.bookId).then(
			function(data){
				$scope.book = data;
			}, function(error){
				alert(error);
			})
	}

})();