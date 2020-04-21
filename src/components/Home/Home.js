import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text, Left, Right, Card } from 'native-base';
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

          
   <CardList></CardList>
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
    }
     

 })