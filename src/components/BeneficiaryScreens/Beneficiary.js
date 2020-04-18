
import React, { Component } from 'react'
import { Container, Header, Tabs, Text, Tab, ListItem, TabHeading, Title, Item, Input, Button, Body, View, Icon, Left, Right } from 'native-base'
import { StyleSheet, StatusBar, Image } from 'react-native';
import Modal from 'react-native-modal';


export default class Beneficiary extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      radioBtnOne: false,
      radioBtnTwo: false,
      password: '',

    };
  }
  toggelopen = () => {
    this.setState({
      ismodelopen: !this.state.ismodelopen
    })
  }
  changepage = () => {
    this.setState({
      ismodelopen: false
    })
    this.props.navigation.navigate('passwordSet')
  }
  render() {
    const { password } = this.state
    return (
      <Container>

        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
          <Left>
            <Button transparent style={styles.btnclose}>
              <Icon name='close'
                onPress={() => this.props.navigation.navigate('Otherbank')}
              />
            </Button>
            <Body style={{ alignItems: 'flex-start', marginRight: -250, bottom: 30 }}>
              <Title >Beneficiaries</Title>
            </Body>
          </Left>


          <View>
            <Modal style={{ width: 280, maxHeight: 200, alignSelf: 'center', marginTop: 200 }} isVisible={this.state.ismodelopen} >
              <View style={{ backgroundColor: 'white' }}>
                
                <Text style={styles.otpText}>Add Spark member as beneficiary</Text>
                <Text style={styles.otpText}>Add a bank account as beneficiary</Text>
                <ListItem style={{ justifyContent: 'flex-end' }} >
                  <Text style={styles.cancel} onPress={this.toggelopen}>Cancel</Text>
                </ListItem>
              </View>
            </Modal>
          </View>


          <Right>
            <Button transparent style={styles.btnclose} onPress={this.toggelopen} >
              <Icon name='md-add' />
              {/* onPress={() => this.props.navigation.navigate('')} */}
            </Button>
          </Right>

        </Header>


        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}>
          <Tab heading={<TabHeading style={styles.tabColor}><Text>Spark</Text></TabHeading>}>

            {/* <Image style={styles.imagestyle} source={require('../../images/Spark_Profile.png')}
              style={{ height: 450, width: 255, left: 70, bottom: -50 }}>
            </Image> */}

            <Button block warning style={styles.Addbtnbeni}

              onPress={() => this.props.navigation.navigate('AddBeneficiarys')}>
              <Text>Add beneficiries</Text>

            </Button>
          </Tab>


          <Tab heading={<TabHeading style={styles.tabColor}><Text>Others</Text></TabHeading>}>
            {/* <Image style={styles.imagestyle} source={require('../../images/Spark_Profile.png')} */}
              {/* style={{ height: 450, width: 255, left: 70, bottom: -50 }}>
            </Image> */}





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
    color: 'white',



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
cancel:{
    width: 91,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    textAlign: 'right',
    marginRight:180,
    



},

otpText:{
  
  height: 70,
  fontSize: 18,
  marginLeft:30

},

  btnclose: {
    marginTop: 20,
    width: 80,
    marginLeft: 10,


  },


  headertext: {
    marginTop: -37,
    width: 150,
    marginLeft: -60,
    fontSize: 24,


  },
  textData: {
    marginTop: 10,
    marginLeft: 20

  },
  Addbtnbeni: {
    marginTop: 20,
    marginLeft: 16,
    width: 380,
  }
})

