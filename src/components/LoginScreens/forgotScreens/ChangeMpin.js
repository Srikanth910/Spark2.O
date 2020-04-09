import React, { Component } from 'react'
import { Container, Text, Header, Button, Icon, Body, Left, Right, Title, Content, List, ListItem, Item, Input, View } from 'native-base'
import { StyleSheet, Image, ImageBackground,StatusBar } from 'react-native'
// import DeviceInfo from 'react-native-device-info';

// import { getDeviceId  } from 'react-native-device-info';
export default class  ChangeMpin extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            deviceID:''
       }
   }
   

     
    
    //  componentDidMount=()=>{
   
    //       DeviceInfo.getDeviceId().then(res=>{
    //           console.log(res)
    //       })
    //  }

    
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
                    <Body style={{ alignItems: 'flex-end' }} >
                        <Title   > Change MPIN</Title>
                    </Body>
                    <Right />

                </Header>

                <Content >
                    
                   <View >
                <Image    style={styles.image}

          			source={require('../../../images/mpin_lock.png')}/>
                         <Text style={styles.lockText}> Set 6-Digit password</Text>
                    </View>
                    <Text style={styles.mobileinput}>Enter current password</Text>
                    <Item regular style={styles.loginInput}>
                        <Input placeholder='' style={styles.input} />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>

                    <Text style={styles.mobileinput} >Enter new password</Text>

                    <Item regular style={styles.loginInput}>
                        {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                        <Input  style={styles.input} />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>

                    <Text style={styles.mobileinput} > confirm  new password</Text>

                    <Item regular style={styles.loginInput}>
                        {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                        <Input  style={styles.input} />
                        <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/>

                    </Item>



                </Content>


                <Button block warning style={styles.btnSubmit}
                 onPress={()=>alert('scuuss')}
                 >
                    <Text style={styles.submit}>Submit</Text>
                </Button>

            </Container>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
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
        borderColor: 'transparent',
        marginLeft: 20

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

        marginTop: 40,
        height: 40,
        textAlign: 'left',
        fontFamily: 'Nunito',
        fontSize: 16,
        marginLeft: 15,
        color: '#474a4f'

    },
    mobileinput: {
        marginTop: 15,
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

    image:{
        width: 84,
        height: 96,
        alignSelf:'center',
        marginTop:30
        
        
     },
     lockText:{
        alignSelf:'center',
        color: '#999999',
        fontFamily:'Nunito',
        fontSize:14
     }
})

