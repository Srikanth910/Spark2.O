import React, { Component } from 'react'
import { Container, Header, Tabs, Text, Tab, ListItem, TabHeading, Title, Item, Input, Button, Body, View, Icon, Left, Right, Thumbnail, Form } from 'native-base'
import { StyleSheet, StatusBar, Image } from 'react-native';
import Modal from 'react-native-modal';



export default class Transfer_Beneficiary extends Component {


        constructor(props) {
        super(props);
        this.state = {
            

        };
    }

    render() {
        return (
            <Container style={styles.Container}>

                <Header style={{ backgroundColor: '#1b1464', height: 80 }} >
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                    <Left>
                        <Button transparent style={styles.btnclose}>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.navigate('Otherbank')}
                            />
                        </Button>
                        <Body style={{ alignItems: 'flex-start', marginRight: -250, bottom: 30 }}>
                            <Title >Beneficiaries</Title>
                        </Body>
                    </Left>


                    <View>
                        <Modal style={{ width: 280, maxHeight: 200, alignSelf: 'center', marginTop: 200 }} isVisible={this.state.ismodelopen} >
                            <View style={{ backgroundColor: 'white' }}>

                                <Text style={styles.otpText}
                                    onPress={() => this.props.navigation.navigate('AddBeneficiarys')}
                                >Add Spark member as beneficiary</Text>
                                <Text style={styles.otpText}

                                    onPress={() => this.props.navigation.navigate('Otherbank')}
                                >Add a bank account as beneficiary</Text>
                                <ListItem style={{ justifyContent: 'flex-end' }} >
                                    <Text style={styles.cancel} onPress={this.toggelopen}>Cancel</Text>
                                </ListItem>
                            </View>
                        </Modal>
                    </View>

                    <Right>
                        <Button transparent style={styles.btnclose} onPress={this.toggelopen} >
                            <Icon name='md-add' />
                            {/* onPress={() => this.props.navigation.navigate('')} */}
                        </Button>
                    </Right>

                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}>
                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabtext}>Spark</Text></TabHeading>}>



                        <View style={styles.curd_user}>
                            <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>
                                <Image source={require('../../images/Transfer/Spark_Business.png')} style={styles.bank} />
                                <View style={{ paddingLeft: 40 }}>
                                    <Text style={styles.usertext}>
                                        k.shivashankar
                                                               </Text>
                                    <Text style={styles.curdtext}>A/C No -000354126745</Text>

                                    <Text style={styles.curdtext}>IFSC - HDFC0002345</Text>



                                </View>
                                <Image source={require('../../images/Transfer/delete_white.png')} style={{ width: 15, height: 22, alignSelf: 'center', marginTop: 50, marginRight: 30, color: 'red' }} />


                            </ListItem>
                        </View>



                        <View style={styles.curd_user}>
                            <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>
                                <Image source={require('../../images/Transfer/Spark_Saving.png')} style={styles.bank} />
                                <View style={{ paddingLeft: 40 }}>
                                    <Text style={styles.usertext}>
                                        k.shivashankar
                                                               </Text>
                                    <Text style={styles.curdtext}>A/C No -000354126745</Text>

                                    <Text style={styles.curdtext}>IFSC - HDFC0002345</Text>



                                </View>
                                <Image source={require('../../images/Transfer/delete_white.png')} style={{ width: 15, height: 22, alignSelf: 'center', marginTop: 50, marginRight: 30, color: 'red' }} />


                            </ListItem>
                        </View>



                    </Tab>

                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabtext}>Others</Text></TabHeading>}>


                        <View style={styles.curd_user}>
                            <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>
                                <Image source={require('../../images/Transfer/My_Bank.png')} style={styles.bank} />
                                <View style={{ paddingLeft: 40 }}>
                                    <Text style={styles.usertext}>
                                        k.shivashankar
                                                               </Text>
                                    <Text style={styles.curdtext}>A/C No -000354126745</Text>

                                    <Text style={styles.curdtext}>IFSC - HDFC0002345</Text>



                                </View>
                                <Image source={require('../../images/Transfer/delete_white.png')} style={{ width: 15, height: 22, alignSelf: 'center', marginTop: 50, marginRight: 30, color: 'red' }} />


                            </ListItem>
                        </View>


                        <View style={styles.curd_user}>
                            <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>
                                <Image source={require('../../images/Transfer/My_Bank.png')} style={styles.bank} />
                                <View style={{ paddingLeft: 40 }}>
                                    <Text style={styles.usertext}>
                                        k.shivashankar
                                                               </Text>
                                    <Text style={styles.curdtext}>A/C No -000354126745</Text>

                                    <Text style={styles.curdtext}>IFSC - HDFC0002345</Text>



                                </View>
                                <Image source={require('../../images/Transfer/delete_white.png')} style={{ width: 15, height: 22, alignSelf: 'center', marginTop: 50, marginRight: 30, color: 'red' }} />


                            </ListItem>
                        </View>



                    </Tab>




                </Tabs>
            </Container>


        )
    }
}

const styles = StyleSheet.create({

    Container: {
        flex: 1
    },
    headerText: {
        color: 'white',
    },
    curdtext: {
        marginLeft: 0,
        color: '#1b1464',
        fontFamily: 'Nunnito',
        fontSize: 14,
        marginRight: 100
    },

    usertext: {
        fontSize: 16,
        color: '#474a4f'

    },


    bank: {
        marginLeft: 22,
        height: 40 ,
        width: 40,
        alignSelf: 'center'

    },

    curd_user: {
        backgroundColor: '#ffffff',
        height: 97,
        marginVertical: 20,
        marginLeft: 21,
        marginRight: 21,

        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },

    forgetText: {
        marginLeft: 300,

        marginTop: 10,
        color: "#f3a549",

    },
    tabColor: {
        backgroundColor: "white",
        color: '#474a4f'


    },
    tabtext: {
        color: '#474a4f'
    },

    textInput: {
        marginTop: 20,
        width: 328,
        marginLeft: 40,


    },
    cancel: {
        width: 91,
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e',
        textAlign: 'right',
        marginRight: 180,




    },

    otpText: {

        height: 70,
        fontSize: 18,
        marginLeft: 30

    },

    btnclose: {
        marginTop: 20,
        width: 80,
        marginLeft: 10,


    },


    headertext: {
        marginTop: -37,
        width: 150,
        marginLeft: -60,
        fontSize: 24,


    },
    textData: {
        marginTop: 10,
        marginLeft: 20

    },
    Addbtnbeni: {
        marginTop: 20,
        marginLeft: 16,
        width: 380,
    }
})



