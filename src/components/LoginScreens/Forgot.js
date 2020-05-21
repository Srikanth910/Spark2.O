import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Item, Input, Button, Picker, Icon, View, Left, Right, Title, ListItem } from "native-base";
import { StyleSheet, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'

import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';
import RBSheet from 'react-native-raw-bottom-sheet';
 import{ResetMpinByMobileNo,otpVerification} from '../../Redux/actions/authAction'
 import {connect} from 'react-redux'
 class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      password:'',
      isVisible:false,
      isModalVisible: false,
       mobileNum:'',
       password:'',
       Otp:'',
        activeIndex:0,
         stateValue:'',
          spinner:false,
    };
  }
  onValueChange2 = (value) => {
    this.setState({
      selected2: value
    });
  }

  modelopen=()=>{
   this.setState({
     isVisible:true
   })

  }
  
  modelclose=()=>{
    this.setState({
      isVisible:false
    })
  }


  ResendOtpMpin=()=>{
     console.log('resend')
    const   ResendOtp={
      custId: auth.custId,
    }
     this.props.ResendOtpForMPin(ResendOtp)

     

  }
    
  //  componentDidMount(){
  //     this.modelopen()
  //  }
   modelSubmit=()=>{
 const {auth}=this.props
     const otp={
    custId: auth.custId,
     otp: this.state.Otp,
     refNo:auth.refNo
     }


      this.setState({
         spinner:true
      })
    this.props.otpVerification(otp,()=>{
      this.setState({
        isVisible:false
       })
       this.props.navigation.navigate('ForgotMpin')
       this.setState({
        spinner:
        false
     })
    })
  }
    

    mpin=()=>{
      const mpindata={
      mobileNo:this.state.mobileNum,
      password:this.state.password
      }
      this.setState({
        spinner: true
     })
        
       this.props.ResetMpinByMobileNo(mpindata,()=>{
      this.modelopen();
      this.setState({
        spinner:false
      })

       })

        setTimeout(()=>{
           this.setState({
              spinner:false
           })

        },5000)
    }

    handleState = name => {
      this.setState({
        stateValue: name,
      });
      this.RBSheet.close();
    };
  
  render() {
      const{ password}= this.state
        console.log('data',this.props.auth)
    return (

      <Container style={styles.Container}>
      
        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>
        <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>
          <Left>
            <Button transparent>
              <Icon name='close'
                onPress={() => this.props.navigation.navigate('Login')} />
            </Button>
          </Left>
          <Body style={{ alignItems:'flex-start' }} >
            <Title style={styles.mpintext}  >Forgot MPIN</Title>
          </Body>
        

        </Header>

        <Content >
          <Text style={styles.loginText}>Select state</Text>
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
                      onPress={() => this.handleState('Maharashtra', 2)}
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

          <Text style={styles.loginText}>Enter your mobile number</Text>
          <Item regular style={styles.textInput}>
            <Input placeholder='No need to add +91' style={styles.input}
              value={this.state.mobileNum}
              onChangeText={mobileNumber => this.setState({ mobileNum: mobileNumber })}
            
            />
          </Item>

          <Text style={styles.loginText}> Enter your password</Text>
          <Item regular style={styles.textInput}>
            <Input placeholder='Enter password' style={styles.input} 
               value={this.state.password}
               onChangeText={passwordText => this.setState({ password: passwordText })}
             
            />
          </Item>
          <View>

{this.state.spinner===true?
          <ActivityIndicator size="large" color="#00ff00" />:null}
        <Modal isVisible={this.state.isVisible} style={{  width:280, maxHeight:200, alignSelf:'center', marginTop:200}} >
          <View style={{  backgroundColor:'white'}}>

             <Text style={styles.otp}>Enter OTP</Text>
             <Text style={styles.otpText}> Enter the 5-digit one time password (OTP)</Text>
             <View style={{alignSelf:'center'}}>
          <SmoothPinCodeInput
              codeLength={5}
              cellStyle={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                width:20,
                
              }}
              cellStyleFocused={{
                borderColor: 'black',              }}
              value={this.state.Otp}
              onTextChange={Otp => this.setState({ Otp })}
            />
            </View> 
             <ListItem style={{justifyContent:'space-around',marginTop:10}}>
               <Text>2:00.0</Text>
               <Text style={styles.resendOtp}
                onPress={this.ResendOtpMpin}
               >Resend OTP</Text>
             </ListItem>
          <ListItem style={{justifyContent:'flex-end'}} >
            <TouchableOpacity >
            <Text  style={styles.cancel} onPress={this.modelclose}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity >
            <Text style={styles.otpSubmit} onPress={this.modelSubmit}>Submit</Text>
            </TouchableOpacity>
          
          </ListItem>
          </View>
        </Modal>
      </View>
        </Content>
        <Button block warning style={styles.btnSubmit}
          onPress={this.mpin}
        >
          <Text style={styles.submit}>Submit</Text>
        </Button>

      </Container>


    );
  }
}



  

const mapStateToProps=(state)=>({
  auth:state.auth.mpinOtp
})

export default connect(mapStateToProps,{ResetMpinByMobileNo,otpVerification})(Forgot)

 
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mpintext: {
    width: 114,
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'normal',
    //  alignItems:'center',
    color: '#ffffff',
    // alignSelf: 'center'


  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },

  input: {

    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,



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
    paddingTop: 20,
    marginLeft: 20

  },
  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
     marginTop:30

  },

  Title: {
    textAlign: 'center'

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
  Dialog: {
    height: 200,
    width: 300,
    alignSelf: 'center'

  },



  otp:{
    
    width:94,
    height:27,
    marginTop:15,
    color:'#000000',
  fontSize:20,
  marginLeft:15,
   fontWeight:"bold"
   

},
resendOtp:{
  width:91,
  height:22,
  fontFamily:'Nunito',
  fontSize:16,
  color:'#f7931e',
  textAlign:'right',


},
cancel:{
   width:73,
   height:39,
   fontFamily:'Nunito',
    color:'#999999',
     textAlign:'left'

},
otpText:{
  // width:228,
  // height:82,
   marginLeft:15,
  fontFamily:'Nunito',
   fontSize:16,
marginTop:10,
  color:'#000000'

},
otpSubmit:{
  width:73,
  height:39,
  fontFamily:'Nunito',
  fontSize:16,
  fontWeight:'bold',
  color:'#f7931e',
 textAlign:'right'
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

arrowicon: {
  height: 20,
  width: 40,
  alignContent: 'space-around',
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

})