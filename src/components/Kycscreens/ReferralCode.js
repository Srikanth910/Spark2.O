import React, { Component } from 'react'
import { Container, Header, Icon, Content, Item, Input, Button } from 'native-base'
import { StatusBar, View, Text , Image, StyleSheet} from 'react-native'

export default class ReferralCode extends Component {
    render() {
        return (
          <Container>
    
    <Header style={{backgroundColor: '#1b1464', height: 140}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

<View style={{flex: 1, marginTop:20}}>
          <View
            style={{
              flexDirection: 'row',
            
              alignItems: 'center',
               marginVertical: 5, marginHorizontal: 16,
              justifyContent:'space-between',
            }}>
            <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Transfer_Money')}
              style={{color: '#ffffff'}}
            />
            
            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>

           <View style={{  marginVertical: 5, marginHorizontal: 16, }}>

               <Text style={styles.code}>Referral Code</Text>
               <Text style={styles.lightText}>Please enter the referral code of your introducer.</Text>
           </View>
           <View style={{height:8, backgroundColor:'#f7931e',  width:50, borderRadius: 10,  marginVertical:16, 
         textAlign:'left',
              
           alignItems:'flex-start'}}>

            </View>
          
          </View>
         
       
        </Header>
        
        <Content>
            <View style={{height:20 ,backgroundColor:'#f5f5ff'}}>

            </View>
            <View>
            <Text style={styles.mobileinput}>Enter Referral Code</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="eg. REFCODE123"
                  style={styles.input}
                 
                //   onChangeText={editedText =>
                //     this.setState({Email: editedText})
                  
                />
              </Item>
              <View style={{flexDirection: 'row', justifyContent: 'space-between' ,marginHorizontal:16,}}>

                  <Text style={styles.referralcode}>Don't have a Referral Code?</Text>
                  <Text style={{color:'#f79625', fontSize:12,  fontWeight:'bold', fontFamily:'Nunito'}}>Call Us</Text>
              </View>

              <Text style={styles.maintext}>WHAT IS A REFERRAL CODE?</Text>
              <Text style={styles. DarkText}>Spark Savings is currently invite only. You will need a referral code in order to activate your Spark account along with other KYC.</Text>


<Text style={styles. DarkText}>Enter your introducer's referral code or request for one by contacting us.</Text>
            </View>
        </Content>
            <Text style={{textAlign:'center', color:'#f3a549', fontSize:16}}>Skip</Text>
        <Button
              block
              warning
              style={styles.btnSubmit}
              onPress={this.userDetails}>
              <Text style={styles.submit}>Submit</Text>
            </Button>
          </Container>
        )
    }
}


 const styles= StyleSheet.create({
    mobileinput: {
        marginTop: 10,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,
        height: 19,
      },
      loginInput: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',
      },
      input: {
        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,
      },
      btnSubmit: {
        alignItems: 'center',
        
    
        marginHorizontal: 16,
         marginVertical: 32,
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
         DarkText:{
            fontFamily:'Nunito',
            fontSize:14,
            color:'#474a4f',
            marginHorizontal: 16,
            marginVertical:5,
              textAlign:"left"

         },
         referralCode:{
             fontFamily:'Nunito',
               fontSize:12,
                color:'#474a4f',
                 textAlign:'left'
         },
          maintext:{
               fontSize:14,
               fontWeight:'bold',
                 fontFamily:'Nunito',
                  marginHorizontal: 16,
                  
                    marginTop: 60,
               color:'#474a4f',
          },
         submit:{
              color:'#ffffff',
               textAlign:'center',
                fontSize:16
         }

 })