
import React, { Component } from 'react'
import { Container, Header, Tabs, Text, Tab,Item, Input, Button, Body, View, Title, Left, Icon,ListItem } from 'native-base'
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


export default class Otherbank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            radioBtnOne: false,
            radioBtnTwo: false,
            password: '',
        };
    }
    toggelopen = () => {
        this.setState({
            ismodelopen: !this.state.ismodelopen
        })
         this.props.navigation.navigate('Login')
    }
    changepage = () => {
        this.setState({
            ismodelopen: false
        })
        this.props.navigation.navigate('passwordSet')
    }
    render() {
        const { password } = this.state
        return (
            <Container>
                <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <Left>
                        <Button transparent>
                            <Icon name='close'
                                onPress={() => this.props.navigation.navigate('Login')} />
                        </Button>
                    </Left>

                    <Body style={{ alignItems: 'flex-start', marginLeft: 40 }} >
                        <Title style={styles.heddertext}>Add Beneficiary</Title>
                    </Body>
                </Header>

                <Tab tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }} >
                    <ScrollView>
                        <Text style={styles.textstyle}>Name</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Name' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Account no.</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Account number' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Re-Enter Account no.</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Account number' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>IFSC code</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='IFSC code' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Email</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Email' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Phone</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Phone' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Please ensure you enter the correct account details.Spark is not responsible for incorrect account details</Text>

                        <View>
                            <Modal style={{ width: 280, maxHeight: 200, alignSelf: 'center', marginTop: 200 }} isVisible={this.state.ismodelopen} >
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
                                        <Text style={styles.resendOtp}>Resend OTP</Text>
                                    </ListItem>
                                    <ListItem style={{ justifyContent: 'flex-end' }} >
                                        <Text style={styles.cancel} onPress={this.toggelopen}>Cancel</Text>
                                        <Text style={styles.otpSubmit}
                                            onPress={this.changepage}
                                        >Submit</Text>
                                    </ListItem>
                                </View>
                            </Modal>
                        </View>

                        <Button block warning style={styles.SubmitButton} onPress={this.toggelopen}     >
                            <Text>Submit</Text>

                        </Button>
                    </ScrollView>

                </Tab>
            </Container>


        )
    }
}


const styles = StyleSheet.create({

    textstyle: {
        marginTop: 10,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,

    },

    Inputstyle: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,
    },




    headerText: {
        color: 'white'
    },

    // forgetText: {
    //     marginLeft: 300,

    //     marginTop: 10,
    //     color: "#f3a549",

    // },
    tabColor: {
        backgroundColor: "#1b1464",

    },

    textInput: {
        marginTop: 20,
        width: 328,
        marginLeft: 40,


    },
    // textData: {
    //     marginTop: 10,
    //     marginLeft: 20

    // },

    SubmitButton: {
        marginTop: 5,
        marginLeft: 16,
        width: 382,
    },

    cancel: {
        width: 73,
        height: 39,
        fontFamily: 'Nunito',
        color: '#999999',
        textAlign: 'left'

    },
    otpSubmit: {
        width: 73,
        height: 39,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f7931e',
        textAlign: 'right'
    },


    resendOtp: {
        width: 91,
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e',
        textAlign: 'right',


    },
    otp: {

        width: 94,
        height: 27,
        marginTop: 15,
        color: '#000000',
        fontSize: 20,
        marginLeft: 15,
        fontWeight: "bold"


    },
    otpText: {
        // width:228,
        // height:82,
        marginLeft: 15,
        fontFamily: 'Nunito',
        fontSize: 16,
        marginTop: 10,
        color: '#000000'

    },

})




