
import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Input,
  Text,
  ListItem,
  Content,
  Form,
  Item,
  Footer,
  CheckBox,
  Picker
} from 'native-base';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';





export default class PermanentAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      mobileOtp: '',
      isVisible: false,
      Statevalue: '',
      MobileNO: '',
      stateValue: '',
    checked:false,
      isModalVisible: false,
    };
    this.callFunc = this.callFunc.bind(this);
  }
  callFunc() {
    if (this.state.isModalVisible) {
      this.setState({ isModalVisible: false });
    } else {
      this.setState({ isModalVisible: true });
    }
  }
  render() {

    return (
      <Container style={styles.Container}>
        <Header style={{ backgroundColor: '#1b1464', height: 130 }}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View style={{ flex: 1, }}>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'center',
                marginVertical: 5, marginHorizontal: 16,
                justifyContent: 'space-between',
              }}>
              <Icon
                name="close"
                onPress={() => this.props.navigation.navigate('Transfer_Money')}
                style={{ color: '#ffffff' }}
              />

              <Image source={require('../../images/billpay/faq_ic.png')} />
            </View>

            <View style={{ marginVertical: 5, marginHorizontal: 16, }}>

              <Text style={styles.textcolor}>Permanent Address</Text>
              <Text style={styles.headerText}>Please give us some information about you as per{'\n'}your documents</Text>
            </View>
          </View>


        </Header>

        <ScrollView>
          <Content style={styles.Content}>
            <View style={styles.grp_fields}>
              <Text style={styles.mobileinput}>Permanent Address</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="Your address"
                  style={styles.input}
                  value={this.state.Email}
                  onChangeText={editedText =>
                    this.setState({ Email: editedText })
                  }
                />
              </Item>

              <Text style={styles.mobileinput}>City</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="e.g. Bangalore"
                  style={styles.input}
                  value={this.state.MobileNO}
                  onChangeText={editedText =>
                    this.setState({ MobileNO: editedText })
                  }
                />
              </Item>
              <Text style={styles.mobileinput}>PIN code</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="6-digit PIN code"
                  style={styles.input}
                  value={this.state.MobileNO}
                  onChangeText={editedText =>
                    this.setState({ MobileNO: editedText })
                  }
                />
              </Item>




              <ListItem
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                }}>
                <Left>

                  <View>
                    <Text style={styles.list_item}>
                      CORRESPONDENCE ADDRESS
                      </Text>
                    <Text style={{ marginLeft: 16, color: '#999999', fontSize: 14, lineHeight: 19 }} >
                      Please enter your Correspondence Address for us to send communication to. it can be the same as your Permanent Address or a different address
                      </Text>
                  </View>

                </Left>
              </ListItem>
              <ListItem
                
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                }}>



                <Left>
                  <CheckBox
                    style={{ justifyContent: 'center' }}
                    checked={this.state.checked}
                    onPress={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                  <Text style={styles.textstyle3}>
                    My Correspondence Address is the same {'\n'} as the
                        Permanent Address above
                      </Text>
                </Left>
              </ListItem>

              {this.state.checked && (
                <View style={{ flex: 1, backgroundColor: 'white', }}>
                  <Text style={styles.textstyle2}>Address</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="#86, Maxwell Street, Cox Town"
                      style={styles.input}
                      value={this.state.address}
                      onChangeText={editedText =>
                        this.setState({ address: editedText })
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>City</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.city}
                      onChangeText={editedText =>
                        this.setState({ city: editedText })
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>PIN code</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.pincode}
                      onChangeText={editedText =>
                        this.setState({ pincode: editedText })
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>State</Text>
                  <Item regular style={styles.dropInput}>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Select your SIM"
                      placeholderStyle={{ color: '#bfc6ea' }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange}>
                      <Picker.Item label="Select" value="key0" />
                      <Picker.Item label="Karnataka" value="karnataka" />
                      <Picker.Item
                        label="maharashtra"
                        value="maharashtra"
                      />
                    </Picker>
                  </Item>
                </View>
              )}



              {/* <Item style={styles.grpItem}>
                <CheckBox
                  onPress={this.checked}
                  checked={this.state.value}
                  style={styles.check}
                />
                <Text style={styles.termsCondtion}>
                  My Correspondence Address is the same  {'\n'} as the Permanent Address above

              </Text>
              </Item> */}

              <View />















            </View>
          </Content>





          <Button
            block
            warning
            style={styles.btnSubmit}
            onPress={this.userDetails}>
            <Text style={styles.submit}>Proceed</Text>
          </Button>

        </ScrollView>




      </Container>
    );
  }
}





