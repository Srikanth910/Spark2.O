
import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Input,
  Text,
  ListItem,
  Content,
  Form,
  Item,
  Footer,
} from 'native-base';
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';




export default class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      mobileOtp: '',
      isVisible: false,
      Statevalue: '',
      MobileNO: '',
      stateValue: '',
    };
  }
  handleState = (name, id) => {
    this.setState({
      activeIndex: id,
      Statevalue: name,
    });
  };


 

  resendOtpDetails = () => {
    const resendOtp = {
      email: this.state.email,
      mobileno: this.state.MobileNO,
    };

    this.props.ResendOtpCheckMobileNo(resendOtp);
  };

  OtpDetails = () => {
    const { signUpDetails } = this.props.auth;
    const otp = {
      refNo: signUpDetails.Data.refNo,
      otp: this.state.mobileOtp,
    };

    this.props.checkMoblieno(otp).then(() => {
      const { signUpotp } = this.props.auth;
      if (signUpotp.code === '200') {
        this.setState({
          isVisible: false,
        });
        this.props.navigation.navigate('Setpassword');
      }
    });
  };

  userDetails = async () => {
    const userDetails = {
      email: this.state.Email,
      mobileno: this.state.MobileNO,
    };

    try {
      await AsyncStorage.setItem('signupDetails', JSON.stringify(userDetails));
      console.log(' user saved');
    } catch (e) {
      console.log(e);
    }

    this.props.signupCheckmobile(userDetails).then(() => {
      const { auth } = this.props;
      if (auth.signUpDetails.code === '200') {
        this.setState({
          isVisible: true,
        });
      }
    });
    // };
  };

  handleState = name => {
    this.setState({
      stateValue: name,
    });
    this.RBSheet.close();
  };

  render() {
    const { mobileOtp } = this.state;
    const { auth } = this.props;


    return (
      <Container style={styles.Container}>
       
    <Header style={{backgroundColor: '#1b1464', height: 130}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

<View style={{flex: 1, }}>
          <View
            style={{
              flexDirection: 'row',
            
              alignItems: 'center',
               marginVertical: 5, marginHorizontal: 16,
              justifyContent:'space-between',
            }}>
            <Icon
              name="close"
              onPress={() => this.props.navigation.navigate('Transfer_Money')}
              style={{color: '#ffffff'}}
            />
            
            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>

           <View style={{  marginVertical: 5, marginHorizontal: 16, }}>

               <Text style={styles.code}>Personal Information</Text>
               <Text style={styles.lightText}>Please give us some information about you as per your documents</Text>
           </View>
          </View>
         
   
        </Header>
        <ScrollView>
          <Content style={styles.Content}>
            <View style={styles.grp_fields}>
              <Text style={styles.mobileinput}>Please enter PAN card number</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="CTRGDO236H"
                  style={styles.input}
                  value={this.state.Email}
                  onChangeText={editedText =>
                    this.setState({ Email: editedText })
                  }
                />
              </Item>

              <Text style={styles.mobileinput}>Name(as per PAN card)</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="Vijay kumar"
                  style={styles.input}
                  value={this.state.MobileNO}
                  onChangeText={editedText =>
                    this.setState({ MobileNO: editedText })
                  }
                />
              </Item>
              <Text style={styles.mobileinput}>Date of birth(18 and above)</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="22/1/1974"
                  style={styles.input}
                  value={this.state.MobileNO}
                  onChangeText={editedText =>
                    this.setState({ MobileNO: editedText })
                  }
                />
              </Item>






              <Text style={styles.mobileinput}>Gender</Text>

              <Item regular style={styles.dropInput}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.stateValue}
                />
                <Icon
                  name="ios-arrow-down"
                  onPress={() => this.RBSheet.open()}
                />

                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={220}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    },
                  }}>
                  <Text style={styles.selectState}>Select Gender</Text>

                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Male', 1)}
                      style={
                        this.state.activeIndex === 1
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Male</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Female', 2)}
                      style={
                        this.state.activeIndex === 2
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Female</Text>

                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </Item>





              <Text style={styles.mobileinput}>Martical status(optional)</Text>

              <Item regular style={styles.dropInput}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.stateValue}
                />
                <Icon
                  name="ios-arrow-down"
                  onPress={() => this.RBSheet.open()}
                />

                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={220}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    },
                  }}>
                  <Text style={styles.selectState}>Martical status</Text>

                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Married', 1)}
                      style={
                        this.state.activeIndex === 1
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Married</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('unmarried', 2)}
                      style={
                        this.state.activeIndex === 2
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>unmarried</Text>

                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </Item>






              <Text style={styles.mobileinput}>Occupation</Text>

              <Item regular style={styles.dropInput}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.stateValue}
                />
                <Icon
                  name="ios-arrow-down"
                  onPress={() => this.RBSheet.open()}
                />

                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={220}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    },
                  }}>


                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Professional', 1)}
                      style={
                        this.state.activeIndex === 1
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Professional</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Business (Self Employed)', 2)}
                      style={
                        this.state.activeIndex === 2
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Business (Self Employed)</Text>

                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Salaried Employee (Government)', 3)}
                      style={
                        this.state.activeIndex === 3
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Salaried Employee (Government)</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Salaried Employee (Non-Government)', 4)}
                      style={
                        this.state.activeIndex === 4
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Salaried Employee (Non-Government)</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Student', 5)}
                      style={
                        this.state.activeIndex === 5
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Student</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Unemployed', 6)}
                      style={
                        this.state.activeIndex === 6
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Unemployed</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Retired Empolyee', 7)}
                      style={
                        this.state.activeIndex === 7
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Retired Empolyee</Text>

                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </Item>






              <Text style={styles.mobileinput}>Annuval income</Text>

              <Item regular style={styles.dropInput}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.stateValue}
                />
                <Icon
                  name="ios-arrow-down"
                  onPress={() => this.RBSheet.open()}
                />

                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={220}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    },
                  }}>


                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('10000-50000', 1)}
                      style={
                        this.state.activeIndex === 1
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>10000-50000</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('50000-100000', 2)}
                      style={
                        this.state.activeIndex === 2
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>50000-100000</Text>

                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('100000-1000000', 3)}
                      style={
                        this.state.activeIndex === 3
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>100000-1000000</Text>

                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('1000000-10000000', 4)}
                      style={
                        this.state.activeIndex === 4
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>1000000-10000000</Text>

                    </TouchableOpacity>
                  </View>


                  <View>
                    <TouchableOpacity
                      onPress={() => this.handleState('Above 10000000', 4)}
                      style={
                        this.state.activeIndex === 4
                          ? styles.btnActive
                          : styles.btn
                      }>
                      <Text style={styles.state}>Above 10000000</Text>

                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </Item>










            </View>
          </Content>





          <Button
            block
            warning
            style={styles.btnSubmit}
            onPress={this.userDetails}>
            <Text style={styles.submit}>Proceed</Text>
          </Button>

        </ScrollView>

        <View />


      </Container>
    );
  }
}





