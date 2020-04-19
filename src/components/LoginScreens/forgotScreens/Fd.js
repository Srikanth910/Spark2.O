import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon,  Right, Body, Content, Title, Text, Tabs, Tab, TabHeading } from 'native-base'
import { StatusBar, ImageBackground } from 'react-native'

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
                
                {/*<Tabs
                 tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}
                 

                >
                    
          <Tab heading={ <TabHeading><Text>1.Amount</Text></TabHeading>}>
            
          </Tab>
          <Tab heading={ <TabHeading><Text>2.Tenure</Text></TabHeading>}>
         
          </Tab>
          <Tab heading={ <TabHeading><Text>3.Interst</Text></TabHeading>}>
            
          </Tab>
        </Tabs> */}


        <Tabs   style={{backgroundColor:'red'}}>
          <Tab heading="Tab1" >
            
          </Tab>
          <Tab heading="Tab2">
          
          </Tab>
          <Tab heading="Tab3">
         
          </Tab>
        </Tabs>
            </Container>
        )
    }
}
