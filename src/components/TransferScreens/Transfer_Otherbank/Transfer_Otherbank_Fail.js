
import React, { Component } from 'react'
import { Container, Header, Content, Button, View, ListItem, Item, } from 'native-base'
import { StatusBar, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class Transfer_Otherbank_Fail extends Component {
    render() {
        return (
            <Container>

                <ImageBackground source={require('../../images/home/fail_bg.png')} style={{ height: '100%', width: '100%' }} >
                    <ScrollView>

                        <ListItem style={{ borderColor: 'transparent', justifyContent: 'center', }}>

                            <View style={styles.header}>
                                <Item style={{ borderColor: 'transparent', alignSelf: 'center' }}>
                                    <Image source={require('../../images/home/white_rupi.png')} />
                                    <Text style={styles.headerbal}>
                                        5,0000
                        </Text>
                                </Item>
                                <Text style={styles.text}>
                                    payment declined:reason

                        </Text >
                                <Text style={styles.text} >TXN ID: CC1ZK173928, 07-05-2020, 10:30:23</Text>
                            </View>

                        </ListItem>

                        <View style={styles.overlopcurd}>
                            <Content padder >
                                <View style={{ marginHorizontal: 23, }} >
                                    <View style={styles.curd_user}>
                                        <ListItem>
                                            <Image source={require('../../images/Transfer/Other_Bank.png')} style={styles.bank} />
                                            <View style={{ paddingLeft: 20 }}>
                                                <Text style={styles.usertext}>
                                                    k.Shivashankar goud
                           </Text>
                                                <Text style={styles.curdtext}>Account ID:28275657</Text>

                                                <Text style={styles.curdtext}>IFSC code:HDFC3456</Text>

                                            </View>

                                        </ListItem>

                                    </View>
                                    <View style={styles.curdview}>
                                        <Text style={styles.transctiondetials}>Transfer details</Text>
                                        <Text style={styles.textdetails}>For family expenses</Text>
                                        <Text style={styles.textdetails}>NEFT</Text>
                                        <Text style={styles.textdetails}>Transfer charges</Text>
                                        <Text style={styles.textdetails}>Rs.0</Text>

                                    </View>


                                </View>

                                {/* <Image source={require('../../images/home/success_img.png')} style={styles.img}/> */}



                                <Button block danger style={styles.btn}
                                    onPress={() => this.props.navigation.navigate('Home')}
                                >
                                    <Text style={{ color: '#ffffff' }}>Done</Text>
                                </Button>
                            </Content>



                        </View>
                    </ScrollView>

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
        color: '#ffffff',
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
        height: 127,
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
        height: 110,
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
        marginTop: 180,
        marginHorizontal: 16,
        marginBottom: 16,

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
        marginLeft: 18,



    },
    overlopcurd: {
        height: '100%',
        backgroundColor: '#ffffff',
        width: '100%',
        marginVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bank: {

        height: 40,
        width: 60,
        alignSelf: 'center'

    }

})