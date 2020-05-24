import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Icon,
  ListItem,
  Item,
  Input,
  Button,
} from 'native-base';
import {StatusBar, Image, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {connect} from 'react-redux';
import {
  getBeneficiaryBank,
  getActivemethods,
} from '../../Redux/actions/TransferAction';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

class To_myBankAcc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,

      Name: '',
      PhoneNo: '',
      memberOf: '',
      transactionMetod: '',
      Description: '',
      amount: '',
      userDetails: {},
      account: '',
      accIFCS: '',
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
    const {params} = this.props.route;
    this.props.getActivemethods();
    if (params.type === 2) {
      const data = {
        membarId: this.state.userDetails.memberid,
        isPrimaryAccunt: 'false',
        isWithInCoop: 'true',
        type: '1',
      };
      this.props.getBeneficiaryBank(data);
    }
  };
  //  if(params.type===2){
  //   const data = {
  //     "membarId": '1421',
  //     "isPrimaryAccunt": 'false',
  //     "isWithInCoop": 'true',
  //     "type": "1",
  //   };
  //   this.props.getBeneficiaryBank(data);

  //  }else

  // if (params.type === 4) {
  //   const data = {
  //     "membarId": '1421',
  //     "isPrimaryAccunt": 'false',
  //     "isWithInCoop": 'false',
  //     "type": '2',
  //   };
  //   this.props.getBeneficiaryBank(data);
  //   this.props.getActivemethods();
  // }

  // }

  handleroutiing = () => {
    if (params.type === 3) {
      this.props.navigation.navigate('');
    }
  };
  handlemethod = method => {
    this.setState({
      transactionMetod: method,
    });
  };

  handlearray = (acc, ifcs) => {
    this.setState({
      account: acc,
      accIFCS: ifcs,
    });
  };

  handleSchedulesubmit = () => {};
  render() {
    const {params} = this.props.route;

    console.log(params);
    const {amount, Description, transactionMetod} = this.state;

    const {getbackDetials} = this.props.transferDetails;
    const {getActiveDetails} = this.props.transferDetails;

    const data =
      getbackDetials.array &&
      getbackDetials.array.map(data => {
        return data;
      });
    // console.log('array', data.AccountType);
    console.log(params);

    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 90}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Transfer_Money')}
              style={{color: '#ffffff'}}
            />
            <Text style={styles.headerText}>{params.name}</Text>

            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>
        </Header>
        <Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
              marginHorizontal: 16,
            }}>
            <Text style={styles.selecttext}>Select Beneficiary</Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Beneficiary')}>
              <Text style={styles.addbenficiarytext}>Add a Beneficiary</Text>
            </TouchableOpacity>
          </View>

          {params.otherBeneficiary === 'true' ? (
            <View style={styles.curdview}>
              <ListItem
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderColor: 'transparent',
                  marginVertical: 5,
                }}>
                {params.type === 4 ? (
                  <Image
                    source={require('../../images/Transfer/otherbank.png')}
                  />
                ) : params.type === 1 ? (
                  <Image source={require('../../images/Transfer/mybank.png')} />
                ) : params.type === 2 ? (
                  <Image source={require('../../images/home/pet_bank.png')} />
                ) : null}

                <View>
                  <Text style={styles.user}>{params.holder}</Text>
                  <Text style={styles.user}>{params.AccountBen}</Text>
                  <Text style={styles.user}>{params.IFCS}</Text>
                </View>
                {params.type === 4 ? (
                  <TouchableOpacity onPress={this.handleroutiing}>
                    <Image source={require('../../images/home/arrow.png')} />
                  </TouchableOpacity>
                ) : null}
              </ListItem>
            </View>
          ) : (
            <View style={styles.curdview}>
              <ListItem
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderColor: 'transparent',
                  marginVertical: 10,
                }}>
                {params.type === 4 ? (
                  <Image
                    source={require('../../images/Transfer/otherbank.png')}
                  />
                ) : params.type === 1 ? (
                  <Image source={require('../../images/Transfer/mybank.png')} />
                ) : params.type === 2 ? (
                  <Image source={require('../../images/home/pet_bank.png')} />
                ) : null}

                {params.type === 1 ? (
                  <View>
                    {getbackDetials.array.length > 0 &&
                      getbackDetials.array.map(item => {
                        return (
                          <>
                            <TouchableOpacity
                              onPress={() =>
                                this.handlearray(
                                  item.BeneficiaryAccNo,
                                  item.IFSCCode,
                                )
                              }>
                              <Text style={styles.user}>null</Text>
                              <Text style={styles.user}>
                                Account ID :{item.BeneficiaryAccNo}
                              </Text>
                              <Text style={styles.user}>
                                {' '}
                                IFCSCODE: {item.IFSCCode}
                              </Text>
                            </TouchableOpacity>
                          </>
                        );
                      })}
                  </View>
                ) : (
                  <>
                    <View>
                      <View>
                        <Text>Select Beneficiary</Text>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate(
                          'Transfer_Spark_otherbank',
                          {type: 4},
                        )
                      }>
                      <Image source={require('../../images/home/arrow.png')} />
                    </TouchableOpacity>
                  </>
                )}
              </ListItem>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
              marginHorizontal: 16,
            }}>
            <Text style={styles.balance}>Balance available</Text>
            <Text style={styles.amount}>₹ 1,80,000</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
              marginHorizontal: 16,
            }}>
            <Text style={styles.selecttext}>Enter amount</Text>
            <Text style={styles.addbenficiarytext}>View transfer limits</Text>
          </View>

          <Item regular style={styles.textInput}>
            <Image
              source={require('../../images/Transfer/rupi_icon.png')}
              style={{marginLeft: 5}}
            />
            <Input
              placeholder=""
              style={styles.input}
              value={this.state.amount}
              onChangeText={editedText => this.setState({amount: editedText})}
            />
          </Item>

          {params.type === 1 || params.type === 4 ? (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                  marginHorizontal: 16,
                }}>
                <Text style={styles.selecttext}>Transfer mode</Text>
                <Text style={styles.addbenficiarytext}>View charges</Text>
              </View>
              <Item
                regular
                style={styles.textInput}
                onPress={() => this.RBSheet.open()}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.transactionMetod}
                />

                {/* <Text style={{marginLeft: 3,}}>{this.state.Statevalue}</Text> */}
                <Icon name="ios-arrow-down" style={styles.arrowicon} />
              </Item>

              <RBSheet
                ref={ref => {
                  this.RBSheet = ref;
                }}
                height={250}
                duration={250}
                customStyles={{
                  container: {
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  },
                }}>
                <Text style={styles.selectState}>Select state</Text>

                {getActiveDetails.trnasfermethod &&
                  getActiveDetails.trnasfermethod.map(getData => {
                    return (
                      <View>
                        <TouchableOpacity
                          onPress={() => this.handlemethod(getData.method)}>
                          <Text style={styles.state}>{getData.method}</Text>
                          <Text style={styles.Statesubtext}>
                            {getData.Description}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}

                {/* <View>
                  <TouchableOpacity>
                   
                    <Text style={styles.state}>IMPS</Text>
                    <Text style={styles.Statesubtext}>
                    Instant transfer, 24x7
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </RBSheet>
            </View>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
              marginHorizontal: 16,
            }}>
            <Text style={styles.selecttext}>Description</Text>
            <Text style={styles.selecttext}>50/50</Text>
          </View>
          <Item regular style={styles.textInput}>
            <Input
              placeholder=""
              style={styles.input}
              value={this.state.Description}
              onChangeText={editedText =>
                this.setState({Description: editedText})
              }
            />
          </Item>
        </Content>

        {params.type === 1 ? (
          params.bankSchedule === true ? (
            <View style={{marginVertical: 32, marginHorizontal: 16}}>
              <Item warning style={styles.btn_Sc}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(
                      'Transfer_Schedule_Confirm',
                      {
                        date: params.date,
                        userName: params.holder,
                        accountNo: params.AccountBen,
                        amount: amount,
                        method: params.memberOf,
                        desc: Description,
                        scheduledays: params.scheduledays,
                        transfercount: params.transfercount,
                        bennid:params.bennId,
                         type:params.type

                      },
                    )
                  }>
                  <View style={{marginLeft: 5, textAlign: 'center'}}>
                    <Text style={styles.btntext}>Schedule from 28-06-2020</Text>
                    <Text style={styles.btntext}>Monthly, 10 transfers</Text>
                  </View>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                  <Button warning style={styles.arrow}>
                    <Image
                      source={require('../../images/home/arrow.png')}
                      style={{height: 10}}
                    />
                  </Button>
                  <Button warning style={styles.schedule_btn}>
                    <Image source={require('../../images/Transfer/edit.png')} />
                  </Button>
                  <Button warning style={styles.schedule_btn}>
                    <Icon name="close" style={{color: 'red', width: 20}} />
                  </Button>
                </View>
              </Item>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 16,
                marginHorizontal: 16,
                marginTop: 30,
              }}>
              <Button
                warning
                style={styles.paynowbtn}
                onPress={() =>
                  this.props.navigation.navigate('Transfer_Otherbank_confirm', {
                    accountNo: this.state.account,
                    IFCS: this.state.accIFCS,
                    amount: amount,
                    method: transactionMetod,
                    desc: Description,
                  })
                }>
                <Text style={styles.btntext}>Pay now</Text>
              </Button>
              <Button
                warning
                style={styles.schedulebtn}
                onPress={() =>
                  this.props.navigation.navigate('ScheduleTransfer', {
                    type: params.type,
                  })
                }>
                <Text style={styles.btntext_1}>schedule</Text>
              </Button>
            </View>
          )
        ) : params.bankSchedule === true ? (
          <View style={{marginVertical: 32, marginHorizontal: 16}}>
            <Item warning style={styles.btn_Sc}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Transfer_Schedule_Confirm', {
                    date: params.date,
                    userName: params.holder,
                    accountNo: params.AccountBen,
                    amount: amount,
                    method: params.memberOf,
                    desc: Description,
                    scheduledays: params.scheduledays,
                    transfercount: params.transfercount,
                     method:this.state.transactionMetod,
                      type:params.type,
                       bennid:params.bennId
                  })
                }>
                <View style={{marginLeft: 5, textAlign: 'center'}}>
                  <Text style={styles.btntext}>
                    Schedule from {params.date}
                  </Text>
                  <Text style={styles.btntext}>
                    {params.scheduledays}, {params.transfercount} transfers
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={{flexDirection: 'row'}}>
                <Button warning style={styles.arrow}>
                  <Image
                    source={require('../../images/home/arrow.png')}
                    style={{height: 10}}
                  />
                </Button>
                <Button warning style={styles.schedule_btn}>
                  <Image source={require('../../images/Transfer/edit.png')} />
                </Button>
                <Button warning style={styles.schedule_btn}>
                  <Icon name="close" style={{color: 'red', width: 20}} />
                </Button>
              </View>
            </Item>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 16,
              marginHorizontal: 16,
              marginTop: 30,
            }}>
            <Button
              warning
              style={styles.paynowbtn}
              onPress={() =>
                this.props.navigation.navigate('Transfer_Otherbank_confirm', {
                  userName: params.holder,
                  accountNo: params.AccountBen,
                  IFCS: params.IFCS,
                  amount: amount,
                  method: transactionMetod,
                  desc: Description,
                })
              }>
              <Text style={styles.btntext}>Pay now</Text>
            </Button>
            <Button
              warning
              style={styles.schedulebtn}
              onPress={() =>
                this.props.navigation.navigate('ScheduleTransfer', {
                  type: params.type,
                })
              }>
              <Text style={styles.btntext_1}>schedule</Text>
            </Button>
          </View>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transferDetails: state.transferDetails,
});

export default connect(
  mapStateToProps,
  {getBeneficiaryBank, getActivemethods},
)(To_myBankAcc);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffffff',
  },
  curdview: {
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    height: 97,

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },

  selecttext: {
    fontSize: 16,
    color: '#4a4a4a',
    fontFamily: 'Nunito',
    textAlign: 'left',
  },
  addbenficiarytext: {
    fontSize: 16,
    color: '#f79d32',
    textAlign: 'right',
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  user: {
    fontSize: 16,
    // color: '#474a4f',
    color: '#1b1464',
    fontFamily: 'Nunito',
  },
  acctext: {
    color: '#474a4f',
    fontSize: 14,
  },
  balance: {
    fontFamily: 'Nunito',
    color: 'grey',
    fontSize: 16,
    height: 22,
  },
  amount: {
    color: '#4a4a4a',
    textAlign: 'center',

    fontSize: 19,
  },
  textInput: {
    borderRadius: 5,
    height: 40,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#e1e4eb',
  },
  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  paynowbtn: {
    width: 300,
    justifyContent: 'center',
    height: 40,
  },
  schedulebtn: {
    backgroundColor: '#1b1464',
    width: 80,
    height: 40,
    justifyContent: 'center',
  },
  btntext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    alignSelf: 'center',
  },
  btntext_1: {
    fontSize: 9.5,
    color: '#ffffff',
    textAlign: 'center',
  },

  selectState: {
    width: 88,

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

  state: {
    //   width:73,

    opacity: 0.87,
    fontFamily: 'Nunito',
    color: '#000000',
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 16,
  },
  Statesubtext: {
    width: 332,

    fontSize: 16,
    color: '#999999',
    textAlign: 'left',
    fontStyle: 'normal',
    marginLeft: 16,
  },

  schedule_btn: {
    backgroundColor: '#1b1464',
    width: 80,
    height: 40,
    justifyContent: 'center',
  },
  btntext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    alignSelf: 'center',
  },
  btntext_1: {
    fontSize: 9.5,
    color: '#ffffff',
    textAlign: 'center',
  },
  btn_Sc: {
    width: 380,
    justifyContent: 'space-between',
    backgroundColor: '#1b1464',
    height: 41,
  },
  schedule_btn: {
    backgroundColor: '#0c0744',
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  arrow: {
    backgroundColor: '#1b1464',
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
});
