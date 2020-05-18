import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  CardItem,
  Button,
  Icon,
  Body,
  Title,
  Text,
  Left,
  Right,
  Card,
  ListItem,
  Item,
  checkiconc,
} from 'native-base';
import {connect} from 'react-redux';
import {
  StyleSheet,
  StatusBar,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import CardList from './CardList';
import KycAccordion from './kycAccordion';
import ImageSilder from './ImageSilder';
import HomeFooter from './Footer';
import {
  getActivemethods,
  getBeneficiaryBank,
  
  
} from '../../Redux/actions/TransferAction';
 import {getBanners, isFinbusCustomerForRD, getPrepaidBillerCategories} from '../../Redux/actions/authAction'
import AsyncStorage from '@react-native-community/async-storage';
// import ImageSilder from './ImageSilder';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabStatus1: true,
      tabStatus2: false,
      tabStatus3: false,
      tabStatus4: false,
      billpay:[]
    };
  }

  
  checkTabSelected(tab) {
    switch (tab) {
      case 1:
        this.setState({
          tabStatus1: true,
          tabStatus2: false,
          tabStatus3: false,
          tabStatus4: false,
        });
        // code block
        break;
      case 2:
        this.setState({
          tabStatus1: false,
          tabStatus2: true,
          tabStatus3: false,
          tabStatus4: false,
        });
        // code block
        break;
      case 3:
        // code block
        this.setState({
          tabStatus1: false,
          tabStatus2: false,
          tabStatus3: true,
          tabStatus4: false,
        });
        this.props.navigation.navigate('SettingPage');
        break;
      case 4:
        this.setState({
          tabStatus1: false,
          tabStatus2: false,
          tabStatus3: false,
          tabStatus4: true,
        });
        // code block
        break;
    }
  }

    componentDidMount= async()=>{

        // try{
        //    const data=  await  AsyncStorage.getItem('Loginuser');
        //     console.log(data)
        // } catch(e){
        //    console.log(e)
        // }
        
          




       
        

          const data={
            membarId:"1421"
          }
      
         this.props.getPrepaidBillerCategories().then(()=>{
             const{auth}=this.props
            
           if(auth.getPrepaidData.code==="200"){
              this.setState({
                billpay:auth.getPrepaidData.list.Response

              })
           }
         })

    }


     handleBillpay=(id, Name)=>{
        console.log(id)
      this.props.navigation.navigate('LoanPayment',{billerId:id, billerName:Name})

     }
  render() {
    const {auth} = this.props;
     
    
    
    return (
      <Container style={styles.Container}>
        <Header style={{backgroundColor: '#1b1464', height: 100}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left>
            <ListItem style={styles.listview}>
              <Image
                source={require('../../images/home/spk_icon.png')}
                style={styles.spicon}
              />

              <View style={styles.userid}>
                <Text style={styles.userName}>Srikanth</Text>
    <Text style={styles.id}>MemberID:1421</Text>
              </View>
            </ListItem>
          </Left>

          <Right>
            <Image
              source={require('../../images/home/white_dot.png')}
              style={styles.doticon}
            />
          </Right>
        </Header>

        <Content>
          <ImageSilder />

          <View style={styles.kyccard}>
            <ListItem>
              <Text style={styles.kycheader}>
                MAKE THE MOST OF YOUR SPARK ACCOUNT
              </Text>
            </ListItem>
            <View>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/thumb.png')}
                  style={styles.checkicon}
                />

                <Body>
                  <Text style={styles.Listtext}>
                    {' '}
                    Please complete your Profile to gain...
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/check_icon.png')}
                  style={styles.checkicon}
                />

                <Body>
                  <Text style={styles.Listtext}>
                    {' '}
                    Fully compliant Spark Savings Account
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/check_icon.png')}
                  style={styles.checkicon}
                />

                <Body>
                  <Text style={styles.Listtext}>All features unlocked</Text>
                </Body>
              </ListItem>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/check_icon.png')}
                  style={styles.checkicon}
                />
                <Body>
                  <Text style={styles.Listtext}>No more reminders</Text>
                </Body>
              </ListItem>

              <View style={styles.bottomBtn}>
                <Button bordered warning style={styles.getbtn}>
                  <Text>Get started</Text>
                </Button>
              </View>
            </View>
          </View>

          <View style={styles.Rectangle}>
            <View style={styles.fdCard}>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/spk_logo.png')}
                  style={styles.logo}
                />
                <Text style={styles.saving}>SAVINGS</Text>
              </ListItem>
              <Text style={styles.savingData}>
                This is your zero balance account which gives you up to 8% p.a.
                interest credited daily.
              </Text>

              <Card style={styles.card}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.AcNO}>
                        A/c NO :<Text>121233233232</Text>
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <ImageBackground
                      source={require('../../images/rupi_icon.png')}
                      style={{height: 16, width: 10, marginTop: 10}}
                    />
                    <Text style={styles.bal}>5000</Text>
                  </Left>

                  <Right>
                    <Button transparent
                    
                     onPress={()=>this.props.navigation.navigate('Saving_Account_Main')}
                    >
                      <Image source={require('../../images/home/arrow.png')} />
                    </Button>
                  </Right>
                </CardItem>

                <Item style={styles.bottomcurd}>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.navigate('LoadSpark')}>
                    <Text style={styles.loadstyle}>LOAD</Text>
                  </Button>
                  <Text style={{color: 'grey'}}>|</Text>
                  <Button transparent>
                    <Text
                      style={styles.loadstyle}
                      Transfer_Money
                      onPress={() =>
                        this.props.navigation.navigate('Transfer_Money')
                      }>
                      TRANSFER
                    </Text>
                  </Button>
                </Item>
              </Card>
            </View>
          </View>

          <View style={styles.billpay}>
            <View>
              <ListItem style={styles.billpayList}>
                <Text style={styles.billtext}>BILL PAYMENT</Text>

                <Text style={styles.tns_text}>Transactions</Text>
              </ListItem>
              <View >
                <View style={{flexDirection: 'row', flexWrap:'wrap',  }}>
                   {  this.state.billpay.map(item=>{
                    return(
                      <TouchableOpacity onPress={()=>this.handleBillpay(item.Id, item.Name)}>
                      <View style={styles.box}>
                        {item.ServerId==="6" ?
                        <View>
                        <Image
                        source={require('../../images/home/phone.png')}
                        style={styles.billIcon}
                      />
                      <Text style={styles.iconText}>{item.Name}</Text>
                        </View>:
                         item.ServerId==="7"?
                         <View>
<Image
                      source={require('../../images/home/Broadband.png')}
                      style={styles.broadband}
                    />
                      <Text style={styles.iconText}>{item.Name}</Text>

                           </View>:
                            item.ServerId==="9"?
                            <View>

<Image
                      source={require('../../images/home/water.png')}
                      style={styles.watericon}
                    />
                     <Text style={styles.iconText}>{item.Name}</Text>


                            </View>:
                            item.ServerId==="5"?
                            <View>

<Image source={require('../../images/home/Landline.png')} style={styles.watericon}/>


<Text style={styles.iconText}>{item.Name}</Text>

                              </View>:
                              item.ServerId==="4"?
                              <View>
<Image
                      source={require('../../images/home/DTH.png')}
                      style={styles.billIcon}
                    />
                     <Text style={styles.iconText}>{item.Name}</Text>


                              </View>:
                              item.ServerId==="3"?
                              <View>
<Image
                      source={require('../../images/home/Electricity.png')}
                      style={styles.billIcon}
                    />
                    <Text style={styles.iconText}>{item.Name}</Text>


                            

                              </View>:
                              item.ServerId==="2"?
                              <View>
<Image source={require('../../images/billpay/Gas.png')} style={styles.gas}/>
<Text style={styles.iconText}>{item.Name}</Text>

                                </View>:null


                        
                        }

                        
                    </View>
                    </TouchableOpacity>

                  
                    )
                    
                     

                
                    })}  
                    <View style={styles.dottedmore}>
                    <Text
                      style={styles.moretext}
                      onPress={() => this.props.navigation.navigate('PayBill')}>
                      More
                    </Text>
                  </View>
                  {/* <View style={styles.box}>
                    <Image
                      source={require('../../images/home/phone.png')}
                      style={styles.billIcon}
                    />
                    <Text style={styles.iconText}>Mobile Postpaid</Text>
                  </View> */}
                  {/* <View style={styles.box}>
                    <Image
                      source={require('../../images/home/Broadband.png')}
                      style={styles.broadband}
                    />
                    <Text style={styles.iconText}>Broadband</Text>
                  </View> */}
                  {/* <View style={styles.box}>
                    <Image
                      source={require('../../images/home/Electricity.png')}
                      style={styles.billIcon}
                    />
                    <Text style={styles.iconText}>Electricity</Text>
                // </View>*/}
                 </View> 
{/* 
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginVertical: 16,
                    marginTop: 15,
                    marginLeft: 10,
                  }}>
                  <View style={styles.box}>
                    <Image
                      source={require('../../images/home/DTH.png')}
                      style={styles.billIcon}
                    />
                    <Text style={styles.iconText}>DTH</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                      source={require('../../images/home/euro.png')}
                      style={styles.euroicon}
                    />
                    <Text style={styles.iconText}>PAYMENT</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                      source={require('../../images/home/water.png')}
                      style={styles.watericon}
                    />

                    <Text style={styles.iconText}>water</Text>
                  </View>
                  <View style={styles.dottedmore}>
                    <Text
                      style={styles.moretext}
                      onPress={() => this.props.navigation.navigate('PayBill')}>
                      More
                    </Text>
                  </View>
                </View> */}
              </View>
            </View>
          </View>

          <View style={styles.fdRectangle}>
            <View style={styles.fdCard}>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/spk_logo.png')}
                  style={styles.logo}
                />
                <Text style={styles.saving}>FIXED DEPOSITS</Text>
              </ListItem>

              <Text style={styles.savingData}>
                You can earn up to 16% interest p.a. Also avail the option to
                earn interest on deposit every month!
              </Text>
              <View>
                <ImageBackground
                  source={require('../../images/home/fd_bg.png')}
                  style={styles.fd_rdbg}>
                  <View style={styles.dottedlines}>
                    <Text style={styles.fddotedtext}>
                      Open a Fixed Deposit at an incredible rate up to
                      <Text style={styles.pa}>16% p.a.</Text>
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.rdbottombtn}>
                <ListItem style={styles.listview}>
                  <Left>
                    <Item style={styles.itemview}>
                      <Image
                        source={require('../../images/home/plus_icon.png')}
                        style={styles.fd_rdiicon}
                      />
                      <Text style={styles.fd_rdbtn}> OPEN NEW </Text>
                    </Item>
                  </Left>
                  <Right>
                  
                    <Item style={styles.itemview}
                     onPress={() =>
                      this.props.navigation.navigate('Fdscreen')
                    }
                    >
                      
                      <Image
                        source={require('../../images/home/trendup.png')}
                        style={styles.fd_rdiicon}
                      />

                      <Text
                        style={styles.fd_rdbtn}
                        >
                        {' '}
                        FD RATES
                      </Text>
                    </Item>
                  </Right>
                </ListItem>
              </View>
            </View>
          </View>
          <View style={styles.rdRectangle}>
            <View style={styles.fdCard}>
              <ListItem style={styles.listview}>
                <Image
                  source={require('../../images/home/spk_logo.png')}
                  style={styles.logo}
                />
                <Text style={styles.saving}> RECURRING DEPOSITS</Text>
              </ListItem>

              <Text style={styles.savingData}>
                Earn up to 15% p.a. with periodic investment discipline of
                Recurring Deposits.!
              </Text>

              <View>
                <ImageBackground
                  source={require('../../images/home/rd_bg.png')}
                  style={styles.fd_rdbg}>
                  <View style={styles.rddottedlines}>
                    <Text style={styles.fddotedtext}>
                      Open a Recurring Depositat an amazing rate up to
                      <Text style={styles.pa}>15% p.a.</Text>
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View>
                <View style={styles.rdbottombtn}>
                  <ListItem style={styles.listview}>
                    <Left>
                      <Item style={styles.itemview}>
                        <Image
                          source={require('../../images/home/plus_icon.png')}
                          style={styles.fd_rdiicon}
                        />
                        <Text style={styles.fd_rdbtn}> OPEN NEW </Text>
                      </Item>
                    </Left>
                    <Right>
                      <Item style={styles.itemview}>
                        <Image
                          source={require('../../images/home/trendup.png')}
                          style={styles.fd_rdiicon}
                        />
                        <Text
                          style={styles.fd_rdbtn}
                          onPress={() =>
                            this.props.navigation.navigate('RDScreen')
                          }>
                          {' '}
                          RD RATES
                        </Text>
                      </Item>
                    </Right>
                  </ListItem>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottom} />
        </Content>

        <Footer>
          <FooterTab style={{backgroundColor: '#ffffff'}}>
            <Button
              onPress={() => {
                this.checkTabSelected(1);
              }}
              active={this.state.tabStatus1}
              style={{backgroundColor: this.state.tabStatus1 ? null : null}}>
              <Icon
                name="home"
                style={styles.bottomIcon}
                style={{color: this.state.tabStatus1 ? '#1b1464' : '#474a4f'}}
              />
              <Text
                style={styles.footertext}
                style={{color: this.state.tabStatus1 ? '#1b1464' : '#474a4f'}}>
                Home
              </Text>
            </Button>

            <Button
              onPress={() => {
                this.checkTabSelected(2);
              }}
              active={this.state.tabStatus2}
              style={{backgroundColor: this.state.tabStatus1 ? null : null}}>
              <Icon
                name="notifications"
                style={styles.bottomIcon}
                style={{color: this.state.tabStatus2 ? '#1b1464' : '#474a4f'}}
                // onPress={() => this.props.navigation.navigate('NotifClass')}
              />
              <Text
                style={styles.footertext}
                style={{color: this.state.tabStatus2 ? '#1b1464' : '#474a4f'}}>
                Notification
              </Text>
            </Button>
            <Button
              onPress={() => {
                this.checkTabSelected(3);
              }}
              active={this.state.tabStatus3}
              style={{backgroundColor: this.state.tabStatus3 ? null : null}}>
              <Icon
                name="settings"
                style={styles.bottomIcon}
                style={{color: this.state.tabStatus3 ? '#1b1464' : '#474a4f'}}
              />
              <Text
                style={styles.footertext}
                style={{color: this.state.tabStatus3 ? '#1b1464' : '#474a4f'}}>
                settings
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {getActivemethods, getBeneficiaryBank,getBanners,isFinbusCustomerForRD, getPrepaidBillerCategories},
)(Home);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f0f0ff',
  },
  bottom: {
    backgroundColor: '#f0f0ff',
    height: 30,
  },
  bottomIcon: {
    color: 'grey',
  },
  doticon: {
    width: 16,
    height: 4,
    marginRight: 16,
  },

  logo: {
    height: 29,
    width: 71,
    textAlign: 'left',
    paddingTop: 10,
    alignSelf: 'center',
  },
  listview: {
    borderColor: 'transparent',
    height: 15,
  },
  userName: {
    
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'left',
  },
  userid: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  id: {
   
    opacity: 0.5,
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#ffffff',
  },
  Rectangle: {
    //  width:360,
    height: 300,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  kycRectangle: {
    marginTop: 30,
    height: 0,
    backgroundColor: '#ffffff',
  },
  fdRectangle: {
    marginTop: 30,
    height: 'auto',
    backgroundColor: '#ffffff',
  },
  rdRectangle: {
    marginTop: 30,
    height: 'auto',
    backgroundColor: '#ffffff',
  },
  saving: {
    height: 19,
    //  width:62,
    marginBottom: 5,
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 'bold',
    // letterSpacing:'normal',

    marginRight: 16,
    marginLeft: 16,
    color: '#474a4f',
    textAlign: 'left',
  },
  savingData: {
    height: 36,
    fontFamily: 'Nunito',
    fontSize: 14,

    color: '#aaadb2',
    marginRight: 16,
    marginLeft: 16,
    fontWeight: 'normal',
  },
  fdcolor: {
    height: 195,
    backgroundColor: '#1b1464',

    // background-image: linear-gradient(184deg, #1b1464 65%, #3d3c77 -6%);
  },
  card: {
    backgroundColor: '#ffffff',
    // height:148,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  getbtn: {
    width: 192,
    height: 32,

    justifyContent: 'center',
  },
  AcNO: {
    width: 50,
    height: 19,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    color: 'grey',
  },
  bal: {
    
    fontFamily: 'Inconsolata',
    fontSize: 24,
    fontFamily: 'Inconslata',

    fontWeight: 'bold',
    textAlign: 'left',
    color: '#474a4f',
  },
  forwardicon: {
    backgroundColor: 'red',
  },
  spicon: {
    height: 32,
    width: 32,
  },
  kyccard: {
    marginTop: 30,
    height: 250,

    backgroundColor: '#ffffff',
  },
  kycheader: {
    height: 19,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#474a4f',
    fontSize: 14,
    marginRight: 16,
    marginLeft: 16,
  },
  Listtext: {
    height: 22,

    fontSize: 16,
    textAlign: 'left',
    color: '#474a4f',
  },
  checkicon: {
    marginLeft: 12,
    height: 20,
    marginRight: 16,
    width: 18,
  },
  bottomBtn: {
    alignSelf: 'center',
    marginTop: 20,
  },
  fd_rdbg: {
    height: 195,

    // marginTop: 10/
  },
  fd_rdbtn: {
    fontFamily: 'Nunito',
    color: '#f79d32',

    fontSize: 14,

    fontWeight: 'bold',
  },
  fd_rdiicon: {
    height: 10,
    // width:17,
    padding: 5,
  },
  itemview: {
    borderColor: 'transparent',
  },
  rdbottombtn: {
    marginTop: 10,
    marginVertical: 16,
  },
  fdCard: {
    marginTop: 10,
  },
  billpay: {
   
    backgroundColor: '#ffffff',
    marginTop: 16,
   overflow:'visible'
  },
  billtext: {
    height: 19,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#474a4f',
    fontFamily: 'Nunito',
    marginLeft: 16,
  },
  tns_text: {
    // height:22,
    fontFamily: 'Nunito',
    // fontSize:16,

    color: '#f79d32',
    fontWeight: 'bold',
    marginRight: 16,
  },
  billpayList: {
    justifyContent: 'space-between',
    borderColor: 'transparent',
  },

  contentview: {
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 24,
    marginRight: 24,
    // marginTop: 10,
  },
  loadstyle: {
    // height:20,
    fontSize: 14,

    color: '#f7931e',
    fontWeight: 'bold',
  },
  fd_box: {},
  iconText: {
    fontFamily: 'Nunito',
    fontSize: 12,
    color: '#474a4f',
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#ffffff',
    height: 75,
    width: 75,

    borderRadius: 10,
    marginLeft: 20,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
      marginTop: 15,
  },
  billIcon: {
    height: 42,
    width: 30,
    marginTop: 5,
    alignSelf: 'center',
  },
  broadband: {
    height: 42,
    width: 34,
    marginTop: 5,
    alignSelf: 'center',
  },

  watericon: {
    height: 42,
    width: 40,
    marginTop: 5,
    alignSelf: 'center',
  },
  euroicon: {
    height: 42,
    width: 40,
    marginTop: 5,
    alignSelf: 'center',
  },
  more: {
    backgroundColor: '#c3c1de',
    height: 75,
    width: 75,

    borderRadius: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },

  footertext: {
    height: 16,
    fontSize: 13,
    fontFamily: 'Nunito',

    opacity: 0.8,
  },
  active: {
    color: 'blue',
  },
  moretext: {
    textAlign: 'center',
    color: '#f77d0e',
    fontSize: 12,
    height: 16,
    marginTop: 30,
  },
  dottedlines: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    marginHorizontal: 16,
    borderColor: '#ffffff',

    borderRadius: 2,
    borderWidth: 2,
    borderStyle: 'dashed',
    height: 97,
    width: 210,
    marginBottom: 20,
  },

  dottedmore: {
    marginHorizontal: 16,
    borderColor: '#c3c1de',
    backgroundColor: '#c3c1de',
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    height: 75,
    width: 75,
    marginBottom: 20,
     marginTop: 15,
  },
  fddotedtext: {
    width: 189,
    height: 82,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',

    color: '#ffffff',
    textAlign: 'center',
  },
  pa: {
    height: 41,
    fontFamily: 'Nunito',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rddottedlines: {
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 40,
    marginHorizontal: 170,
    borderColor: '#ffffff',

    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'dashed',
    height: 97,
    width: 207,
    marginBottom: 20,
  },
  bottomcurd: {
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    borderTopColor: 'grey',
  },
  gas:{ 
    height:36,
     width:22,
      marginTop:10,
    
     alignSelf:'center'


},
});
