import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  View,
  ListItem,
  Right,
  Left,
  Body,
  Icon,
} from 'native-base';
import {
  StatusBar,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import Modal from 'react-native-modal';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import {
  createOtpForSchedulePayout,
  createSchedulePayout,
} from '../../Redux/actions/TransferAction';
import {connect} from 'react-redux';
class Transfer_Schedule_Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      mobileOtp: ' ',
      userDetails: {},
    };
  }
  componentDidMount = async () => {
    try {
      const data = await AsyncStorage.getItem('Loginuser');
      const logindetail = JSON.parse(data);
      this.setState({
        userDetails: logindetail,
      });
    } catch (e) {
      console.log(e);
    }
  };

  createOtp = () => {
    const {params} = this.props.route;
    const scheduledata = {
      transferType: params.type.toString(),
      benAccId: params.bennid,
      customerId: this.state.userDetails.memberid,
      amount: params.amount,
      startDate: params.date,
    };
    console.log(scheduledata);
    this.props.createOtpForSchedulePayout(scheduledata).then(() => {
      const {transferDetails} = this.props;
      if (transferDetails.otpSchedule.code === '200') {
        this.setState({
          isVisible: true,
        });
      }
    });
  };
  toggelclose = () => {
    this.setState({
      isVisible: false,
    });
  };

  OtpDetails = () => {
    const {params} = this.props.route;
    const {transferDetails} = this.props;
    const otpScheduledata = {
      amount: params.amount,
      frequency: params.scheduledays,
      repeat: '2',
      description: params.desc,
      transferType: params.type.toString(),
      type: params.method,
      benAccId: params.bennid,
      customerId: this.state.userDetails.memberid,
      // startDate: params.date,
      startDate: '2020/05/24',
      refNo: transferDetails.otpSchedule.Data.refNo.toString(),
      otp: this.state.mobileOtp,
    };

    this.props.createSchedulePayout(otpScheduledata).then(() => {
      if (transferDetails.scheduleDetails.code === '200') {
        this.setState({
          isVisible: false,
        });
       
        this.props.navigation.navigate('Schedule_Progress', {
          accNo: params.accountNo,
          amount: params.amount,
          date: params.date,
          method: params.method,
          userName: params.userName,
          scheduledays: params.scheduledays,
        });
      }
    });
  };

  resendOtpDetails = () => {
    const {params} = this.props.route;
    const resendOtp = {
      transferType: params.type,
      benAccId: params.bennid,
      customerId: this.state.userDetails.memberid,
    };
    this.props.resendOtpForSchedulePayout(resendOtp);
  };

  render() {
    const {params} = this.props.route;
    console.log(params);
    const {mobileOtp} = this.state;
    const {transferDetails} = this.props;
    console.log(transferDetails.scheduleDetails);
    return (
      <Container>
        <ScrollView>
          <ImageBackground
            source={require('../../images/home/confirm_bg.png')}
            style={{height: '100%', width: '100%'}}>
            <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

            <Right>
              <Image
                source={require('../../images/billpay/faq_ic.png')}
                style={{marginLeft: 350, marginTop: 30}}
              />
            </Right>

            <ListItem style={styles.hedderview}>
              <Button transparent>
                <Icon
                  style={{color: '#ffffff'}}
                  name="arrow-back"
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </Button>

              <Body>
                <Text style={styles.headerbal}>Confirm schedule</Text>
              </Body>
            </ListItem>
            <ListItem
              style={{borderColor: 'transparent', justifyContent: 'center'}}>
              <View style={styles.header}>
                <Text style={styles.moneybal}>₹ {params.amount}</Text>
              </View>
            </ListItem>

            <View style={styles.overlopcurd}>
              <Content padder>
                <View style={{marginHorizontal: 23}}>
                  <View style={styles.curd_user}>
                    <ListItem
                      style={{
                        borderColor: 'transparent',
                        justifyContent: 'center',
                      }}>
                      <Left>
                        {params.type === 2 ? (
                          <Image
                            source={require('../../images/home/pet_bank.png')}
                            style={styles.bank}
                          />
                        ) : params.type === 3 ? (
                          <Image
                            source={require('../../images/Transfer/Spark_Business.png')}
                            style={styles.bank}
                          />
                        ) : params.type === 4 ? (
                          <Image
                            source={require('../../images/Transfer/otherbank.png')}
                            style={styles.bank}
                          />
                        ) : params.type === 1? (
                          <Image
                            source={require('../../images/Transfer/mybank.png')}
                            style={styles.bank}
                          />
                        ) : null}
                      </Left>

                      <View style={{marginRight: 60}}>
                        <Text style={styles.usertext}>{params.userName} </Text>
                        <Text style={styles.curdtext}>
                          Account ID: {params.accountNo}
                          <Text style={styles.moneytext}>
                            
                           
                          </Text>
                        </Text>
                        {/* <Text style={styles.curdtext}>IFSC code  <Text style={styles.moneytext} > HDFC0003487</Text> </Text> */}
                      </View>
                    </ListItem>
                  </View>

                  <View style={styles.curdview}>
                    <Text style={styles.transctiondetials}>
                      Transaction details
                    </Text>
                    <Text style={styles.textdetails}>
                      House loan payment 2020...
                    </Text>
                    <Text style={styles.textdetails}>Transfer charges</Text>
                    <Text style={styles.textdetails}>Rs .0</Text>
                  </View>

                  <View style={styles.curd_user}>
                    <Text style={styles.transctiondetials}>Scheduled</Text>

                    <ListItem style={styles.listview}>
                      <Image
                        source={require('../../images/Transfer/baseline-alarm.png')}
                      />

                      <Body>
                        <Text style={styles.textdetails}>
                          Starts on :{params.date}
                        </Text>
                      </Body>
                    </ListItem>

                    <ListItem style={styles.listview}>
                      <Image
                        style={{height: 15, width: 15}}
                        source={require('../../images/Transfer/calender.png')}
                      />

                      <Body>
                        <Text style={styles.textdetails}>
                          {params.scheduledays}, transfers done
                        </Text>
                      </Body>
                    </ListItem>
                  </View>
                </View>

                <Button
                  block
                  success
                  style={styles.btn}
                  onPress={this.createOtp}>
                  <Text style={{color: '#ffffff'}}>Confirm</Text>
                </Button>
              </Content>
            </View>
          </ImageBackground>
        </ScrollView>

        <Modal
          style={{
            width: 280,
            maxHeight: 200,
            alignSelf: 'center',
            marginTop: 200,
          }}
          isVisible={this.state.isVisible}>
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.otp}>Enter OTP</Text>
            <Text style={styles.otpText}>
              {' '}
              Enter the 5-digit one time password (OTP)
            </Text>
            <View style={{alignSelf: 'center'}}>
              <SmoothPinCodeInput
                codeLength={5}
                cellStyle={{
                  borderBottomWidth: 1,
                  borderColor: 'gray',
                  width: 20,
                }}
                cellStyleFocused={{
                  borderColor: 'black',
                }}
                value={mobileOtp}
                onTextChange={mobileOtp => this.setState({mobileOtp})}
              />
            </View>
            <ListItem
              style={{
                justifyContent: 'space-around',
                marginTop: 10,
                borderColor: 'transparent',
              }}>
              <Text>2:00.0</Text>
              <TouchableOpacity>
                <Text style={styles.resendOtp} onPress={this.resendOtpDetails}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{justifyContent: 'flex-end'}}>
              <Text style={styles.cancel} onPress={this.toggelclose}>
                Cancel
              </Text>
              <TouchableOpacity onPress={this.otpsubmit}>
                <Text style={styles.otpSubmit} onPress={this.OtpDetails}>
                  Submit
                </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transferDetails: state.transferDetails,
});

