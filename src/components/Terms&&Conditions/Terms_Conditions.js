import React, {Component} from 'react';

import {WebView} from 'react-native-webview';
import {Container, Header, Icon, Text, Content, Left, Body, Title} from 'native-base';
import {StatusBar, View, Image, StyleSheet} from 'react-native';

export default class Terms_Conditions extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 90}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          {/* <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Login')}
              style={{color: '#ffffff'}}
            />
            <Text style={styles.headerText}>Terms of Use</Text>

            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View> */}

          <Left>
          <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Login')}
              style={{color: '#ffffff', marginLeft: 16,}}
            />


          </Left>
          <Body>
              <Title style={styles.headerText}>Terms of Use</Title>
          </Body>
         
        </Header>

        <WebView source={{uri: 'https://assccl.com/terms-of-use/'}} />
      </Container>
    );

    //
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffffff',
    alignItems:'center',
    marginLeft: 15,
  },
});
