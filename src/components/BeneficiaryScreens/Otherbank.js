import React, { Component } from 'react'
import { Container, Header, Tabs, Text, Tab, TabHeading, Item, Input, Button, Body, View } from 'native-base'
import { StyleSheet,ScrollView } from 'react-native'


export default class Otherbank extends Component {
    render() {
        return (

             
            <Container>

                <Header style={{ backgroundColor: "#1b1464", height: 30}}>
                    <Body>

                    </Body>
                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }} >
                    <Tab heading={<TabHeading style={styles.tabColor}><Text>Add benefiries</Text></TabHeading>}>
                    <ScrollView>
                        <Text style={styles.textstyle}>Name</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Name' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Account no.</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Account number' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Re-Enter Account no.</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Account number' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>IFSC code</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='IFSC code' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Email</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Email' style={styles.input} />
                        </Item>

                        <Text style={styles.textstyle}>Phone</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Phone' style={styles.input} />
                        </Item>

                       
                       

                        <Text style={styles.textstyle}>Please ensure you enter the correct account details.Spark is not responsiblefor incorrect account details</Text>
                        <Button block warning style={styles.SubmitButton}
                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text>Submit</Text>
                        </Button>
                        </ScrollView>
                    </Tab>



                </Tabs>
                
            </Container>


        )
    }
}


const styles = StyleSheet.create({

    textstyle: {
        marginTop: 10,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,


    },

    Inputstyle: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,
    },




    headerText: {
        color: 'white'
    },

    // forgetText: {
    //     marginLeft: 300,

    //     marginTop: 10,
    //     color: "#f3a549",

    // },
    tabColor: {
        backgroundColor: "#1b1464",
        
    },

    textInput: {
        marginTop: 20,
        width: 328,
        marginLeft: 40,


    },
    // textData: {
    //     marginTop: 10,
    //     marginLeft: 20

    // },

    SubmitButton: {
        marginTop: 5,
        marginLeft: 16,
        width: 382,
    }
})