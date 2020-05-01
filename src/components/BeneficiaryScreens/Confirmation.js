import React, { Component } from 'react'
import { Container, Header, Text, Tab, Button, Body, Title, Left, Icon, View, ListItem } from 'native-base'
import { StyleSheet, ScrollView, StatusBar,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
 import {createOtpBeneficiary,addBeneficiaryDetails,resendOtpBeneficiary} from '../../Redux/actions/Beneficiary'

class Confirmationdetails extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
            isVisible:false,
            mobileOtp:''
        }
        
    }

    
 
    
    toggleclose = () => {
        this.setState({
            isVisible: false

        })
       
    }
     toggleopen=()=>{
         this.setState({
            isVisible:true
         })
     }
     
    
   
     otpVerify=()=>{
        const {beneficiary}=this.props
       
       
        const details= {
            "ifscCode":"",
            "membarId":"",
            "benificiaryAccNo":"",
            "benificiaryName":"",
            "phoneNo":"",
            "email":"",
            "isPrimaryAccunt":"true",
            "isWithInCoop":"true",
            refNo:beneficiary.createOtpBeneficiary.refNo,
        
            otp:this.state.mobileOtp,
            "accountType":"",
            "state":""
            }

             this.props.addBeneficiaryDetails(details).then(()=>{
                const {beneficiary}=this.props
                if(beneficiary.beneficiaryDetails.code==="200"){
                    alert('ss')
                     
                    this.props.navigation.navigate('Beneficiary ')
                }
             })

     }
    
 handleSubmit=()=>{
    const{beneficiary}=this.props
    const member={
membarId:beneficiary.memberDetials.customerId,
"benificiaryAccNo":"",
"benificiaryName":"",
"phoneNo":"",
"isPrimaryAccunt":"true",
"isWithInCoop":"true",
"state":"",
"accountType":""
    }
console.log(member)
     this.props.createOtpBeneficiary(member).then(()=>{
         if(beneficiary.createBeneficiary.code==="200"){
           
             this.setState({
                 isVisible:true
             })
           
         }else{
             alert('fail')
         }
     })


 }

 otpResend=()=>{
    const otp=
  {
    // membarId:beneficiary.memberDetials.customerId,
    "membarId":'1278',
    "benificiaryAccNo":"",
    "benificiaryName":"",
    "phoneNo":"",
    "isPrimaryAccunt":"true",
    "isWithInCoop":"true",
    "state":"",
    "accountType":""
    }
     this.props.resendOtpBeneficiary(otp)

 }
    render() {
         const{beneficiary}=this.props
          console.log(beneficiary.createBeneficiary)
          const{mobileOtp}=this.state
        return (
            <Container>
                <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.navigate('Login')} />
                        </Button>
                    </Left>

 

                    <Body style={{ alignItems: 'flex-start', marginLeft: 40 }} >
                        <Title style={styles.heddertext}>Confirm details</Title>
                    </Body>
                </Header>

 

            
              
                        <Text style={styles.textstyle}>Please confirm the beneficiary details</Text>
        {/* <Text style={styles.namestyle}>{beneficiary.memberDetails.name}</Text> */}
        {/* <Text style={styles.statestyle} >Phone :{beneficiary.memberDetails.mobileNo}</Text> */}
                        <Text style={styles.statestyle} >State:Maharashtra(Ayshwarya Syndicate Credit Co-OPerative Limited)</Text>
                        <Text style={styles.notetext}>Please ensure you enter the correct account details.Spark is not responsible for incorrect account details</Text>
                     
                
   
 
                <Button block warning  
                   onPress={this.handleSubmit}
                style={styles.SubmitButton}  > 
                        <Text  >Submit</Text></Button>
 
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
  <Text style={styles.cancel} onPress={this.toggleclose}>Cancel</Text>
  <TouchableOpacity>

    <Text 
    
    style={styles.otpSubmit}
    onPress={this.otpVerify}
   
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

const mapStateToProps = state => ({
    beneficiary: state.beneficiary,
    error: state.error

})

export default connect(mapStateToProps, { resendOtpBeneficiary,addBeneficiaryDetails,createOtpBeneficiary})(Confirmationdetails)



const styles = StyleSheet.create({
    heddertext: {
        fontSize: 20,
    },

 

    textstyle: {
        marginTop: 10,
        marginLeft: 15,
        fontSize: 14,

 

    },
    SubmitButton: {
        marginLeft: 16,
        width: 382,
        marginRight: 16,

        marginBottom:32,
    },
    notetext: {
        marginTop: 300,
        marginLeft: 16,
        width: 328,
    },

 

    statestyle: {
        marginLeft: 78,
        width: 266,
        width: 266,
        opacity: 0.5,

 

    },
    namestyle: {
        marginLeft: 78,
        fontSize: 16,
        height: 22,

 

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

 

})