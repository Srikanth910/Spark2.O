import React, {Component} from 'react';
import {
  Header,
  Container,
  Body,
  Text,
  Content,
  ListItem,
  Item,
  Input,
  Button,
  Icon,
  View,
  Left,
  Right,
  Title,
} from 'native-base';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Transfer_Money extends Component {
  render() {
    return (
      <Container style={styles.Container}>
        <Header icon="eye" style={{backgroundColor: '#1b1464', height: 80}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('')}
              />
            </Button>
          </Left>
          <Body style={{alignItems: 'flex-start', marginLeft: 40}}>
            <Title style={styles.mpintext}>Transfer money</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={{alignItems: 'center', marginVertical: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              
               
                <TouchableOpacity
 onPress={() =>
    this.props.navigation.navigate('To_myBankAcc', {
      type: 2,
      name: 'To Spark Business Account',
    })
  }>

                 <View style={styles.box}>
                    <Image
                      source={require('../../images/Transfer/Spark_Saving.png')}
                      style={styles.sparksavinges}
                    />
                    <Text style={styles.iconText}>Spark Savings {'\n'}</Text>
                  </View>
                </TouchableOpacity>
            

              <View style={styles.box}>
                <Image
                  source={require('../../images/Transfer/Spark_Business.png')}
                  style={styles.billIcon}
                />
                <Text style={styles.iconText}>Spark Business</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AddBank_Account')
                }>
                <View style={styles.box}>
                  <Image
                    source={require('../../images/Transfer/My_Bank.png')}
                    style={styles.broadband}
                  />
                  <Text style={styles.iconText}>My Bank Account</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('To_myBankAcc', {
                    type: 4,
                    name: 'To Other Bank Account',
                  })
                }>
                <View style={styles.box}>
                  <Image
                    source={require('../../images/Transfer/Other_Bank.png')}
                    style={styles.otherbank}
                  />
                  <Text style={styles.iconText}>Other Bank Account</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.Recent}>Recent</Text>
          </View>

          <View style={{alignItems: 'center', marginVertical: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.box}>
                <Image
                  source={require('../../images/Transfer/Spark_Saving.png')}
                  style={styles.sparksavinges}
                />
                <Text style={styles.iconText}>Spark Savings {'\n'}</Text>
              </View>

              <View style={styles.box}>
                <Image
                  source={require('../../images/Transfer/Spark_Business.png')}
                  style={styles.billIcon}
                />
                <Text style={styles.iconText}>Spark Business</Text>
              </View>

              <View style={styles.box}>
                <Image
                  source={require('../../images/Transfer/My_Bank.png')}
                  style={styles.broadband}
                />
                <Text style={styles.iconText}>My Bank Account</Text>
              </View>
              <View style={styles.box}>
                <Image
                  source={require('../../images/Transfer/Other_Bank.png')}
                  style={styles.otherbank}
                />
                <Text style={styles.iconText}>Other Bank Account</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.Recent}>Scheduled</Text>
          </View>

          <View style={styles.curd_user}>
            <ListItem
              style={{borderColor: 'transparent', justifyContent: 'center'}}>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.usertext}>House Loan Payment 2020...</Text>
                <Text style={styles.curdtext}>Upcoming</Text>

                <Text style={styles.curdtext}>Mothaly,6/48 transfer done</Text>

                <ListItem style={{borderColor: 'transparent'}}>
                  <Text style={styles.curdtext}>Location</Text>
                  <Text style={styles.curdtext}>Location</Text>
                  <Button full transparent>
                    <Icon active name="trash" />
                  </Button>
                </ListItem>
              </View>
              <View>
                <Right>
                  <Button transparent>
                    <Icon
                      style={styles.arrowbutton}
                      name="ios-arrow-forward"
                      onPress={() => this.props.navigation.navigate('')}
                    />
                  </Button>
                </Right>
              </View>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  billpay: {
    height: 245,
    backgroundColor: '#ffffff',
    marginTop: 16,
  },
  curd_user: {
    backgroundColor: '#eae9f5',
    height: 107,
    marginLeft: 21,
    marginRight: 21,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  curdtext: {
    color: '#1b1464',
    fontFamily: 'Nunnito',
    fontSize: 14,
    textAlign: 'left',
  },

  box: {
    backgroundColor: '#ffffff',
    height: 75,
    width: 75,

    borderRadius: 10,
    marginLeft: 16,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
  },
  billIcon: {
    height: 42,
    width: 45,
    marginTop: 5,
    alignSelf: 'center',
  },
  sparksavinges: {
    height: 40,
    width: 34,
    marginTop: 5,
    alignSelf: 'center',
  },

  otherbank: {
    height: 42,
    width: 60,
    marginTop: 5,
    alignSelf: 'center',
  },
  broadband: {
    height: 42,
    width: 40,
    marginTop: 5,
    alignSelf: 'center',
  },

  iconText: {
    fontFamily: 'Nunito',
    fontSize: 12,
    color: '#474a4f',
    textAlign: 'center',
  },

  savingData: {
    height: 36,
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#aaadb2',
    marginLeft: 10,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  text: {
    height: 40,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'normal',
  },
  mpintext: {
    // width: 114,
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'normal',
    alignItems: 'center',
  },

  Recent: {
    height: 27,
    marginLeft: 21,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },
});
