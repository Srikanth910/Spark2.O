import React, {Component} from 'react';
import {
  Header,
  Container,
  Body,
  Text,
  Content,
  Button,
  Icon,
  ListItem,
  View,
  Left,
  Right,
  Title,
} from 'native-base';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {connect} from 'react-redux';
import {getBeneficiaryBank} from '../../Redux/actions/TransferAction';

class AddBank_Account extends Component {
  componentDidMount() {

    const data = {
        "membarId": "1421",
        "isPrimaryAccunt": "true",
        "isWithInCoop": "false",
        "type": "2",
      };
   
    this.props.getBeneficiaryBank(data).then(() => {
      const {transferDetails} = this.props;
      if (transferDetails.code === '200') {
        this.props.navigation.navigate('To_myBankAcc',{ type: 1,
            name: 'To My Bank Account',});
      } else {
        this.props.navigation.navigate('MyBank_Account');
      }
    });
  }

  render() {
    console.log("vale",this.props.transferDetails.code);
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
            <Title style={styles.mpintext}>To My Bank Account</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem style={styles.listview}>
            <Text style={styles.savingData}>Balance Available</Text>
            <Image
              source={require('../../images/rupi_icon.png')}
              style={{
                width: 8,
                height: 16,
                alignSelf: 'center',
                marginLeft: 120,
              }}
            />
            <Body>
              <Text style={styles.money}>1,80.000</Text>
            </Body>
          </ListItem>

          <ListItem style={styles.listview}>
            <Image
              source={require('../../images/faq.png')}
              style={{width: 16, height: 16, alignSelf: 'center'}}
            />
            <Body>
              <Text style={styles.Listtext}>
                {' '}
                Please Add a Bank Account in order to transfer
              </Text>
            </Body>
          </ListItem>

          <View>
            <Image
              source={require('../../images/Transfer/ToMy_Bank.png')}
              style={{width: 271, height: 250, alignSelf: 'center'}}
            />
          </View>
        </Content>

        <Button
          block
          warning
          style={styles.btnSubmit}
          onPress={() => this.props.navigation.navigate('MyBank_Account')}>
          <Text style={styles.submit}>Add My Bank Account </Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transferDetails: state.transferDetails.getbackDetials
});

export default connect(
  mapStateToProps,
  {getBeneficiaryBank},
)(AddBank_Account);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  listview: {
    borderColor: 'transparent',
    height: 15,
  },
  iconText: {
    fontFamily: 'Nunito',
    fontSize: 12,
    color: '#474a4f',
    textAlign: 'center',
  },
  billIcon: {
    height: 95,
    width: 90,
    marginTop: 5,
    alignSelf: 'center',
  },

  savingData: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#aaadb2',
    marginLeft: 16,
    fontWeight: 'normal',
  },
  text: {
    height: 36,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginRight: 16,
    marginLeft: 16,
    fontWeight: 'normal',
  },
  mpintext: {
    width: 200,
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,
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

  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    marginTop: 50,
  },
  submit: {
    // width:52,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },

  listview: {
    borderColor: 'transparent',
    height: 15,
  },

  Listtext: {
    height: 22,
    fontSize: 14,
    textAlign: 'left',
    color: '#474a4f',
  },

  money: {
    marginLeft: 10,
    fontSize: 20,
  },
});
