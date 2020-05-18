import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  View,
  ListItem,
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
import Modal from 'react-native-modal';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {connect} from 'react-redux';
import {getpayoutstatus,createOtpOutside,TransferWithincoop} from '../../../Redux/actions/TransferAction';
import AsyncStorage from '@react-native-community/async-storage';
// import {getpayoutstatus,  createOtpOutside} from '../../../Redux/actions/TransferAction';
class Transfer_Otherbank_confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      mobileOtp: '',
       amount:'',
        accountNo:'',
         IFCS:'',
         userDetails:{},
    };
  }

  toggelclose = () => {
    this.setState({
      isVisible: false,
    });
  };
  toggelopen = () => {
    this.setState({isVisible: true});
  };

  componentDidMount = async() => {

    try{
      const data=  await  AsyncStorage.getItem('Loginuser');
    
       const  logindetail=JSON.parse(data)
        this.setState({
           userDetails: logindetail

        })
   } catch(e){
      console.log(e)
   }
     const{params}=this.props.route
    const data = {
      memberID:this.state.userDetails.memberid,
      amount: params.amount,
      type: params.method
    };

    this.props.getpayoutstatus(data);
  };

  handleConfirm = () => {
    const {payoutDetails} = this.props.transferDetails;
    const {params} = this.props.route;

    const otp = {
      custId: this.state.memberid,
      TransType: params.method,
      amount: params.amount,
      charges:payoutDetails.charges.toString()
    };

    this.props.createOtpOutside(otp).then(() => {
      const {transferDetails} = this.props;

      if (transferDetails.otpOutsideDetails.code === '200') {
        this.setState({
          isVisible: true,
        });
      }
    });
  };

  otpVerification = () => {
    const {params} = this.props.route;
    const {transferDetails} = this.props;

    const otpdetail = {
      membarId: this.state.userDetails.memberid,
      accountNo: params.accountNo,
      accountHolderName: params.userName,
      isfcCode: params.IFCS,
      "bank": "OTHERS",
      amount: params.amount,
      discription: params.desc,
      refNo: transferDetails.otpOutsideDetails.refNo.toString(),
      otp: this.state.mobileOtp,
      paymentType: params.method,
      charges:transferDetails.payoutDetails.charges.toString()
    };

    this.props.TransferWithincoop(otpdetail).then(() => {
      const {transferDetails} = this.props;

      if (transferDetails.withinCoopDetail.code === '200') {


        this.setState({
          isVisible: false,
           amount:params.amount,
          accountNo:params.accountNo,
           IFCS:params.IFCS
        });

         this.props.navigation.navigate('Transfer_Otherbank_Success', {amount:this.state.amount, accountNo:this.state.accountNo, IFCS:this.state.IFCS,})
      }
    });
  };

  render() {
    const {mobileOtp} = this.state;
    const {params} = this.props.route;
    const {transferDetails} = this.props;
    console.log(params);

    return (
      <Container>
        <ImageBackground
          source={require('../../../images/home/confirm_bg.png')}
          style={{height: '100%', width: '100%'}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
              marginVertical: 30,
            }}>
            <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Loasmoney')}
              style={{color: '#ffffff'}}
            />
            <Text style={styles.headerText}>Confirm Payment</Text>

            <Image source={require('../../../images/billpay/faq_ic.png')} />
          </View>

          <ScrollView>
            <ListItem
              style={{borderColor: 'transparent', justifyContent: 'center'}}>
              <Image source={require('../../../images/home/white_rupi.png')} />
              <View style={styles.header}>
          <Text style={styles.headerbal}>{params.amount}</Text>
              </View>
            </ListItem>

            <View style={styles.overlopcurd}>
              <Content padder>
                <View style={{marginHorizontal: 23}}>
                  <View style={styles.curd_user}>
                    <ListItem
                      style={{borderColor: 'transparent', marginVertical: 10}}>
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
                          IFSC code :{params.IFCS}
                        </Text>
                      </View>
                    </ListItem>
                  </View>
                  <View style={styles.curdview}>
                    <Text style={styles.transctiondetials}>
                      Transaction details
                    </Text>
                    <Text style={styles.textdetails}>For family expenses</Text>
                    <Text style={styles.textdetails}>{params.method}</Text>
                    <Text style={styles.textdetails}>Transfer charges</Text>
                    <Text style={styles.textdetails}>
                      Rs .{transferDetails.payoutDetails.charges}
                    </Text>
                  </View>
                </View>

                <Button
                  block
                  success
                  style={styles.btn}
                  onPress={this.handleConfirm}>
                  <Text style={{color: '#ffffff'}}>Success</Text>
                </Button>
              </Content>
            </View>
          </ScrollView>
        </ImageBackground>

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
            <ListItem style={{justifyContent: 'space-around', marginTop: 10}}>
              <Text>2:00.0</Text>
              <TouchableOpacity>
                <Text style={styles.resendOtp} onPress={this.otpResend}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{justifyContent: 'flex-end'}}>
              <Text style={styles.cancel} onPress={this.toggelclose}>
                Cancel
              </Text>
              <TouchableOpacity>
                <Text
                  style={styles.otpSubmit}
                  onPress={this.otpVerification}
                  // this.props.navigation.navigate('Transfer_Otherbank_Success')
                >
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
  {getpayoutstatus,createOtpOutside,TransferWithincoop},
)(Transfer_Otherbank_confirm);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffffff',
  },

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
    backgroundColor: '#1b1464',
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
