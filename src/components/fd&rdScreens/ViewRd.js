

import React, { Component } from'react';
import { Text,View, SafeAreaView, Dimensions } from'react-native';
import Carousel from'react-native-snap-carousel';
import { TouchableOpacity } from'react-native-gesture-handler';
 
const WIDTTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
class ViewRDScreen extends Component {
 
constructor(){
super()
this.state = {
 entries:[
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 {
 title:'FD#685999'
 },
 ]
 }
 }
 
 _renderItem = ({item, index}) => {
return (
<View style={{backgroundColor:'red',height:HEIGHT*0.7,justifyContent:'center'}}>
<Text>{ item.title }</Text>
</View>
 );
 }
 render() {
return (
<SafeAreaView style={{ flex: 1 }}>
<View style={{ flex: 1, backgroundColor: 'white' }}>
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'blue',height:60,marginBottom:16}}>
 
</View>
<Carousel
style={{marginTop:24}}
ref={(c) => { this._carousel = c; }}
data={this.state.entries}
renderItem={this._renderItem}
sliderWidth={WIDTTH}
itemWidth={WIDTTH*0.8}
itemHeight={HEIGHT*0.6}
/>
<TouchableOpacity style={{borderRadius:20,backgroundColor:'red',height:40,width:WIDTTH*0.6}}/>
</View>
</SafeAreaView>
 );
 }
}
 
export default ViewRDScreen;

