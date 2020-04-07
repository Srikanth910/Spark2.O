import React, { Component } from "react";
import { Header, Container, Body, Text, Content, Item, Input, Button, Picker, Icon, View, Left, Right, Title } from "native-base";
import { StyleSheet, StatusBar } from 'react-native'

export default class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected2: undefined
    };
}
onValueChange2 = (value) => {
    this.setState({
        selected2: value
    });
}

  render() {
    return (

      <Container style={styles.Container}>
        <StatusBar hidden />
        <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>


        <Left>
            <Button transparent>
              <Icon name='arrow-back'
              onPress={() => this.props.navigation.navigate('Login')} />
            </Button>
          </Left>
          <Body   style={{alignItems:'center'}} >
            <Title style={styles.mpintext}  >Forgot MPIN</Title>
          </Body>
          <Right />
      
        </Header>

        <Content >
          <Text style={styles.loginText}>Select state</Text>
          <Item regular style={styles.dropInput} >
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="Select" value="key0" />
                                    <Picker.Item label="Karnataka" value="key1" >
                                      <Item>hello</Item>
                                        </Picker.Item>


                                    <Picker.Item label="maharashtra" value="key2" />
                                              
                                </Picker>
                            </Item>


          <Text style={styles.loginText}>Enter your mobile number</Text>
          <Item regular style={styles.textInput}>
            <Input placeholder='No need to add +91' style={styles.input} />
          </Item>

          <Text style={styles.loginText}> Enter your password</Text>
          <Item regular style={styles.textInput}>
            <Input placeholder='Enter password' style={styles.input} />
          </Item>


        </Content>


        <Button block warning style={styles.btnSubmit}
        onPress={() => this.props.navigation.navigate('ForgotMpin')}
        >
          <Text style={styles.submit}>Submit</Text>
        </Button>

      </Container>


    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  mpintext: {
    width: 114,
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'normal',
  //  alignItems:'center',
    color: '#ffffff',
    alignSelf:'center'


  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },

  input: {

    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,



  },
  dropInput: {
    backgroundColor: '#e1e4eb',
    marginLeft: 16,
    marginRight: 15,
    borderRadius: 5,
    height: 40,
    marginTop: 10

},
  loginText: {
    paddingTop: 20,
    marginLeft: 20

  },
  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    
  },

  Title:{
     textAlign:'center'

  }, 
  submit:{
    // width:52,
    height:22,
    fontFamily:'Nunito',
    fontSize:16,
    fontWeight:'normal',
    textAlign:'center',
    color:'#ffffff'
  }

})