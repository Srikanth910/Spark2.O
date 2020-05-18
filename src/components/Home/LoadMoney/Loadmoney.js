import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Content,
  Text,
  Item,
  Input,
  CardItem,
  Card,
  CheckBox,
  View,
} from 'native-base';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackgroundBase,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import RazorpayCheckout from'react-native-razorpay';
 

import {checkCarddetails} from '../../../Redux/actions/LoadMoneyaction';
class Loadmoney extends Component {
  state = {activeIndex: 0};

  constructor(props) {
    super(props);

    this.state = {
      value: false,
       amount:''
    };
  }
  componentDidMount() {
    this.props.checkCarddetails();
  }
  checked = () => {
    this.setState({
      value: !this.state.value,
    });
  };

   handleSubmit=()=>{

  
    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_1DP5mmOlF5G5ag',
        amount: this.state.amount,
        name: 'Spark',
        prefill: {
        email: 'Srikanth@gmail.com',
        contact: '9100146410',
        name: 'Spark'
        },
        theme: {color: '#F37254'}
        }

        // const payementDetails={
        //     membarId:'1421',
        //     balance:this.state.amount,
        //     "chargeAmount":"0",
        //     "ServiceChargePayedByCust":"no",
        //     "ShareBuy":"false",
        //     pgTransId:data.razorpay_payment_id

        //  }

        RazorpayCheckout.open(options).then((data) => {
           
             this.props.navigation.navigate('Paymentportal' ,{amount:this.state.amount, id:data.razorpay_payment_id})
        
        // this.props.addSavingsAccountBalanceRazorpay(payementDetails)

       
        // alert(`Success: ${data.razorpay_payment_id}`);
        console.log( data.razorpay_payment_id)
        }).catch((error) => {
       // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
        });
        
   }

  render() {
    const {cardDetails} = this.props.loadmoney;
    console.log('data', cardDetails);

    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 80}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left>
            <Button transparent>
              <Icon
                name="close"
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </Button>
          </Left>
          <Body style={{alignItems: 'flex-start'}}>
            <Title> Load money</Title>
          </Body>
        </Header>
        <ScrollView>
          <Content style={styles.Container}>
            <Text style={styles.textAmount}>
              Amount (up to Rs. 5,00,000 at a time)
            </Text>

            <Item regular style={styles.loginInput}>
              <Input placeholder=""
              
               value={this.state.amount}
               onChangeText={editText => this.setState({amount: editText})}
              />
            </Item>
            <Item style={styles.borderline}>
              <Image
                source={require('../../../images/info.png')}
                style={styles.infoicon}
              />
              <Text style={styles.text}>
                Loaded amount may be adjusted with pending amount of Rs. 1100.
                <Text style={{color: '#f7931e'}}> Tap to know more</Text>
              </Text>
            </Item>
            <Text style={styles.textAmount}>Description / Purpose</Text>

            <Item regular style={styles.loginInput}>
              <Input placeholder="Member Deposit" />
            </Item>

            <Text style={styles.selecttext}>Select payment method</Text>

            {cardDetails.length > 0 &&
              cardDetails.map(data => {
                if (data.status === true) {
                  return (
                    <>
                      {data.name === 'DC-Razorpay' ? (
                        <View style={styles.cardlist}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({activeIndex: 1});
                            }}
                            style={
                              this.state.activeIndex === 1 &&
                              data.status === true
                                ? styles.btnActive
                                : styles.btn
                            }>
                            <Item style={styles.borderline}>
                              <Image
                                source={require('../../../images/cr-card.png')}
                                style={styles.Icon}
                              />
                              <View style={styles.cardtext}>
                                <Text> Debit card </Text>
                                <Text style={{color: '#f7931e'}}>
                                  {' '}
                                  charges {data.charges} %{' '}
                                </Text>
                              </View>
                            </Item>
                          </TouchableOpacity>
                        </View>
                      ) : data.name === 'NB-Razorpay' ? (
                        <View style={styles.cardlist}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({activeIndex: 0});
                            }}
                            style={
                              this.state.activeIndex === 0
                                ? styles.btnActive
                                : styles.btn
                            }>
                            <Item style={styles.borderline}>
                              <Image
                                source={require('../../../images/loptop.png')}
                                style={styles.Icon}
                              />

                              <View style={styles.cardtext}>
                                <Text>Net banking </Text>
                                <Text style={{color: '#f7931e'}}>
                                  {' '}
                                  charges {data.charges}%{' '}
                                </Text>
                              </View>
                            </Item>
                          </TouchableOpacity>
                        </View>
                      ) : data.name === 'CC-Razorpay' ? (
                        <View style={styles.cardlist}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({activeIndex: 2});
                            }}
                            style={
                              this.state.activeIndex === 2 &&
                              data.status === true
                                ? styles.btnActive
                                : styles.btn
                            }>
                            <Item style={styles.borderline}>
                              <Image
                                source={require('../../../images/cr-card.png')}
                                style={styles.Icon}
                              />

                              <View style={styles.cardtext}>
                                <Text> Credit card </Text>
                                <Text>
                                  {' '}
                                  Charges up to {data.charges}% apply{' '}
                                </Text>
                              </View>
                            </Item>
                          </TouchableOpacity>
                        </View>
                      ) : data.name === 'Wallets-Razorpay' ? (
                        <View style={styles.cardlist}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({activeIndex: 3});
                            }}
                            style={
                              this.state.activeIndex === 3 && data.status
                                ? styles.btnActive
                                : styles.btn
                            }>
                            <Item style={styles.borderline}>
                              <Image
                                source={require('../../../images/wallet.png')}
                                style={styles.Icon}
                              />

                              <View style={styles.cardtext}>
                                <Text> Paytm </Text>
                                <Text>
                                  {' '}
                                  Charges up to {data.charges}% onely{' '}
                                </Text>
                              </View>
                            </Item>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </>
                  );
                }
              })}

            {/* <View style={styles.cardlist}>
                             
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 0 }) }}
                                style={this.state.activeIndex === 0? styles.btnActive : styles.btn}>
                                <Item style={styles.borderline}>
                       <Image source={require('../../../images/loptop.png')} style={styles.Icon}/>
                                    
                                <View style={styles.cardtext} >
                                <Text>Net banking </Text>
                                <Text style={{ color: '#f7931e' }}> no charges </Text></View>
                                </Item>
                            </TouchableOpacity>
                        </View> */}

            {/* <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 1 }) }}
                                style={this.state.activeIndex === 1 ? styles.btnActive : styles.btn}>
                                    <Item style={styles.borderline}>
                                    <Image source={require('../../../images/cr-card.png')} style={styles.Icon}/>
                                    <View style={styles.cardtext}>
                                <Text> Debit card </Text>
                                <Text  style={{ color: '#f7931e'}}> No charges </Text></View></Item>
                            </TouchableOpacity>
                        </View> */}
            {/* <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 2 }) }}
                                style={this.state.activeIndex === 2 ? styles.btnActive : styles.btn}>

                                    <Item style={styles.borderline}>
                                     <Image source={require('../../../images/cr-card.png')} style={styles.Icon}/>
                                    
                                     <View style={styles.cardtext}>

                                <Text> Credit card  </Text>
                                <Text> Charges up to 4% apply </Text>
                                </View>
                                </Item>
                            </TouchableOpacity>
                        </View> */}
            {/* <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 3 }) }}
                                style={this.state.activeIndex === 3 ? styles.btnActive : styles.btn}>
                              <Item style={styles.borderline} >
                              <Image source={require('../../../images/wallet.png')} style={styles.Icon}/>
                                    
                               <View style={styles.cardtext}>
                                <Text> Paytm </Text>
                                <Text> Charges up to 1% onely  </Text>
                                </View>
                             
                             </Item>
                            </TouchableOpacity>
                        </View> */}

            <Text style={styles.bottomtext}>
              You will be redirected to our select payment partners depending on
              the chosen payment method.
            </Text>

            <Item style={styles.grpItem}>
              <CheckBox
                onPress={this.checked}
                checked={this.state.value}
                style={styles.check}
              />
              <Text style={styles.termsCondtion}>
                I agree to the
                <Text style={{color: '#f7931e', padding: 5}}>
                  Terms and Conditions
                </Text>
              </Text>
            </Item>

            <Button
              block
              warning
              style={styles.bottombtn}
              onPress={this.handleSubmit}
                //   () => this.props.navigation.navigate('Paymentportal')}
                  
                  >
              <Text>proceed</Text>
            </Button>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loadmoney: state.loadmoney,
});

