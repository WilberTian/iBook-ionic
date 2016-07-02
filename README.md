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
<img alt="booklist" src="https://cloud.githubusercontent.com/assets/5880320/16538381/bd7bf79c-4055-11e6-940d-541ba1288e80.png" width="400px" />

### book detail
<img alt="bookdetail" src="https://cloud.githubusercontent.com/assets/5880320/16538437/f95cf68e-4056-11e6-8996-b1476e6e481a.png" width="400px" />


### search book with douban api
<img alt="search" src="https://cloud.githubusercontent.com/assets/5880320/16538438/f95dbde4-4056-11e6-9dfe-d976254a8254.png" width="400px" />

### scan to add a new book
<img alt="scan" src="https://cloud.githubusercontent.com/assets/5880320/16538384/bdf9aaac-4055-11e6-8c1b-17c2a3b11d0c.png" width="400px" />
