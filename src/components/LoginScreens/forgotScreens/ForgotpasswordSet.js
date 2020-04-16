import React, { Component } from 'react'
import { Container, Text, Header, Button, Icon, Body, Left, Right, Title, Content, List, ListItem, Item, Input } from 'native-base'
import { StyleSheet, Image ,StatusBar,ImageBackground, View} from 'react-native'
import Dialog from "react-native-dialog";
import { connect } from 'react-redux';

 import {Createpassword} from '../../../Redux/actions/authAction'
import validatePassword from '../Validation/validatePassword';
class ForgotpasswordSet extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              newPassword:'',
              confirmPassword:'',
               errorsData:{}
         }
     }

     Dialogclose=()=>{
        this.setState({
          visible:false
        })
         this.props.navigation.navigate('Login')
      }
    
    
     
 validpassword(){
      const {errorsData, isValid} =validatePassword(this.state)
       if(!isValid){
           this.setState({errorsData})
       }
        return isValid
 }
    
 passwordSubmit=()=>{
  
     if(this.validpassword()){

         this.setState({errorsData:{}})
      const{auth} =this.props

      const passwords={
        custId:auth.custId,
        password:this.state.newPassword
        
      } 
       
       console.log(passwords)
       this.props.Createpassword(passwords,()=>{
        this.setState({
            visible:true
          })
       
       })
     }

 }

     
    render() {
         const {errorsData}=this.state
        //  console.log(this.state.errorsData)
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
                    <Body style={{ alignItems:'flex-start' }} >
                        <Title style={styles.mpintext}  >Forgot Password</Title>
                    </Body>
                   

                </Header>

                <Content >

                    <Image style={styles.image}
                        source={require('../../../images/lock_1.png')} />
                    <Text style={styles.maintext}   > Set a strong memorable password</Text>

                    <Item style={styles.doted}   >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least 8 Characters (no spaces)  </Text>

                    </Item>
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least 8 Characters (no spaces)  </Text>

                    </Item>
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least  1 alphabet and 1number  </Text>

                    </Item>
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least  1 number  </Text>

                    </Item >
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> No  special characters  </Text>

                    </Item>
                   <View style={styles.groupFields}>
                    <Text style={styles.mobileinput}>Enternew password</Text>
                    <Item regular style={styles.loginInput}>
                        <Input placeholder='' style={styles.input}
                                 value={this.state.newPassword}
                                 onChangeText={passwordText => this.setState({ newPassword: passwordText })}
                        />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>

           <Text style={styles.error}>{errorsData.newPassword}</Text>

                    <Text style={styles.mobileinput} >Enter  confirm password</Text>

                    <Item regular style={styles.loginInput}>
                        {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                        <Input placeholder='' style={styles.input}
                          value={this.state.confirmPassword}
                          onChangeText={passwordText => this.setState({ confirmPassword: passwordText })}
                         />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>
                    <Text style={styles.error}>{errorsData.confirmPassword}</Text>
                    </View>
                    <View>
        <Dialog.Container visible={this.state.visible} >
          <Dialog.Title>New password Set</Dialog.Title>
          <Dialog.Description>
            <Text style={styles.Dialogtext} >You have successfully Set a
            new password</Text>
            <Text>
              
            </Text>
          </Dialog.Description>
          
          <Dialog.Button label="ok" color="#f7931e"  onPress={this.Dialogclose}
          />
        </Dialog.Container>
      </View>

                </Content>
                <Button block warning style={styles.btnSubmit}
                 onPress={this.passwordSubmit}
                >
                    <Text style={styles.submit}  
                    
                    >Submit</Text>
                </Button>

            </Container>
        )
    }
}
const mapStateToProps=(state)=>({
    auth:state.auth.userotpdetails
  })
 export default connect(mapStateToProps, {Createpassword})(ForgotpasswordSet)

const styles = StyleSheet.create({
    Container: {
    },
    mpintext: {
        // width: 114,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: 'normal',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',


    },
    doted: {
        borderColor: 'transparent',
        marginLeft: 20

    },
    groupFields:{
        marginTop:15

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
    loginInput: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
    data: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#f7931e'
    },


    text: {

        height: 22,
        textAlign: 'left',
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#474a4f',
        marginLeft: 5

    },
    maintext: {

        marginTop: 20,
        height: 40,
        textAlign: 'left',
        fontFamily: 'Nunito',
        fontSize: 16,
        marginLeft: 15,
        color: '#474a4f'

    },
    mobileinput: {
        // marginTop: 20,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,
    },
    btnSubmit: {
        marginBottom: 32,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
        marginTop:50
    },

    image: {
        width: 92,
        height: 38,
        alignSelf: 'center',
        marginTop: 30


    },
    error:{
        color:'red',
         fontSize:14,
         marginLeft:15
    }

})

