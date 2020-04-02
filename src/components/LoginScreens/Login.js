import React, { Component } from 'react'

import { Container, Header, Tabs,Text, Tab,TabHeading,Item,Input,Button,Body, View } from 'native-base'
import {StyleSheet} from 'react-native'
export default class  Login extends Component {
    render() {
        return (
    <Container>
              <Header style={{backgroundColor:"#1b1464" ,height:120}}>
                  
    
              <Body>
                <Text style={styles.headerText}>
                 Watch your wealth grow
                </Text>
                </Body>
                  </Header>       
                    <Tabs
                      tabBarUnderlineStyle = {{backgroundColor:'#f3a549'}}
                    >
          <Tab heading={ <TabHeading  style={styles.tabColor}><Text>QUICK ACCESS</Text></TabHeading>}>
              <Text  style={styles.textData}>Enter MPIN</Text>
              <Item regular  style={styles.textInput}>
            <Input placeholder='Regular Textbox' />

            
          </Item>
          <Text style={styles.forgetText} >Forgot MPIN</Text>
        
          <Button block warning  style={styles.LoginButton}>
            <Text>LOGIN</Text>
          </Button>
          </Tab>
          <Tab heading={ <TabHeading  style={styles.tabColor}><Text>LOGIN</Text></TabHeading>}>
           
          </Tab>
         
         
        </Tabs> 
       </Container>
              
          
        )
    }
}


 const styles= StyleSheet.create({
      headerText:{
          color:'white'
      },
    forgetText:{
        marginLeft:300,

        marginTop:10,
        color:"#f3a549",
       
    },
    tabColor:{
        backgroundColor:"#1b1464"
    },
     
     textInput:{
         marginTop:20,
         width:328,
         marginLeft:40,
        
       
     },
      textData:{
          marginTop:10,
          marginLeft:20

      },
      LoginButton:{
          marginTop:250,
        marginLeft:30,
            width:328
      }
 })