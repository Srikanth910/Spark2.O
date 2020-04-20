import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';
import { Container, Header, Tabs, Text, Tab, TabHeading, Picker, Item, Input, Button, Body, View, Icon, Right, Form, Left, ListItem, Spinner, Content } from 'native-base'
import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import AwesomeAlert from 'react-native-awesome-alerts';
import { loginUser, userMpin,otpVerification,otpVerificationforLogin } from '../../Redux/actions/authAction';
import DeviceInfo from 'react-native-device-info';
 import{getUniqueID} from 'react-native-device-info'
import validatemPin from './Validation/mpin';
import validateLogin from './Validation/Login';
 import  Otpscreen from '../Hoc/Otpscreen'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            mobile: '',
            DEVICEID: "fe13aa4656e467b4",
            password: '',
            mpin: '',
            name: '',
            isVisible:false,

            loginUserData: {},
            DeviceID: '',
            showAlert: false,
            errorsData: {},
            id:'',
            errorsLogin: {},
            errorAlert:{},
            mobileOtp:'',


        };
    }


    

 componentDidMount=()=>{
  console.log(this.state.loginUserData)
    //  this.toggle();
      DeviceInfo.getAndroidId().then(id=>{
        this.setState({
            DeviceID:id
        })
      })
 }
    
    onValueChange2 = (value) => {
        this.setState({
            selected2: value

        });
    }

    isValid() {
        const { errorsData, isValid } = validatemPin(this.state)
        if (!isValid) {
            this.setState({ errorsData })
        }
        return isValid
    }

    isLogin() {
        const { errorsLogin, isValid } = validateLogin(this.state);
        if (!isValid) {
            this.setState({ errorsLogin })
        }
        return isValid
    }

    handleSubmit = async () => {

        if (this.isLogin()) {
            this.setState({ errorsLogin: {} })
            const user = {
                password: this.state.password,
                // "DEVICEID": "fe13aa4656e467b4",
                DEVICEID:this.state.DeviceID,
                mobileNo: this.state.mobile
            }

            try {
                await AsyncStorage.setItem('Loginuser', JSON.stringify(user))
                console.log('login user saved')

            } catch (e) {
                console.log(e)
            }

            this.props.loginUser(user).then(()=>{
                 const {error,auth} =this.props
                 if(error.loginError.code==="309"){

                    this.setState({
                   showAlert:true,
                errorAlert:error.loginError
                    })

                 }else if(auth.userMpin.code==="200"){
                this.props.navigation.navigate('Home')
                 }
                 else if(auth.DeviceOtp.code==="504"){
                    this.setState({
                        isVisible:true
                    })
                }
            })

        }


    }


    mpinSubmit = async () => {
       
        try {
            const loginData = await AsyncStorage.getItem('Loginuser')
            const user = JSON.parse(loginData)
            this.setState({
                loginUserData: user
            })
        } catch (e) {
            alert('Failed to load name.')
        }

        if (this.isValid()) {
            this.setState({ errorsData: {} })
            const { loginUserData } = this.state
            const userMpin = {
                mPin: this.state.mpin,
                DEVICEID: this.state.DeviceID,
                // "DEVICEID": "fe13aa4656e467b4",
                 DEVICEID:this.state.DeviceID,
                mobileNo: loginUserData.mobileNo
            }
   console.log(userMpin)
            this.props.userMpin(userMpin).then(()=>{
             const {error,auth}=this.props

                if(error.loginError.code==="302"){
                    this.setState({
                        errorAlert:error.loginError,
                        showAlert: true
                    });

                }else if(auth.userMpin.code==="200"){
                    this.props.navigation.navigate('Home')
                } else if(auth.DeviceOtp.code==="504"){
                    this.setState({
                        isVisible:true
                    })
                }

            })
              

        }

    }
    showAlert = () => {
        console.log('show')
        this.setState({
            showAlert: true
        });
    };


     toggle=()=>{
         this.setState({
             isVisible:true
         })
     }
    hideAlert = () => {

         
        this.setState({
            showAlert: false
        });
    };
    toggelclose=()=>{
        this.setState({
            isVisible:false
        })
    }

    otpverify= async()=>{

        try {
            const loginData = await AsyncStorage.getItem('Loginuser')
            const user = JSON.parse(loginData)
            this.setState({
                loginUserData: user
            })
        } catch (e) {
            alert('Failed to load name.')
        }
        const { auth } = this.props
         const {loginUserData}=this.state
     
        const userOtp = {
            DEVICEID:this.state.DeviceID,
            mobileNo:loginUserData.mobileNo,
            memberid: auth.DeviceOtp.custId,
          otp: this.state.mobileOtp,
          refNo:auth.DeviceOtp.refNo,
          "DEVICEMODEL":"",
           "IPADDRESS":""
        }
         console.log(userOtp)

        this.props.otpVerificationforLogin(userOtp).then(()=>{
           const {auth,error} =this.props
              if(error.otpError.code==="306"){
                      this.toggelclose();
                  this.setState({
                      showAlert:true,
                      errorAlert:error.otpError
                  })
              } else 
           if(auth. userotpdetails.code==="200"){
               this.props.navigation.navigate('Home')
           }
        })
       

     
     }
    render() {
        const { error,auth } = this.props; 
         console.log(error.otpError)
     
        const { errorsData, errorsLogin, errorAlert ,mobileOtp} = this.state

        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: "#1b1464", height: 120 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                
                        <Left style={{ marginLeft:10, marginTop: 20 }}>

                            <Button transparent  >
                                <Icon name='close' style={styles.icon}
                                    onPress={() => this.props.navigation.navigate('Login')}
                                />
                            </Button>
                            <Text style={styles.headerText}>
                                Watch your wealth grow
                          </Text>

                        </Left>


                        <Right />
                    

                    <Right>
                        <ImageBackground source={require('../../images/img_login2.png')} style={styles.loginbg} />

                    </Right>

                </Header>
                <Tabs
                    tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}

                >
                    <Tab


                        heading={<TabHeading style={styles.tabColor}><Text style={styles.tabHeading}>QUICK ACCESS</Text></TabHeading>}>
                        <Text style={styles.textData}>Enter MPIN</Text>
                        <Item regular style={styles.textInput}>
                            <Input placeholder='Enter mpin' style={styles.input}

                                value={this.state.mpin}
                                onChangeText={mpintext => this.setState({ mpin: mpintext })}
                            />
                        </Item>
                        <Item style={{ justifyContent: 'space-between', borderColor: 'transparent', marginTop: 5 }}>
                            <Text style={styles.errorText}>{errorsData.mpin}</Text>
                            <TouchableOpacity >
                                <Text style={styles.forgetText}
                                    onPress={() => this.props.navigation.navigate('Forgotview')}
                                >Forgot MPIN</Text>
                            </TouchableOpacity>
                        </Item>
                        <View style={styles.btnbottom}>
                            <Text style={styles.bottomtext}>
                                By logging in , you agree to our
                        <Text style={styles.bottomColor}> Terms And conditon  </Text> And
                        <Text style={styles.bottomColor}> Privacy Policy</Text>  </Text>
                            <Button block warning
                                onPress={this.mpinSubmit}
                            >
                                <Text>LOGIN</Text>
                            </Button>
                        </View>
                    </Tab>


                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabHeading}>LOGIN</Text></TabHeading>}>
                        <Form>
                            <Text style={styles.loginText}>Select State</Text>
                            <Item regular style={styles.dropInput} >
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Select" value="key0" />
                                    <Picker.Item label="Karnataka" value="karnataka" />
                                    <Picker.Item label="maharashtra" value="maharashtra" />
                                </Picker>
                            </Item>
                            <Text></Text>
                            <Text style={styles.mobileinput}>Enter your mobile number</Text>
                            <Item regular style={styles.loginInput}>
                                <Input placeholder='No need to add +91' style={styles.input} value={this.state.mobile}
                                    value={this.state.mobile}
                                    onChangeText={editedText =>
                                        this.setState({ mobile: editedText })
                                    }

                                />

                            </Item>
                            <Text style={styles.errorText}>{errorsLogin.mobile}</Text>

                            <Text style={styles.mobileinput} >Enter your password</Text>

                            <Item regular style={styles.loginInput}>
                                {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                                <Input placeholder='' style={styles.input}
                                    value={this.state.password}
                                    onChangeText={editedText =>
                                        this.setState({ password: editedText })
                                    }

                                />
                                <ImageBackground source={require('../../images/pass_icon.png')} style={{ width: 22, height: 19, marginRight: 10 }} />

                            </Item>

                        </Form>


                        <Item style={{ justifyContent: 'space-between', borderColor: 'transparent', }}>
                            <Text style={styles.errorText}>{errorsLogin.password}</Text>
                            <TouchableOpacity >
                                <Text style={styles.forgetText}
                                    onPress={() => this.props.navigation.navigate('Forgotpass')}
                                >Forgot password</Text>
                            </TouchableOpacity>
                        </Item>

                        <View style={styles.btnbottom}>
                            <Text style={styles.bottomtext}>
                                By logging in , you agree to our
                            <Text style={styles.bottomColor}> Terms And conditon  </Text> And
                            <Text style={styles.bottomColor}> Privacy Policy</Text>  </Text>
                            <Button block warning
                                onPress={this.handleSubmit}
                            >
                                <Text>LOGIN</Text>
                            </Button>
                        </View>
                    </Tab>

                </Tabs>

               

                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title={errorAlert.Title}
                    message={errorAlert.Message}
                    // closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}

                    confirmText="ok"
                    confirmColor="blue"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

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
<ListItem style={{ justifyContent: 'space-around', marginTop: 10 }}>
  <Text>2:00.0</Text>
  <TouchableOpacity
  >
    <Text style={styles.resendOtp}
      onPress={this.otpResend}
    >Resend OTP</Text>
  </TouchableOpacity>

</ListItem>
<ListItem style={{ justifyContent: 'flex-end' }} >
  <Text style={styles.cancel} onPress={this.props.close}>Cancel</Text>
  <TouchableOpacity>

    <Text style={styles.otpSubmit}
   onPress={this.otpverify}
    >Submit</Text>

  </TouchableOpacity>
</ListItem>
</View>

    </Modal>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error

})

