import React, { Component } from 'react';
import { NativeModules,Easing,Animated,View,Text, StyleSheet, SafeAreaView,Image, ScrollView,Dimensions, ImageBackground, LayoutAnimation} from 'react-native';

import {Button, Icon, List} from 'native-base';
import RDAmountScreen from './rdAmountScreen';
import RDTenureScreen from './rdtenureScreen';
import RDScheduleScreen from './rdScheduleScreen';


const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

 class RecurringDepositScreen extends Component{

constructor(props){
  super(props)
  this.animatedValue = new Animated.Value(0)
  // this.amountHeight = new Animated.Value(80)
  // this.sheetHeight = new Animated.Value(0)
  this.state = {
    maturityAmount:1100,
    tenure:12,
    interest:5.3,
    imagePosition:16,
    buttonCLicks:0,
    amountHeight:80,
    sheetHeight:0,
    showAmount:true,
   
  }
}

// componentDidMount(){
//   console.log('successful to write API')
//   this.props.getActiveRD()
// }
handleDepositAnimations =(imageValue,click)  =>{
  Animated.timing(this.animatedValue,{
    toValue :imageValue,
    duration : 200,
    useNativeDriver:true
  }).start(()=>{
    this.setState({
      buttonCLicks:click
    })
  });
  this.handleScroll(click)
}

handleScroll =(clicks)=>{
this.ScrollView_ref.scrollTo(
  {
    x: width * clicks,
    y:0,
    animated:true
  }
);
}

nextButton = value => e =>{
  if (value==0){
    this.handleDepositAnimations(40,1);
  }else if (value==1){
    this.handleDepositAnimations(80,2);
    console.log('show bottom sheet-1')
    this.toggleBottomSheet(0)
  }else{
    console.log('show bottom sheet')
    this.toggleBottomSheet(80)
    this.setState({
      buttonCLicks:1
    })
  }
}
toggleBottomSheet = (amountHeight)=>{

  if (amountHeight == 80){
LayoutAnimation.spring();
this.setState({
  sheetHeight: height*0.8,
  amountHeight:0,
  showAmount : false
})
console.log('details height is expanded')
console.log('amount height is collapsed')
  }else{
    console.log('amount height is expanded')
    console.log('details height is collapsed')
 LayoutAnimation.spring();
 this.setState({
  amountHeight:80,
  showAmount : true,
   sheetHeight:0,
   
 })
  }
}

backButton = value => e => {
 if(value == 0){
   console.log('show alert')
 }else if (value == 1){
  this.handleScroll(0);
  this.setState({
    buttonCLicks:0
  })
 }else if (value ==2){
  this.handleScroll(1);
  this.setState({
    buttonCLicks:1
  })
 }else{
console.log('dismiss bottom sheet');
this.toggleBottomSheet(0)
 }
}

// moving backward in FD creation
backDepositFlow = value => e => {
 
  if (value == 2){
    console.log('back 2')
    this.setState({
      buttonCLicks : 1
    })
  }else if (value == 1){
    console.log('back 1')
    this.setState({
      
      buttonCLicks:0
    })
  }else if (value == 0){
    console.log('back 0')
    this.setState({
      buttonCLicks:0
    })
  }
  Animated.timing(this.animatedValue, {
    toValue: value,
    duration: 400,
    easing: Easing.ease,
    useNativeDriver:true,
  }).start()

  // scrolling screen
  this.ScrollView_ref.scrollTo(
    {
      x:Math.round(Dimensions.get('window').width * value),
      y:0,Animated : true,
    }
    )
}

// moving forward in FD creation
proceedDepositButton= value => e =>{
  // console.log(value)
  
  this.ScrollView_ref.scrollTo(
    {
      x:Math.round(Dimensions.get('window').width * value),
      y:0,Animated : true,
    }
  )
 if (value == 0){
   console.log('start 1')
   this.setState({
buttonCLicks : 1,

   })
   
 } else if (value == 1){
  console.log('start 2')
  this.setState({
    buttonCLicks : 2,
    
    
       })}
else{
  console.log('start 3')
  
}
Animated.timing(this.animatedValue, {
  toValue: value,
  duration: 400,
  easing: Easing.ease,
  useNativeDriver:true,
}).start()

}

handleAnimation = () => {
  if (this.animatedValue == 0){
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver:true,
  }).start()
  }else{
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver:true,
  }).start()
  }
  }
  render(){
    // const sheet = {
    //   transform:[
    //     {
    //       scaleX: this.sheetHeight.interpolate({
    //         inputRange:[0,1],
    //         outputRange:[0, height*0.65]
    //       })
    //     }
    //   ]
    // }
    // const amount = {
    //   transform:[
    //     {
    //       height: this.amountHeight.interpolate({
    //         inputRange:[0,1],
    //         outputRange:[0,80]
    //       })
    //     }
    //   ]
    // }

    const position = {
      transform:[
        {
          translateX: this.animatedValue.interpolate({
              inputRange: [0,1,2],
              outputRange: [0,4,8]
          }),
          
      },
      ]
    }
    return(
      <SafeAreaView style={{flex:1,}}>
<View  style={{flex:1}}>
<View style={{backgroundColor:'#e88510',
flex: 0.3,
justifyContent:'space-between'}}>
  
  <View>
  <View style={styles.row}>
   <Button icon transparent onPress = {
     this.backButton(this.state.buttonCLicks)
   }>
     <Icon name = 'arrow-back' style={{color:'white'}}/>
   </Button>
   <Text style={styles.headerTitle}>Open Recurring Deposit</Text>
   <Button style={styles.ratesButton}>
     <Text style={{color:'white',fontSize:11}}>RD Rates</Text>
   </Button>
 </View>
 
  </View>
  <ImageBackground style={{position: 'absolute',left:0,right: 0,top:50,bottom:0}} source = {require('../../images/fd&rd/orangeSky.png')}></ImageBackground>
  <Animated.Image style={[styles.animImage,position]} 
  source = {require('../../images/fd&rd/RDBalloon.png')}></Animated.Image>
  <View style={styles.row}>
    <Text style={styles.headerTitle}> 1. Amount</Text>
    <Text style={styles.headerTitle}> 2. Tenure</Text>
    <Text style={styles.headerTitle}> 3. Schedule</Text>

  </View>
 

</View>
<View style={{flex:0.7,}}>
<ScrollView
scrollEnabled = {false}
ref = {ref =>{
  this.ScrollView_ref = ref;
}}
 horizontal={true}
indicatorStyle = {null}
// scrollEnabled = {false}
>
<RDAmountScreen></RDAmountScreen>
<RDTenureScreen></RDTenureScreen>
<RDScheduleScreen></RDScheduleScreen>
</ScrollView>

</View> 
</View>
<View style = {{position: 'absolute',width:width,bottom:0}}> 

<View style={ this.state.showAmount ?  {
   height:this.state.amountHeight,
   backgroundColor:'#F0F0FF',
   marginBottom: 0,
  //  overflow:'visible',
  //  alignItems:'center',
  flexDirection:'column',
   justifyContent:'flex-end',
 opacity:1
}:{ marginBottom: 0,
    // overflow:'visible',
    // alignItems:'center',
    opacity:0,
    height:0}}>
        
    <List style={{justifyContent:'flex-start'}}>
   
    <View style={{justifyContent:'center'}}>
      <Text style={styles.depositAmount}>
Rs. {this.state.maturityAmount}

  </Text>
  <Text style={styles.depositTenure}>
  ({this.state.interest} months @ {this.state.tenure}% p.a.)
    
  </Text>
      </View>
    </List>

    
</View>

<Animated.View style={{backgroundColor: 'white',
height:this.state.sheetHeight,
justifyContent:'space-between',
}}>
 

<View style={{paddingTop:24}}>  
<Image 
resizeMode = {'contain'}
style={{height:this.state.sheetHeight * 0.2,
  width:width,
  marginVertical:16}}
  source = {require('../../images/fd&rd/RDBalloon.png')}>
</Image>
<View style={styles.card}>
  <View>
  <Text style={styles.content}>Monthly Deposit</Text>
<Text style={styles.amount}>₹ 2,000</Text>
  </View>

<Image resizeMode = {'center'} style={{height:18,width:18}} source = {require('../../images/fd&rd/rightTriangle.png')}></Image>
<View>
  <Text style={styles.orangeContent}>On maturity</Text>
<Text style={styles.orangeAmount}>₹ 28,000</Text>
  </View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingVertical:16}}> 
  <List> 
  <Text style={styles.content}>@ 10.5% p.a.</Text>  
  <Text style={styles.content}> From 10 Apr 2019</Text>  
   </List>
   <List> 
  <Text style={styles.content}>12 months</Text>  
  <Text style={styles.content}>To 10 Apr 2019</Text>  
   </List>
