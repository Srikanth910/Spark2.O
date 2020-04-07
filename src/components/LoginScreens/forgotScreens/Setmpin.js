import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Content, Text } from 'native-base'
import { StyleSheet } from 'react-native'

 import SmoothPinCodeInput from'react-native-smooth-pincode-input'

export default class Setmpin extends Component {
    render() {
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
    <Title style={styles.mpintext}  > Set MPIN</Title>
</Body>
<Right />

</Header>


<Content>
    <Text> enter pin</Text>
    {/* <SmoothPinCodeInput
  cellStyle={{
    borderBottomWidth: 2,
    borderColor: 'gray',
  }}
  cellStyleFocused={{
    borderColor: 'black',
  }}
  value={code}
  
  /> */}

</Content>

<Text style={{color:'red'}}> enter pin</Text>
            </Container>



            )
    }
}

 const styles=StyleSheet.create({

 })