import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import Modal from 'react-native-modal';
import { ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

export default class Otpscreen extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              mobileOtp:''
         }
     }

      toggelclose=()=>{
          this.setState({
              isVisible:false
          })
      }


    otpSubmit=()=>{

    }
     
    render() {
          const{mobileOtp}=this.state
        
        return (
            <View>
  
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
                <TouchableOpacity onPress={this.otpsubmit}>

                  <Text style={styles.otpSubmit}
                
                  >Submit</Text>

                </TouchableOpacity>
              </ListItem>
            </View>
       
        </View>
           
        )
    }
}

 

 const styles= StyleSheet.create({
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