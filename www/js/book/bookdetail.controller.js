(function(){
	angular
		.module('iBook.book')
		.controller("BookdetailController", BookdetailController);

	
	BookdetailController.$inject = [
		'$scope',
		'$stateParams',
		'$ionicModal',
		'bookService',
		'tagListData'
	];
	
	function BookdetailController($scope, $stateParams, $ionicModal, bookService, tagListData) {
		$scope.getBook = function(bookId) {
			bookService.get(bookId).then(
				function(data){
					$scope.book = data;
				}, function(error){
					alert(error);
				})
		};

		$scope.getBook($stateParams.bookId);
		

		$ionicModal.fromTemplateUrl('update-tag-modal.html', {
	        scope: $scope,
	        animation: 'slide-in-up'
	    }).then(function(modal) {
	        $scope.updateTagModal = modal;
	    });

	    $scope.tagList = tagListData;

	    $scope.updateBookTags = function(book) {
	    	book.tags = $scope.updateTagModal.scope.selectedTags.join(',');

	    	bookService.update(book).then(
				function(data){
					$scope.getBook(book.id);
					$scope.updateTagModal.hide();
				}, function(error){
					$scope.updateTagModal.hide();
					alert(error);
				})
	    }

	    $scope.toggleTag = function(tagTitle) {
	    	var selectedTags = $scope.updateTagModal.scope.selectedTags;
	    	if(selectedTags.indexOf(tagTitle) >-1) {
	    		selectedTags.splice(selectedTags.indexOf(tagTitle), 1);
	    	} else {
	    		selectedTags.push(tagTitle);
	    	}
	    }

	    $scope.openUpdateTagModal = function(book) {
	    	$scope.updateTagModal.scope.book = book;
	    	console.log(book)
	    	$scope.updateTagModal.scope.selectedTags = (book.tags === '') ? [] : book.tags.split(',');

			$scope.updateTagModal.show();
	    }

	    $scope.cancelUpdateTagModal = function() {
			$scope.updateTagModal.hide();
	    }

	}

	



})();