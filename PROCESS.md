# Process Documentation

This document describes the process of creating a react-native android app from scratch.

```` sh
which node
brew install watchman
npm install -g react-native-cli
````

[Download](https://developer.android.com/studio/index.html)) and [install](https://developer.android.com/studio/install.html) Android Studio.

```` sh
javac -version #> javac 1.7.0_80
````

```` sh
react-native init BeaconFinder
````

Try to run the app.

```` sh
cd BeaconFinder && react-native run-android
````

To overcome the error `SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.`:
 add to *~/.bash_profile*:

```` sh
export ANDROID_HOME="/Users/mjr/Library/Android/sdk"
````

Try to run the app again.

```` sh
react-native run-android
````

To overcome the error `failed to find target with hash string 'android-23' in: /Users/mjr/Library/Android/sdk`:

  + open Android Studio
  + navigate to *Tools* > *Android* > *SDK Manager*
  + then under the *SDK Platforms* tab, check the box for *Android 6.0 (Marshmellow) - API level 23*
  + then click OK to initiate a download of that version

Try to run the app again.

```` sh
react-native run-android
````
