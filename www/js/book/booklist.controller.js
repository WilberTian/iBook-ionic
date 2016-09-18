(function(){
	angular
		.module('iBook.book')
		.controller("BooklistController", BooklistController);

	
	BooklistController.$inject = [
		'$scope',
		'$ionicPopup',
		'$ionicSideMenuDelegate',
		'bookService',
		'tagListData'
	];
	

	function BooklistController($scope, $ionicPopup, $ionicSideMenuDelegate, bookService, tagListData) {
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		};

		$scope.tagList = tagListData;
		$scope.selectedTag = '';

		$scope.getBooklist = function(tag) {
			bookService.all(tag).then(function(data){
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

	    $scope.displayTags = false;
	    $scope.toggleDisplay = function() {
	    	$scope.displayTags = !$scope.displayTags;
	    }

	    $scope.filterBooks = function(tag) {
	    	$scope.selectedTag = tag;
	    	$scope.getBooklist(tag);
	    }

		$scope.getBooklist("");
	}

})()