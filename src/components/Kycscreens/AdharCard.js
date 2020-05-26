import React, {Component} from 'react';
import {
  Container,
  Header,
  Icon,
  Content,
  Item,
  Input,
  Button,
} from 'native-base';
import {StatusBar, View, Text, Image, StyleSheet, CheckBox} from 'react-native';

export default class AdharCard extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 140}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'center',
                marginVertical: 5,
                marginHorizontal: 16,
                justifyContent: 'space-between',
              }}>
              <Icon
                name="close"
                onPress={() => this.props.navigation.navigate('Transfer_Money')}
                style={{color: '#ffffff'}}
              />

              <Image source={require('../../images/billpay/faq_ic.png')} />
            </View>

            <View style={{marginVertical: 5, marginHorizontal: 16}}>
              <Text style={styles.code}>Address Proof</Text>
              <Text style={styles.lightText}>
                A proof of residence is a document confirming where you live –
                it must have both your full name and your address printed on it
              </Text>
            </View>
            <View style={{height:8, backgroundColor:'#f7931e',  width:300, borderRadius: 10, marginVertical:5,}}>

            </View>
            
          </View>
        </Header>
        <Content>
          <Text style={styles.mobileinput}>
            Address Proof of Karnataka State
          </Text>
          <Item regular style={styles.loginInput}>
            <Input
              placeholder=""
              style={styles.input}

              //   onChangeText={editedText =>
              //     this.setState({Email: editedText})
            />
          </Item>
          <Text style={styles.mobileinput}>
            Please enter your Aadhaar Card number
          </Text>
          <Item regular style={styles.loginInput}>
            <Input
              placeholder="12-digit Aadhaar number"
              style={styles.input}

              //   onChangeText={editedText =>
              //     this.setState({Email: editedText})
            />
          </Item>

          <Text
            style={{
              color: '#f7931e',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 14,
              fontFamily: 'Nunito',
            }}>
            See instructions for PAN card
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: '#e1e4eb',
                height: 130,
                width: 158,
                marginHorizontal: 16,
                marginVertical: 16,
                borderRadius: 10,
              }}>
              <View style={{alignItems: 'center', marginTop: 40,}}>
                <Image
                  source={require('../../images/kyc/adhar.png')}
                  style={styles.imgicon}
                />
                <Text
                  style={{color: '#aaadb2', fontSize: 10, textAlign: 'center'}}>
                 Tap here to take the front side of your document
                </Text>
              </View>
              <Image
                source={require('../../images/kyc/camera_ic.png')}
                style={{alignSelf: 'flex-end', marginRight: 5,  marginTop: 10,}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#e1e4eb',
                height: 130,
                width: 158,
                marginHorizontal: 16,
                marginVertical: 16,
                borderRadius: 10,
              }}>
              <View style={{alignItems: 'center', marginTop: 40,}}>
                <Image
                  source={require('../../images/kyc/adhar.png')}
                  style={styles.imgicon}
                />
                <Text
                  style={{color: '#aaadb2', fontSize: 10, textAlign: 'center'}}>
                 Tap here to take the front side of your document
                </Text>
              </View>
              <Image
                source={require('../../images/kyc/camera_ic.png')}
                style={{alignSelf: 'flex-end', marginRight: 5,  marginTop: 10,}}
              />
            </View>
          </View>
        </Content>
        <Text style={styles.DarkText}>Upload up to 2 photos</Text>
        <Text style={styles.DarkText}>
          Upload up to 2 photos Attach up to 5MB (supported formats: JPEG, PNG)
        </Text>

        <Button
          block
          warning
          style={styles.btnSubmit}
          onPress={this.userDetails}>
          <Text style={styles.submit}>Submit</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnSubmit: {
    alignItems: 'center',

    marginHorizontal: 16,
    marginVertical: 32,
  },
  code: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'left',
  },
  lightText: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'left',
  },
  DarkText: {
    fontFamily: 'Nunito',
    fontSize: 12,
    color: '#474a4f',
    marginHorizontal: 16,
    marginTop: 5,

    textAlign: 'left',
  },
  submit: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },

  mobileinput: {
    marginTop: 10,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
    height: 19,
  },
  loginInput: {
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    marginTop: 5,
    backgroundColor: '#e1e4eb',
  },
  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  imgicon: {
    height: 33,
    width: 50,
  },
});
