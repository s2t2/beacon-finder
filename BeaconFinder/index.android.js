import React, { Component } from 'react';
import {AppRegistry, Text, Alert} from 'react-native';
import {Container, Header, Footer, Title, Content, Button, Icon } from 'native-base';

import {styles} from "./lib/styles";

class BeaconFinder extends Component {
  render() {


    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Title style={styles.title}>Beacon Finder</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby Bluetooth beacons.</Text>
        </Content>

        <Footer style={styles.footer}>
          <Button
            style={styles.button}
            onPress={function(){
              return Alert.alert('Alert Title', "This is an Alert Message")
            }}
          >
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  }
};

AppRegistry.registerComponent('BeaconFinder', function(){
  return BeaconFinder;
});
