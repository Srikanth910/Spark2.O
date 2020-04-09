import React, { Component } from 'react'

import { Container, Header, Tabs, Text, Tab, TabHeading, Item, Input, Button, Body, View, Picker, Icon } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Content, ListItem, Radio, Right, Left } from 'native-base';
export default class AddBeneficiarys extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2  :undefined,
            radioBtnOne: false,
            radioBtnTwo: false
        };
    }
    onValueChange2 = (value) => {
        this.setState({
            selected2: value
        });
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#1b1464", height: 50 }}>
                    <Body>
                        <Text style={styles.headerText}>
                        </Text>
                    </Body>
                </Header>
                <Tabs
                    tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }} >
                    <Tab heading={<TabHeading style={styles.tabColor}><Text> Add Beneficiary </Text></TabHeading>}>

                        <Text style={styles.StateText} >Select state </Text>
                        <Text style={styles.StateText}>Please select the Co-operative that the Beneficiary you want to add is a member of.</Text>
                        <Text style={styles.StateText}>Select State</Text>
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



                        <Text  style={styles.StateText}>Select beneficiary account type</Text>
                        <ListItem onPress={() => this.setState({ radioBtnOne: !this.state.radioBtnOne })}>
                            <Right>
                                <Radio selected={this.state.radioBtnOne} color="orange" selectedColor="orange" onPress={() => this.setState({ radioBtnOne: !this.state.radioBtnOne })} />
                            </Right>
                            <Text>  Savinges Account</Text>
                        </ListItem>

                        <ListItem onPress={() => this.setState({ radioBtnTwo: !this.state.radioBtnTwo })}>
                            <Right>
                                <Radio selected={this.state.radioBtnTwo} color="orange" selectedColor="orange" onPress={() => this.setState({ radioBtnOne: !this.state.radioBtnOne })} />
                            </Right>
                            <Text>  Business Account</Text>
                        </ListItem>












                        <Button block warning style={styles.SubmitButton}
                       onPress={()=>this.props.navigation.navigate('Otherbank')}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </Tab>



                </Tabs>
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
        marginTop: 30,
        marginLeft: 20

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
        marginTop: 100,
        marginLeft: 25,
        width: 360
    }


})