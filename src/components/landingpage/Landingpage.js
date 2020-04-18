import React, { Component } from 'react'
import { Container, ListItem ,Button,Text, Item, Header, Content} from 'native-base'
 import{StyleSheet, StatusBar} from 'react-native'

export default class Landingpage extends Component {
    render() {
        return (
           <Container style={styles.Container}>
               <Header style={styles.Container}>
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
               </ListItem>
           </Container>
        )
    }
}

  const styles= StyleSheet.create({
       Container:{
           flex: 1,
           backgroundColor:"#1b1464"
       },
       btnSignup:{
           width:150,
           height:50,
           justifyContent:'center'
        
       },
       btnLogin:{
        width:150,
        height:50,
        justifyContent:'center',
        borderColor: '#ffffff',
    }
    ,
    btnGroup:{
        borderColor: 'transparent',
        justifyContent:'space-around',
        marginBottom:16

        
             
    }
  })
