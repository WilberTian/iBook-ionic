(function(){
	angular
		.module('iBook', [
			'ionic', 
			'iBook.book',
			'iBook.tag',
			'iBook.search',
			'iBook.common',
			'iBook.scan',
			'ngCordova'
		])
		.run(function($ionicPlatform, $cordovaSQLite, dbHandler) {
		    $ionicPlatform.ready(function() {
		      	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		      	// for form inputs)
		      	if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
		      	  	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		      	  	cordova.plugins.Keyboard.disableScroll(true);
  	
		      	}
		      	if (window.StatusBar) {
		      	  	// org.apache.cordova.statusbar required
		      	  	StatusBar.styleDefault();
		      	}
		      	
		      	if(window.cordova) {
	          	  	dbHandler.db = $cordovaSQLite.openDB({name:"iBook.db", location:1});
	          	} else {
	          	  	dbHandler.db = window.openDatabase("iBook.db", "1.0", "iBook", -1);
	          	}

	          	$cordovaSQLite.execute(dbHandler.db, "CREATE TABLE IF NOT EXISTS books (id integer primary key, title text, image text, publisher text, author text, isbn text, summary text, tags text)");
	          	$cordovaSQLite.execute(dbHandler.db, "CREATE TABLE IF NOT EXISTS tags (id integer primary key, title text)");
	        });
		})
})();