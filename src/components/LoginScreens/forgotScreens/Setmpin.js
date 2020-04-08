import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Content, Text } from 'native-base'
import { StyleSheet, View } from 'react-native'

import SmoothPinCodeInput from 'react-native-smooth-pincode-input'


import Dialog from "react-native-dialog";
export default class Setmpin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // code:'1,2,3'
      code: '',
      password: '',
      visible:false
    }
  }

  Dialogclose=()=>{
    this.setState({
      visible:false
    })
  }


  Dialogopen=()=>{
    this.setState({
      visible:true
    })
  }
  render() {
    const { code, password } = this.state
    return (
      <Container>
        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>


          <Left>
            <Button transparent>
              <Icon name='arrow-back'
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>
          </Left>
          <Body style={{ alignItems: 'flex-end' }} >
            <Title style={styles.mpintext}  > SET MPIN</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <Text style={styles.mpinpin}>Enter new MPIN</Text>
          <View style={{ alignSelf: 'center' }}>
            <SmoothPinCodeInput


              codeLength={6}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              value={code}
              onTextChange={code => this.setState({ code })}
            />
          </View>
          <Text style={styles.mpinpin}> confirm new MPIN</Text>
          <View style={{ alignSelf: 'center' }}>
            <SmoothPinCodeInput


              codeLength={6}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              value={password}
              onTextChange={password => this.setState({ password })}
            />
          </View>
          <View>
        <Dialog.Container visible={this.state.visible} >
          <Dialog.Title>New Mpin Set</Dialog.Title>
          <Dialog.Description>
            <Text style={styles.Dialogtext} >You have successfully Set a
            new MPIN</Text>
            <Text>
              
            </Text>
          </Dialog.Description>
          
          <Dialog.Button label="ok" color="#f7931e"  onPress={this.Dialogclose}/>
        </Dialog.Container>
      </View>

        </Content>


        <Button block warning style={styles.btnSubmit} onPress={this.Dialogopen}  >
          <Text style={styles.submit}>Submit</Text>
        </Button>



        

      </Container>



    )
  }
}

const styles = StyleSheet.create({

  mpinpin: {
    // width:102,
    height: 19,
    fontFamily: 'Nunito',
    fontSize: 14,
    textAlign: 'left',
    color: '#474a4f',
    marginTop: 10,
    marginLeft: 10


  },
  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',

  },
  Dialogtext:{
    width:228,
    height:58,
    opacity:0.54,
    fontFamily:'Nunito',
    fontSize:16,
    textAlign:'left',
    color:'#010101'
  }

})