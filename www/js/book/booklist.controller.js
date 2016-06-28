(function(){
	angular
		.module('iBook.book')
		.controller("BooklistController", BooklistController);

	
	BooklistController.$inject = [
		'$scope',
		'$ionicPopup',
		'bookService'
	];
	

	function BooklistController($scope, $ionicPopup, bookService) {
		$scope.getBooklist = function() {
			bookService.all().then(function(data){
				$scope.booklist = data;
				$scope.$broadcast('scroll.refreshComplete');
			}, function(error) {
				$scope.$broadcast('scroll.refreshComplete');
				alert(error);
			});
		};

		$scope.delete = function(book) {
			showConfirm = function(book) {
			    var confirmPopup = $ionicPopup.confirm({
			      	title: 'Delete book',
			      	template: 'Delete "' + book.title + '"?' 
			    });
 
			    confirmPopup.then(function(res) {
			      	if(res) {
						bookService.remove({id: book.id});
	       		 		$scope.getBooklist();
			      	} else {
			        	console.log('You are not sure');
			      	}
			    });
			};

			showConfirm(book);
	    };

		$scope.getBooklist();
	}

})();