import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon,  Right, Body, Content, Title } from 'native-base'
import { StatusBar } from 'react-native'

export default class Fd extends Component {
    render() {
        return (
            <Container>

<Header style={{ backgroundColor: "#1b1464"  , height:190,}}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                
                        <Left style={{marginBottom: 100,}} >
                            
                            <Button transparent  >
                                <Icon name='close'
                                    
                                />
                            </Button>
                            

                        </Left>
                        <Body style={{marginBottom: 100,}}>
                       
                       <Title>Open Fixed Deposit</Title>
                            
                        </Body>
                    

                    <Right>
                        
                    </Right>

                </Header>
                <Content>

                </Content>

            </Container>
        )
    }
}
