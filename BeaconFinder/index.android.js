import React from 'react';
import {AppRegistry, Text, Alert} from 'react-native';
import {Container, Header, Footer, Title, Content, Button, Icon } from 'native-base';

import {styles} from "./lib/styles";

const BeaconFinder = React.createClass({
  alertTitle: "Alert Title",
  alertMessage: "This is an Alert Message",

  triggerAlert: function(){
    return Alert.alert(this.alertTitle, this.alertMessage)
  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Title style={styles.title}>Beacon Finder</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby Bluetooth beacons.</Text>
        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button} onPress={this.triggerAlert}>
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  }
});

AppRegistry.registerComponent('BeaconFinder', function(){
  return BeaconFinder;
});
