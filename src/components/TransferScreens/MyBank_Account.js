
import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Button, Icon, Item, Input, ListItem, View, Left, Right, Title } from "native-base";
import { StyleSheet, StatusBar, Image } from 'react-native'


export default class MyBank_Account extends Component {

    render() {

        return (
            <Container style={styles.Container}>
                <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.navigate('AddBank_Account')}
                            />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'flex-start', marginLeft: 40 }} >
                        <Title style={styles.mpintext}> My Bank Account</Title>
                    </Body>
                    <Right />
                </Header>


                <Content >


                    <Text style={styles.textstyle}>IFSC code</Text>
                    <Item regular style={styles.Inputstyle}>
                        <Input style={styles.input} />

                    </Item>
                    <Text style={styles.textstyle}>Account no.</Text>
                    <Item regular style={styles.Inputstyle}>
                        <Input style={styles.input} />

                    </Item>



                    <View style={styles.bottomtext}>
                        <Text >Please ensure you have entered the correct
                        account details.Spark is not responsible for incorrect account details.

                    </Text>
                     
                    </View>

                       <Button  style={styles.submit} block warning
 onPress={()=>this.props.navigation.navigate('Mybank_Confirm')}
                            >
                            <Text >Proceed</Text>
                        </Button>




                </Content>




            </Container>


        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    listview: {
        borderColor: 'transparent',
        height: 15
    },
    mpintext: {
        width: 200,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: 'normal',
        alignItems: 'center',
    },
    bottomtext: {

        marginLeft: 21,
        marginRight: 21,
        alignItems: 'center',
        marginTop: 280,


    },

    submit: {

        height: 40  ,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#ffffff',
        marginLeft: 21,
        marginRight: 21,

    },

    StateText: {

        marginLeft: 21,
        marginRight: 21

    },
    textstyle: {
        marginTop: 10,
        marginLeft: 21,
        color: '#474a4f',
        fontSize: 14,
        marginRight: 21,

    },
    Inputstyle: {
        borderRadius: 5,
        height: 40,
        marginLeft: 21,
        marginRight: 21,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
})