import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text, Left, Right } from 'native-base';
 import {connect } from 'react-redux'
 class Home extends Component {
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
<Body style={{ alignItems: 'center' }} >
    
</Body>
<Right/>
</Header>
        <Content >

            <Text style={{marginTop:100, marginLeft:100}}>
     Home screeen
            </Text>
            </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


 const mapStateToProps=(state)=>({
   auth:state.auth
 })

export default connect(mapStateToProps)  (Home)