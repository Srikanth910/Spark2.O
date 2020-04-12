import React, { Component } from 'react'
import { Container, Text, Header, Button, Icon, Body, Left, Right, Title, Content, List, ListItem, Item, Input, View } from 'native-base'
import { StyleSheet, Image , ImageBackground,StatusBar} from 'react-native'
import { ThemeColors } from 'react-navigation'


import Dialog from "react-native-dialog";
export default class ChangePasseword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    Dialogopen = () => {
        this.setState({
            visible: true
        })
    }
    Dialogclose = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#1b1464', height: 80 }}>
                <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>

                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }}>
                        <Title style={styles.title}   >Change Passeword</Title>
                    </Body>
                   

                </Header>

                <Content >



                    <Image style={styles.image}
                        source={require('../../../images/lock_2.png')} />
                    <Text style={styles.maintext}   > Set a strong memorable password</Text>

                    <Item style={styles.doted}   >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least 8 Characters (no spaces)  </Text>

                    </Item>
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least 8 Characters (no spaces)  </Text>

                    </Item>
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least  1 alphabet and 1number  </Text>

                    </Item>
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> At least  1 number  </Text>

                    </Item >
                    <Item style={styles.doted} >
                        <Text style={styles.data}></Text>
                        <Text style={styles.text}> No  special characters  </Text>

                    </Item>

                    <Text style={styles.mobileinput}>Enter current password</Text>
                    <Item regular style={styles.loginInput}>
                        <Input placeholder='' style={styles.input} />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>

                    <Text style={styles.mobileinput} >Enter new password</Text>

                    <Item regular style={styles.loginInput}>
                        {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                        <Input placeholder='' style={styles.input} />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>

                    <Text style={styles.mobileinput} > confirm  new password</Text>

                    <Item regular style={styles.loginInput}>
                        {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                        <Input  style={styles.input} />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>


                    <View>
                        <Dialog.Container  style={styles.Dialog}  visible={this.state.visible} >
                            <Dialog.Title>New password set</Dialog.Title>
                            <Dialog.Description style={{ alignSelf: 'center' }}>
                                <Text style={styles.DialogText}>You have successfully set a  new password</Text>
                            </Dialog.Description>
                            {/* <Dialog.Button label="Cancel" /> */}
                            <Dialog.Button label="ok" color='#f7931e' onPress={this.Dialogclose} />
                        </Dialog.Container>
                    </View>

                </Content>
                <Button block warning style={styles.btnSubmit}  >
                    <Text style={styles.submit}>Submit</Text>
                </Button>



            </Container>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
    },
    title:{
    textAlign:'center'
    

    },
    mpintext: {

        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,
        fontWeight: 'normal',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',


    },
    doted: {
        borderColor:  'transparent',
        marginLeft: 20

    },
    Dialog: {

        height: 200,
        width: 300,
        alignSelf: 'center'
    },
    submit: {
        // width:52,
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#ffffff'
    },
    loginInput: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
    data: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#f7931e'
    },


    text: {

        height: 22,
        textAlign: 'left',
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#474a4f',
        marginLeft: 5

    },
    maintext: {
        marginTop: 20,
        height: 40,
        textAlign: 'left',
        fontFamily: 'Nunito',
        fontSize: 16,
        marginLeft: 15,
        color: '#474a4f'

    },
    mobileinput: {
        marginTop: 10,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,


    },
    btnSubmit: {
        marginBottom: 32,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',

    },

    image: {
        width: 92,
        height: 38,
        alignSelf: 'center',
        marginTop: 30


    },
    DialogText: {

    }

})

