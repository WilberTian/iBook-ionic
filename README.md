## Introduction

A mobile app built with ionic to manage books:

- The 'Books' tab manages a booklist, press each item will navigate to the bookdetail page
- The 'Search' tab can search books with douban api and get book details
- The 'Scan' tab used a barcodescanner plugin to add a book with the book's barcode


## Start

Refer to [ionicframework getting-start](http://ionicframework.com/getting-started/) about how to create a project.


- ionic start iBook-ionic tabs
- bower install ngCordova --save
	- install `ngCordove` 


This app use some plugins, please use below commands to install the plugins:
- cordova plugin add cordova-sqlite-storage
- cordova plugin add phonegap-plugin-barcodescanner


## Build && Run

Use below command to add the platform (Android as an example), for more details please refer to [ionicframework](http://ionicframework.com/)

- cordova platform add android
- ionic serve -l
    - run the project on PC with browser
- ionic run android
	- run the project on an android device (real device or emulator)
    - adb devices: use this command to check available devices


## Screenshots

### booklist
<img alt="booklist" src="https://cloud.githubusercontent.com/assets/5880320/18786265/aa321098-81cf-11e6-80bb-caf772704b9a.jpeg" width="400px" />

### book detail
<img alt="bookdetail" src="https://cloud.githubusercontent.com/assets/5880320/18786305/c6a0e3ee-81cf-11e6-961c-120481d95622.jpeg" width="400px" />


### book tag
<img alt="bookdetail" src="https://cloud.githubusercontent.com/assets/5880320/18786323/e3efb3e4-81cf-11e6-9465-0b0eae2a725d.png" width="400px" />


### search book with douban api
<img alt="search" src="https://cloud.githubusercontent.com/assets/5880320/18786360/0e840862-81d0-11e6-9675-6fc2dc381c76.jpeg" width="400px" />

### scan to add a new book
<img alt="scan" src="https://cloud.githubusercontent.com/assets/5880320/18786377/248f3136-81d0-11e6-955b-09996e68251f.png" width="400px" />
