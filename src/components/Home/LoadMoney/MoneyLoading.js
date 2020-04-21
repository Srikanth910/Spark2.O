import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title, Content, Text, Item, Input, CardItem, Card, CheckBox, View, Right, ListItem } from 'native-base'

import { StatusBar, StyleSheet } from 'react-native'

export default class MoneyLoading extends Component {
    render() {
        return (

            <Container style={{ backgroundColor: '#f0f0ff' }}>
                <Header style={{ backgroundColor: "#1b1464", height: 160 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <Left style={{ marginLeft: 10, marginTop: 0 }}>

                        <Button transparent  >
                            <Icon name='close' style={styles.icon}
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </Button>
                        <Text style={styles.headerText}>
                        Load money successful
                          </Text>

                    </Left>
                    <Right />




                </Header>

                <Content>
                    <View style={styles.rectangle}>
                        <View style={styles.reactangleText}>
                            <Text style={styles.rupi}> ₹ 15,000.0</Text>
                            <Text style={styles.loaded}>loaded to</Text>
                            <Text style={styles.spark}>your Spark account</Text>

               
                            <Text style={styles.user}>Srikanth, member id 11881</Text>
            


                            <Item style={{ borderColor: 'transparent', marginTop: 10 }}>
                                <CheckBox checked={true} color="green" style={{ borderRadius: 15, }} />

                                <Text style={styles.transaction}> Transaction successful</Text>

                            </Item>
                            <Text style={styles.user}> 3 Nov 6.30m</Text>
                            <Text style={styles.user}>Transaction Id :123456</Text>
                        </View>


                    </View>
                    <View style={styles.rectBox}>
                        <Item style={styles.underline}>
                            <Text style={styles.details}> TRANSACTION DETAILS</Text>

                        </Item>
    <View style={{marginLeft:10,marginTop:5}}>
                        <Text style={styles.current}> Current balance</Text>
                        <Text style={styles.bal}>1100</Text>
                        <Text style={styles.current} >Payment method</Text>
                        <Text style={styles.bal}>ICICI Credit Card 4938</Text>
                        </View>
                    </View>


                </Content>
            </Container>
        )

    }
}



const styles = StyleSheet.create({


    container: {
        flex: 1,

        height: 640
    },
    headerText: {
        width: 221,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,

        marginLeft: 10,
        color: '#ffffff',
        alignItems: 'flex-start'
    },

    headerCross: {
        color: '#ffffff',
        marginLeft: 20,
        marginTop: 20,
        height: 20
    },
    reactangleText: {
        alignItems: 'center',
        marginTop: 15

    },
    underline: {textDecorationLine: 'underline'}

,


    textInput: {
        marginTop: 20,
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        backgroundColor: '#e1e4eb',
    },


    textData: {
        marginTop: 20,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,

    },
    icon: {
        width: 14,

        marginBottom: 50
    },
    rectangle: {
        backgroundColor: '#ffffff',
        height: 232,
        marginTop: 30

    },
    rectBox: {

        backgroundColor: '#ffffff',
        height: 171,
        marginTop: 20
    },
    rupi: {

        height: 26,
        fontFamily: 'Inconsolata',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#474a4f',
        textAlign: 'center'

    },
    loaded: {

        height: 19,
        marginTop: 10,
        fontFamily: 'Nunito',
        fontSize: 14,
        color: '#999999',
        textAlign: 'center',
        fontStyle: 'normal'
    },
    spark: {
      
        height: 27,
        fontFamily: 'Nuntio',
  
        fontWeight: 'bold',
        fontSize: 20,
        color: '#474a4f',
        marginTop: 5,
        textAlign: 'center'
    },
    user: {
        width: 188,
        height: 19,
        fontFamily: 'Nunito',
        color: '#999999',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center'
    },
    transaction: {
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: "normal",
        textAlign: 'center',
        color: '#474a4f',
        marginLeft: 15


    },
    details: {

        marginTop: 10,
        fontSize: 19

    },
    underline: {
        padding: 10,
        marginLeft: 16


    },
    current: {
        height: 19,
        fontFamily: 'Nunito',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#474a4f',
        textAlign: 'left',
        marginLeft: 16

    },
    bal: {
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#474a4f',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 5

    },
    divider:{
       
       
    },
    userText:{
         textDecorationLine:'underline',
         
    }




})
