import React, { Component } from 'react'

import { WebView } from 'react-native-webview';
import { Container, Header, Icon, Text, Content, Left, Body, Title } from 'native-base';
import { StatusBar, View  ,Image, StyleSheet} from 'react-native';
export default class PrivacyPolicy extends Component {
    render() {
        return (


<Container>
<Header style={{ backgroundColor: "#1b1464", height: 90 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                   
                   <Left>
                    <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Login')}
              style={{color: '#ffffff', marginLeft: 16,}}
            />


          </Left>
          <Body>
              <Title style={styles.headerText}>Privacy Policy</Title>
          </Body>

                </Header>

             
                <WebView source={{ uri: 'https://assccl.com/privacy-policy/' }} />
           
               
</Container>

        )
        
        
        
        
        // 
        
    }
}


const styles = StyleSheet.create({
    headerText: {
      fontFamily: 'Nunito',
      fontSize: 20,
      color: '#ffffff',
       alignItems:'center',
        marginLeft: 16,
    },

})