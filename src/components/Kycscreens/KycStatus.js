
    
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ScrollView
 
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
import { Container, Content, Header, Icon, ListItem, Body ,    Button} from 'native-base';

 


export default class Verticalbox extends Component {
    constructor() {
        super()
        this.data = [
            { title: 'Referral Code', description: 'Not submitted', lineColor: '#e1e4eb', circleColor: '#e1e4eb' },
            { title: 'Personal Information', description: 'Not submitted', lineColor: '#e1e4eb', circleColor: '#e1e4eb' },
            { title: 'Signature', description: 'Not submitted', lineColor: '#e1e4eb', circleColor: '#e1e4eb' },
            { title: 'Photo', description: 'Not submitted', lineColor: '#e1e4eb', circleColor: '#e1e4eb' },
            { title: 'PAN Card', description: 'Not submitted', lineColor: '#e1e4eb', circleColor: '#e1e4eb' },
            {
                title: 'Address Proof', lineColor: '#e1e4eb', circleColor: '#e1e4eb', description: 'Not submitted'+'                                                                              '+'Any of the following documents are acceptable as Address Proof.                   ' + ' -Aadhaar card                                               ' +'-Passport                                                                           ' +'-Driving License                                              ' +'-VoterID                                                                   '+'-Other',



            },


            { title: 'Nominee details', description: 'Not submitted', lineColor: '#e1e4eb', circleColor: '#e1e4eb' },


        ]
    }


    render() {


        return (
            <Container>

<Header style={{backgroundColor: '#1b1464', height: 140}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'center',
                marginVertical: 5,
                marginHorizontal: 16,
                justifyContent: 'space-between',
              }}>
              <Icon
                name="close"
                onPress={() => this.props.navigation.navigate('Transfer_Money')}
                style={{color: '#ffffff'}}
              />

              <Image source={require('../../images/billpay/faq_ic.png')} />
            </View>

            <View style={{marginVertical: 5, marginHorizontal: 16}}>
              <Text style={styles.code}>Please complete your KYC to unlock the power of Spark</Text>
              
            </View>
           
          </View>
        </Header>
        <ScrollView>
        <Content>

<View style={{backgroundColor:'#f0f0ff', height:30}}>

</View>
 <View style={{backgroundColor:'#ffffff', height:160}}>
     <Text style={styles.DarkText}> We need your KYC documents before you can get started using Spark.
             Please submit them using our hassle-free, paperless e-KYC to make
              the most of your Spark Savings Account and unlock all features.
            </Text>
     
 </View>
 <View style={{backgroundColor:'#f0f0ff', height:20}}>

</View>

 <ListItem>
     <Text style={{color:'#474a4f', fontWeight:'bold', fontSize:14}}>WHAT DO I NEED TO SUBMIT?</Text>
 </ListItem>
        <View style={styles.container}>
                <Timeline
                    style={styles.list}
                    data={this.data}
                     />
           </View>

           <View style={{backgroundColor:'#f0f0ff', height:20}}>

</View>
           <ListItem>
     <Text style={{color:'#474a4f', fontWeight:'bold', fontSize:14}}>WHAT DO I NEED TO SUBMIT?</Text>
 </ListItem>
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

                <View style={{backgroundColor:'#f0f0ff', height:50}}>
                <Button
              block
              warning
              style={styles.btnSubmit}
              onPress={this.userDetails}>
              <Text style={styles.submit}>Submit</Text>
            </Button>

</View>
           
        </Content>
        </ScrollView>




            </Container>
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
      
        paddingTop:36,
        backgroundColor: 'white',
      
        padding: 65,
       
        
        



    },
        list: {
        flex: 2,
        color:'#474a4f',
        fontSize:10,
        marginTop: 10,
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
         fontSize:16,
         color:'#474a4f',
      
           marginHorizontal:16,
            textAlign:'center',
             marginVertical:30,
         
           textAlign:"left"

      },
      listview: {
        borderColor: 'transparent',
        height: 15,
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
    btnSubmit:{
         marginTop: 20,
    
         marginHorizontal: 16,
          marginBottom: 32,
          
    }
});
 








