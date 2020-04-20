import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon,  Right, Body, Content, Title, Text, Tabs, Tab, TabHeading, View } from 'native-base'
import { StatusBar, ImageBackground, StyleSheet } from 'react-native'

export default class Fd extends Component {
    render() {
        return (
            <Container>

<Header style={{ backgroundColor: "#1b1464"  , height:150,}} hasTabs>
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
                    

                    <Right style={{marginBottom:100,  }}>
                    <Button rounded warning style={{height:30}}>
            <Text>FD Rates</Text>

          </Button>
                        
                    </Right>

                </Header>
                
                <Tabs
                 tabBarUnderlineStyle={{ backgroundColor: '#f3a549', }}
                 

                >
                    
          <Tab heading={ <TabHeading style={{backgroundColor: "#1b1464"}}><Text>1.Amount</Text></TabHeading>}>
            
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#1b1464"}}><Text>2.Tenure</Text></TabHeading>}>
         
          </Tab>
          <Tab heading={ <TabHeading  style={{backgroundColor: "#1b1464"}}><Text>3.Interst</Text></TabHeading>}>
            
          </Tab>
        </Tabs>

              <Content>

              </Content>
              <View style={styles.footerbox}>

              </View>
        
            </Container>
        )
    }
}


 const styles= StyleSheet.create({
     footerbox:{

        height: 64,
     backgroundColor: '#e1e4eb'
      }

 })