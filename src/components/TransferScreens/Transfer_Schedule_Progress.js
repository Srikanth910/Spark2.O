import React, { Component } from 'react'
import { Container, Header, Content, Button, View, ListItem, Item, } from 'native-base'
import { StatusBar, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class Transfer_Schedule_Progress extends Component {
    render() {
        return (
            <Container>

                <ImageBackground source={require('../../images/home/progress_bg.png')} style={{ height: '100%', width: '100%', flex: 0.7, bottom: 0 }} >


                    <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>

                        <View style={styles.header}>
                            <Item style={{ borderColor: 'transparent', alignSelf: 'center' }}>
                                <Image source={require('../../images/home/blue_rupi.png')} style={{ height: 23, width: 15, marginTop: 5 }} />
                                <Text style={styles.headerbal}>
                                    27,000
                        </Text>
                            </Item>
                            <Text style={styles.text}>
                                Schedule In progress


                        </Text >
                            <Text style={styles.text} >07-05-2020, 10:30:23</Text>
                        </View>

                    </ListItem>


                    <View style={styles.overlopcurd}>

                        <ScrollView >

                            <Content padder>

                                <View style={{ marginHorizontal: 23, }} >
                                    <View style={styles.curd_user}>
                                        <ListItem>
                                            <Image source={require('../../images/Transfer/My_Bank.png')} style={styles.bank} />
                                            <View style={{ paddingLeft: 20 }}>
                                                <Text style={styles.usertext}>
                                                    B.Srikanth
                           </Text>
                                                <Text style={styles.curdtext}>Account ID :7898459875</Text>

                                                <Text style={styles.curdtext}>IFSC code  :HDFC0004567</Text>

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
                                        <Text style={styles.textdetails}>Starts on :4/5/2020</Text>
                                        <Text style={styles.textdetails}>Monthly,0/48 transfers done</Text>
                                       

                                    </View>



                                </View>



                            </Content>


                        </ScrollView>
                        <View style={{ flex: 1 }}>
                            <Button block warning style={styles.btn}
                                onPress={() => this.props.navigation.navigate('LoadmoneySuccess')}
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
    text: {
        fontSize: 14,
        color: '#ffffff',

        alignSelf: 'center',


    },
    curdview: {
        backgroundColor: '#ffffff',
        height: 97,


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



    },
    overlopcurd: {
        height: '100%',
        backgroundColor: '#ffffff',
        width: '100%',
        marginVertical: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    bank: {

        height: 40,
        width: 34,
        alignSelf: 'center'

    }

})