export default connect(mapStateToProps, { loginUser, userMpin ,otpVerification,otpVerificationforLogin })(Login)

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    errorText: {
        color: 'red',
        marginLeft: 20,
        fontSize: 14
    },

    tabHeading: {
        height: 19,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 0.14,
        fontStyle: 'normal',

    },
    btnbottom: {

        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 32,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 150,


    },
    container: {
        flex: 1,

        height: 640
    },
    headerText: {
        width: 221,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,

        marginLeft: 10,
        color: '#ffffff',
        alignItems: 'flex-start'
    },
    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,

    },
    headerCross: {
        color: '#ffffff',
        marginLeft: 20,
        marginTop: 20,
        height: 20
    },
    forgetText: {
        // marginLeft: 300,
        // width: 91,
        marginRight: 13,
        height: 22,
        // marginTop: 10,
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
    Quicklogin: {
        marginLeft: 16,
        marginRight: 15,
        marginTop: 10

    },


    dropInput: {
        backgroundColor: '#e1e4eb',
        marginLeft: 16,
        marginRight: 15,
        borderRadius: 5,
        height: 40,
        marginTop: 10

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
        // marginTop: 5,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,


    },

    bottomtext: {
        color: "#999999",
        // width: 329,
        height: 52.7,
        marginLeft: 16,
        paddingBottom: 10,
        marginRight:16


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
        width: 14,
        height: 20
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
      }
})
