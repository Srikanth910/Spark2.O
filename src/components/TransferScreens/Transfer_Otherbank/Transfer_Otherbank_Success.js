import React, {Component} from 'react';
import {Container, Header, Content, Button, View, ListItem} from 'native-base';
import {
  StatusBar,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Transfer_Schedule_Success from '../Transfer_Schedule_Success';

class Transfer_Otherbank_Success extends Component {
  render() {
    const {transferDetails} = this.props;
    const {params} = this.props.route;
     console.log(transferDetails)

    return (
      <Container>
        <ImageBackground
          source={require('../../../images/home/success_bg.png')}
          style={{height: '100%', width: '100%'}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <ScrollView>
            <ListItem
              style={{borderColor: 'transparent', justifyContent: 'center'}}>
              <View style={styles.header}>
                <Text style={styles.headerbal}>₹ {params.amount}</Text>
                <Text style={styles.text}>Paid successfully</Text>
                <Text style={styles.text}>
                  TXN ID: {transferDetails.withinSpark.trnasId}
                </Text>
              </View>
            </ListItem>

            <View style={styles.overlopcurd}>
              <Content padder>
                <View style={{marginHorizontal: 23}}>
                  <View style={styles.curd_user}>
                    <ListItem >
                      <Image
                        source={require('../../../images/Transfer/Other_Bank.png')}
                        style={styles.bank}
                      />
                      <View style={{paddingLeft: 20}}>
                        <Text style={styles.usertext}>{params.userName}</Text>
                        <Text style={styles.curdtext}>
                          Account ID :{params.accountNo}
                        </Text>

                        <Text style={styles.curdtext}>
                          IFSC code :{params.IFCS}{' '}
                        </Text>
                      </View>
                    </ListItem>
                  </View>
                  <View style={styles.curdview}>
                    <Text style={styles.transctiondetials}>
                      Transaction details
                    </Text>
                    <Text style={styles.textdetails}>For family expenses</Text>
                    <Text style={styles.textdetails}>{params.type}</Text>
                    <Text style={styles.textdetails}>Transfer charges</Text>
                    <Text style={styles.textdetails} />
                  </View>
                </View>

                <Button
                  block
                  success
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={{color: '#ffffff'}}>Success</Text>
                </Button>
              </Content>
            </View>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transferDetails: state.transferDetails,
});

export default connect(
  mapStateToProps,
  {},
)(Transfer_Otherbank_Success);

const styles = StyleSheet.create({
  headerbal: {
    fontSize: 36,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#ffffff',

    alignSelf: 'center',
  },
  curdview: {
    backgroundColor: '#ffffff',
    height: 114,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  curd_user: {
    backgroundColor: '#ffffff',
    height: 130,
    marginVertical: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  img: {
    height: 198,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginHorizontal: 16,
  },
  btn: {
    marginVertical: 21,
    marginHorizontal: 16,
    marginTop: 190,
  },
  usertext: {
    color: '#1b1464',
    fontFamily: 'Nunnito',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },

  curdtext: {
    color: '#1b1464',
    fontFamily: 'Nunnito',

    fontSize: 14,
    textAlign: 'left',
  },

  transctiondetials: {
    fontSize: 16,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#707070',
    textAlign: 'left',
    marginLeft: 18,
    marginTop: 10,
  },
  textdetails: {
    fontSize: 14,
    textAlign: 'left',
    color: '#707070',
    marginLeft: 18,
  },
  overlopcurd: {
    height: '100%',
    backgroundColor: '#ffffff',
    width: '100%',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bank: {
    height: 40,
    width: 64,
    alignSelf: 'center',
  },
});
