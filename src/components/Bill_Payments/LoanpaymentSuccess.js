import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  View,
  ListItem,
  Item,
  Left,
  Right,
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
import {max} from 'react-native-reanimated';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {NetworkInfo} from 'react-native-network-info';
import {getActivePromoCodes,otpForBillPayment} from '../../Redux/actions/billpayAction';
class LoanpaymentSuccess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      mobileOtp: '',
      deviceIp:'',
    };
  }


   componentDidMount(){
    NetworkInfo.getIPAddress().then(ipAddress => {
        this.setState({
          deviceIp: ipAddress,
        });
      });
   }
  toggleopen = () => {
    this.setState({
      isVisible: true,
    });
  };
  toggelclose = () => {
    this.setState({
      isVisible: false,
    });
  };

  handlesumbit = () => {
    this.setState({
      isVisible: false,
    }),
      this.props.navigation.navigate('Home');
  };
  handlePromecode = () => {
    const data = {
      CustomerId: '1338',
    };

    this.props.getActivePromoCodes(data);
  };

  handleOTP = () => {
    const {Billcatagory} = this.props;
     const {params}=this.props.route

    const data = {
      DiscountAmount: '0',
      promocodeid: '',
      customerName: Billcatagory.billFetchDetails.response.CustomerName,
      billAmount:Billcatagory.billFetchDetails.response.BillAmount,
      referenceId:Billcatagory.billFetchDetails.response.TransactionId,
     ip:this.state.deviceIp,
      operator:params.name,
      customerParams:Billcatagory.billFetchDetails.customerParams,
      "customerID":"1338",
      billerId:Billcatagory.billFetchDetails.billerId
    };

    this.props.otpForBillPayment(data)
  };
  render() {
    const {Billcatagory} = this.props;
    console.log(Billcatagory.otpDetails);
    const {mobileOtp} = this.state;
    return (
      <Container>
        <ImageBackground
          source={require('../../images/home/confirm_bg.png')}
          style={{height: '100%', width: '100%', flex: 1}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Icon name="arrow-back" style={{color: '#ffffff'}} />

            <Text style={{color: '#ffffff', fontSize: 20, textAlign: 'center'}}>
              Confirm Loan Payment
            </Text>

            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>

          <ListItem style={{borderColor: 'transparent'}}>
            <Image source={require('../../images/billpay/logo_b.png')} />
            <View style={{marginLeft: 40}}>
              <Item style={{borderColor: 'transparent', alignSelf: 'center'}}>
                <Image
                  source={require('../../images/home/blue_rupi.png')}
                  style={{height: 23, width: 15}}
                />
                <Text style={styles.headerbal}>
                  ₹ {Billcatagory.billFetchDetails.response.BillAmount}
                </Text>
              </Item>

              {/* <Text style={styles.text}>
                            Paying AEON CREDIT Mumbai


                        </Text > */}
            </View>
          </ListItem>
          <TouchableOpacity onPress={this.handlePromecode}>
            <Text style={styles.promocode}>Have a promocode?</Text>
          </TouchableOpacity>
          <View style={styles.overlopcurd}>
            <ScrollView>
              <Content padder>
                <View
                  style={{
                    marginHorizontal: 23,
                    justifyContent: 'space-around',
                  }}>
                  <View style={styles.curd_user}>
                    <ListItem style={{borderColor: 'transparent'}}>
                      {/* <Image source={require('../../images/home/pet_bank.png')} style={styles.bank} /> */}
                      <View style={{paddingLeft: 20}}>
                        <Text style={styles.usertext}>B.Srikanth</Text>
                        <Text style={styles.curdtext}>
                          Loan A/c no.{' '}
                          {Billcatagory.billFetchDetails.response.BillNumber}
                        </Text>
                      </View>
                    </ListItem>
                  </View>
                  <View style={styles.fulldetails}>
                    {/* <Left>
                                    <Image source={require('../../images/billpay/Airtel.png')} />

                                    </Left>
                                    <Right/> */}

                    <ListItem thumbnail>
                      <Left>
                        {/* <Image source={require('../../images/billpay/Airtel.png')} /> */}
                      </Left>
                      <Body>
                        <View style={{marginLeft: 15}}>
                          <Text style={styles.paymentName}>
                            BILLNumber:
                            {Billcatagory.billFetchDetails.response.BillNumber}
                          </Text>
                          <Text style={styles.textData}>
                            BILL DATE:
                            {Billcatagory.billFetchDetails.response.BillDate}
                          </Text>
                          <Text style={styles.textData} />
                          {/* <Text style={styles.textData}>Loan date              10 June 2020</Text>
                                    <Text style={styles.textData}> Loan Due date           20 June 2019</Text>
                                    <Text style={styles.textData}>EMI Principal              00.00
                                          </Text>
                                    <Text style={styles.textData}>Total EMI	     0.00
                                          </Text>
                                    <Text style={styles.textData}>EMI Interest	     0.00
                                      </Text>
                                    <Text style={styles.textData}>Total Out Standing    0.00
                                                       0.00
                                  </Text>
                                    <Text style={styles.textData}>Additional charges    0.00
                                          </Text>
                                    <Text style={styles.textData}>Convenience fee        0.00
                                        </Text>
                                        <Text style={styles.textData}>Payment mode          Cash
                                        </Text> */}
                        </View>
                      </Body>
                    </ListItem>
                    <View style={{alignSelf: 'center', bottom: 10}}>
                      {/* <Text style={styles.textData}>Loan date               
                                    <Text>
                                     10 June 2020
                                     </Text>
                                     </Text>
                                    <Text style={styles.textData}>Loan Due date        <Text style={{textAlign:'center'}}>
                                     10 June 2020
                                     </Text></Text>
                                    <Text style={styles.textData}>EMI Principal         <Text style={{textAlign:'center'}}>
                                     10 June 2020
                                     </Text>
                                          </Text>
                                    <Text style={styles.textData}>Total EMI	     :        <Text style={{textAlign:'center'}}>
                                     10 June 2020
                                     </Text>
                                          </Text>
                                    <Text style={styles.textData}>EMI Interest	:          <Text>
                                     10 June 2020
                                     </Text>   
                                      </Text>
                                    <Text style={styles.textData}>Total Out Standing :   0.00
                                                       0.00
                                  </Text>
                                    <Text style={styles.textData}>Additional charges   : 0.00
                                          </Text>
                                    <Text style={styles.textData}>Convenience fee      :  0.00
                                        </Text>
                                        <Text style={styles.textData}>Payment mode      :    Cash
                                        </Text> */}
                    </View>

                    {/*                                   
                                  <Image source={require('../../images/billpay/Airtel.png')} />
                                        <View style={{alignSelf:'flex-end'}}>
                                    <Text style={styles.paymentName}>AEON CREDIT</Text>
                                    <Text style={styles.textData}>Loan A/c No.              012345678901</Text>
                                    <Text style={styles.textData}> Loan period                JUNE</Text>
                                    <Text style={styles.textData}>Loan date              10 June 2020</Text>
                                    <Text style={styles.textData}> Loan Due date           20 June 2019</Text>
                                    <Text style={styles.textData}>EMI Principal              00.00
                                          </Text>
                                    <Text style={styles.textData}>Total EMI	     0.00
                                          </Text>
                                    <Text style={styles.textData}>EMI Interest	     0.00
                                      </Text>
                                    <Text style={styles.textData}>Total Out Standing    0.00
                                                       0.00
                             </Text>
                                    <Text style={styles.textData}>Additional charges    0.00
                                          </Text>
                                    <Text style={styles.textData}>Convenience fee        0.00
                                        </Text>
                                        <Text style={styles.textData}>Payment mode          Cash
                                        </Text>
                                    </View>
                                  */}
                  </View>
                </View>
              </Content>
            </ScrollView>
            {/* <View style={{flex:0.5, justifyContent:'flex-end',  marginBottom: 16, }}>
                            <View>
                            <Text style={styles.bottomText}>Your service provider will take two 
                                working days to reflect amount paid in your account.</Text>
                                </View>
                         <TouchableOpacity 
                          onPress={()=>alert('hello')} >
                            <Button block light  style={styles.btn}>

            <Text style={{ color: '#ffffff' }}>confirm</Text>
               </Button>
               </TouchableOpacity>
                           
              
                            
                            </View> */}
          </View>
        </ImageBackground>

        <View style={{justifyContent: 'flex-end', alignSelf: 'flex-end'}}>
          <Text style={styles.bottomText}>
            Your service provider will take two working days to reflect amount
            paid in your account.
          </Text>

          <TouchableOpacity>
            <Button block light style={styles.btn} onPress={this.handleOTP}>
              <Text style={{color: '#ffffff'}}>confirm</Text>
            </Button>
          </TouchableOpacity>
        </View>

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
                  onPress={() =>
                    this.props.navigation.navigate('Loanpayment_Success')
                  }>
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
  Billcatagory: state.BIllcatagoryDetails,
});

export default connect(
  mapStateToProps,
  {getActivePromoCodes,otpForBillPayment},
)(LoanpaymentSuccess);

const styles = StyleSheet.create({
  header: {},
  headerbal: {
    fontSize: 36,
    paddingLeft: 5,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Inconsolata',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  promocode: {
    fontSize: 14,
    color: '#f7931e',
    alignSelf: 'flex-end',
    bottom: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    color: '#ffffff',

    alignSelf: 'center',
  },
  curdview: {
    backgroundColor: '#ffffff',
    height: 97,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  fulldetails: {
    backgroundColor: '#ffffff',
    height: 240,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    borderRadius: 15,
  },
  curd_user: {
    backgroundColor: '#ffffff',
    height: 97,
    marginVertical: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    borderRadius: 10,
  },
  img: {
    height: 198,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginHorizontal: 16,
  },
  btn: {
    marginHorizontal: 16,
    marginBottom: 32,
    marginVertical: 10,

    height: 40,

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
    marginLeft: 20,
  },
  overlopcurd: {
    height: '100%',
    backgroundColor: '#ffffff',
    width: '100%',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bank: {
    height: 40,
    width: 34,
    alignSelf: 'center',
  },
  paymentName: {
    color: '#322b74',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textData: {
    color: '#322b74',
    fontSize: 12,

    textAlign: 'left',
  },
  bottomText: {
    color: '#999999',
    textAlign: 'left',
    fontSize: 11,
    letterSpacing: 0.33,
    marginHorizontal: 16,
    marginTop: 10,
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
