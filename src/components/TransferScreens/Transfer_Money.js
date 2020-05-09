import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Button,Icon, View, Left, Right, Title } from "native-base";
import { StyleSheet, StatusBar, Image } from 'react-native'


export default class Transfer_Money extends Component {

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
                        <Title style={styles.mpintext}>Transfer money</Title>
                    </Body>
                    <Right />
                </Header>


                <Content >


                    <View style={styles.billpay}>

                        <View >

                            <View style={{
                                alignItems: 'center', marginVertical
                                    : 16
                            }}>
                                <View style={{ flexDirection: "row", }}>

                                    <View style={styles.box}>
                                        <Image source={require('../../images/Transfer/Spark_Saving.png')} style={styles.billIcon} />
                                        <Text style={styles.iconText}>Spark Savings</Text>


                                    </View>

                                    <View style={styles.box}>
                                        <Image source={require('../../images/Transfer/Spark_Business.png')} style={styles.billIcon} />
                                        <Text style={styles.iconText}>Spark Business</Text>


                                    </View>

                                    <View style={styles.box}>
                                        <Image source={require('../../images/Transfer/My_Bank.png')} style={styles.billIcon} />
                                        <Text style={styles.iconText}>My Bank Account</Text>


                                    </View>

                                    <View style={styles.box}>
                                        <Image source={require('../../images/Transfer/Other_Bank.png')} style={styles.billIcon} />
                                        <Text style={styles.iconText}>Other Bank Account</Text>


                                    </View>

                                </View>

                            </View>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.text} >Scheduled list </Text>
                        <Text style={styles.savingData}>you can set a schedule when you transfer money </Text>
                        <Image source={require('../../images/Transfer/Transfer_Main.png')} style={{ width: 248, height: 224, alignSelf: 'center' }} />
                    </View>

                </Content>

            </Container>


        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

    billpay: {
        height: 245,
        backgroundColor: '#ffffff',
        marginTop: 16,
    },


    box: {
        backgroundColor: '#ffffff',
        height: 75,
        width: 75,
        borderRadius: 10,
        marginLeft: 15,
        alignContent: 'center',


    },

    iconText: {
        fontFamily: 'Nunito',
        fontSize: 12,
        color: '#474a4f',
        textAlign: 'center',

    },
    billIcon: {
        height: 95,
        width: 90,
        marginTop: 5,
        alignSelf: 'center'
    },

    savingData: {
        height: 36,
        fontFamily: 'Nunito',
        fontSize: 14,
        color: '#aaadb2',
        marginLeft: 16,
        fontWeight: 'normal',
        marginBottom: 10
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
        // width: 114,
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
})