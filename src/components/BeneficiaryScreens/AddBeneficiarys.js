import React, { Component } from 'react'
import { Container, Header, Text, Tab, TabHeading, Item, Input, Title, Button, Body, View, Picker, Icon } from 'native-base'
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { Content, ListItem, Radio, Right, Left } from 'native-base';
import { connect } from 'react-redux';
import { getmemberDetails } from '../../Redux/actions/Beneficiary'
class AddBeneficiarys extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            radioBtnOne: false,
            radioBtnTwo: false,
            mobilenum: '',
            name: '',
            isVisible: false,

            confirmMobilenum: '',
        };
    }
    onValueChange2 = (value) => {
        this.setState({
            selected2: value
        });
    }
    toggleClose = () => {
        this.setState({
            isVisible: false

        })
        this.props.navigation.navigate('Otherbank')
    }
    changepage = () => {
        this.setState({
            ismodelopen: false
        })
        this.props.navigation.navigate('Beneficiary')
    }
    radiobtn = (name) => {
        this.setState({
            name: name
        })
    }
    Datasubmit = () => {
        const Data = {
            
            mobileNoOrAccNo: this.state.mobilenum,
            memberOf: this.state.selected2,
            accountType: this.state.name


        }
        console.log(Data)

        this.props.getmemberDetails(Data).then(() => {
             const {beneficiary}=this.props
              if(beneficiary.memberDetials.code==="200"){
            this.prop.navigation.navigate('Confirmationdetails')
               
              }else{
                  alert('fail')
              }
             
        })
        this.prop.navigation.navigate('Confirmationdetails')

    }
  
    

        
    render() {
         const {beneficiary}=this.props
         console.log(beneficiary.memberDetials.code)
        const { password, mobilenum, confirmMobilenum } = this.state
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
                         <View  style={styles.separator} />
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
                                <Picker.Item label="Karnataka" value="KA" >
                                    <Item>hello</Item>
                                </Picker.Item>
                                <Picker.Item label="maharashtra" value="MH" />
                            </Picker>

                        </Item>

                        <Text style={styles.StateText}>Select beneficiary account type</Text>
                        <ListItem style={styles.liststyle}>
                            <Right >
                                <Radio selected={this.state.radioBtnOne} color="orange" selectedColor="orange" onPress={() => this.radiobtn('SavingsAccount')} />
                            </Right>
                            <Text>  Savinges Account</Text>
                        </ListItem>

                        <ListItem style={styles.liststyle} >
                            <Right>
                                <Radio selected={this.state.radioBtnTwo} color="orange" selectedColor="orange" onPress={() => this.radiobtn('false')} />
                            </Right>
                            <Text>  Business Account</Text>
                        </ListItem>

                     

                        {this.state.name === "SavingsAccount" &&
                            <View>
                                <Text style={styles.StateText}>Enter beneficiary phone number</Text>
                                <Item style={styles.Inputstyle}>
                                    <Input placeholder='' style={styles.input}
                                        value={this.state.mobilenum}
                                        onChangeText={editedText =>
                                            this.setState({ mobilenum: editedText })
                                        }
                                    />
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
                                    <Input placeholder='' style={styles.input}
                                        value={this.state.password}
                                        onChangeText={editedText =>
                                            this.setState({ mobilenum: editedText })
                                        }

                                    />
                                </Item>

                                <Text style={styles.StateText}>Re-Enter beneficiary Business Account ID</Text>
                                <Item regular style={styles.Inputstyle}>


                                    <Input placeholder='' style={styles.input}
                                        value={this.state.confirmMobilenum}
                                        onChangeText={editedText =>
                                            this.setState({ confirmMobilenum: editedText })
                                        }

                                    />
                                </Item>
                            </View>}

                        <Text style={styles.StateText}>Please ensure you have entered the correct
                         account details.Spark is not responsible for incorrect details.</Text>


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
                        </View>


                        <Button block warning style={styles.SubmitButton} onPress={this.Datasubmit} >
                            <Text>Submit</Text>
                        </Button>

                    </ScrollView>
                </Tab>
            </Container>


        )
    }
}


const mapStateToProps = state => ({
    beneficiary: state.beneficiary,
    error: state.error

})

export default connect(mapStateToProps, { getmemberDetails})(AddBeneficiarys)

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
    liststyle:{
        flex: 1,
        padding: 1,
        borderColor:  'transparent',
        marginRight:69
   
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
