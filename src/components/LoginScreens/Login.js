import React, { Component } from 'react'

import { Container, Header, Tabs, Text, Tab, TabHeading, Picker, Item, Input, Button, Body, View, Icon } from 'native-base'
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2 = (value) => {
        this.setState({
            selected2: value
        });
    }

    render() {
        const THEME_COLOR = '#285E29';
        return (
            <Container style={styles.container}>
                
                <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
                    <Header style={{ backgroundColor: "#1b1464", height: 120 }}>

                        {/* <StatusBar       barStyle = 'light-content' style={{backgroundColor:'#ffffff'}}/> */}
                        <Body>
                            {/* <Text>X</Text> */}
                            <Text style={styles.headerText}>
                                Watch your wealth grow
                </Text>
                        </Body>
                    </Header>
                    <Tabs
                        tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}
                    >
                        <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabHeading}>QUICK ACCESS</Text></TabHeading>}>
                            <Text style={styles.textData}>Enter MPIN</Text>
                            <Item regular style={styles.textInput}>
                                <Input placeholder='Enter mpin' style={styles.input} />
                            </Item>
                            <TouchableOpacity >
                                <Text style={styles.forgetText} >Forgot MPIN</Text>
                            </TouchableOpacity>

                            <Text style={styles.bottomtext}>
                                By logging in , you agree to our
                        <Text style={styles.bottomColor}> Terms And conditon  </Text>
                        And
                        <Text style={styles.bottomColor}> Privacy Policy</Text>
                            </Text>

                            <Button block warning style={styles.Quicklogin}>
                                <Text>LOGIN</Text>
                            </Button>
                        </Tab>
                        <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabHeading}>LOGIN</Text></TabHeading>}>
                            <Text style={styles.loginText}>Select State</Text>
                            <Item regular style={styles.dropInput} >
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Select" value="key0" />
                                    <Picker.Item label="Karnataka" value="key1" >
                                      <Item>hello</Item>
                                        </Picker.Item>


                                    <Picker.Item label="maharashtra" value="key2" />
                                              
                                </Picker>
                            </Item>
                            <Text style={styles.mobileinput}>Enter your mobile number</Text>
                            <Item regular style={styles.loginInput}>
                                <Input placeholder='No need to add +91' style={styles.input} />
                            </Item>

                            <Text style={styles.mobileinput} >Enter your password</Text>

                            <Item regular style={styles.loginInput}>
                                {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                                <Input placeholder='Enter your password' style={styles.input} />
                            </Item>
                            <TouchableOpacity >
                                <Text style={styles.forgotPassword}>Forgot password</Text>
                            </TouchableOpacity>
                            <Text style={styles.bottomLogin}>
                                By logging in , you agree to our
                        <Text style={styles.bottomColor}> Terms And conditon  </Text>
                        And
                        <Text style={styles.bottomColor}> Privacy Policy</Text>
                            </Text>
                            <Button block warning style={styles.LoginButton}>
                                <Text>LOGIN</Text>
                            </Button>
                        </Tab>

                    </Tabs>

                </SafeAreaView>
            </Container>


        )
    }
}


const styles = StyleSheet.create({

    tabHeading: {

        height: 19,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 0.14,
        fontStyle: 'normal',

    },
    container: {
        flex: 1,
        justifyContent: "center",
        height: 640
    },
    headerText: {
        width: 221,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,
        marginTop: 50,
        marginLeft: 10,
        color: '#ffffff'
    },
    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,

    },
    headerCross: {
        color: '#ffffff',
        marginLeft: 20,
        marginTop: 20,
        height: 20
    },
    forgetText: {
        marginLeft: 300,
        width: 91,
        height: 22,
        marginTop: 10,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e'

    },

    forgetpassword: {
        width: 91,
        height: 22,
        marginTop: 10,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e'
    },
    forgotPassword: {

        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e',
        marginLeft: 270
    },
    tabColor: {
        backgroundColor: "#1b1464"
    },

    textInput: {
        marginTop: 20,
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        backgroundColor: '#e1e4eb',
    },

    loginInput: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
    textData: {
        marginTop: 20,
        marginLeft: 20

    },
    LoginButton: {

        marginLeft: 16,
        marginRight: 15,

    },
    Quicklogin: {
        marginLeft: 16,
        marginRight: 15,
        marginTop: 10

    },
    bottomtext: {
        color: "#999999",
        width: 329,
        height: 52.7,
        marginTop: 230,
        marginLeft: 20,
        paddingBottom: 10,

    },

    dropInput: {
        backgroundColor: '#e1e4eb',
        marginLeft: 16,
        marginRight: 15,
        borderRadius: 5,
        height: 40,
        marginTop: 10

    },
    bottomColor: {
        color: '#f7931e'

    },

    loginText: {
        marginTop: 30,
        marginLeft: 20

    },
    passwordicon: {
        height: 20,
        width: 40,


    },
    bottomLogin: {
        color: "#999999",
        width: 329,
        height: 52.7,
        marginTop: 90,
        marginLeft: 20,
        marginBottom: 10
    },
    mobileinput: {
        marginTop: 10,
        marginLeft: 20

    }
})