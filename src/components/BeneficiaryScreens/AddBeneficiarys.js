import React, { Component } from 'react'
import { Container, Header,Text, Tab, TabHeading, Item, Input, Title, Button, Body, View, Picker, Icon } from 'native-base'
import { StyleSheet,ScrollView, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Content, ListItem, Radio, Right, Left } from 'native-base';
export default class AddBeneficiarys extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            radioBtnOne: false,
            radioBtnTwo: false,
            password: '',
            name:'',
        };
    }
    onValueChange2 = (value) => {
        this.setState({
            selected2: value
        });
    }
    toggelopen = () => {
        this.setState({
            ismodelopen: !this.state.ismodelopen

        })
         this.props.navigation.navigate('Otherbank')
    }
    changepage = () => {
        this.setState({
            ismodelopen: false
        })
        this.props.navigation.navigate('passwordSet')
    }
    radiobtn=(name)=>{
        this.setState({
            name:name
        })
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
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'flex-start', marginLeft: 40 }} >
                        <Title style={styles.heddertext}>Add Beneficiary</Title>
                    </Body>
                </Header>

                <Tab heading={<TabHeading style={styles.tabColor}><Text> Add Beneficiary </Text></TabHeading>}>
                    <ScrollView>
                        <Text style={styles.StateText} >Select state </Text>
                        <Text style={styles.StateText}>Please select the Co-operative that the Beneficiary you want to add is a member of.</Text>
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

                        <Text style={styles.StateText}>Select beneficiary account type</Text>
                        <ListItem >
                            <Right>
                                <Radio selected={this.state.radioBtnOne} color="orange" selectedColor="orange" onPress={() => this.radiobtn('true') }/>
                            </Right>
                            <Text>  Savinges Account</Text>
                        </ListItem>

                        <ListItem >
                            <Right>
                                <Radio selected={this.state.radioBtnTwo} color="orange" selectedColor="orange" onPress={() => this.radiobtn('false') }/>
                            </Right>
                            <Text>  Business Account</Text>
                        </ListItem>


                        {this.state.name === "true" &&
                            <View>
                                <Text style={styles.StateText}>Enter beneficiary phone number</Text>
                                <Item style={styles.Inputstyle}>
                                    <Input placeholder='No need add +91' style={styles.input} />
                                </Item>

                                <Text style={styles.StateText}>Re-Enter beneficiary phone number</Text>
                                <Item regular style={styles.Inputstyle}>
                                    <Input style={styles.input} />
                                </Item>
                            </View>}


                        {this.state.name === "false" &&
                            <View>
                                <Text style={styles.StateText}>Enter beneficiary Business Account ID</Text>
                                <Item regular style={styles.Inputstyle}>
                                    <Input placeholder='6-digit Business Account ID' style={styles.input} />
                                </Item>

                                <Text style={styles.StateText}>Re-Enter beneficiary Business Account ID</Text>
                                <Item regular style={styles.Inputstyle}>
                                    <Input placeholder='6-digit Business Account ID' style={styles.input} />
                                </Item>
                            </View>}

                        <Text style={styles.StateText}>Please ensure you have entered the correct
                         account details.Spark is not responsible for incorrect details.</Text>


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


                        <Button block warning style={styles.SubmitButton} onPress={this.toggelopen} >
                            <Text>Submit</Text>
                        </Button>

                    </ScrollView>
                </Tab>
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

    StateText: {
        marginTop: 10,
        marginLeft: 20

    },
    Inputstyle: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },

    tabColor: {
        backgroundColor: "#1b1464"
    },
    dropInput: {
        backgroundColor: '#e1e4eb',
        marginLeft: 16,
        marginRight: 15,
        borderRadius: 5,
        height: 40,
        marginTop: 10

    },


    headerText: {
        color: 'white'
    },
    forgetText: {
        marginLeft: 300,
        marginTop: 10,
        color: "#f3a549",

    },
    tabColor: {
        backgroundColor: "#1b1464",

    },

    textInput: {
        marginTop: 20,
        width: 328,
        marginLeft: 40,


    },
    textData: {
        marginTop: 10,
        marginLeft: 20

    },
    SubmitButton: {
        marginTop: 10,
        marginLeft: 20,
        width: 380
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
