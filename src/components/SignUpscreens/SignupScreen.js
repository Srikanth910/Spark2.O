import React, { Component } from 'react'
import { Container, Header, Left, Right, Button, Icon, Input, Text, ListItem, Content, Form, Item, Footer, } from 'native-base'
import { StyleSheet, StatusBar, View, TouchableOpacity, Image } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import Modal from 'react-native-modal';
export default class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      mobileOtp: '',
      isVisible: false,
      Statevalue: ''
    }
  }
  handleState = (name, id) => {
    this.setState({
      activeIndex: id,
      Statevalue: name
    })

  }
  toggelopen = () => {
    this.setState({
      isVisible: true
    })
  }
  toggelclose = () => {
    this.setState({
      isVisible: false
    })
  }

  OtpDetails = () => {
    this.setState({
      isVisible: false
    })
    this.props.navigation.navigate('Setpassword')
  }
  render() {
    const { mobileOtp } = this.state
    return (
      <Container style={styles.Container}>
        <Header style={{ backgroundColor: "#1b1464", height: 160 }}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left style={{ marginLeft: 5 }}>

            <Button transparent  >
              <Icon name='arrow-back' style={styles.icon}
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>
            <Text style={styles.textcolor} >
              Welcome
                          </Text>

            <Text style={styles.headerText}>
              Sign up for a Spark Savings account in just a few {"\n"} tabs.
                          </Text>

          </Left>

          <Right />


        </Header>
        <ScrollView>
          <Content style={styles.Content}>

            <View style={styles.grp_fields}>


              <Text style={styles.mobileinput}>Email</Text>
              <Item regular style={styles.loginInput}>
                <Input placeholder='eg. vijay@emails.com' style={styles.input} value={this.state.mobile}
                  value={this.state.mobile}
                  onChangeText={editedText =>
                    this.setState({ mobile: editedText })
                  }

                />
              </Item>

              <Text style={styles.mobileinput}>Mobile Number</Text>
              <Item regular style={styles.loginInput}>
                <Input placeholder='No need to add +91' style={styles.input} value={this.state.mobile}
                  value={this.state.mobile}
                  onChangeText={editedText =>
                    this.setState({ mobile: editedText })
                  }

                />

              </Item>

              <Text style={styles.mobileinput} >State</Text>


              <Item regular style={styles.dropInput}
                onPress={() => this.RBSheet.open()}
              >
                {/* <Text style={{marginLeft: 3,}}>{this.state.Statevalue}</Text> */}
                {/* <Icon name='ios-arrow-down' 
                             style={styles.arrowicon}
                             
                            
                            
                            /> */}

                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={220}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }
                  }}
                >
                  <Text style={styles.selectState}>
                    Select state
            </Text>

                  <View>
                    <TouchableOpacity onPress={() => this.handleState('karnataka', 1)}
                      style={this.state.activeIndex === 1 ? styles.btnActive : styles.btn}>
                      <Text style={styles.state}>Karnataka</Text>
                      <Text style={styles.Statesubtext}>Ayshwarya Syndicate Souharda Credit Co-operative Limited</Text></TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => this.handleState('maharashtra', 2)}
                      style={this.state.activeIndex === 2 ? styles.btnActive : styles.btn}
                    >
                      <Text style={styles.state}>Maharashtra</Text>
                      <Text style={styles.Statesubtext}>Ayshwarya Syndicate Souharda Credit Co-operative Limited</Text>
                    </TouchableOpacity>
                  </View>

                </RBSheet>

              </Item>




            </View>



          </Content>

        </ScrollView>
        <View style={{ flex: 1, justifyContent: 'flex-end', bottom: 0 }} >
          <View style={styles.bottom} >
            <Text style={styles.bottomtext} >By clicking on Proceed, you state that you are 18 years old and agree to our
                    <Text style={styles.bottomColor}> Terms and Conditions </Text>and <Text style={styles.bottomColor}>Privacy Policy.</Text></Text>
            <Button block warning style={styles.btnSubmit}
              onPress={this.toggelopen}
            >
              <Text style={styles.submit}>Submit</Text>
            </Button>
            < Image source={require('../../images/signupimges/grp_img.png')} style={styles.bottomImage} />
          </View>
        </View>


        <View>
          <Modal style={{ width: 280, maxHeight: 200, alignSelf: 'center', marginTop: 200 }} isVisible={this.state.isVisible} >
            <View style={{ backgroundColor: 'white' }}>

              <Text style={styles.otp}>Enter OTP</Text>
              <Text style={styles.otpText}> Enter the 5-digit one time password (OTP)</Text>
              <View style={{ alignSelf: 'center' }}>
                <SmoothPinCodeInput
                  codeLength={5}
                  cellStyle={{
                    borderBottomWidth: 1,
                    borderColor: 'gray',
                    width: 20,

                  }}
                  cellStyleFocused={{
                    borderColor: 'black',
                  }}
                  value={mobileOtp}
                  onTextChange={mobileOtp => this.setState({ mobileOtp })}
                />
              </View>
              <ListItem style={{ justifyContent: 'space-around', marginTop: 10, borderColor: 'transparent', }}>
                <Text>2:00.0</Text>
                <TouchableOpacity
                >
                  <Text style={styles.resendOtp}
                    onPress={this.otpResend}
                  >Resend OTP</Text>
                </TouchableOpacity>

              </ListItem>
              <ListItem style={{ justifyContent: 'flex-end' }} >
                <Text style={styles.cancel} onPress={this.toggelclose}>Cancel</Text>
                <TouchableOpacity onPress={this.otpsubmit}>

                  <Text style={styles.otpSubmit}
                    onPress={this.OtpDetails}
                  >Submit</Text>

                </TouchableOpacity>
              </ListItem>
            </View>
          </Modal>
        </View>

      </Container>
    )
  }
}



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5f5ff',
    
  },
  grp_fields: {

    marginTop: 20,
  },

  headerText: {
    width: 400,
    height: 36,
    fontFamily: 'Nunito',
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    color: '#ffffff',
    letterSpacing: 0.5,
    alignItems: 'flex-start',

  },
  headerText_sb: {
    fontFamily: 'Nunito',
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    color: '#ffffff',
    letterSpacing: 0.5,
   


  },
  textcolor: {
    fontSize: 20,
    height: 32,
    marginLeft: 16,
    color: '#ffffff',
    fontFamily: 'Nunito',
    
  },
  Content: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 464,
    // marginTop:50
  },
  btnSubmit: {

    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    marginTop: 15


  },
  submit: {
    // width:52,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff'
  },
  btnbottom: {

    flex: 1,
    // justifyContent: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 95
    // alignContent:'center'

  },
  container: {
    flex: 1,

    height: 640
  },

  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  selectState: {
    width: 88,
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
    height: 20
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
    color: '#f7931e'
  },
  forgotPassword: {

    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    marginLeft: 270
  },
  bottomColor: {
    color: '#f7931e'

  },
  tabColor: {
    backgroundColor: "#1b1464"
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
    justifyContent: "space-between"

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
    color: "#999999",

    height: 33,
    marginLeft: 16,

    marginRight: 16,
    fontSize: 12,
    fontFamily: 'Nunito'


  },
  bottomColor: {
    color: '#f7931e'

  },
  loginbg: {
    height: 48,
    width: 48,
    marginTop: 50,
    alignSelf: 'flex-end'
  },

  icon: {
    marginLeft: 10,
    color: '#ffffff',
    width: 16,
    height: 20
  },
  bottomImage: {
    height: 70,

    alignSelf: 'center',
    marginTop: 20

  },
  bottom: {

    backgroundColor: '#ffffff',

    marginBottom: 16,

  },
  otp: {

    width: 94,
    height: 27,
    marginTop: 15,
    color: '#000000',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: "bold"


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
    textAlign: 'left'

  },
  otpText: {
    marginLeft: 15,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginTop: 10,
    color: '#000000'

  },

  otpSubmit: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f7931e',
    textAlign: 'right'
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
    marginLeft: 8


  },
  state: {
    //   width:73,
    height: 22,
    opacity: 0.87,
    fontFamily: 'Nunito',
    color: '#000000',
    textAlign: "left",
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


})
