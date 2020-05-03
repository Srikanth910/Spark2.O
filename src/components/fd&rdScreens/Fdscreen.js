import React, { Component } from 'react';
import { Easing,Animated,View,Text, StyleSheet, SafeAreaView,Image, ScrollView,Dimensions, ImageBackground} from 'react-native';
// import firebase from "react-native-firebase";
// import {FCMService} from './FCMService';
import {Button, Icon} from 'native-base';
import HomeScreen from '../FdScreens/HomeScreen';
import TenureScreen from '../FdScreens/TenureScreen';
import InterestScreen from '../FdScreens/InterestScreen';
// import HomeScreen from './src/components/amountScreen';
// import TenureScreen from './src/components/tenureScreen';
// import InterestScreen from './src/components/interestScreen';


 class FixedDepositScreen extends Component{

constructor(props){
  super(props)
  this.animatedValue = new Animated.Value(0)
  this.state = {
    maturityAmount:1100,
    tenure:12,
    interest:5.3,
    imagePosition:16,
   
  }
}

handleAnimation = () => {
  Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver:true,
  }).start()
  this.imagePosition = this.imagePosition + 60
}
  render(){
    return(
      <SafeAreaView style={{flex:1,}}>
<View  style={{flex:1}}>
<View style={{backgroundColor:'#1b1464',
flex: 0.3,
justifyContent:'space-between'}}>
  
  <View>
  <View style={styles.row}>
   {/* <Text>hello</Text> */}
   <Button icon transparent>
     <Icon name = 'arrow-back' style={{color:'white'}}/>
   </Button>
   <Text style={styles.headerTitle}>Open Fixed Deposit</Text>
   <Button style={styles.ratesButton}>
     <Text style={{color:'white',fontSize:11}}>RD Rates</Text>
   </Button>
 </View>
 
  </View>
  <ImageBackground style={{position:'absolute',left:0,right: 0,top:50,bottom:0}} source = {require('../../images/fd&rd/blueSky.png')}></ImageBackground>
  <Animated.Image style={{height:70,
    position: 'absolute',
    bottom:40,
   width:70,
   resizeMode:'contain',
   marginBottom: -30,
  transform:[
    {
      translateX: this.animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this.state.imagePosition + 120]
      })
  },
  ]}} 
  source = {require('../../images/fd&rd/plane.png')}></Animated.Image>
  <View style={styles.row}>
    <Text style={styles.headerTitle}> 1. Amount</Text>
    <Text style={styles.headerTitle}> 2. Tenure</Text>
    <Text style={styles.headerTitle}> 3. Interest</Text>

  </View>
 

</View>
<View style={{flex:0.7,}}>
<ScrollView horizontal={true}
indicatorStyle = {null}
// scrollEnabled = {false}
>
<HomeScreen/>
 <TenureScreen/>
<InterestScreen/> 
{/* <View style={{flex:0.7,
  width:Math.round(Dimensions.get('window').width),
  backgroundColor:'blue'
  }}>
</View> */}
{/* <View style={{flex:0.7,
  width:Math.round(Dimensions.get('window').width),
  backgroundColor:'green'
  }}>
</View> */}
</ScrollView>

</View> 
</View>
<View style={{height:80,
  backgroundColor:'#F0F0FF',
  marginBottom: 0,overflow:'visible',alignItems:'center'}}>
    <Button icon style={styles.depositButton}
     onPress = {this.handleAnimation}>
      <Icon name = 'arrow-forward' style={{color:'white'}} />
    </Button>
  <Text style={styles.depositAmount}>
Rs. {this.state.maturityAmount}

  </Text>
  <Text style={styles.depositTenure}>
  ({this.state.interest} months @ {this.state.tenure}% p.a.)
    
  </Text>

</View>

      </SafeAreaView>
      
    );
  }
}


export default FixedDepositScreen;
const styles = StyleSheet.create({
  headerTitle:{
    color:'white',
    fontWeight: '500',
    fontSize:20,
    // marginTop: 30,
  },
  plane:{height:70,
    position: 'absolute',
    bottom:40,
   width:70,
   resizeMode:'contain',
   marginBottom: -30,
   marginRight: 16,}
   ,
  ratesButton:{
    backgroundColor:'orange',
    height:24,
    borderRadius:12,
    paddingHorizontal:8,
  },
  depositButton:{backgroundColor:'#f7931e',
  color:'white',
  height:50,
  width:50,
  borderRadius:25,
  justifyContent:'center',
  marginTop:-25},

  row:{justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
  marginTop: 12,
  marginHorizontal:16},

  depositAmount:{
color:'#1b1464',
fontSize:24,
fontWeight:'500',
position: 'absolute',
left:16,
bottom:16,
  },
  
  depositTenure:{
    color:'#1b1464',
    fontSize:13,
    position: 'absolute',
right:16,
bottom:24,
    
      }
});