</View>
<View style={{justifyContent:'space-between',alignItems:'center'}}>
<Text style={styles.content}>
Amount debited on 10th of every month
</Text>
<View style={{justifyContent:'space-between',paddingTop: 16,}}>
<Text style={styles.content}>
Interest paid out end of term
</Text>
<Text style={styles.content}>
Breakable Recurring Deposit
</Text>
</View>
</View>
</View>

<Button style={{backgroundColor:'#49438e',marginHorizontal:16,marginBottom:24,justifyContent:'center',}}> 
  <Text style={{color:'white',fontSize:16}}>
  Confirm
  </Text>
</Button>


</Animated.View>
<Button icon style={styles.depositButton}
     onPress = {this.nextButton(this.state.buttonCLicks)}>
      <Icon name = 'arrow-forward' style={{color:'white'}} />
    </Button>
</View>
      </SafeAreaView>
      
    );
  }
}


export default RecurringDepositScreen;
const styles = StyleSheet.create({
  content:{
    fontSize:14,
    color:'#999999',
  },
  orangeContent:{
    fontSize:14,
    color:'#f7931e',
  },
  amount:{
    fontSize:24,
    color:'#474a4f',
    paddingTop: 8,
  },
  orangeAmount:{
    fontSize:24,
    color:'#f7931e',
    paddingTop: 8,
  },
card:{
  left:16,
justifyContent:'space-around',
flexDirection:'row',
alignItems:'center',
  height:90,
  backgroundColor:'white',
  width:width-32,
  shadowColor:'gray',
  shadowOpacity:0.5,
  shadowRadius: 10,
  shadowOffset:{
    height:4,width:2,
  }

},amountSheet:{
    height:this.amountHeight,
    backgroundColor:'#F0F0FF',
    marginBottom: 0,
    // overflow:'visible',/
    alignItems:'center',
  opacity:1},
  animImage:{height:70,
    position: 'absolute',
    bottom:40,
   width:70,
   resizeMode:'contain',
   marginBottom: 0,
   marginRight: 16,
},
  headerTitle:{
    color:'white',
    fontWeight: '500',
    fontSize:20,
    // marginTop: 30,
  },
  plane:{
    height:70,
    position: 'absolute',
    bottom:40,
   width:70,
   resizeMode:'contain',
   marginBottom: -30,
   marginRight: 16,}
   ,
  ratesButton:{
    backgroundColor:'#27226b',
    height:24,
    borderRadius:12,
    paddingHorizontal:8,
  },
  depositButton:{backgroundColor:'#27226b',
  color:'white',
  height:50,
  width:50,
  borderRadius:25,
  justifyContent:'center',
  position: 'absolute',
  marginTop:-25,
marginLeft:width/2 - 25,
shadowColor:'gray',
shadowOpacity:0.4,
shadowRadius:16,
shadowOffset:{height:2,width:4}},

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

