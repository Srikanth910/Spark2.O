import React, { Component } from 'react'
import { Container, ListItem ,Button,Text, Item, Header, Content, View, } from 'native-base'
 import{StyleSheet, StatusBar, ImageBackground, Image} from 'react-native'
 import DeviceInfo from 'react-native-device-info';
  import{getUniqueID} from 'react-native-device-info'
export default class FixedDeposite extends Component {
  

    render() {
        return (
           <Container style={styles.Container}>
               
            
               <ImageBackground  source={require('../../images/signupimges/money_bg.png')} 
                resizeMode={'cover'}
               style={styles.Container}> 

               
               <StatusBar hidden
                />
      <Content padder>
               <View >
               
               <Image
                source={require('../../images/signupimges/fd_img.png')}  style={styles.signImge}/>
                            <View>             
                                                                                                                            
                <Text style={styles.securetext}>
                High return 
                   
                    </Text>
                    <Text style={styles.securetext_1}>Fixed and Recurring  <Text style={styles.securetext}> Deposits </Text></Text>

                     <Text style={styles.securetext_1}> <Text style={styles.securetext}>with </Text> monthly interest payout</Text>
                    
                   
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
       
        marginTop:40
    },
    securetext:{
        // height:75,
        fontFamily:'Nunito',
        fontSize:20,
      
       color:"#ffffff",
        textAlign:'center',
        letterSpacing:2,
        fontStyle:'normal',
         fontWeight:'normal'
        
        //   fontWeight:"900"
        
    },
    securetext_1:{
        // height:75,
        fontFamily:'Nunito',
        fontSize:20,
        color:'#f69829',
         fontWeight:'bold',

   textAlign:'center',
        fontStyle:'normal',
        letterSpacing:2
    }
  })
