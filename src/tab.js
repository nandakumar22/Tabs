import React, {Component} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Right,
  Body,
  Title,
  TabHeading,
  Icon,
  Item,
  Input,
  Col,
  Row,
  Grid,
} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';

export default class Tabz extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{flex: 1}}>
            <Icon name="arrow-back" />
          </Left>
          <Body style={{flex: 1}}>
            <Title style={{alignSelf: 'center'}}>Maps</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Icon name="menu" />
          </Right>
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="camera" />
                <Text>Camera</Text>
              </TabHeading>
            }>
            <Tab1 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>map</Text>
              </TabHeading>
            }>
            <Tab2 />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="apps" />
              </TabHeading>
            }>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
