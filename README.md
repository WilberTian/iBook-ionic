ionic start iBook-ionic tabs

bower install ngCordova --save



cordova plugin add cordova-sqlite-storage

cordova plugin add phonegap-plugin-barcodescanner






cordova platform add android

ionic serve -l


ionic run android
adb devices