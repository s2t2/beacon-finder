# Development Process Documentation

Install React Native Package Manager:


```` sh
npm install rnpm -g
````

Install Native Base and "peer dependencies":

```` sh
npm install native-base --save
rnpm link
````

Install action button component and icon sets, and link "peer dependencies":

```` sh
npm install react-native-action-button --save
npm install react-native-vector-icons --save
rnpm link
````

Shut down the packager. Then re-build:

```` sh
react-native run-android
````