export default connect(
  mapStateToProps,
  {createOtpForSchedulePayout, createSchedulePayout},
)(Transfer_Schedule_Confirm);

const styles = StyleSheet.create({
  moneybal: {
    fontSize: 36,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
  },

  headerbal: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -50,
  },
  listview: {
    borderColor: 'transparent',
    height: 0,
  },
  hedderview: {
    borderColor: 'transparent',
    height: 0,
    marginTop: -20,
  },
  text: {
    fontSize: 14,
    color: '#ffffff',
    alignSelf: 'center',
  },
  curdview: {
    backgroundColor: '#ffffff',
    height: 102,

    borderRadius: 6,
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
    height: 92,
    marginVertical: 20,
    borderRadius: 6,
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
    marginTop: 80,
    marginVertical: 21,
    marginHorizontal: 16,
    backgroundColor: '#1b1464',
  },
  usertext: {
    color: '#1b1464',
    fontFamily: 'Nunnito',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: -80,
  },
  moneytext: {
    color: 'red',
    fontFamily: 'Nunnito',
    fontWeight: 'bold',
    fontSize: 14,
  },

  curdtext: {
    color: '#1b1464',
    fontFamily: 'Nunnito',
    fontSize: 16,
    marginLeft: -80,
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
    height: 24,
  },
  overlopcurd: {
    height: '100%',
    backgroundColor: '#ffffff',
    width: '100%',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bank: {
    height: 43,
    width: 38,
    alignSelf: 'center',
  },
  otp: {
    width: 94,
    height: 27,
    marginTop: 15,
    color: '#000000',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  resendOtp: {
    width: 91,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    textAlign: 'right',
  },
  cancel: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    color: '#999999',
    textAlign: 'left',
  },
  otpText: {
    marginLeft: 15,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },

  otpSubmit: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f7931e',
    textAlign: 'right',
  },
});
