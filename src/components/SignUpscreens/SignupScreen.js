import React, {Component} from 'react';
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
} from 'native-base';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {
  signupCheckmobile,
  checkMoblieno,
  ResendOtpCheckMobileNo,
} from '../../Redux/actions/authAction';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      mobileOtp: '',
      isVisible: false,
      Statevalue: '',
      MobileNO: '',
      stateValue: '',
       spinner:false
    };
  }
  handleState = (name, id) => {
    this.setState({
      activeIndex: id,
      Statevalue: name,
    });
  };
  // toggelopen = () => {
  //   this.setState({
  //     isVisible: true,
  //   });
  // };
  // toggelclose = () => {
  //   this.setState({
  //     isVisible: false,
  //   });
  // };

  resendOtpDetails = () => {
    const resendOtp = {
      email: this.state.email,
      mobileno: this.state.MobileNO,
    };

    this.props.ResendOtpCheckMobileNo(resendOtp);
  };

  OtpDetails = () => {
    const {signUpDetails} = this.props.auth;
    const otp = {
      refNo: signUpDetails.Data.refNo,
      otp: this.state.mobileOtp,
    };

    this.props.checkMoblieno(otp).then(() => {
      const {signUpotp} = this.props.auth;
      if (signUpotp.code === '200') {
        this.setState({
          isVisible: false,
        });
        this.props.navigation.navigate('Setpassword');
      }
    });
  };

  userDetails = async () => {
    const userDetails = {
      email: this.state.Email,
      mobileno: this.state.MobileNO,
    };

    try {
      await AsyncStorage.setItem('signupDetails', JSON.stringify(userDetails));
      console.log(' user saved');
    } catch (e) {
      console.log(e);
    }
     this.setState({
        spinner:true
     })

    this.props.signupCheckmobile(userDetails).then(() => {
      const {auth} = this.props;
      if (auth.signUpDetails.code === '200') {
        this.setState({
          isVisible: true,
           spinner:false
           
        });
      }
    });
    // };

    setTimeout(()=>{
      this.setState({
        spinner:false  
     })

    },6000)
  };

  handleState = name => {
    this.setState({
      stateValue: name,
    });
    this.RBSheet.close();
  };

  render() {
    const {mobileOtp} = this.state;
    const {auth} = this.props;
  

    return (
      <Container style={styles.Container}>
        <Header style={{backgroundColor: '#1b1464', height: 160}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left
            style={{
              marginLeft: 5,
              alignSelf: 'flex-start',
              alignSelf: 'flex-end',
            }}>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={styles.icon}
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>

            <Text style={styles.textcolor}>Welcome</Text>

            <Text style={styles.headerText}>
              Sign up for a Spark Savings account in just a few {'\n'} tabs.
            </Text>
          </Left>
          <Right />
        </Header>
        <ScrollView>
          <Content style={styles.Content}>
            <View style={styles.grp_fields}>
              <Text style={styles.mobileinput}>Email</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="eg. vijay@emails.com"
                  style={styles.input}
                  value={this.state.Email}
                  onChangeText={editedText =>
                    this.setState({Email: editedText})
                  }
                />
              </Item>

              <Text style={styles.mobileinput}>Mobile Number</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="No need to add +91"
                  style={styles.input}
                  value={this.state.MobileNO}
                  onChangeText={editedText =>
                    this.setState({MobileNO: editedText})
                  }
                />
              </Item>

              <Text style={styles.mobileinput}>State</Text>

              <Item regular style={styles.dropInput}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.stateValue}
                />
                <Icon
                  name="ios-arrow-down"
                  onPress={() => this.RBSheet.open()}
                />

                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={220}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    },
                  }}>
                  <Text style={styles.selectState}>Select state</Text>

                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('karnataka', 1)}
                      style={
                        this.state.activeIndex === 1
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Karnataka</Text>
                      <Text style={styles.Statesubtext}>
                        Ayshwarya Syndicate Souharda Credit Co-operative Limited
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('maharashtra', 2)}
                      style={
                        this.state.activeIndex === 2
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Maharashtra</Text>
                      <Text style={styles.Statesubtext}>
                        Ayshwarya Syndicate Souharda Credit Co-operative Limited
                      </Text>
                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </Item>
              {this.state.spinner===true&&
              <ActivityIndicator size="large" color="#00ff00" />}
            </View>
          </Content>

          <View
            style={{ flex:1,
              justifyContent: 'flex-end',
              marginHorizontal: 16,
              marginVertical: 80,
              marginBottom: 16,
              alignSelf: 'flex-end',
            }}>
            <Text style={styles.bottomtext}>
              By clicking on Proceed, you state that you are 18 years old and
              agree to our
              <Text style={styles.bottomColor}>
                {' '}
                Terms and Conditions{' '}
              </Text>and <Text style={styles.bottomColor}>Privacy Policy.</Text>
            </Text>
            <Button
              block
              warning
              style={styles.btnSubmit}
              onPress={this.userDetails}>
              <Text style={styles.submit}>Submit</Text>
            </Button>
          </View>
        </ScrollView>

        <View />

        <Modal
          style={{
            width: 280,
            maxHeight: 200,
            alignSelf: 'center',
            marginTop: 200,
          }}
          isVisible={this.state.isVisible}>
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.otp}>Enter OTP</Text>
            <Text style={styles.otpText}>
              {' '}
              Enter the 5-digit one time password (OTP)
            </Text>
            <View style={{alignSelf: 'center'}}>
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
                onTextChange={mobileOtp => this.setState({mobileOtp})}
              />
            </View>
            <ListItem
              style={{
                justifyContent: 'space-around',
                marginTop: 10,
                borderColor: 'transparent',
              }}>
              <Text>2:00.0</Text>
              <TouchableOpacity>
                <Text style={styles.resendOtp} onPress={this.resendOtpDetails}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{justifyContent: 'flex-end'}}>
              <Text style={styles.cancel} onPress={this.toggelclose}>
                Cancel
              </Text>
              <TouchableOpacity onPress={this.otpsubmit}>
                <Text style={styles.otpSubmit} onPress={this.OtpDetails}>
                  Submit
                </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {signupCheckmobile, checkMoblieno, ResendOtpCheckMobileNo},
)(Signup);

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f5f5ff',
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

    marginLeft: 16,
    color: '#ffffff',
    fontFamily: 'Nunito',
  },

  btnSubmit: {
    alignItems: 'center',

    marginTop: 20,
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
