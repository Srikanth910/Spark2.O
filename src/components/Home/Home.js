import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, CardItem, Button, Icon, Body, Title, Text, Left, Right, Card, ListItem, Item, checkiconc } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, StatusBar, View, ImageBackground, Image, } from 'react-native';
import CardList from './CardList';
import KycAccordion from './kycAccordion';
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
        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>
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

          <Right />

        </Header>


        <Content >
          
          <View style={styles.kyccard}>
            <ListItem >
              <Text style={styles.kycheader}>MAKE THE MOST OF YOUR SPARK ACCOUNT</Text>
            </ListItem>
            <View>
             <ListItem style={styles.listview}>
             <Image source={require('../../images/home/thumb.png')} style={styles.checkicon}/>
             
               <Body>
                 <Text  style={styles.Listtext}> Please complete your Profile to gain...</Text>
            
               </Body>

             </ListItem>
             <ListItem style={styles.listview}>
              
                <Image source={require('../../images/home/check_icon.png')} style={styles.checkicon}/>
             
               <Body>
               <Text style={styles.Listtext}> Fully compliant Spark Savings Account</Text>
               </Body>

             </ListItem>
             <ListItem style={styles.listview}>
              
             <Image source={require('../../images/home/check_icon.png')} style={styles.checkicon}/>
             
             
               <Body>
                 <Text style={styles.Listtext}>
               All features unlocked</Text>
               </Body>

             </ListItem>
             <ListItem  style={styles.listview}>
              
             <Image source={require('../../images/home/check_icon.png')} style={styles.checkicon}/>
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

            <ListItem style={styles.listview}>

              <Image source={require('../../images/home/spk_logo.png')} style={styles.logo} />
              <Text style={styles.saving}>SAVINGS</Text>
            </ListItem>
            <Text style={styles.savingData}>This is your zero balance account which gives you up to 8% p.a. interest credited daily.</Text>


            {/* <Card style={styles.card}>
              <CardItem>
                <Left>

                  <Body>
                    <Text style={styles.AcNO}>A/c NO :
                  <Text>121233233232</Text>
                    </Text>


                  </Body>
                </Left>
              </CardItem>
              <CardItem>


                <Left>
                  <ImageBackground source={require('../../images/rupi_icon.png')} style={{ height: 30, width: 20, marginTop: 10 }} />
                  <Text style={styles.bal}>10000</Text>
                </Left>
                <Body>
             
                </Body>

                <Right>
                  <Button transparent >
                    <Icon name='ios-arrow-forward' style={this.forwardicon} />
                  </Button>
                </Right>




              </CardItem>

              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}
                    onPress={() => this.props.navigation.navigate('NotifClass')}
                  >

                    <Text >LOAD</Text>
                  </Button>
                </Left>

                <Right>
                  <Button transparent textStyle={{ color: '#87838B' }}>

                    <Text>TRANSFER</Text>
                  </Button>

                </Right>
              </CardItem>

            </Card> */}
            
          </View>
          <View style={styles.kycRectangle} >
            <KycAccordion />

          </View>
          <View style={styles.fdRectangle}>
            <Text style={styles.saving}>FIXED DEPOSITS</Text>
            <Text style={styles.savingData}>You can earn up to 16% interest p.a. Also avail the option
                 to earn interest on deposit every month!</Text>
            <View style={styles.fdcolor}>

            </View>


          </View>
          <View style={styles.rdRectangle}>

          </View>

        </Content>
        <Footer >
          <FooterTab style={{ backgroundColor: '#ffffff' }} >
            <Button

            >
              <Icon name="home" style={styles.bottomIcon} active />
            </Button>

            <Button >
              <Icon name="notifications"
                style={styles.bottomIcon}


                onPress={() => this.props.navigation.navigate('NotifClass')}
              />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Beneficiary')}
            >
              <Icon name="settings" style={styles.bottomIcon} />
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
  bottomIcon: {
    color: 'grey'


  },

  logo: {
    height: 29,
    width: 71,
    textAlign: 'left',
    paddingTop: 10



  },
  listview: {
    borderColor: 'transparent',
    height:15
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
    height: 260,
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
    marginTop: 5,
    marginLeft: 16,
    marginRight: 16,

    shadowColor: 'grey',



  },
  getbtn:{
width:192,
height:32,

justifyContent:'center'
  }
,

  AcNO: {
    width: 50,
    height: 19,
    fontFamily: 'Nunito',
    fontSize: 14,
    color: 'grey'

  },
  bal: {
    width: 99,
    height: 26,
    fontFamily: 'Inconsolata',
    fontSize: 24
    ,
    fontWeight: 'bold',
    color: '#474a4f'
  },
  forwardicon: {

    backgroundColor: '#f79d32'

  },
  spicon: {
    height: 32,
    width: 32
  },
  kyccard:{
    marginTop: 30,
    height: 250,
    width:'100%',
    backgroundColor: '#ffffff'

  },
  kycheader:{
    height:19,
     fontFamily:'Nunito',
     fontWeight
     :'bold',
     color:'#474a4f',
     fontSize:14,
     marginRight: 16,
     marginLeft:16,
      width:300
  },
  Listtext:{
    height:22,
   
    fontSize:16,
    textAlign:'left',
    color:'#474a4f',
    


  },
  checkicon:{
    marginLeft:16,
    height:20,
    width:18
  },
  bottomBtn:{
    alignSelf:'center',
    marginTop:20
  }


})