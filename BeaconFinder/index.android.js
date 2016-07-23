import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
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
          <Text style={styles.text}>Nothing to see here.</Text>
        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button}>
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
