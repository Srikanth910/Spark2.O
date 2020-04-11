import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Header, Tabs, Text, Tab, TabHeading, Picker, Item, Input, Button, Body, View, Icon, Right, Form, Left } from 'native-base'
import { StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import { loginUser, userMpin } from '../../Redux/actions/authAction';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            mobile: '',
            DEVICEID: "fe13aa4656e467b4",
            password: '',
            mpin: '',
            name:'',
            loginUserData:{},
            DeviceID:'',
            showAlert: false
        };
    }
    onValueChange2 = (value) => {
        this.setState({
            selected2: value

        });
    }

    //  componentDidMount(){
    //      this.getDeviceId();
    //  }

  

    handleSubmit = async () => {
        const user ={
        password: this.state.password,
            "DEVICEID": "fe13aa4656e467b4",
            mobileNo:this.state.mobile
            }
        
            try {
                await AsyncStorage.setItem('userdata',JSON.stringify(user))
                console.log('login user saved')
               
              } catch (e) {
                 console.log(e)
              }

        this.props.loginUser(user,()=>{
            this.props.navigation.navigate('Home')
        })

    }
    mpinSubmit = async () => {
        try {
            const loginData = await AsyncStorage.getItem('userdata')
             const user= JSON.parse(loginData)
          this.setState({
               loginUserData:user
          })
          } catch (e) {
            alert('Failed to load name.')
          }
            
          const {loginUserData}= this.state
        const userMpin = {
            mPin: this.state.mpin,
            DEVICEID: loginUserData.DEVICEID,
          mobileNo: loginUserData.mobileNo
        }
       
        this.props.userMpin(userMpin, () => {
            this.props.navigation.navigate('Home')
        })



    }
    showAlert = () => {
         console.log('show')
        this.setState({
          showAlert: true
        });
      };
      
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };

    render() {
        const { error } = this.props;

        return (
            <Container style={styles.container}>
                    <Header style={{ backgroundColor: "#1b1464", height: 120 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>
                        <Body>
                            <Left style={{marginLeft:40, marginTop:20}}>

                            <Button transparent  >
              <Icon name='close'  style={styles.icon}
              onPress={() => this.props.navigation.navigate('Login')}
              />
              </Button>
              <Text style={styles.headerText}>
                                Watch your wealth grow
                          </Text>
             
                            </Left>
                         
                            
                       <Right/>
                        </Body>
                        
                        <Right>
                        <ImageBackground  source={require('../../images/img_login2.png')} style={styles.loginbg}/>

                        </Right>

                    </Header>
                    <Tabs
                        tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}
                    >
                        <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabHeading}>QUICK ACCESS</Text></TabHeading>}>
                            <Text style={styles.textData}>Enter MPIN</Text>
                            <Item regular style={styles.textInput}>
                                <Input placeholder='Enter mpin' style={styles.input}

                                    value={this.state.mpin}
                                    onChangeText={mpintext => this.setState({ mpin: mpintext })}
                                />
                            </Item>
                            <TouchableOpacity >
                                <Text style={styles.forgetText}
                                    onPress={() => this.props.navigation.navigate('Forgotview')}
                                >Forgot MPIN</Text>
                            </TouchableOpacity>
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
                                <Text style={styles.mobileinput}>Enter your mobile number</Text>
                                <Item regular style={styles.loginInput}>
                                    <Input placeholder='No need to add +91' style={styles.input} value={this.state.mobile}
                                        value={this.state.mobile}
                                        onChangeText={editedText =>
                                            this.setState({ mobile: editedText })
                                        }

                                        
                                    />
                                     
                                </Item>

                                <Text style={styles.mobileinput} >Enter your password</Text>

                                <Item regular style={styles.loginInput}>
                                    {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                                    <Input placeholder='' style={styles.input}
                                        value={this.state.password}
                                        onChangeText={editedText =>
                                            this.setState({ password: editedText })
                                        }
                                        
                                    />
                                    <ImageBackground  source={require('../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                                </Item>
                            </Form>
                            <TouchableOpacity >
                                <Text style={styles.forgotPassword}
                                    onPress={() => this.props.navigation.navigate('Forgotpass')}
                                >Forgot password</Text>
                            </TouchableOpacity>

                            <View style={styles.btnbottom}>
                                <Text style={styles.bottomtext}>
                                    By logging in , you agree to our
                            <Text style={styles.bottomColor}> Terms And conditon  </Text> And
                            <Text style={styles.bottomColor}> Privacy Policy</Text>  </Text>
                                <Button block warning
                                    onPress={this.showAlert}
                                >
                                    <Text>LOGIN</Text>
                                </Button>
                            </View>
                        </Tab>

                    </Tabs>

                    <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Mpin Worng"
          message={error.loginError.Message}
          closeOnTouchOutside={true}
        //   closeOnHardwareBackPress={false}
        //   showCancelButton={true}
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
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
     error:state.error
   
})

export default connect(mapStateToProps, { loginUser, userMpin })(Login)

const styles = StyleSheet.create({

     container:{
         flex:1
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
        marginBottom: 17,
        marginLeft: 16,
        marginRight: 16,
        marginTop:200


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
        
         marginLeft:10,
        color: '#ffffff',
  alignItems:'flex-start'
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
        marginLeft: 300,
        width: 91,
        height: 22,
        marginTop: 10,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e'

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
        marginTop: 30,
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


    },

    bottomtext: {
        color: "#999999",
        width: 329,
        height: 52.7,
        marginLeft: 16,
        paddingBottom: 10,


    },
    bottomColor: {
        color: '#f7931e'

    },
    loginbg:{
        height:48,
        width:48,
        marginTop:50,
         alignSelf:'flex-end'
    },

     icon:{
         marginLeft:10,
          color:'#ffffff',
           width:14,
            height:20
     }
})
