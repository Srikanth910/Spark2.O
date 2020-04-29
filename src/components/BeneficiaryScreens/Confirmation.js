import React, { Component } from 'react'
import { Container, Header, Text, Tab, Button, Body, Title, Left, Icon } from 'native-base'
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
 import {createOtpBeneficiary} from '../../Redux/actions/Beneficiary'

class Confirmationdetails extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
            isVisible:false,
            mobileOtp:''
        }
    }
    
    toggleClose = () => {
        this.setState({
            isVisible: false

        })
       
    }
     toggleopen=()=>{
         this.setState({
            isVisible:true
         })
     }
    handleSubmit=()=>{
    const{beneficiary}=this.props
     const member={
         	
	
	
membarId:beneficiary.memberDetails.customerId,
"benificiaryAccNo":"",
"benificiaryName":"",
phoneNo:beneficiary.memberDetails.mobileNo,
"isPrimaryAccunt":"true",
"isWithInCoop":"true",
"state":"",
"accountType":""
     }

      this.props.createOtpBeneficiary(member,()=>{
          if(beneficiary.memberDetails.code==="200"){
               this.setState({
                   isVisible:true
               })
          }
      })

    }


     resendOtp=()=>{

     }
     otpVerify=()=>{
       
       
        const beneficiary= {
            "ifscCode":"",
            membarId:beneficiary.memberDetails.customerId,
            "benificiaryAccNo":"",
            "benificiaryName":"",
            phoneNo:beneficiary.memberDetails.mobileNo,
            email:beneficiary.memberDetails.emailID,
            "isPrimaryAccunt":true,
            "isWithInCoop":true,
            refNo:beneficiary.createBeneficiary.refNo,
        
            otp:this.state.mobileOtp,
            "accountType":"",
            "state":""
            }

             this.props.createOtpBeneficiary(beneficiary,()=>{
                const {beneficiary}=this.props
                if(beneficiary.createBeneficiary.code==="200"){
                    this.props.navigation.navigate('Beneficiary ')
                }
             })

     }
    render() {
         const{beneficiary}=this.props
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

 

                <Tab tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }} >
                    <ScrollView>
                        <Text style={styles.textstyle}>Please confirm the beneficiary details</Text>
        <Text style={styles.namestyle}>{beneficiary.memberDetails.name}</Text>
        <Text style={styles.statestyle} >Phone :{beneficiary.memberDetails.mobileNo}</Text>
                        <Text style={styles.statestyle} >State:Maharashtra(Ayshwarya Syndicate Credit Co-OPerative Limited)</Text>
                        <Text style={styles.notetext}>Please ensure you enter the correct account details.Spark is not responsible for incorrect account details</Text>
                        
                        <Button block warning style={styles.SubmitButton} onPress={this.handleSubmit}     >
                        <Text >Submit</Text></Button>
                    </ScrollView>

 

                </Tab>
            </Container>

 


        )
    }
}

// const mapStateToProps = state => ({
//     beneficiary: state.beneficiary,
//     error: state.error

// })

// export default connect(mapStateToProps, { createOtpBeneficiary})(Confirmationdetails)



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

 

    }

 

})