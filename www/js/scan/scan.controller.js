(function(){
	angular
		.module('iBook.scan')
		.controller('ScanController', ScanController);

	ScanController.$inject = ['$scope', '$cordovaBarcodeScanner', '$http', 'bookService'];

	function ScanController($scope, $cordovaBarcodeScanner, $http, bookService) {
		$scope.info = {};
	    $scope.detail = {};
	    $scope.error = {};
	    
	    function saveToDatabase(data, barcodeData) {
	      	bookService.add({
		        title: data.title,
		        image: data.images.large,
		        publisher: data.publisher,
		        author: data.author,
		        summary: data.summary,
		        isbn: barcodeData.text
	      	});
	    }
		
	    $scope.scan = function () {
	      	$cordovaBarcodeScanner
				.scan()
		        .then(function (barcodeData) {
			          	$scope.info = barcodeData.text;
			          	$http.get('https://api.douban.com/v2/book/isbn/' + barcodeData.text).then(function (data) {
			          		var detail = data.data;
			            	$scope.detail = detail;
			            	saveToDatabase(detail, barcodeData);
			          	}, function(error) {
			          		alert(JSON.stringify(error))
			          	});
			        }, function (error) {
			          	alert(JSON.stringify(error));
			        });
	    };
	}
})();