export default connect(
  mapStateToProps,
  {checkCarddetails},
)(Loadmoney);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Icon: {
    width: 30,
    height: 20,
    marginLeft: 10,
  },

  btn: {
    backgroundColor: '#ffffff',
    // borderColor: '#dc00ff',
    // borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,

    shadowOpacity: 0.25,
    shadowColor: '#ffffff',
    shadowRadius: 2.84,

    elevation: 2,
  },
  btnActive: {
    // alignItems: 'center',
    // backgroundColor: '#f7931e',
    borderColor: '#f7931e',
    // borderRadius: 10,
    borderWidth: 2,
    padding: 10,
  },
  notetext: {
    marginTop: 300,
    marginLeft: 14,
    width: 328,
    opacity: 0.5,
  },
  Content: {
    marginRight: 16,
    marginLeft: 16,
  },
  loginInput: {
    borderRadius: 5,
    height: 40,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    backgroundColor: '#e1e4eb',
  },
  textAmount: {
    // width:236,
    height: 19,
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    color: '#474a4f',
    textAlign: 'left',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
  },
  cardtext: {
    marginLeft: 30,
  },
  text: {
    width: 304,

    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#474a4f',
  },

  selecttext: {
    height: 19,
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    color: '#474a4f',
    textAlign: 'left',
    marginLeft: 16,
    marginRight: 16,
    fontSize: 14,
    marginTop: 10,
  },
  netbanking: {
    width: 87,
    height: 22,
    fontSize: 16,
    color: '#474a4f',

    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  cardItem: {
    height: 44,
  },
  card: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 15,
    height: 44,
    //  width:328,
  },
  bottomtext: {
    height: 30,
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40,

    color: '#aaadb2',
  },
  bottombtn: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 16,
  },

  termsCondtion: {
    // height: 19,
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    color: '#474a4f',
    fontSize: 14,
    marginLeft: 20,
  },
  check: {
    borderColor: '#f7931e',
    // height:14,
    // width:14,
    borderRadius: 2,
    backgroundColor: '#f7931e',
  },
  grpItem: {
    marginTop: 20,
    borderColor: 'transparent',
    marginRight: 16,
    marginLeft: 16,
  },
  cardlist: {
    marginLeft: 16,
    marginRight: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  infoicon: {
    height: 16,
    width: 16,
    marginBottom: 10,
    marginRight: 16,
    marginLeft: 16,
  },
  borderline: {
    borderColor: 'transparent',
  },
});
