import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab,CardItem, Button, Icon, Body, Title, Text, Left, Right, Card, ListItem, Image } from 'native-base';
 import {connect } from 'react-redux';
import{StyleSheet, StatusBar, View, ImageBackground} from  'react-native';
import CardList from './CardList';
import KycAccordion from './kycAccordion';
import ImageSilder from './ImageSilder';

 class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     
    }
  }
  


  render() {
    
     const{auth}=this.props
      console.log('reducer',auth)
    return (
      <Container style={styles.Container}>
        <Header style={{ backgroundColor: '#1b1464', height: 80 }}>
                <StatusBar barStyle="light-content" backgroundColor="#1b1464"/>

                    <Left>
                      <Text style={styles.userName}>Srikanth</Text>
                      <Text style={styles.id}>MemberID 1181</Text>
                        
                    </Left>
                   
                    <Right />

                </Header>

            
            <Content >
              {/* <ImageSilder/> */}

          

              <View style={styles.Rectangle}>
                <Text style={styles.saving}>SAVINGS</Text>
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
            <CardItem>
             

<Left>
<ImageBackground  source={require('../../images/rupi_icon.png')} style={{height:30, width:20 , marginTop:10}}/>
<Text style={styles.bal}>10000</Text>
</Left>
<Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
               
              </Body>

              <Right>
                <Button >
                     <Icon name="home"/>
                </Button>
              </Right>

             
              
              
            </CardItem>
           
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}} 
                             onPress={()=>this.props.navigation.navigate('NotifClass')}
                >
                 
                  <Text>LOAD</Text>
                </Button>
              </Left>

              <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
                  
                  <Text>TRANSFER</Text>
                </Button>

              </Right>
            </CardItem>
          </Card>
            
              </View>
              <View style={styles.kycRectangle} >
                <KycAccordion/>

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
          <FooterTab style={{backgroundColor:'#ffffff'}} >
            <Button
            
            >
              <Icon name="home" style={styles.bottomIcon} active/>
            </Button>
          
            <Button >
              <Icon  name="notifications" 
               style={styles.bottomIcon}

              
            onPress={()=>this.props.navigation.navigate('NotifClass')}
              />
            </Button>
            <Button
             onPress={()=>this.props.navigation.navigate('Beneficiary')}
            >
              <Icon name="settings" style={styles.bottomIcon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


 const mapStateToProps=(state)=>({
   auth:state.auth.userMpin
 })

export default connect(mapStateToProps,{})  (Home)

 const styles=StyleSheet.create({

   Container:{
  flex:1,
  backgroundColor:'#f0f0ff'
   },
   bottomIcon:{
     color:'grey'


     },
     userName:{
       height:19,
       fontFamily:'Nunito',
       fontSize:14,
       color:'#ffffff',
       textAlign:'left'
      
     },
     id:{
       height:16,
       opacity:0.5,
       fontFamily:'Nunito',
       fontSize:12,
       fontWeight:'normal',
       textAlign:'left',
       color:'#ffffff'
     }
     ,
     Rectangle:{
      //  width:360,
       height:260,
       marginTop:20,
       backgroundColor:'#ffffff'
     },
     kycRectangle:{
       marginTop:30,
     height:0,
      backgroundColor:'#ffffff'

     },
     fdRectangle:{
      marginTop:30,
      height:328,
      backgroundColor:'#ffffff'

     },
     rdRectangle:{
      marginTop:30,
      height:324,
      backgroundColor:'#ffffff'

     },
     saving:{
       height:16,
      //  width:62,
       fontFamily:'Nunito',
       fontSize:14,
        fontWeight:'bold',
       
        marginRight:16,
        marginLeft:16,
        color:'#474a4f'

     },
     savingData:{
       height:36,
       fontFamily:'Nunito',
       fontSize:14,
      
       color:'#aaadb2',
marginRight:16,
marginLeft:16,
      fontWeight:'normal'
       

     },
     fdcolor:{

      height:195,
      backgroundColor:'#1b1464',
     
      // background-image: linear-gradient(184deg, #1b1464 65%, #3d3c77 -6%);
    },
    card:{
      marginTop:5,
      marginLeft:16,
      marginRight:16,

      shadowColor:'grey',

      
 
  },
  

  AcNO:{
    width:50,
height:19,
fontFamily:'Nunito',
fontSize:14,
color:'grey'

  },
  bal:{
    width:99,
    height:26,
    fontFamily:'Inconsolata',
    fontSize:24
,
fontWeight:'bold',
color:'#474a4f'     }
     

 })