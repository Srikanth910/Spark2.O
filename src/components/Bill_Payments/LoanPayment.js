import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Icon,
  Body,
  Text,
  Right,
  Item,
  Input,
  View,
  List,
  ListItem,
} from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';
import {StatusBar, StyleSheet, Image} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {NetworkInfo} from 'react-native-network-info';
 import {GetBillersByCategoryAndRecentTxns, GetCustomerParamsByBillerId,SendBillFetchRequest} from '../../Redux/actions/billpayAction'
import { connect } from 'react-redux';
 class LoanPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNum: '',
      isVisible: false,
      Data: '',
      paybillDetails:[],
      custmerDetails:[],
       show:false,
       billerName:'',
       listName:'',
       deviceIp:'',
       loginUserData:{},
       BillerID:''

    };
  }
  // handlepayment = name => {
  //   this.setState({
  //     isVisible: true,
  //     Data: name,
  //   });
  //   this.RBSheet.close();
  // };
   componentDidMount=()=>{

    
    NetworkInfo.getIPAddress().then(ipAddress => {
      this.setState({
        deviceIp: ipAddress,
      });
    });
     const {params}=this.props.route

        const  paybillData={
          categoryId:params.billerId.toString(),
           "coverage":"",
           billerName:params.billerName,
           memberId:"1338"
        }
      
      this.props.GetBillersByCategoryAndRecentTxns(paybillData).then(()=>{
         const{Billcatagory}=this.props
         if(Billcatagory.catagoryDetails.code==="200"){
            this.setState({
               paybillDetails:Billcatagory.catagoryDetails.response.Response
            })
         }
      })
     

   }

   handleList=(id,Name)=>{
      const data={
         billerId:id,
         
      }
       this.props.GetCustomerParamsByBillerId(data).then(()=>{
           const {Billcatagory}=this.props
            if(Billcatagory.getCutmerDetails.code==="200"){
              // 
               this.setState({
                  billerName:Name,
                  BillerID:id,
                   
                  
                  custmerDetails:Billcatagory.getCutmerDetails.response.Response
               })
              //  this.RBSheet.close();
            }
          
       })

   }


   handleSubmit= async()=>{

    // try {
    //   const loginData = await AsyncStorage.getItem('Loginuser');
    //   const user = JSON.parse(loginData);
    //   this.setState({
    //     loginUserData: user,
    //   });
    // } catch (e) {
    //   alert('Failed to load name.');
    // }
      const{listName,deviceIp}=this.state
       const data={
          ip:deviceIp,
          "mac":"234.298.32.9",
          "mobileNumber":"9573288904",
          customerParams:listName,
          billerId:this.state.BillerID
       }

       this.props.SendBillFetchRequest(data).then(()=>{
           const{Billcatagory}=this.props
            if(Billcatagory.billFetchDetails.code==="200"){
              this.props.navigation.navigate('LoanpaymentSuccess',{ name:this.state.billerName})
            }

       })
   }
  render() {
      const{ Billcatagory}=this.props
     console.log(Billcatagory.billFetchDetails);
     
     
    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 80}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left style={{marginLeft: 5}}>
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('Loasmoney')}
              />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerText}>Loan Payment</Text>
          </Body>

          <Right>
            <Image source={require('../../images/billpay/faq_ic.png')} />
          </Right>
        </Header>
        <Content>
          <Text style={styles.loginText}>lender</Text>
          <Item regular style={styles.textInput}>
            <Input
              placeholder=""
              style={styles.input}
              value={this.state.billerName}
            />
            <Icon name="ios-arrow-down" onPress={() => this.RBSheet.open()} />
          </Item>

          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={500}
            duration={250}
            customStyles={{
              container: {
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              },
            }}>
            <Item regular style={styles.search}>
              <Icon name="search" />
              <Input
                placeholder=" search"
                style={styles.input}
                value={this.state.mobileNum}
                onChangeText={mobileText =>
                  this.setState({mobileNum: mobileText})
                }
              />
            </Item>

            <View>
              <List>
                {this.state.paybillDetails.map(data=>{
                  return(

                    <ListItem onPress={()=>this.handleList(data.BillerId, data.BillerName)} >

                      
                  {/* <Image source={require('../../images/billpay/Airtel.png')} /> */}
                  <Text style={{marginLeft: 20}}>{data.BillerName}</Text>
                </ListItem>

                  )
                })}
                
              </List>
            </View>
          </RBSheet>

        {this.state.custmerDetails.map(data=>{
           return(
             <>
<Text style={styles.loginText}>{data.name} </Text>
<Item regular style={styles.textInput}>
            <Input
              placeholder=""
              style={styles.input}
              value={this.state.listName}
              onChangeText={mobileText =>
                  this.setState({listName: mobileText})}
             
            />
          </Item>


             </>
           )

        })}

            
        </Content>

        <View style={{marginHorizontal: 16, marginVertical: 16}}>
          <ListItem>
            <Left>
              <Text style={styles.bottomtext}>
                Your service provider will take two working days to reflect
                amount paid in your account.
              </Text>
            </Left>
            <Right>
              <Image
                source={require('../../images/billpay/bharat_logo.png')}
                style={styles.logo}
              />
            </Right>
          </ListItem>
          {/* {this.state.isVisible === true ? ( */}
            <Button
              block
              warning
              onPress={this.handleSubmit}
                // this.props.navigation.navigate('LoanpaymentSuccess')
              >
              <Text>Get Payable Amount</Text>
            </Button>
          {/* ) : (
            <Button block warning>
              <Text>Proceed</Text>
            </Button>
          )} */}
        </View>
      </Container>
    );
  }
}

 
 const mapStateToProps=state=>({
  Billcatagory:state.BIllcatagoryDetails
 })

export default connect(
  mapStateToProps,
  {GetBillersByCategoryAndRecentTxns, GetCustomerParamsByBillerId,SendBillFetchRequest},
)(LoanPayment);



const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  loginText: {
    paddingTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },
  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  logo: {},

  search: {
    marginTop: 40,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },
  bottomtext: {
    color: '#999999',
    textAlign: 'left',
    letterSpacing: 0.33,
    fontSize: 14,
  },
});
