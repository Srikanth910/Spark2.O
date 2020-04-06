import React, { Component } from 'react'
import { Container, Button, Text } from 'native-base'
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default  class LoginButton extends Component {

     render(){
    return (
        <Container style={styles.container} >
            <Text style={styles.bottomtext}>
                By logging in , you agree to our
           <Text style={styles.bottomColor}> Terms And conditon  </Text> And  
         <Text style={styles.bottomColor}> Privacy Policy</Text>  </Text>
            <Button block warning 
             onPress={() =>this.props.navigation.navigate('Home')}
            >
                <Text>LOGIN</Text>
            </Button>
       
        </Container>
    )
}
}

const styles  =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 17,
        marginLeft: 16,
        marginRight: 16
    },
    bottomtext: {
        color: "#999999",
        width: 329,
        height: 52.7,
        marginLeft: 16,
        paddingBottom: 10,


    },
    bottomColor: {
        color: '#f7931e'

    },

})