const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f5f5ff',
  },
  grp_fields: {
    marginTop: 20,
  },
  code:{
    fontFamily:'Nunito',
 fontSize:20,
  color:'#ffffff',
   textAlign:'left',
    
},
 lightText:{
      fontFamily:'Nunito',
       fontSize:14,
        color:'#ffffff',
         textAlign:"left"
 },

  headerText: {
    width: 400,

    fontFamily: 'Nunito',
    fontSize: 14,
    marginVertical: 16,
    color: '#ffffff',
    marginHorizontal: 16,
    marginLeft: 16,

    alignItems: 'flex-start',
  },
  headerText_sb: {
    fontFamily: 'Nunito',
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    color: '#ffffff',
  },
  textcolor: {
    fontSize: 20,
    width: 200,
    marginLeft: 16,
    color: '#ffffff',
    fontFamily: 'Nunito',
  },

  btnSubmit: {
    alignItems: 'center',
       marginVertical: 32,
        marginHorizontal: 16,
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
  btnbottom: {
    alignContent: 'flex-end',
  },

  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  selectState: {
    width: 150,
    height: 22,
    opacity: 0.87,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 16,
  },
  headerCross: {
    color: '#ffffff',
    marginLeft: 20,
    marginTop: 20,
    height: 20,
  },
  forgetText: {
    marginRight: 13,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
  },

  forgetpassword: {
    width: 91,
    height: 22,
    marginTop: 10,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
  },
  forgotPassword: {
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    marginLeft: 270,
  },
  bottomColor: {
    color: '#f7931e',
  },
  tabColor: {
    backgroundColor: '#1b1464',
  },

  textInput: {
    marginTop: 20,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },

  loginInput: {
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    marginTop: 5,
    backgroundColor: '#e1e4eb',
  },
  textData: {
    marginTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
  },
  LoginButton: {
    marginLeft: 16,
    marginRight: 15,
  },

  dropInput: {
    backgroundColor: '#e1e4eb',
    marginLeft: 16,
    marginRight: 15,
    borderRadius: 5,
    height: 40,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  loginText: {
    marginTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
  },
  passwordicon: {
    height: 20,
    width: 40,
  },

  mobileinput: {
    marginTop: 10,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
    height: 19,
  },

  bottomtext: {
    color: '#999999',
    marginTop: 50,

    fontSize: 12,

    fontFamily: 'Nunito',
  },
  bottomColor: {
    color: '#f7931e',
    fontSize: 12,

    fontFamily: 'Nunito',
  },
  loginbg: {
    height: 48,
    width: 48,
    marginTop: 50,
    alignSelf: 'flex-end',
  },

  icon: {
    marginLeft: 10,
    color: '#ffffff',
    width: 16,
    height: 20,
  },
  bottomImage: {
    height: 70,

    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 16,
    alignContent: 'flex-end',
  },
  bottom: {
    backgroundColor: '#ffffff',
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
  btn: {
    // backgroundColor: '#DDDDDD',
    // borderColor: '#dc00ff',
    // borderRadius: 10,
    // borderWidth:1,
    // padding: 10,
    opacity: 0.5,
    // marginLeft: 16,
  },
  btnActive: {
    // alignItems: 'center',
    // backgroundColor: '#f7931e',
    borderColor: '#f7931e',
    // borderRadius: 10,
    borderWidth: 3,
    height: 80,
    // padding: 10,
    marginLeft: 8,
  },
  state: {
    //   width:73,
    height: 22,
    opacity: 0.87,
    fontFamily: 'Nunito',
    color: '#000000',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 16,
  },
  Statesubtext: {
    width: 332,
    height: 60,
    fontSize: 16,
    color: '#999999',
    textAlign: 'left',
    fontStyle: 'normal',
    marginLeft: 16,
  },
});

