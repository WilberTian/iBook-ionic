(function(){
	angular
		.module('iBook.book')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
	    $stateProvider
		    .state('tab.books', {
		      	url: '/books',
		      	views: {
		       		'tab-books': {
		          		templateUrl: 'js/book/tab-books.html',
		          		controller: 'BooklistController',
		          		resolve: {
                            tagListData: function (tagService) {
                                return tagService.all();
                            }
                        }
		        	}
		      	}
		    })
		    .state('tab.bookdetail', {
		      	url: '/books/:bookId',
		      	views: {
		      	  	'tab-books': {
		      	    	templateUrl: 'js/book/bookdetail.html',
		      	    	controller: 'BookdetailController',
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