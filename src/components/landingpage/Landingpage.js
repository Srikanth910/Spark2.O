import React, { Component } from 'react'
import { Container, ListItem ,Button,Text, Item, Header, Content, View, } from 'native-base'
 import{StyleSheet, StatusBar, ImageBackground, Image} from 'react-native'

export default class Landingpage extends Component {
  

    render() {
        return (
           <Container style={styles.Container}>
               
            
               <ImageBackground  source={require('../../images/signupimges/signUp_bg.png')} 
                resizeMode={'cover'}
               style={styles.Container}> 

               
               <StatusBar hidden
                />
      <Content padder>
               <View style={{justifyContent:'flex-end'}}>
               
               <Image
                source={require('../../images/signupimges/sign_img.png')}  style={styles.signImge}/>
                            <View>                                                                                                                
                <Text style={styles.securetext}>
                    Secure <Text style={styles.securetext_1}>Digital Savings Account </Text>
                    <Text style={styles.securetext}>
                    Paying you <Text style={styles.securetext_1}>Interest </Text>
                    </Text>
                    </Text>
                    <Text style={styles.securetext}>
                     <Text style={styles.securetext_1}>every day</Text>
                    </Text>
                   
                    </View>         
                     </View>
                     </Content>

                     <ListItem style={styles.btnGroup}>
               <Button warning style={styles.btnSignup}
             onPress={() => this.props.navigation.navigate('Signup')}
               ><Text > Sign UP </Text></Button>
               <Button bordered warning style={styles.btnLogin}
                   onPress={() => this.props.navigation.navigate('Login')}
                >
            <Text>Login</Text>
          </Button>
               </ListItem> 
               </ImageBackground>
               {/* <Header style={styles.Container}>
               <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
               </Header>
               <Content>

               </Content>

               <ListItem style={styles.btnGroup}>
               <Button warning style={styles.btnSignup}
             onPress={() => this.props.navigation.navigate('Signup')}
               ><Text > SING UP </Text></Button>
               <Button bordered warning style={styles.btnLogin}
                   onPress={() => this.props.navigation.navigate('Login')}
                >
            <Text>LOGIN</Text>
          </Button>
               </ListItem> */}
           </Container>
        )
    }
}

  const styles= StyleSheet.create({
       Container:{
           flex: 1,
        width:'100%'


        //    backgroundColor:"#1b1464"
       },
       btnSignup:{
           width:145,
           height:40,
           justifyContent:'center'
        
       },
       btnLogin:{
        width:145,
        height:40,
        justifyContent:'center',
        borderColor: '#ffffff',
    }
    ,
    btnGroup:{
        borderColor: 'transparent',
        justifyContent:'space-around',

        // paddingLeft: 10,\


      
        marginBottom:16

        
             
    },
    signImge:{
        width:'100%',
        height:419,
        marginRight:16,
        marginLeft:16,
        marginTop:40
    },
    securetext:{
        // height:75,
        fontFamily:'Nunito',
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        letterSpacing:2,
        fontStyle:'normal',
        fontWeight:"bold",
        //   fontWeight:"900"
        

    



    },
    securetext_1:{
        height:75,
        fontFamily:'Nunito',
        fontSize:20,
        color:'#f69829',

        fontStyle:'normal'
    }
  })
