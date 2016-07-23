'use strict';

import {StyleSheet} from 'react-native';

module.exports = {};

module.exports.styles = StyleSheet.create({
  //container: {
  //  flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
  //},
  //welcome: {
  //  fontSize: 20,
  //  textAlign: 'center',
  //  margin: 10,
  //},
  //instructions: {
  //  textAlign: 'center',
  //  color: '#333333',
  //  marginBottom: 5,
  //},
  container:{
  },
  header: {
    //backgroundColor: "#666666" //"#4d4d4d"
  },
  title: {
    //fontFamily:""
  },
  content:{
    margin:20
  },
  text:{
    textAlign: 'center'
  },
  footer:{
    /* align child button on the right-side of the screen */
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  button:{
    marginRight:3
  }
});
