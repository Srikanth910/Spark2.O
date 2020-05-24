import React, { Component } from 'react'
import { Container, Header, Content, Button, View, ListItem, Item, Left, Body, Right } from 'native-base'
import { StatusBar, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class Schedule_Progress extends Component {
    render() {
         const {params}=this.props.route
        return (
            <Container>

                <ImageBackground source={require('../../images/home/progress_bg.png')} style={{ height: '100%', width: '100%', flex: 0.7, bottom: 0 }} >
                    <StatusBar barStyle="light-content" backgroundColor="#fbbe05" />

                    <ListItem style={styles.listview}>
                        <Image source={require('../../images/Transfer/up_arrow.png')} style={{ marginLeft: 330, marginTop: 0 }} />

                        <Body>
                            <Image source={require('../../images/Transfer/help_icon.png')} style={{ marginLeft: 10, marginTop: 10 }} />
                        </Body>
                    </ListItem>

                    <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>
                        <Left>
                            <Image style={{ width: 62, height: 62, }} source={require('../../images/Transfer/logo_s.png')} />
                        </Left>

                        <View style={{ marginRight: 109 }}>
                            <Item style={{ borderColor: 'transparent', }}>

                                <Text style={styles.headerbal}>
                                   {params.amount}
                        </Text>
                            </Item>
                            <Text style={styles.text}>
                                In progress


                        </Text >
        <Text style={styles.text} > {params.date}</Text>
                        </View>

                    </ListItem>


                    <View style={styles.overlopcurd}>

                        <ScrollView >

                            <Content padder>

                                <View style={{ marginHorizontal: 23, }} >
                                    <View style={styles.curd_user}>
                                        <ListItem style={{ borderColor: 'transparent' }}>
                                            <Image source={require('../../images/Transfer/My_Bank.png')} style={styles.bank} />
                                            <View style={{ paddingLeft: 30 }}>
                                                <Text style={styles.usertext}>
                                                    {params.userName}
                                                </Text>
        <Text style={styles.curdtext}>Account ID <Text style={styles.moneytext} > {params.accNo}</Text></Text>

                                                <Text style={styles.curdtext}>IFSC code  <Text style={styles.moneytext} > </Text></Text>

                                            </View>

                                        </ListItem>

                                    </View>

                                    <View style={styles.curdview}>

                                        <Text style={styles.transctiondetials}>Transfer details</Text>
                                        <Text style={styles.textdetails}>House Loan Payment 2020..</Text>
                                        <Text style={styles.textdetails}>Transfer charges</Text>
                                        <Text style={styles.textdetails}>Rs.0</Text>

                                    </View>

                                    <View style={styles.curd_user}>

                                        <Text style={styles.transctiondetials}>Scheduled</Text>

                                        <ListItem style={styles.listview}>
                                            <Image
                                                source={require('../../images/Transfer/baseline-alarm.png')}

                                            />

                                            <Body>
        <Text style={styles.textdetails}>Starts on :{params.date}</Text>
                                            </Body>
                                        </ListItem>

                                        <ListItem style={styles.listview}>
                                            <Image style={{ height: 15, width: 15 }}
                                                source={require('../../images/Transfer/calender.png')}

                                            />

                                            <Body>
                                                <Text style={styles.textdetails}>{params.scheduledays},0/48 transfers done</Text>
                                            </Body>
                                        </ListItem>
                                    </View>



                                </View>

                            </Content>


                        </ScrollView>
                        <View style={{ flex: 1 }}>
                            <Button block warning style={styles.btn}
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Text style={{ color: '#ffffff' }}>Done</Text>
                            </Button>
                        </View>


                    </View>

                </ImageBackground>
            </Container>
        )

    }
}

const styles = StyleSheet.create({
    headerbal: {
        fontSize: 36,
        paddingLeft: 5,
        textAlign: 'center',
        color: '#1b1464',
        fontFamily: 'Inconsolata',
        fontWeight: "bold"
    },
    moneytext: {
        color: '#1b1464',
        fontFamily: 'Nunnito',
        fontWeight: 'bold',
        fontSize: 14

    },

    listview: {
        borderColor: 'transparent',
        height: 0,
    },
    text: {
        fontSize: 14,
        color: '#322b74',
        alignSelf: 'center',


    },
    curdview: {
        backgroundColor: '#ffffff',
        height: 97,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,

    },

    curd_user: {
        backgroundColor: '#ffffff',
        height: 97,
        marginVertical: 20,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,

    },
    img: {
        height: 198,
        marginTop: 20,
        alignSelf: 'flex-end',
        marginHorizontal: 16,
    },
    btn: {
        marginHorizontal: 16,
        marginBottom: 32,
        height: 40,
        backgroundColor: '#fbbe05'

    },
    usertext: {
        color: '#1b1464',
        fontFamily: 'Nunnito',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left'
    },
    curdtext: {
        color: '#1b1464',
        fontFamily: 'Nunnito',
        fontSize: 14,
        textAlign: 'left'
    },
    transctiondetials: {
        fontSize: 16,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'left',
        marginLeft: 18,
        marginTop: 10,
    },
    textdetails: {
        fontSize: 14,
        textAlign: 'left',
        color: '#707070',
        marginLeft: 20,
        height: 23
    },
    overlopcurd: {
        height: '100%',
        backgroundColor: '#ffffff',
        width: '100%',
        marginVertical: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    bank: {
        height: 40,
        width: 34,
        alignSelf: 'center'

    }

})
Transfe