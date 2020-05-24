import React, {Component} from 'react';
import {
  NativeModules,
  Easing,
  Animated,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  LayoutAnimation,
  FlatList,
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import Modal from 'react-native-modal';

import {Button, Icon, List, ListItem, Item} from 'native-base';
import RDAmountScreen from './rdAmountScreen';
import RDTenureScreen from './rdtenureScreen';
import RDScheduleScreen from './rdScheduleScreen';

import {
  getActiveRds,
  createOTPRD,
  createResendOTPRD,
  createRD,
} from '../../Redux/actions/fdAction';
import {connect} from 'react-redux';
import {Switch, TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);


const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class RecurringDepositScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    // this.amountHeight = new Animated.Value(80)
    // this.sheetHeight = new Animated.Value(0)
    this.state = {
      maturityAmount: 1100,
      imagePosition: 16,
      buttonCLicks: 0,
      amountHeight: 80,
      sheetHeight: 0,
      mobileOtp: '',
      showAmount: true,

      amount: 1000,
      minAmount: 1000,
      maxAmount: 500000,
      isBreakable: true,
      minBreakInterest: 2.77,
      minNonBreakInterest: 3.77,
      brekableTenures: 9,
      breakableInterest: 16,
      nonBrekableTenures: 9,
      nonBreakableInterest: 16,
      selectedItem: 0,
      isEnabled: false,
      integerValue: '',
      tenureValue: '',
      isFlexible: '',
      maturityData: '',
      frequencydescription: '',
      Date: '',
      year: '',
      rdId: '',
      fullDate:'2020-05-05',
      months: [
        {month: 'March', year: '2020', dd: '2020-03'},
        {month: 'April', year: '2020', dd: '2020-04'},
        {month: 'May', year: '2020', dd: '2020-05'},
      ],
      days: [
        {date: '5'},
        {date: '10'},
        {date: '15'},
        {date: '20'},
        {date: '25'},
      ],
    };
  }

  handleConfirm = () => {
    const data = {
      membarId: '1421',
      phone: '9573288904',
      isFlexible: this.state.isFlexible.toString(),

      amount: this.state.amount.toString(),

      frequencyDescription: 'End Of Term',

      interest: '10',

      tenure: this.state.tenureValue.toString(),
    };
    console.log(data);
    this.props.createOTPRD(data).then(() => {
      const {FDRDcreation} = this.props;

      if (FDRDcreation.createRd.code === '200') {
        this.setState({
          isVisible: true,
        });
      }
    });
  };

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{width: 16, height: 0, backgroundColor: '#C8C8C8'}} />
    );
  };
  toggleSwitch = () => {
    this.setState({
      isEnabled: true,
    });
  };

  itemSeparator = () => {
    return <View style={{width: 16, height: 0, backgroundColor: '#C8C8C8'}} />;
  };

  componentDidMount = () => {
  
    this.props.getActiveRds();
  };

  // componentDidMount(){
  //    this.otpVerify()
  // }

  resendOtpDetails = () => {
    const data = {
      membarId: '1421',
      phone: '9573288904',
      isFlexible: this.state.isFlexible,
      amount: this.state.amount,
      frequencyDescription: 'End Of Term',

      interest: '10',
      tenure: this.state.tenureValue.toString(),
    };
    this.props.createResendOTPRD(data)
  };

  OtpDetails = () => {
     this.setState({
      fullDate : this.state.year + '-' + this.state.Date
     })
   
    const {FDRDcreation} = this.props;
    const RdDetails = {
      refNo: FDRDcreation.createRd.refNo,
      otp: this.state.mobileOtp,
      membarId: '1421',
      isFlexible: this.state.isFlexible,
      RdAmount: this.state.amount,
      FrequencyDescription: 'End of term',

      "interest": "10",
      tenure: '10',
      maturitydate: '2021-05-10',
      RdSetupId: '1',
      CreatedDate:this.state.fullDate,
      Refercode: 'vk-vinod',
      NextPullDate: '2020-05-10',
      maturityamount: this.state.maturityData,
      withdrawDate: '2021-05-10',
      RdDay: '05',
    };
    this.props.createRD(RdDetails).then(()=>{
      const{FDRDcreation}=this.props
       if(FDRDcreation.successRd.code==="200"){
          this.setState({
             isVisible:false
          })
            this.RBSheet.open()
       }
   })
  };
  handledata = (tenure, interest, frequencydescription, isFlexible, id) => {
    this.setState({
      tenureValue: tenure,
      interestValue: interest,
      frequencydescription: frequencydescription,
      isFlexible: isFlexible,
      rdId: id,
    });

    let p = this.state.amount;

    let interestData = this.state.interestValue * 0.01;
    let tenureData = this.state.tenureValue;
    var sum1 = 0;
    var i = 0;
    var sum2 = 0;
    for (i = 0; i <= tenureData; i++) {
      sum1 = p + sum1;
      sum2 = sum1 * (interestData / 12.0);

      sum1 = sum1 + sum2;
      this.setState({
        maturityData: parseInt(sum1),
      });
    }
  };
  
  handleDepositAnimations = (imageValue, click) => {
    Animated.timing(this.animatedValue, {
      toValue: imageValue,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      this.setState({
        buttonCLicks: click,
      });
    });
    this.handleScroll(click);
  };

  handleScroll = clicks => {
    this.ScrollView_ref.scrollTo({
      x: width * clicks,
      y: 0,
      animated: true,
    });
  };

  nextButton = value => e => {
    if (value == 0) {
      this.handleDepositAnimations(40, 1);
    } else if (value == 1) {
      this.handleDepositAnimations(80, 2);
      console.log('show bottom sheet-1');
      this.toggleBottomSheet(0);
    } else {
      console.log('show bottom sheet');
      this.toggleBottomSheet(80);
      this.setState({
        buttonCLicks: 1,
      });
    }
  };
  toggleBottomSheet = amountHeight => {
    if (amountHeight == 80) {
      LayoutAnimation.spring();
      this.setState({
        sheetHeight: height * 0.8,
        amountHeight: 0,
        showAmount: false,
      });
      console.log('details height is expanded');
      console.log('amount height is collapsed');
    } else {
      console.log('amount height is expanded');
      console.log('details height is collapsed');
      LayoutAnimation.spring();
      this.setState({
        amountHeight: 80,
        showAmount: true,
        sheetHeight: 0,
      });
    }
  };

  backButton = value => e => {
    if (value == 0) {
      console.log('show alert');
    } else if (value == 1) {
      this.handleScroll(0);
      this.setState({
        buttonCLicks: 0,
      });
    } else if (value == 2) {
      this.handleScroll(1);
      this.setState({
        buttonCLicks: 1,
      });
    } else {
      console.log('dismiss bottom sheet');
      this.toggleBottomSheet(0);
    }
  };

  // moving backward in FD creation
  backDepositFlow = value => e => {
    if (value == 2) {
      console.log('back 2');
      this.setState({
        buttonCLicks: 1,
      });
    } else if (value == 1) {
      console.log('back 1');
      this.setState({
        buttonCLicks: 0,
      });
    } else if (value == 0) {
      console.log('back 0');
      this.setState({
        buttonCLicks: 0,
      });
    }
    Animated.timing(this.animatedValue, {
      toValue: value,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // scrolling screen
    this.ScrollView_ref.scrollTo({
      x: Math.round(Dimensions.get('window').width * value),
      y: 0,
      Animated: true,
    });
  };

  // moving forward in FD creation
  proceedDepositButton = value => e => {
    // console.log(value)

    this.ScrollView_ref.scrollTo({
      x: Math.round(Dimensions.get('window').width * value),
      y: 0,
      Animated: true,
    });
    if (value == 0) {
      console.log('start 1');
      this.setState({
        buttonCLicks: 1,
      });
    } else if (value == 1) {
      console.log('start 2');
      this.setState({
        buttonCLicks: 2,
      });
    } else {
      console.log('start 3');
    }
    Animated.timing(this.animatedValue, {
      toValue: value,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  handleAnimation = () => {
    if (this.animatedValue == 0) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  };

  handleyear = date => {
    this.setState({
      year: date,
    });
  };

  handleDate = date => {
    this.setState({
      Date: date,
    });

    
    const fullDate = this.state.year + '-' + this.state.date;
    console.log(fullDate);

    const data = fullDate.setDate(fullDate.getDate() + 1);
    console.log();
    //     const fulllyear= Date.parse(fullDate).toString()

    //   // var someDate = new Date(fulllyear);
    //   fullDate.setDate(fullDate.getDate() + 15); //number  of days to add, e.x. 15 days
    // var dateFormated = fullDate.toISOString().substr(0,10);
    // console.log('date',dateFormated)
  };

  render() {
    // const sheet = {
    //   transform:[
    //     {
    //       scaleX: this.sheetHeight.interpolate({
    //         inputRange:[0,1],
    //         outputRange:[0, height*0.65]
    //       })
    //     }
    //   ]
    // }
    // const amount = {
    //   transform:[
    //     {
    //       height: this.amountHeight.interpolate({
    //         inputRange:[0,1],
    //         outputRange:[0,80]
    //       })
    //     }
    //   ]
    // }
    

    const position = {
      transform: [
        {
          translateX: this.animatedValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 4, 8],
          }),
        },
      ],
    };
    const {mobileOtp} = this.state;
    const {FDRDcreation} = this.props;
    console.log(FDRDcreation.successRd);
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#e88510',
              flex: 0.3,
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={styles.row}>
                <Button
                  icon
                  transparent
                  onPress={this.backButton(this.state.buttonCLicks)}>
                  <Icon name="arrow-back" style={{color: 'white'}} />
                </Button>
                <Text style={styles.headerTitle}>Open Recurring Deposit</Text>
                <Button style={styles.ratesButton}>
                  <Text style={{color: 'white', fontSize: 11}}>RD Rates</Text>
                </Button>
              </View>
            </View>
            <ImageBackground
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 50,
                bottom: 0,
              }}
              source={require('../../images/fd&rd/orangeSky.png')}
            />
            <Animated.Image
              style={[styles.animImage, position]}
              source={require('../../images/fd&rd/RDBalloon.png')}
            />
            <View style={styles.row}>
              <Text style={styles.headerTitle}> 1. Amount</Text>
              <Text style={styles.headerTitle}> 2. Tenure</Text>
              <Text style={styles.headerTitle}> 3. Schedule</Text>
            </View>
          </View>
          <View style={{flex: 0.7}}>
            <ScrollView
              scrollEnabled={false}
              ref={ref => {
                this.ScrollView_ref = ref;
              }}
              horizontal={true}
              indicatorStyle={null}
              // scrollEnabled = {false}
            >
              <RDAmountScreen />
              {/* <RDTenureScreen /> */}

              <View
                style={{
                  paddingHorizontal: 16,
                  flex: 0.7,
                  width: Math.round(Dimensions.get('window').width),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                  }}>
                  <Text style={styles.title}>Show Breakable Deposit</Text>
                  <Switch
                    style={{marginTop: 10}}
                    thumbColor={'white'}
                    trackColor={'#f7931e'}
                    onValueChange={this.toggleSwitch}
                    value={this.state.isEnabled}
                  />
                </View>
                <Text style={styles.description}>
                  This option allows you to break the deposit before maturity at
                  appropriately readjusted interest rates. Average exit load is
                  low at {this.state.minNonBreakInterest}%.
                </Text>
                <View style={(styles.row, {flexDirection: 'row'})}>
                  <Text style={styles.title}>Tenure period</Text>
                  <Text style={styles.tenureDescription}>
                    ({this.state.brekableTenures} tenures, up to{' '}
                    {this.state.breakableInterest}% p.a.)
                  </Text>
                </View>
                <View style={{height: 110}}>
                  <FlatList
                    style={{margintRight: 0}}
                    horizontal={true}
                    data={FDRDcreation.getactiveRd.accountListMain}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({item, index}) => {
                      if (
                        item.isFlexible === true &&
                        this.state.isEnabled === true
                      ) {
                        return (
                          <View style={styles.selectedCard}>
                            <Text
                              style={styles.title}
                              onPress={() =>
                                this.handledata(
                                  item.tenure,
                                  item.interest,
                                  item.frequencydescription,
                                  item.isFlexible,
                                  item.id,
                                )
                              }>
                              {item.tenure} months ({item.tenure * 30} days)
                            </Text>

                            <Text
                              style={{
                                color: 'white',
                                paddingVertical: 4,
                                fontWeight: '400',
                              }}>
                              upto {item.interest}% p.a.
                            </Text>

                            <Text
                              style={{
                                color: 'white',
                                paddingVertical: 4,
                                fontWeight: '400',
                              }}>
                              Interest payout end of term and {item.tenure}{' '}
                              other option(s)
                            </Text>
                          </View>
                        );
                      } else if (
                        item.isFlexible === false &&
                        this.state.isEnabled === false
                      ) {
                        console.log(item);
                        return (
                          <View style={styles.selectedCard}>
                            <Text
                              style={styles.title}
                              onPress={() =>
                                this.handledata(item.tenure, item.interest)
                              }>
                              {item.tenure} months ({item.tenure * 30} days)
                            </Text>
                            <Text
                              style={{
                                color: 'white',
                                paddingVertical: 4,
                                fontWeight: '400',
                              }}>
                              upto {item.interest}% p.a.
                            </Text>
                            <Text
                              style={{
                                color: 'white',
                                paddingVertical: 4,
                                fontWeight: '400',
                              }}>
                              Interest payout end of term and {item.tenure}{' '}
                              other option(s)
                            </Text>
                          </View>
                        );
                      }
                    }}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 16,
                  flex: 0.7,
                  width: Math.round(Dimensions.get('window').width),
                }}>
                <Text style={styles.content}>
                  Select the month and date to start the deposit.
                </Text>
                <Text style={styles.title}>Starting month</Text>
                <Text style={styles.content}>
                  Select the month to start the deposit.
                </Text>
                <View style={{height: 60}}>
                  <FlatList
                    paddingTop={8}
                    horizontal={true}
                    data={this.state.months}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    //Item Separator View
                    renderItem={({item}) => (
                      // Single Comes here which will be repeatative for the FlatListItems

                      <View style={styles.monthCard}>
                        <TouchableOpacity>
                          <Text
                            style={styles.cellTitle}
                            onPress={() => this.handleyear(item.dd)}>
                            {item.month}
                          </Text>
                          <Text style={styles.cellSubtitle}>{item.year}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>

                <Text style={styles.title}>Deposit day</Text>
                <Text style={styles.content}>
                  Select the monthly date that your Spark Savings Account will
                  be debited towards instalment.
                </Text>
                <View style={{height: 80}}>
                  <FlatList
                    paddingTop={8}
                    horizontal={true}
                    data={this.state.days}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    //Item Separator View
                    renderItem={({item}) => (
                      // Single Comes here which will be repeatative for the FlatListItems
                      <View style={styles.dateCard}>
                        <Text
                          style={styles.cellTitle}
                          onPress={() => this.handleDate(item.date)}>
                          {item.date}th day
                        </Text>
                        <Text style={styles.cellSubtitle}>every month</Text>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{position: 'absolute', width: width, bottom: 0}}>
          <View
            style={
              this.state.showAmount
                ? {
                    height: this.state.amountHeight,
                    backgroundColor: '#F0F0FF',
                    marginBottom: 0,
                    //  overflow:'visible',
                    //  alignItems:'center',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: 1,
                  }
                : {
                    marginBottom: 0,
                    // overflow:'visible',
                    // alignItems:'center',
                    opacity: 0,
                    height: 0,
                  }
            }>
            <List style={{justifyContent: 'flex-start'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.depositAmount}>
                  Rs. {this.state.maturityData}
                </Text>
                <Text style={styles.depositTenure}>
                  ({this.state.interest} months @ {this.state.tenure}% p.a.)
                </Text>
              </View>
            </List>
          </View>

          <Animated.View
            style={{
              backgroundColor: 'white',
              height: this.state.sheetHeight,
              justifyContent: 'space-between',
            }}>
            <View style={{paddingTop: 24}}>
              <Image
                resizeMode={'contain'}
                style={{
                  height: this.state.sheetHeight * 0.2,
                  width: width,
                  marginVertical: 16,
                }}
                source={require('../../images/fd&rd/RDBalloon.png')}
              />
              <View style={styles.card}>
                <View>
                  <Text style={styles.content}>Monthly Deposit</Text>
                  <Text style={styles.amount}>₹ {this.state.amount}</Text>
                </View>

                <Image
                  resizeMode={'center'}
                  style={{height: 18, width: 18}}
                  source={require('../../images/fd&rd/rightTriangle.png')}
                />
                <View>
                  <Text style={styles.orangeContent}>On maturity</Text>
                  <Text style={styles.orangeAmount}>
                    ₹ {this.state.maturityData}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                }}>
                <List>
                  <Text style={styles.content}>
                    @ {this.state.interestValue}
                  </Text>
                  <Text style={styles.content}> From 10 Apr 2019</Text>
                </List>
                <List>
                  <Text style={styles.content}>
                    {this.state.tenureValue}months
                  </Text>
                  <Text style={styles.content}>To 10 Apr 2019</Text>
                </List>
              </View>
              <View
                style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.content}>
                  Amount debited on 10th of every month
                </Text>
                <View style={{justifyContent: 'space-between', paddingTop: 16}}>
                  <Text style={styles.content}>
                    Interest paid out end of term
                  </Text>
                  <Text style={styles.content}>
                    Breakable Recurring Deposit
                  </Text>
                </View>
              </View>
            </View>

            <Button
              onPress={this.handleConfirm}
              style={{
                backgroundColor: '#49438e',
                marginHorizontal: 16,
                marginBottom: 24,
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Confirm</Text>
            </Button>
          </Animated.View>
          <Button
            icon
            style={styles.depositButton}
            onPress={this.nextButton(this.state.buttonCLicks)}>
            <Icon name="arrow-forward" style={{color: 'white'}} />
          </Button>
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
              <TouchableOpacity>
                <Text style={styles.otpVeryfy} onPress={this.OtpDetails}>
                  Submit
                </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
        </Modal>


        <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={600}
                   backgroundColor={'red'}
                  duration={250}
                  customStyles={{
                    container: {
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                       backgroundColor:'#fff8ef'
                    },
                  }}>
                  <Text style={styles.selectState}>Select state</Text>

                  <View>
                    
                    <ImageBackground source={require('../../images/fd&rd/ploygon3x.png')} style={{height:471, width:348, alignSelf:'center', marginLeft:24 ,marginRight:24}}>

                      <Image source={require('../../images/fd&rd/circle.png')} style={styles.circle}/>

               <View>
                <Text style={styles.Rn_id}> RD#{FDRDcreation.successRd.RDNo}</Text>
<Text style={styles.Rn_text}>created successfully</Text>
               </View>


               <ListItem style={{justifyContent:'space-around'}}>
                 <View>
                   <Text style={styles.Rn_lighttext} >Monthly Deposit</Text>
                <Text> ₹ {this.state.amount}</Text>
                 </View>
                 <View>
                   <Text style={styles.Rn_lighttext}>On maturity</Text>
                   <Text> ₹ {this.state.maturityData}</Text>
                 </View>
               </ListItem>

              <Item style={{justifyContent:'space-around', borderColor: 'transparent', marginTop:10}}>
                <Text style={styles.Rn_lighttext}>@ {this.state.interestValue} p.a.</Text>
                <Text style={styles.Rn_lighttext}>{this.state.tenureValue} months</Text>
              </Item>
              <Item style={{justifyContent:'space-around', borderColor: 'transparent', marginTop:10}}>
                <Text style={styles.Rn_lighttext}>@ 10.5% p.a.</Text>
                <Text style={styles.Rn_lighttext}>12 months</Text>
              </Item>
              <View style={{marginTop:40}}>
              <Text style={styles.Rn_lighttext}>Amount will be debited on 10th of every month</Text>
              <Text style={styles.Rn_lighttext}>Interest paid out end of term</Text>
              <Text style={styles.Rn_lighttext}>Breakable Recurring Deposit</Text>
              </View>
                    </ImageBackground>
                  </View>
                </RBSheet>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  FDRDcreation: state.FDRDcreation,
});
export default connect(
  mapStateToProps,
  {getActiveRds, createOTPRD, createResendOTPRD, createRD},
)(RecurringDepositScreen);

const styles = StyleSheet.create({
  content: {
    fontSize: 14,
    color: '#999999',
  },
  orangeContent: {
    fontSize: 14,
    color: '#f7931e',
  },
  amount: {
    fontSize: 24,
    color: '#474a4f',
    paddingTop: 8,
  },
  orangeAmount: {
    fontSize: 24,
    color: '#f7931e',
    paddingTop: 8,
  },
  card: {
    left: 16,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    backgroundColor: 'white',
    width: width - 32,
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 4,
      width: 2,
    },
  },
  amountSheet: {
    // height: this.amountHeight,
    backgroundColor: '#F0F0FF',
    marginBottom: 0,
    // overflow:'visible',/
    alignItems: 'center',
    opacity: 1,
  },
  animImage: {
    height: 70,
    position: 'absolute',
    bottom: 40,
    width: 70,
    resizeMode: 'contain',
    marginBottom: 0,
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    // marginTop: 30,
  },
  plane: {
    height: 70,
    position: 'absolute',
    bottom: 40,
    width: 70,
    resizeMode: 'contain',
    marginBottom: -30,
    marginRight: 16,
  },
  ratesButton: {
    backgroundColor: '#27226b',
    height: 24,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  depositButton: {
    backgroundColor: '#27226b',
    color: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: -25,
    marginLeft: width / 2 - 25,
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: {height: 2, width: 4},
  },

  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: 16,
  },

  depositAmount: {
    color: '#1b1464',
    fontSize: 24,
    fontWeight: '500',
    position: 'absolute',
    left: 16,
    bottom: 16,
  },

  depositTenure: {
    color: '#1b1464',
    fontSize: 13,
    position: 'absolute',
    right: 16,
    bottom: 24,
  },
  selectedCard: {
    paddingLeft: 8,
    backgroundColor: 'orange',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {height: 4, width: 3},
    shadowColor: 'gray',
    width: Math.round(Dimensions.get('window').width / 1.5),
  },
  unselectedCard: {
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {height: 4, width: 0},
    shadowColor: 'gray',
    paddingLeft: 8,
    backgroundColor: 'white',
    width: Math.round(Dimensions.get('window').width / 1.5),
  },
  title: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 16,
  },
  content: {
    color: '#474a4f',
    fontSize: 14,
    paddingTop: 24,
  },
  description: {
    color: '#999999',
    fontSize: 14,
    paddingTop: 10,
  },
  tenureDescription: {
    color: '#999999',
    fontSize: 14,
    paddingTop: 18,
    paddingLeft: 6,
  },
  textField: {backgroundColor: '#e1e4eb', height: 40, borderRadius: 8},

  monthCard: {
    backgroundColor: 'orange',
    height: 55,
    width: Math.round(Dimensions.get('window').width / 1.5),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 32,
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {height: 4, width: 0},
    shadowColor: 'gray',
  },

  dateCard: {
    backgroundColor: 'orange',
    height: 65,
    width: Math.round(Dimensions.get('window').width / 1.5),
    shadowColor: 'gray',
    shadowRadius: 2,
    shadowOpacity: 0.4,
    shadowOffset: {height: 4, width: 0},
    justifyContent: 'center',
    paddingLeft: 32,
    alignItems: 'flex-start',
  },

  cellTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 8,
  },
  cellSubtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: '#474a4f',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  content: {
    color: '#474a4f',
    fontSize: 14,
    paddingTop: 12,
  },
  description: {
    color: '#999999',
    fontSize: 14,
    paddingTop: 10,
  },
  tenureDescription: {
    color: '#999999',
    fontSize: 14,
    paddingTop: 18,
    paddingLeft: 6,
  },
  textField: {backgroundColor: '#e1e4eb', height: 40, borderRadius: 8},
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
  circle:{
    alignSelf:'center',

     marginTop:50

  },
  Rn_id:{
    fontFamily:'Nunito',
    color:'#474a4f',
     textAlign:'center',
     fontSize:20,
      marginTop:20,
     fontWeight:'bold'


  },
   Rn_text:{
    fontFamily:'Nunito',
    color:'#474a4f',
     textAlign:'center',
     fontSize:16,
     


   },
    Rn_lighttext:{
      fontSize:14,
       color:'#989898',
       fontFamily:'Nunito',
       textAlign:'center'
    }
    

});
