import React, { Component } from 'react'
import { Container, Header, Icon, Content, Item, Input, Button } from 'native-base'
import { StatusBar, View, Text , Image, StyleSheet, CheckBox} from 'react-native'

export default class PanCard extends Component {
    render() {
        return (
          <Container>
    
    <Header style={{backgroundColor: '#1b1464', height: 130}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

<View style={{flex: 1, }}>
          <View
            style={{
              flexDirection: 'row',
            
              alignItems: 'center',
               marginVertical: 5, marginHorizontal: 16,
              justifyContent:'space-between',
            }}>
            <Icon
              name="close"
              onPress={() => this.props.navigation.navigate('Transfer_Money')}
              style={{color: '#ffffff'}}
            />
            
            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>

           <View style={{  marginVertical: 5, marginHorizontal: 16, }}>

               <Text style={styles.code}>Photograph</Text>
               <Text style={styles.lightText}>Simple -  just take a selfie!
Just make sure that your face is not covered and is clearly visible..</Text>
           </View>
          </View>
         
   
        </Header>
        <Content>

        <Text style={styles.mobileinput}>Enter Referral Code</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder="eg. REFCODE123"
                  style={styles.input}
                 
                //   onChangeText={editedText =>
                //     this.setState({Email: editedText})
                  
                />
              </Item>

              <Text style={{color:"#f7931e" , textAlign:"center" ,marginTop: 10, fontSize:14, fontFamily:"Nunito"}}>See instructions for PAN card</Text>
            <View style={{backgroundColor:'#e1e4eb', height:254,  marginHorizontal: 16,  marginVertical: 16, borderRadius: 10,}}>
                <View style={{alignItems:'center' ,  marginVertical: 80,}}>
                    <Image source={require('../../images/kyc/pancard.png')}/>
                    <Text style={{color:'#aaadb2', fontSize:14, textAlign:'center'}}>Tap here to take a photo of your PAN card</Text>

                     
                                   </View>
                                   <Image source={require('../../images/kyc/camera.png')} style={{alignSelf:"flex-end", marginRight: 5,}} />


            </View>
           
        </Content>
        
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
            fontSize:12,
            color:'#474a4f',
         
            
              textAlign:"left"

         },
               submit:{
              color:'#ffffff',
               textAlign:'center',
                fontSize:16
         },

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
 })