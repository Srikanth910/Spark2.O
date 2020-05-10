import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Button, Icon, ListItem, View, Left, Right, Title } from "native-base";
import { StyleSheet, StatusBar, Image } from 'react-native';
import Modal from 'react-native-modal';


export default class Mybank_Confirm extends Component {
    To_myBankAcc
    render() {

        return (
            <Container style={styles.Container}>
                <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.navigate('')}
                            />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'flex-start', marginLeft: 40 }} >
                        <Title style={styles.mpintext}> My Bank Account</Title>
                    </Body>
                    <Right />
                </Header>


                <Content >


                    <View style={styles.rectangle}>
                        <View style={styles.reactangleText}>

                            <Text style={styles.loaded}>Please confirm the transaction details below.</Text>
                            <Text style={styles.loaded}>IFSC code</Text>
                            <Text style={styles.loaded}>HDFC000054</Text>
                            <Text style={styles.acountnum}>Account number</Text>
                            <Text style={styles.loaded}>0000345310094587</Text>

                        </View>


                    </View>

                    <View>

                        <Image source={require('../../images/Transfer/ToMy_Bank.png')} style={{ width: 271, height: 250, alignSelf: 'center', }} />
                    </View>



                </Content>
{/* 
                <View>
                    <Modal style={{ width: 280, maxHeight: 200, alignSelf: 'center', marginTop: 200 }} isVisible={this.state.isVisible} >
                        <View style={{ backgroundColor: 'white' }}>

                            <Text style={styles.otp}>Enter OTP</Text>
                            <Text style={styles.otpText}> Enter the 5-digit one time password (OTP)</Text>
                            <View style={{ alignSelf: 'center' }}>
                                <SmoothPinCodeInput
                                    codeLength={5}
                                    cellStyle={{
                                        borderBottomWidth: 1,
                                        borderColor: 'gray',
                                        width: 20,

                                    }}
                                    cellStyleFocused={{
                                        borderColor: 'black',
                                    }}
                                    value={password}
                                    onTextChange={password => this.setState({ password })}
                                />
                            </View>
                            <ListItem style={{ justifyContent: 'space-around', marginTop: 10 }}>
                                <Text>2:00.0</Text>
                                <Text style={styles.resendOtp} onPress={this.redatasubmit}>Resend OTP</Text>
                            </ListItem>
                            <ListItem style={{ justifyContent: 'flex-end' }} >
                                <Text style={styles.cancel} onPress={this.toggleClose}>Cancel</Text>
                                <Text style={styles.otpSubmit}
                                    onPress={this.changepage}
                                >Submit</Text>
                            </ListItem>

                        </View>
                    </Modal>
                </View> */}


                <Button block warning style={styles.btnSubmit}
 onPress={()=>this.props.navigation.navigate('To_myBankAcc')}
                    >
                    <Text style={styles.submit}>Confirm</Text>
                </Button>


            </Container>


        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

    listview: {
        borderColor: 'transparent',
        height: 15
    },
    iconText: {
        fontFamily: 'Nunito',
        fontSize: 12,
        color: '#474a4f',
        textAlign: 'center',

    },
    rectangle: {

        height: 200,
        marginTop: 10,


    },
    reactangleText: {
        marginLeft: 20,
        marginTop: 15,


    },
    billIcon: {
        height: 95,
        width: 90,
        marginTop: 5,
        alignSelf: 'center'
    },

    savingData: {

        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#aaadb2',
        marginLeft: 16,
        fontWeight: 'normal',

    },
    loaded: {

        height: 19,
        marginTop: 10,
        fontFamily: 'Nunito',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#4a4a4a'
    },


    acountnum: {

        marginTop: 20,
        fontFamily: 'Nunito',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#4a4a4a'

    },
    text: {
        height: 36,
        fontFamily: 'Nunito',
        fontSize: 16,
        marginRight: 16,
        marginLeft: 16,
        fontWeight: 'normal',

    },
    mpintext: {
        width: 200,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: 'normal',
        alignItems: 'center',
    },
    textInput: {
        marginTop: 10,
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        backgroundColor: '#e1e4eb',
    },


    btnSubmit: {
        marginBottom: 32,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
        marginTop: 50
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

    listview: {
        borderColor: 'transparent',
        height: 15,
        marginLeft: 16


    },

    Listtext: {
        height: 22,
        fontSize: 14,
        textAlign: 'left',
        color: '#474a4f',



    },

    money: {
        marginLeft: 10,
        fontSize: 20
    }
})