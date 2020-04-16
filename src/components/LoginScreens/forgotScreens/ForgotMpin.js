import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Item, Input, Button, Picker, Icon, View, Left, Right, Title } from "native-base";
import { StyleSheet, StatusBar } from 'react-native'
import { connect } from "react-redux";
import{updateMPIN} from '../../../Redux/actions/authAction'
import validatePassword from "../Validation/validatePassword";
import validateMpin from "../Validation/validateMpin";
class ForgotMpin extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              confirmMpin:'',
              newMpin:'',
              errorsData:{},

         }
     }

     validMpin(){
        const {errorsData, isValid} =validateMpin(this.state)
         if(!isValid){
             this.setState({errorsData})
         }
          return isValid
   }
      
     updateMpin=()=>{

        if(this.validMpin()){
          const{auth} =this.props
         const mpinData={
            custId: auth.custId,
            mpinId:this.state.newMpin  
         }
          this.props.updateMPIN(mpinData,()=>{
               this.props.navigation.navigate('Login')

            })
        }
     }
    render() {
         const{errorsData}=this.state
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
                    <Body style={{alignItems:'flex-start' }} >
                        <Title style={styles.mpintext}  >Forgot MPIN</Title>
                    </Body>
                   

                </Header>

                <Content  style={styles.groupField}>

                    <Text style={styles.loginText}>Enter MPIN</Text>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Enter mpin' style={styles.input} 
                value={this.state.newMpin}
                onChangeText={mpinText =>
                    this.setState({ newMpin: mpinText })
                }
                                        />
                    </Item>
            <Text style={styles.error}>{errorsData.newMpin}</Text>

                    <Text style={styles.loginText}> Confirm new MPIN</Text>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Enter mpin' style={styles.input}
                        
                        value={this.state.confirmMpin}
                        onChangeText={mpinText =>
                            this.setState({ confirmMpin: mpinText })
                        }
                        />
                    </Item>
                    <Text style={styles.error}>{errorsData.confirmMpin}</Text>


                </Content>


                <Button block warning style={styles.btnSubmit} 
                onPress={this.updateMpin}
                >
                    <Text style={styles.submit}
                      
                    >Submit</Text>
                </Button>

            </Container>


        );
    }
}
 const  mapStateToProps=state=>({
    auth:state.auth.mpinOtp
 })

 export default  connect(mapStateToProps, {updateMPIN})(ForgotMpin)

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
   
    textInput: {
        // marginTop: 10,
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        backgroundColor: '#e1e4eb',
    },
    groupField:{
  marginTop:20
    },

    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,
    },
   
    loginText: {
        // paddingTop: 20,
        marginTop:10,
        marginLeft: 15,
         color:'#474a4f',
          fontSize:14,

    },
    btnSubmit: {
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',

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
     error:{
           color:'red',
            fontSize:14,
            marginLeft:15

     }

})