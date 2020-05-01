import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, CardItem, Button, Icon, Body, Title, Text, Left, Right, Card, ListItem, Item, checkiconc } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, StatusBar, View, ImageBackground, Image, } from 'react-native';
import CardList from './CardList';
import KycAccordion from './kycAccordion';
import ImageSilder from './ImageSilder';
// import ImageSilder from './ImageSilder';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }



  render() {

    const { auth } = this.props
    console.log('reducer', auth)
    return (
      <Container style={styles.Container}>
        <Header style={{ backgroundColor: '#1b1464', height: 90 }}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left>

            <ListItem style={styles.listview}>
              <Image source={require('../../images/home/spk_icon.png')} style={styles.spicon} />

              <View style={styles.userid}>
                <Text style={styles.userName}>9100146410</Text>
                <Text style={styles.id}>MemberID 1181</Text>
              </View>
            </ListItem>
          </Left>

          <Right >
            <Image source={require('../../images/home/white_dot.png')} style={styles.doticon} />
          </Right>

        </Header>


        <Content >

  <ImageSilder/>
 


          <View style={styles.kyccard}>
            <ListItem >
              <Text style={styles.kycheader}>MAKE THE MOST OF YOUR SPARK ACCOUNT</Text>
            </ListItem>
            <View>
              <ListItem style={styles.listview}>
                <Image source={require('../../images/home/thumb.png')} style={styles.checkicon} />

                <Body>
                  <Text style={styles.Listtext}> Please complete your Profile to gain...</Text>

                </Body>

              </ListItem>
              <ListItem style={styles.listview}>

                <Image source={require('../../images/home/check_icon.png')} style={styles.checkicon} />

                <Body>
                  <Text style={styles.Listtext}> Fully compliant Spark Savings Account</Text>
                </Body>

              </ListItem>
              <ListItem style={styles.listview}>

                <Image source={require('../../images/home/check_icon.png')} style={styles.checkicon} />


                <Body>
                  <Text style={styles.Listtext}>
                    All features unlocked</Text>
                </Body>

              </ListItem>
              <ListItem style={styles.listview}>

                <Image source={require('../../images/home/check_icon.png')} style={styles.checkicon} />
                <Body>
                  <Text style={styles.Listtext}>
                    No more reminders</Text>
                </Body>

              </ListItem>

              <View style={styles.bottomBtn}>
                <Button bordered warning style={styles.getbtn}>
                  <Text>Get started</Text>
                </Button></View>

            </View>

          </View>

          <View style={styles.Rectangle}>

          <View style={styles.fdCard}>
            <ListItem style={styles.listview}>

              <Image source={require('../../images/home/spk_logo.png')} style={styles.logo} />
              <Text style={styles.saving}>SAVINGS</Text>
            </ListItem>
            <Text style={styles.savingData}>This is your zero balance account which gives you up to 8% p.a. interest credited daily.</Text>



                                 
           <Card style={styles.card}>
              <CardItem>
                <Left>

                  <Body>
                    <Text style={styles.AcNO}>A/c NO :
                  <Text>121233233232</Text>
                    </Text>


                  </Body>
                </Left>
              </CardItem>
              <CardItem >

                <Left>
                  <ImageBackground source={require('../../images/rupi_icon.png')} style={{ height: 16, width: 10, marginTop: 10 }} />
                  <Text style={styles.bal}>10000</Text>
                </Left>
              

                <Right>
                  <Button transparent>
                 <Image source={require('../../images/home/arrow.png')}/></Button>
                </Right>
                



              </CardItem>

              <CardItem>
                <Left>
                  <Button transparent 
                    onPress={() => this.props.navigation.navigate('NotifClass')}
                  >

                    <Text style={styles.loadstyle} 
                    
                     onPress={()=>this.props.navigation.navigate('Loadmoney')}
                    >LOAD</Text>
                  </Button>
                  
                </Left>

                <Right>
                  <Button transparent >

                    <Text style={styles.loadstyle}>TRANSFER</Text>
                  </Button>

                </Right>
              </CardItem>

            </Card> 
            </View>
            </View>

       
          <View style={styles.billpay}>

            <View >
              <ListItem  style={styles.billpayList}>
               
                  <Text style={styles.billtext}>BILL PAYMENT</Text>
             
                  <Text style={styles.tns_text}>
                  Transactions
                  </Text>
                  

              </ListItem>
              <View style={{ flexDirection:"row", marginLeft:20, }}>
              <View style={styles.box}>
                  <Image source={require('../../images/home/phone.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>Mobile {"\n"}Prepaid</Text>


                </View>
                <View style={styles.box}>
                  <Image source={require('../../images/home/phone.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>Mobile Postpaid</Text>


                </View>
                <View style={styles.box}>
                  <Image source={require('../../images/home/Broadband.png')} style={styles.broadband}/>
        <Text style={styles.iconText}>Broadband</Text>


                </View>
                <View style={styles.box}>
                  <Image source={require('../../images/home/Electricity.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>Electricity</Text>


                </View>
               
                

              </View>


              <View style={{flex:1, flexDirection:"row", marginLeft:20, marginTop: 15,}}>
                <View style={styles.box}>
                  <Image source={require('../../images/home/DTH.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>DTH</Text>


                </View>
                <View style={styles.box}>
                <Image source={require('../../images/home/euro.png')} style={styles.euroicon}/>
<Text style={styles.iconText}>PAYMENT</Text>




                </View>
                <View style={styles.box}>
                <Image source={require('../../images/home/water.png')} style={styles.watericon}/>

<Text style={styles.iconText}>water</Text>
                </View>


<View style={styles.dottedmore}>
                {/* <View style={styles.more}> */}



                  <Text style={styles.moretext}>More</Text>
                
                {/* </View> */}
                </View>
          
              </View>
              
            </View>



          </View>

          <View style={styles.fdRectangle}>
            <View style={styles.fdCard}>
              <ListItem style={styles.listview}>

                <Image source={require('../../images/home/spk_logo.png')} style={styles.logo} />
                <Text style={styles.saving}>FIXED DEPOSITS</Text>
              </ListItem>

              <Text style={styles.savingData}>You can earn up to 16% interest p.a. Also avail the option
                 to earn interest on deposit every month!</Text>
              <View >
                <ImageBackground source={require('../../images/home/fd_bg.png')} style={styles.fd_rdbg} >

                <View style={styles.dottedlines}>
                            <Text style={styles.fddotedtext}>Open a Fixed Deposit  at an incredible rate up to
                       

                         <Text style={styles.pa}>
                                  16% p.a.
                                  </Text>
                                  </Text>
                                  
                           
                        </View>

                </ImageBackground>
         



              </View>
              <View style={styles.rdbottombtn}>
                <ListItem style={styles.listview}>

                  <Left>
                    <Item style={styles.itemview}>
                      <Image source={require('../../images/home/plus_icon.png')} style={styles.fd_rdiicon} />
                      <Text style={styles.fd_rdbtn}>  OPEN NEW </Text>
                    </Item>
                  </Left>
                  <Right>
                    <Item style={styles.itemview}>
                      <Image source={require('../../images/home/trendup.png')} style={styles.fd_rdiicon} />
                      <Text style={styles.fd_rdbtn}>  FD RATES</Text></Item>
                  </Right>
                </ListItem>
              </View>


            </View>





          </View>
          <View style={styles.rdRectangle}>
            <View style={styles.fdCard}>
              <ListItem style={styles.listview}>

                <Image source={require('../../images/home/spk_logo.png')} style={styles.logo} />
                <Text style={styles.saving}> RECURRING DEPOSITS</Text>
              </ListItem>


              <Text style={styles.savingData}>Earn up to 15% p.a. with periodic investment discipline of Recurring Deposits.!</Text>

              <View>
                <ImageBackground source={require('../../images/home/rd_bg.png')} style={styles.fd_rdbg} >
               

                
                <View style={styles.rddottedlines}>
                            <Text style={styles.fddotedtext}>Open a Recurring Depositat an amazing rate up to
                         <Text style={styles.pa}>
                                  15% p.a.
                                  </Text>
                                  </Text>
                                  
                           
                        </View>
                  </ImageBackground>
              </View>
              <View>
                <View style={styles.rdbottombtn}>
                  <ListItem style={styles.listview}>

                    <Left>
                      <Item style={styles.itemview}>
                        <Image source={require('../../images/home/plus_icon.png')} style={styles.fd_rdiicon} />
                        <Text style={styles.fd_rdbtn}>  OPEN NEW </Text>
                      </Item>
                    </Left>
                    <Right>
                      <Item style={styles.itemview}>
                        <Image source={require('../../images/home/trendup.png')} style={styles.fd_rdiicon} />
                        <Text style={styles.fd_rdbtn}>  RD RATES</Text></Item>
                    </Right>
                  </ListItem>
                </View>
              </View>
            </View>

          </View>    

          <View style={styles.bottom}>

          </View>

        </Content>
        <Footer >
          <FooterTab style={{ backgroundColor: '#ffffff' }} >
            <Button

            >
              <Icon name="home" style={styles.bottomIcon} active />
              <Text style={styles.footertext}>Home</Text>
            </Button>

            <Button >
              <Icon name="notifications"
                style={styles.bottomIcon}


                onPress={() => this.props.navigation.navigate('NotifClass')}
              />
              <Text style={styles.footertext}>Notification</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Beneficiary')}
            >
              <Icon name="settings" style={styles.bottomIcon} />
              <Text style={styles.footertext}>settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth.userMpin
})

export default connect(mapStateToProps, {})(Home)

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: '#f0f0ff'
  },
  bottom:{
    backgroundColor: '#f0f0ff',
    height:30

  },
  bottomIcon: {
    color: 'grey'


  },
  doticon: {
    width: 16,
    height: 4,
    marginRight: 16

  },

  logo: {
    height: 29,
    width: 71,
    textAlign: 'left',
    paddingTop: 10



  },
  listview: {
    borderColor: 'transparent',
    height: 15
  },
  userName: {
    height: 19,
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'left'

  },
  userid: {
    paddingLeft: 10
  },
  id: {
    height: 16,
    opacity: 0.5,
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#ffffff'
  }
  ,
  Rectangle: {
    //  width:360,
    height: 300,
    marginTop: 20,
    backgroundColor: '#ffffff'
  },
  kycRectangle: {
    marginTop: 30,
    height: 0,
    backgroundColor: '#ffffff'

  },
  fdRectangle: {
    marginTop: 30,
    height: 328,
    backgroundColor: '#ffffff'

  },
  rdRectangle: {
    marginTop: 30,
    height: 324,
    backgroundColor: '#ffffff'

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
    textAlign: 'left'


  },
  savingData: {
    height: 36,
    fontFamily: 'Nunito',
    fontSize: 14,

    color: '#aaadb2',
    marginRight: 16,
    marginLeft: 16,
    fontWeight: 'normal'


  },
  fdcolor: {

    height: 195,
    backgroundColor: '#1b1464',

    // background-image: linear-gradient(184deg, #1b1464 65%, #3d3c77 -6%);
  },
  card: {
   backgroundColor:'#ffffff',
  // height:148,
  marginLeft:16,
  marginRight: 16,
  borderWidth: 5,
  shadowOffset:{width:0, height:2},
  shadowColor:'grey',
  shadowOpacity:0.4,
  shadowRadius:4,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderRightWidth:1,
  borderLeftWidth:1,
  marginTop:10
 



  },
  getbtn: {
    width: 192,
    height: 32,

    justifyContent: 'center'
  }
  ,

  AcNO: {
    width: 50,
    height: 19,
    fontFamily: 'Nunito',
     fontWeight:'bold',
     textAlign:'left',
    fontSize: 14,
    color: 'grey'

  },
  bal: {
    width: 63,
    height: 26,
    fontFamily: 'Inconsolata',
    fontSize: 24,
    fontFamily:'Inconslata',

    
    fontWeight: 'bold',
  textAlign:'left',
    color: '#474a4f'
  },
  forwardicon: {

backgroundColor:'red'

  },
  spicon: {
    height: 32,
    width: 32
  },
  kyccard: {
    marginTop: 30,
    height: 250,

    backgroundColor: '#ffffff'

  },
  kycheader: {
    height: 19,
    fontFamily: 'Nunito',
    fontWeight
      : 'bold',
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
    width: 18
  },
  bottomBtn: {
    alignSelf: 'center',
    marginTop: 20
  },
  fd_rdbg: {
    height: 195,
   
    // marginTop: 10/
  },
  fd_rdbtn: {


    height: 19,
    fontFamily: 'Nunito',
    color: '#f79d32'
    ,
    fontSize: 14,

    fontWeight: "bold"

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
    marginLeft:16,
    marginRight: 16,

  },
fdCard:{
  marginTop:10
},
billpay:{
  height:245,
  backgroundColor:'#ffffff',
  marginTop: 16,
},
billtext:{
  height:19,
  fontSize:14,
  fontWeight:'bold',
  textAlign:'left',
  color:'#474a4f',
  fontFamily:'Nunito',
  marginLeft: 16,
},
tns_text:{
  // height:22,
  fontFamily:'Nunito',
  // fontSize:16,
  
  color:'#f79d32',
  fontWeight:'bold',
  marginRight: 16,
},
billpayList:{
  justifyContent:'space-between',
  borderColor: 'transparent',
  
},

contentview: {
 
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width:0, height: 2},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 1,
  marginLeft: 24,
  marginRight: 24,
  // marginTop: 10,
  


},
loadstyle:{
  
  // height:20,
  fontSize:14,
  textAlign:'center',
   color:'#f7931e',
   fontWeight:'bold',
   letterSpacing:2
   

},
fd_box:{
 
  
},
iconText:{ 

  fontFamily:'Nunito',
  fontSize:12,
  color:'#474a4f',
  textAlign:'center'
  


},
box:{
  backgroundColor:'#ffffff',
   height:75,
   width:75,
   

   borderRadius: 10,
 marginLeft:10,
alignContent:'center',
  

},
billIcon:{
  height:42,
  width:24,
  marginTop: 5,
  alignSelf:'center'
  

},
broadband:{
  height:42,
  width:34,
  marginTop: 5,
  alignSelf:'center'

},

watericon:{
  height:42,
  width:40,
  marginTop: 5,
  alignSelf:'center'
},
euroicon:{
  height:42,
  width:40,
  marginTop: 5,
  alignSelf:'center'

},
more:{
  backgroundColor:'#c3c1de',
  height:65,
   width:75,
   

   borderRadius: 10,
 marginLeft:10,

},

 footertext:{
   
     height:16,
      fontSize:13,
       fontFamily:'Nunito',
        color:'#474a4f',
  
          opacity:0.8
 },
  active:{
    color:'blue'
  },
  moretext:{
     textAlign:'center',
    color:'#f77d0e',
     marginTop: 20,

      fontSize:12,
       height:16,

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
    height:97,
    width:204,
    marginBottom:20

   
  },

  dottedmore:{
    
    marginHorizontal: 16,
    borderColor:"#c3c1de",
      backgroundColor:'#c3c1de',
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    height:65,
    width:70,
    marginBottom:20

  },
  fddotedtext:{
    width:189,
    height:82,
    fontFamily:'Nunito',
    fontSize:16,
     fontWeight:'bold',
     
      color:'#ffffff',
      textAlign:'center'

  },
  pa:{
  
    height:41,
     fontFamily:'Nunito',
       fontSize:30,
        fontWeight:'bold',
          color:'#ffffff'
  },
  rddottedlines:{
    alignItems: 'center',
    justifyContent: 'center',
    
    marginVertical: 40,
    marginHorizontal: 170,
    borderColor: '#ffffff',

    
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'dashed',
    height:97,
    width:207,
    marginBottom:20

  },

})