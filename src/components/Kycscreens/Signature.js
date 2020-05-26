import React, { Component } from 'react'
import { Container, Header, Icon, Content, Item, Input, Button } from 'native-base'
import { StatusBar, View, Text , Image, StyleSheet, CheckBox} from 'react-native'

export default class Signature extends Component {
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
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Transfer_Money')}
              style={{color: '#ffffff'}}
            />
            
            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>

           <View style={{  marginVertical: 5, marginHorizontal: 16, }}>

               <Text style={styles.code}>Specimen Signature</Text>
               <Text style={styles.lightText}>Add your signature by drawing it below. Your signature must be as close to your PAN signature as possible.</Text>
           </View>
          </View>
         
   
        </Header>
        <Content>
            <View style={{backgroundColor:'#e1e4eb', height:322 ,  marginHorizontal: 16,  marginVertical: 16, borderRadius: 10,}}>
                <View style={{alignItems:'center' ,  marginVertical: 80,}}>
                    <Image source={require('../../images/kyc/edit_p.png')}/>
                    <Text style={{color:'#aaadb2', fontSize:14, textAlign:'center'}}>Sign here</Text>
                </View>

            </View>
           
        </Content>
        <Item style={{borderColor:'transparent' ,marginLeft: 16, marginRight: 16, height:10}}>
            <CheckBox/>
            <Text style={styles.DarkText}>I confirm that this is a legal representation of my signature</Text>
            </Item>
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
         }

 })