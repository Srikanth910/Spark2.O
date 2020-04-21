import React, { Component } from 'react'
import { Container, Content } from 'native-base'

export default class Agreement extends Component {
    render() {
        return (
        <Container>

<Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
                <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>

                    <Left>
                    <Button transparent>
              <Icon name='close' 
              onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>
                    </Left>
                    <Body style={{alignItems:'flex-start' }} >
                        <Title   >Agreement</Title>
                    </Body>
                    </Header>
                    <Content>

                    </Content>
                    <Button bordered warning style={styles.btnLogin}
                   onPress={() => this.props.navigation.navigate('Login')}
                >
            <Text> I  AGREE</Text>
          </Button>

                   

        </Container>
        )
    }
}


  const style= StyleSheet.create({
      btnLogin:{
          marginLeft: 16,
          marginRight: 16,
         marginBottom: 16,
      }
  })