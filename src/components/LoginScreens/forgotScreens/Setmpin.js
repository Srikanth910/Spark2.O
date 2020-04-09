import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Content, Text, ListItem } from 'native-base'
import { StyleSheet, View,StatusBar } from 'react-native'

import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

import Modal from 'react-native-modal';
import Dialog from "react-native-dialog";
export default class Setmpin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // code:'1,2,3'
      code: '',
      password: '',
      visible:false
    }
  }

  Dialogclose=()=>{
    this.setState({
      visible:false
    })
     this.props.navigation.navigate('Beneficiary')
  }


  Dialogopen=()=>{
    this.setState({
      visible:true
    })
  }
  render() {
    const { code, password } = this.state
    return (
      <Container>
        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>

        <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>
          </Left>
          <Body style={{ alignItems: 'flex-end' }} >
            <Title style={styles.mpintext}  > SET MPIN</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <Text style={styles.mpinpin}>Enter new MPIN</Text>
          <View style={{ alignSelf: 'center' }}>
            <SmoothPinCodeInput


              codeLength={6}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              value={code}
              onTextChange={code => this.setState({ code })}
            />
          </View>
          <Text style={styles.mpinpin}> confirm new MPIN</Text>
          <View style={{ alignSelf: 'center' }}>
            <SmoothPinCodeInput
              codeLength={6}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              value={password}
              onTextChange={password => this.setState({ password })}
            />
          </View>
          <View>
        <Dialog.Container visible={this.state.visible} >
          <Dialog.Title>New Mpin Set</Dialog.Title>
          <Dialog.Description>
            <Text style={styles.Dialogtext} >You have successfully Set a
            new MPIN</Text>
            <Text>
              
            </Text>
          </Dialog.Description>
          
          <Dialog.Button label="ok" color="#f7931e"  onPress={this.Dialogclose}
          />
        </Dialog.Container>
      </View>

        </Content>


        <Button block warning style={styles.btnSubmit} onPress={this.Dialogopen}  >
          <Text style={styles.submit}>Submit</Text>
        </Button>



        <View>
        <Modal style={{  width:280, maxHeight:200, alignSelf:'center', marginTop:200}} >
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
            <Text  style={styles.cancel}>Cancel</Text>
            <Text style={styles.otpSubmit}>Submit</Text>
          </ListItem>
          </View>
        </Modal>
      </View>

      </Container>



    )
  }
}

const styles = StyleSheet.create({

  mpinpin: {
    // width:102,
    height: 19,
    fontFamily: 'Nunito',
    fontSize: 14,
    textAlign: 'left',
    color: '#474a4f',
    marginTop: 10,
    marginLeft: 10


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


  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',

  },
  Dialogtext:{
    width:228,
    height:58,
    opacity:0.54,
    fontFamily:'Nunito',
    fontSize:16,
    textAlign:'left',
    color:'#010101'
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