
import React, { Component } from 'react'

import { Container, Header, Tabs, Text, Tab, TabHeading, Title,Item, Input, Button, Body, View,Icon, Left } from 'native-base'
import { StyleSheet ,StatusBar} from 'react-native'
export default class Beneficiary extends Component {
  render() {
    return (
      <Container>

        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>


          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left>
            <Button transparent style={styles.btnclose}>
              <Icon name='close'
                onPress={() => this.props.navigation.navigate('')}
              />
              
            </Button>
            <Body style={styles.heddertext} >
                        <Title style={styles.headertext}>Beneficiaries</Title>
                    </Body>
          </Left>
         
        </Header>


        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}>
          <Tab heading={<TabHeading style={styles.tabColor}><Text>Spark</Text></TabHeading>}>
            <Button block warning style={styles.Addbtnbeni}

              onPress={() => this.props.navigation.navigate('AddBeneficiarys')}>
              <Text>Add beneficiries</Text>

            </Button>
          </Tab>


          <Tab heading={<TabHeading style={styles.tabColor}><Text>Others</Text></TabHeading>}>
            <Button block warning style={styles.Addbtnbeni}

              onPress={() => this.props.navigation.navigate('Otherbank')}>
              <Text>Add beneficiries</Text>

            </Button>

          </Tab>




        </Tabs>
      </Container>


    )
  }
}


const styles = StyleSheet.create({
  headerText: {
    color: 'white'
  },


  forgetText: {
    marginLeft: 300,

    marginTop: 10,
    color: "#f3a549",

  },
  tabColor: {
    backgroundColor: "#1b1464"
  },

  textInput: {
    marginTop: 20,
    width: 328,
    marginLeft: 40,


  },
  

  btnclose: {
    marginTop:20,
    width: 80,
    marginLeft:-100,


  },

 
  headertext: {
    marginTop: -37,
    width: 150,
    marginLeft:-60,
    fontSize:24,


  },
  textData: {
    marginTop: 10,
    marginLeft: 20

  },
  Addbtnbeni: {
    marginTop: 450,
    marginLeft: 35,
    width: 340,
  }
})


