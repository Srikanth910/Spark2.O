import React, { Component } from 'react';
import { View, Text, List, Button, Icon, } from 'native-base';
import { SafeAreaView, ScrollView,StyleSheet,Image } from 'react-native';

class RDCloseSuccessScreen extends Component{

    constructor(){
        super()
        this.state = {
            adjustedAmount:8300,
            charges:0.5,
            penality:100,
            date:'3 Nov 6:30 PM',
            id:'654654654654'
        }
    }
    render(){
        return(
      <ScrollView style={{backgroundColor:'#F0F0FF'}}>
            <SafeAreaView>
          <View style={styles.header}>
            
                 <Button icon transparent>
                     <Icon name = {'close'} style={{color:'white'}}>

                     </Icon>
                 </Button>
             
              <List style={{flexDirection:'row',
              alignItems:'flex-start',
              justifyContent:'space-between',alignContent:'flex-start'}}>
              <Text style={styles.title}>Recurring Deposit closed</Text>
              <Image style={{height:100,width:60,marginTop:-40}}
              resizeMode = {'center'}
               source={require('../../images/fd&rd/closeFD.png')}></Image>
              </List>
              
          </View>

          {/* amount View */}
          <View style={{backgroundColor:'white'}}>
              <View style={styles.seperator}></View>
              <View style={styles.amountCard}>
              <Text style={styles.amount}>23,000</Text>
              <Text style={styles.lightContent}>premature withdrawal transferred to</Text>
              <Text style={styles.description}>your Spark Savings Account</Text>
            
              <View style={{flexDirection:'row',paddingTop:16}}>
<Image  style={{height:22,width:22,marginHorizontal:8}} 
source =  {require('../../images/fd&rd/successIcon.png')}></Image>
<Text>Deposit closed</Text>

              </View>
              <Text style={styles.lightContent}>
    {this.state.date}  {this.state.id}
</Text>
<Text style={styles.lightContent}>
   TXN ID: {this.state.id}
</Text>
              </View>
              <View style={styles.seperator}></View>
          </View>

          {/* details  View */}
          <View style={{paddingHorizontal:16,paddingBottom:16,backgroundColor: 'white',}}>
<Text style={styles.subtitle}>CLOSURED DETAILS</Text>
<View style={styles.divider}></View>
<Text style={styles.content}>Readjusted Maturity Amount</Text>
<Text style={styles.smallAmount}>Rs.8300</Text>
<Text style={styles.content}>Charges</Text>
<Text style={styles.smallAmount}>0.5% + Rs. 100 </Text>
          </View>
          {/* description View */}
          <View style={{backgroundColor: 'white',paddingBottom:16}}>
          <View style={styles.seperator}></View>
          <View  style={{marginHorizontal:16}}>
          <Text style={styles.subtitle}>SORRY TO SEE THIS DEPOSIT CLOSED</Text>
          <View style={styles.divider}></View>
          <Text style={styles.content}>We are sorry to see this Recurring Deposit closed. We understand you may have some urgent commitments to honour. Please do come back and avail another Deposit in the future. We keep working to give you the best and most transparent rates in our products.</Text>
          </View>
          </View>
          <View style={styles.seperator}></View>
          </SafeAreaView>
      </ScrollView>
        );
    }
}

export default RDCloseSuccessScreen;

const styles =  StyleSheet.create({
    smallAmount:{
        color:'#474a4f',
        fontSize:16,
        marginTop:8,
        fontWeight:'bold', 
    },
    divider:{backgroundColor:'#e1e4eb',
    height:1,
    marginTop:12},
    description:{
        color:'#474a4f',
        fontSize:20,
        marginTop:16,
        fontWeight:'bold',
        
    },
    heading:{
        color:'#999999',
        fontSize:14,
        marginTop:16
    },
    lightContent:{
        color:'#999999',
        fontSize:14,
        marginTop:16
    },
    content:{
        color:'#474a4f',
        fontSize:14,
        marginTop:16
    },
    subtitle:{
        color:'#474a4f',
        fontSize:16,
        marginTop:8,
        fontWeight:'bold'
    },
    amountCard:{
justifyContent:'center',
alignItems:'center',
paddingVertical:16
    },
    seperator:{
height:16,
backgroundColor: '#F0F0FF',

    },
    title:{
        color:'white',
        fontSize:20,paddingLeft:16,
    },
    header:{
        backgroundColor: '#e68a1c',
        height:130,
    },
    row:{
        justifyContent:'center',
        alignContent:'space-between',
        paddingTop:5
    },
    amount:{
color:'#474a4f',
fontSize:24,
fontWeight:'bold'
    }
   
});