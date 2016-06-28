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
		          		templateUrl: 'templates/tab-books.html',
		          		controller: 'BooklistController'
		        	}
		      	}
		    })
		    .state('tab.bookdetail', {
		      	url: '/books/:bookId',
		      	views: {
		      	  	'tab-books': {
		      	    	templateUrl: 'templates/bookdetail.html',
		      	    	controller: 'BookdetailController'
		      	  	}
		      	}
		    })
	}

})();