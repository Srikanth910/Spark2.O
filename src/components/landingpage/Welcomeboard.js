

import React, { Component } from 'react'
import { Container, ListItem ,Button,Text, Item, Header, Content, View, } from 'native-base'
 import{StyleSheet, StatusBar, ImageBackground, Image} from 'react-native'

export default class Welcomeboard extends Component {
  

    render() {
        return (
           <Container style={styles.Container}>
               
        
               <ImageBackground  source={require('../../images/signupimges/money_bg.png')} 
                resizeMode={'cover'}
               style={styles.Container}> 

               
               
      <Content >
               <View >
                   <View style={styles.welcomimg}>
                   <Image source={require('../../images/signupimges/spark_img.png')  } style={styles.spark} />
 
               <Image source={require('../../images/signupimges/welcome_img.png') } style={styles.multiimage}  />
                  
      
                  <Text style={styles.welcometext} >
                      Welcome aboard
                  </Text>
            
               </View>
               < Image
                source={require('../../images/signupimges/bg_star.png')}
            style={styles.starimg}
               
                />
                  
                



                        
                     </View>
                     </Content>

                     <View >
                <Button block warning style={styles.btnSubmit} 
                  onPress={()=>this.props.navigation.navigate('Home')}
                 >
                    <Text style={styles.submit}>Continue</Text>
                </Button>
                </View>
               </ImageBackground>
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
        marginBottom:16

        
             
    },
    btnSubmit: {
        marginBottom: 32,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
        // position:'fixed'
      

    },
    signImge:{
        width:'100%',
        height:450,
       
      

    },
    securetext:{
        // height:75,
        fontFamily:'Nunito',
        fontSize:20,
      
        color:'#f69829',
        textAlign:'center',
        letterSpacing:2,
        fontStyle:'normal',
         fontWeight:'bold'
        
        //   fontWeight:"900"
        
    },
    securetext_1:{
        // height:75,
        fontFamily:'Nunito',
        fontSize:20,
        color:'#ffffff',
      

   textAlign:'center',
        fontStyle:'normal',
        letterSpacing:2
    },
    welcomimg:{
        position:'absolute',
       alignSelf:'center',
     marginTop: 110,
     width:'100%'
    
  
       
       
    },
    multiimage:{
        height:187,
    marginTop: 50,
    alignSelf:'center',
    justifyContent:'space-around'
    },
    spark:{
        alignSelf:'center',
        height:136,
        width:133,
        justifyContent:'space-around'
    },
    starimg:{
       alignSelf:'center',
       marginTop: 110,

       height:450
    
        
    
        
    },
    welcometext:{
       
        height:34,
        fontSize:25,
        fontWeight:'bold',
        color:'#ffffff',
        fontFamily:'Nunito',
        textAlign:'center',
        marginTop: 10,

        letterSpacing:1


    }
  })
