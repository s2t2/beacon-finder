import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import { Container, Header, Title, Content } from 'native-base';

class BeaconFinder extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>

        <Content>
            <Text>Hellowww</Text>
        </Content>
      </Container>
    );
  }
};

AppRegistry.registerComponent('BeaconFinder', function(){
  return BeaconFinder;
});
