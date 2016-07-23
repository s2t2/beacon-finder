import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import { Container, Header, Title, Content, Footer } from 'native-base';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from "./lib/styles.js";

class BeaconFinder extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Header</Title>
            <ActionButton
              buttonColor="rgba(231,76,60,1)"
              onPress={() => { console.log("hi")}}
            />
        </Header>

        <Content>
          <Text>Hellowww</Text>
        </Content>

        <Footer>
          <Text>footer</Text>
          <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={() => { console.log("hi")}}
          />


        {/*
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
              <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
              <Icon name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        */}
        </Footer>
      </Container>
    );
  }
};

AppRegistry.registerComponent('BeaconFinder', function(){
  return BeaconFinder;
});
