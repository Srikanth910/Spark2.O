import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Item, Input, Button, Picker, Icon, View, Left, Right, Title, ListItem } from "native-base";
import { StyleSheet, StatusBar } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import Modal from 'react-native-modal';
 

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected2: undefined,
        password:'' ,
         ismodelopen:false,
         showAlert: false 
    };
}
onValueChange2 = (value) => {
    this.setState({
        selected2: value
    });
}
toggelopen=()=>{
  this.setState({
    ismodelopen:!this.state.ismodelopen
  })
}
changepage=()=>{
this.setState({
  ismodelopen:false
})
this.props.navigation.navigate('passwordSet')
}

 



  render() {
     const{password,showAlert}=this.state
    return (

      <Container style={styles.Container}>
     
        <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
        <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>

        <Left>
            <Button transparent>
              <Icon name='close' 
              onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>
          </Left>
          <Body   style={{alignItems:'flex-start', marginLeft:40}} >
            <Title style={styles.mpintext}>Forgot password</Title>
          </Body>
         
    
        </Header>

        <Content >
          <Text style={styles.loginText}>Select state</Text>
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
                                    <Picker.Item label="Karnataka" value="key1" >
                                      <Item>hello</Item>
                                        </Picker.Item>


                                    <Picker.Item label="maharashtra" value="key2" />
                                              
                                </Picker>
                            </Item>


          <Text style={styles.loginText}>Enter your mobile number</Text>
          <Item regular style={styles.textInput}>
            <Input placeholder='No need to add +91' style={styles.input} />
          </Item>

        </Content>
        <View>
        <Modal style={{  width:280, maxHeight:200, alignSelf:'center', marginTop:200}} isVisible={this.state.ismodelopen} >
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
              value={password}
              onTextChange={password => this.setState({ password })}
            />
            </View> 
             <ListItem style={{justifyContent:'space-around',marginTop:10}}>
               <Text>2:00.0</Text>
               <Text style={styles.resendOtp}>Resend OTP</Text>
             </ListItem>
          <ListItem style={{justifyContent:'flex-end'}} >
            <Text  style={styles.cancel} onPress={this.toggelopen}>Cancel</Text>
            <Text style={styles.otpSubmit} 
               onPress={this.changepage}
            >Submit</Text>
          </ListItem>
          </View>
        </Modal>
      </View>


        <Button block warning style={styles.btnSubmit} onPress={this.toggelopen} >
          <Text style={styles.submit}>Submit</Text>
        </Button>


        

      </Container>


    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mpintext: {
    // width: 114,
    height: 27,
    fontFamily: 'Nunito',
    // fontSize: 20,
    fontWeight: 'normal',
  //  alignItems:'center',
    color: '#ffffff',



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
    marginLeft: 20,
    color:'#474a4f',
    fontSize:14,


  },
  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    
  },

  Title:{
     textAlign:'center'

  }, 
  submit:{
    // width:52,
    height:22,
    fontFamily:'Nunito',
    fontSize:16,
    fontWeight:'normal',
    textAlign:'center',
    color:'#ffffff'
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
}



})