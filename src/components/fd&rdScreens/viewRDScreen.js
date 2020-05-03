import React, { Component } from 'react';
import { compose } from 'redux';
import {View,Text, FlatList, Dimensions, styles,ImageBackground,StyleSheet}  from  'react-native';
import { Button, Icon, List } from 'native-base';
import Carousel from 'react-native-snap-carousel';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
class ViewRDScreen extends Component{
    constructor(){
        super()
        this.state={
            activeCard:0,
            activeCardsIndex:0,
            deposits:[
                {
                    title:'deposit  0'
                },
                {
                    title:'deposit  1'
                },
                {
                    title:'deposit  2'
                },
                {
                    title:'deposit  3'
                },
                {
                    title:'deposit  4'
                },
                {
                    title:'deposit  5'
                },
                {
                    title:'deposit  6'
                },
                {
                    title:'deposit  7'
                },
                {
                    title:'deposit  8'
                },
                {
                    title:'deposit  9'
                },
            ]
        }
    }


    // list item 

    _renderItem =({item})=>{
    return(
        <View style={{shadowRadius:6,shadowColor: 'gray',shadowOpacity:0.5,marginLeft:16,flex:1,backgroundColor:'transparent',}}>
<ImageBackground style={{flex:1,resizeMode:'contain',justifyContent:'center',alignItems:'center'}} source ={require('../../images/fd&rd/deposit.png')}>
<View style={{justifyContent:'space-between',flexDirection:'row',paddingVertical:8}}>
    <List style={{alignItems:'flex-start'}}>
        <Text style={{color:'#999999',fontSize:14,paddingVertical: 2,}}>Amount</Text>
        <Text style={{color:'#999999',fontSize:14,paddingVertical: 2,}}>18 days more</Text>
    </List>
    
    <List style={{alignItems:'flex-end'}}>
        <Text style={{color:'#474a4f',fontSize:14,fontWeight:'bold',paddingVertical: 2,}}>+ 500.00</Text>
        <Text style={{color:'#f7931e',fontSize:14,paddingVertical: 2,}}>Know more ></Text>
    </List>
</View>

<Text style={{color:'#474a4f',fontSize:20,fontWeight:'bold',paddingTop:16}}>
FD #0056278 </Text>
<Text style={{color:'#474a4f',fontSize:14,paddingVertical: 4,}}>
Deposited Amount
</Text>
<Text style={{color:'#474a4f',fontSize:24,fontWeight:'bold'}}>
Rs. 1,00,000</Text>
<Icon style={{color:'orange',fontSize:16,paddingVertical: 4,}}
 name = {'ios-arrow-down'}>
</Icon>
<Text style={{color:'orange',fontSize:14,paddingVertical: 4,}}>
On maturity
</Text>
<Text style={{color:'orange',fontSize:24,fontWeight:'bold'}}>
Rs. 1,15,750</Text>
<List style={{flexDirection:'row',paddingVertical:8}}>
    <List>
        <Text style={{color:'#474a4f',fontSize:14,paddingVertical: 2,}}>@ 10.5% p.a.</Text>
        <Text style={{color:'#474a4f',fontSize:14,paddingVertical: 2,}}>From 27 Jul 2018</Text>
    </List>
    <List style={{alignItems:'flex-end'}}>
        <Text style={{color:'#474a4f',fontSize:14,paddingVertical: 2,}}>18 months (540  days)</Text>
        <Text style={{color:'#474a4f',fontSize:14,paddingVertical: 2,}}>To 27 Jan 2020</Text>
    </List>
</List>
<List  style={{paddingVertical:4}}>
    <Text style={{color:'#989898',fontSize:14,paddingVertical: 2,}}>Interest paid out Monthly</Text>
    <Text style={{color:'#989898',fontSize:14,paddingVertical: 2,}}>Non-Flexible Fixed Deposit</Text>

</List>
</ImageBackground>
        </View>
    );    
    }
_seperator =()=>{
    return(
        <View style={{width:16}}></View>
    );
}

// scroll begin detection
scrollBeginHandler = e => {
    if (this.state.startTouchX) return;
    const startTouchX = e.nativeEvent.contentOffset.x;
    this.setState(() => ({ startTouchX }));
  };
  
  // scroll end detection
  scrollEndHandler = e => {
    
    this.setState(() => ({
      activeCard: activeCardsIndex,
      startTouchX: null,
    }));
    this.list.scrollTo({
      x: activeCardsIndex * cardWidth + addition,
      animated: true,
    });
  };
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.3,backgroundColor: '#1b1464',alignItems:'center'}}></View>

                <View style={{flex:0.6,}}>

                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.deposits}
                    renderItem={this._renderItem}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH*0.8}
                    />
{/* <FlatList 
onScrollEndDrag = {this.scrollEndHandler}
onScrollBeginDrag = {this.scrollBeginHandler}
onMomentumScrollEnd = {this.scrollEndHandler}
horizontal= {true} 
data  = {this.state.deposits}
renderItem = {this._renderItem}
keyExtractor={(item,index)=> index.toString()}>


</FlatList> */}
                </View>
            <Button style={{backgroundColor: 'orange',left:40,right:40,bottom:24,position: 'absolute',borderRadius:20,justifyContent:'center'}}>
    <Text style={{color:'white'}}>Statment</Text>
            </Button>
            </View>
        );
    }
} 



export default ViewRDScreen;

