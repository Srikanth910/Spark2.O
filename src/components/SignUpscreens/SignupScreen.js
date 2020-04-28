import React, { Component } from 'react'
import { Container, Header, Left, Right, Button,Icon, Input,Text, Content, Form, Item,  } from 'native-base'
 import {StyleSheet, StatusBar, View, TouchableOpacity,Image} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
    

export default class Signup extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            activeIndex:0
         }
     }
     
    render() {
        return (
           <Container style={styles.Container}>
                <Header style={{ backgroundColor: "#1b1464", height: 160 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                
                        <Left style={{ marginLeft:10, marginTop: 20 }}>

                            <Button transparent  >
                                <Icon name='arrow-back'
                                    onPress={() => this.props.navigation.navigate('Login')}
                                />
                            </Button>
                             <Text style={styles.headerText}>
                               Welcome
                          </Text>

                        </Left>


                        <Right />
                    
                </Header>
                <Content style={styles.Content}>
                         
                          <View>

                   
                            <Text style={styles.loginText}>Email</Text>
                            <Item regular style={styles.loginInput}>
                            <Input placeholder='eg. vijay@emails.com' style={styles.input} value={this.state.mobile}
                                    value={this.state.mobile}
                                    onChangeText={editedText =>
                                        this.setState({ mobile: editedText })
                                    }

                                />
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


                            <Item regular style={styles.dropInput}
                            onPress={() => this.RBSheet.open()}
                            >
                           {/* <Text style={{marginLeft: 3,}}>{this.state.Statevalue}</Text> */}
                            <Icon name='ios-arrow-down' 
                             style={styles.arrowicon}
                             
                            
                            
                            />
                            
                             <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={220}
          duration={250}
          customStyles={{
            container: {
              justifyContent:"flex-start",
              alignItems: "flex-start"
            }
          }}
        >
            <Text style={styles.selectState}>
            Select state
            </Text>
            
            <View>
            <TouchableOpacity onPress={()=>this.handleState('karnataka', 1)}
                                style={this.state.activeIndex === 1 ? styles.btnActive : styles.btn}>
                <Text style={styles.state}>Karnataka</Text>
                <Text style={styles.Statesubtext}>Ayshwarya Syndicate Souharda Credit Co-operative Limited</Text></TouchableOpacity>
            </View>
            <View>
                      <TouchableOpacity onPress= {()=>this.handleState('maharashtra',2)}
                                                      style={this.state.activeIndex === 2 ? styles.btnActive : styles.btn}
                      >
            <Text style={styles.state}>Maharashtra</Text>
            <Text style={styles.Statesubtext}>Ayshwarya Syndicate Souharda Credit Co-operative Limited</Text>
</TouchableOpacity>
            </View>
      
        </RBSheet>
    
                            </Item>

                


                    </View>


                   
                </Content> 
                <View style={styles.bottom}>
                    <Text style={styles.bottomtext} >By clicking on Proceed, you state that you are 18 years old and agree to our
                    <Text  style={styles.bottomColor}> Terms and Conditions </Text>and <Text style={styles.bottomColor}>Privacy Policy.</Text></Text>
                <Button block warning style={styles.btnSubmit} 
                  onPress={()=>this.props.navigation.navigate('Quicklogin')}
                 >
                    <Text style={styles.submit}>Submit</Text>
                </Button>
                    < Image source={require('../../images/signupimges/grp_img.png')} style={styles.bottomImage}/>
                </View>
              

            </Container>
        )
    }
}



const  styles= StyleSheet.create({
     Container:{
          flex: 1,
         backgroundColor:'#f5f5ff',
         width:'100%',
         height:'100%'
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
    Content:{
        backgroundColor:'#ffffff',
        width:'100%',
        height:464,
        // marginTop:50
    },
    btnSubmit: {
      
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
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
    btnbottom: {

        flex: 1,
        // justifyContent: 'flex-end',
        justifyContent:'flex-end',
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        marginTop:95
        // alignContent:'center'

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
        marginRight: 13,
        height: 22,
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
    bottomColor: {
        color: '#f7931e'

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


    dropInput: {
        backgroundColor: '#e1e4eb',
        marginLeft: 16,
        marginRight: 15,
        borderRadius: 5,
        height: 40,
        marginTop: 10,
 justifyContent:"space-between"

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
 
        height: 33,
        marginLeft: 16,
    
        marginRight:16,
        fontSize:12,
        fontFamily:'Nunito'


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
    bottomImage:{
        height:70,
    
        alignSelf:'center',
        marginTop:20
        
    },
    bottom:{
        flex:1,
         justifyContent:"flex-end",
        marginBottom:16
    }

})
