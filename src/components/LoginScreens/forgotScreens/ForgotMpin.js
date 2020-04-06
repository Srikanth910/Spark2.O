import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Item, Input, Button, Picker, Icon, View, Left, Right, Title } from "native-base";
import { StyleSheet, StatusBar } from 'react-native'

export default class ForgotMpin extends Component {
   

    render() {
        return (

            <Container style={styles.Container}>
                <StatusBar hidden />
                <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>


                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'
                             onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </Button>
                    </Left>
                    <Body style={{alignItems:'flex-end' }} >
                        <Title style={styles.mpintext}  >Forgot MPIN</Title>
                    </Body>
                    <Right />

                </Header>

                <Content >

                    <Text style={styles.loginText}>Enter MPIN</Text>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Enter mpin' style={styles.input} />
                    </Item>

                    <Text style={styles.loginText}> Confirm new MPIN</Text>
                    <Item regular style={styles.textInput}>
                        <Input placeholder='Enter mpin' style={styles.input} />
                    </Item>


                </Content>


                <Button block warning style={styles.btnSubmit} >
                    <Text style={styles.submit}>Submit</Text>
                </Button>

            </Container>


        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
   
    textInput: {
        marginTop: 10,
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        backgroundColor: '#e1e4eb',
    },

    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,
    },
   
    loginText: {
        paddingTop: 20,
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
    }

})