const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f5f5ff',
  },
  grpItem: {
    marginTop: 20,
    borderColor: 'transparent',
    marginRight: 16,
    marginLeft: 16,
  },
  check: {
    borderColor: '#f7931e',
    // height:14,
    // width:14,
    borderRadius: 2,
    backgroundColor: '#f7931e',
  },
  termsCondtion: {
    // height: 19,
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    color: '#474a4f',
    fontSize: 14,
    marginLeft: 20,
  },
  list_item: {
    height: 19,
    marginLeft: -130,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#474a4f',
    textAlign: 'center',
    fontStyle: 'normal',
  },
  textstyle3: {
    marginLeft: 16,
    color: '#474a4f',
    fontSize: 16,
    marginRight: 11,
    justifyContent: 'center',
  },
  textstyle2: {
    marginTop: 10,
    marginLeft: 16,
    color: '#474a4f',
    fontSize: 14,
    marginRight: 11,
  },
  Inputstyle2: {
    flex: 1,
    borderRadius: 5,
    height: 40,

    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    backgroundColor: '#e1e4eb',
  },









  grp_fields: {
    marginTop: 20,
  },

  headerText: {
    width: 400,

    fontFamily: 'Nunito',
    fontSize: 14,
    marginVertical: 16,
    color: '#ffffff',
    marginHorizontal: 16,
    marginLeft: 16,

    alignItems: 'flex-start',
  },
  headerText_sb: {
    fontFamily: 'Nunito',
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    color: '#ffffff',
  },
  textcolor: {
    fontSize: 20,
    width: 200,
    marginLeft: 16,
    color: '#ffffff',
    fontFamily: 'Nunito',
  },

  btnSubmit: {
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 40,
    marginBottom: 32,
    marginRight: 16
  },
  submit: {
    // width:52,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  btnbottom: {
    alignContent: 'flex-end',
  },

  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  selectState: {
    width: 150,
    height: 22,
    opacity: 0.87,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 16,
  },
  headerCross: {
    color: '#ffffff',
    marginLeft: 20,
    marginTop: 20,
    height: 20,
  },
  forgetText: {
    marginRight: 13,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
  },

  forgetpassword: {
    width: 91,
    height: 22,
    marginTop: 10,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
  },
  forgotPassword: {
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    marginLeft: 270,
  },
  bottomColor: {
    color: '#f7931e',
  },
  tabColor: {
    backgroundColor: '#1b1464',
  },

  textInput: {
    marginTop: 20,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },

  loginInput: {
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    marginTop: 5,
    backgroundColor: '#e1e4eb',
  },
  textData: {
    marginTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
  },
  LoginButton: {
    marginLeft: 16,
    marginRight: 15,
  },

  dropInput: {
    backgroundColor: '#e1e4eb',
    marginLeft: 16,
    marginRight: 15,
    borderRadius: 5,
    height: 40,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  loginText: {
    marginTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
  },
  passwordicon: {
    height: 20,
    width: 40,
  },

  mobileinput: {
    marginTop: 10,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
    height: 19,
  },

  bottomtext: {
    color: '#999999',
    marginTop: 50,

    fontSize: 12,

    fontFamily: 'Nunito',
  },
  bottomColor: {
    color: '#f7931e',
    fontSize: 12,

    fontFamily: 'Nunito',
  },
  loginbg: {
    height: 48,
    width: 48,
    marginTop: 50,
    alignSelf: 'flex-end',
  },

  icon: {
    marginLeft: 10,
    color: '#ffffff',
    width: 16,
    height: 20,
  },
  bottomImage: {
    height: 70,

    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 16,
    alignContent: 'flex-end',
  },
  bottom: {
    backgroundColor: '#ffffff',
  },
  otp: {
    width: 94,
    height: 27,
    marginTop: 15,
    color: '#000000',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  resendOtp: {
    width: 91,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    textAlign: 'right',
  },
  cancel: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    color: '#999999',
    textAlign: 'left',
  },
  otpText: {
    marginLeft: 15,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },

  otpSubmit: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f7931e',
    textAlign: 'right',
  },
  btn: {
    // backgroundColor: '#DDDDDD',
    // borderColor: '#dc00ff',
    // borderRadius: 10,
    // borderWidth:1,
    // padding: 10,
    opacity: 0.5,
    // marginLeft: 16,
  },
  btnActive: {
    // alignItems: 'center',
    // backgroundColor: '#f7931e',
    borderColor: '#f7931e',
    // borderRadius: 10,
    borderWidth: 3,
    height: 80,
    // padding: 10,
    marginLeft: 8,
  },
  state: {
    //   width:73,
    height: 22,
    opacity: 0.87,
    fontFamily: 'Nunito',
    color: '#000000',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 16,
  },
  Statesubtext: {
    width: 332,
    height: 60,
    fontSize: 16,
    color: '#999999',
    textAlign: 'left',
    fontStyle: 'normal',
    marginLeft: 16,
  },
});

