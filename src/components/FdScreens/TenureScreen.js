import React, { Component } from 'react';
import {View,Dimensions,Text, StyleSheet,TextInput, Slider, FlatList} from  'react-native';
import { Button, Switch } from 'native-base';
class TenureScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            amount: 1000,
            minAmount:1000,
            maxAmount:500000,
            isBreakable:true,
            minBreakInterest:2.77,
            minNonBreakInterest:3.77,
            brekableTenures:9,
            breakableInterest:16,
            nonBrekableTenures:9,
            nonBreakableInterest:16,
            tenures:[
                {days:'540',months:'18',interest:'12.3',options:'1'},
                {days:'540',months:'18',interest:'12.3',options:'1'},
                {days:'540',months:'18',interest:'12.3',options:'1'},
                {days:'540',months:'18',interest:'12.3',options:'1'},
                {days:'540',months:'18',interest:'12.3',options:'1'},
                {days:'540',months:'18',interest:'12.3',options:'1'},
                {days:'540',months:'18',interest:'12.3',options:'1'},
            ]
    
        }
    }

    itemSeparator = ()=>{
        return(
            <View style={{ width: 16,height:0, backgroundColor: '#C8C8C8'}}/>
        );
    };

    toggleSwitch = ()=>{
        
    }
    render(){
        return (
            <View style={{paddingHorizontal:16,flex:0.7,
                width:Math.round(Dimensions.get('window').width),
                }}>
                   <View style={{flexDirection:'row',
                   justifyContent:'space-between',alignContent:'center'}}> 
                    <Text style={styles.title}>Breakable Deposit</Text>
                    <Switch style={{marginTop:10}}
                    thumbColor = {'white'}
                    trackColor = {'#f7931e'}
                    onValueChange = {this.toggleSwitch}>

                    </Switch>
                   </View>
                   <Text style={styles.description}>
            This option allows you to break the deposit before maturity at appropriately readjusted interest rates. Average exit load is low at {this.state.minBreakInterest}%.
                   </Text>
                   <View style={styles.row,{flexDirection:'row'}}>
                       <Text style={styles.title}>
                       Tenure period
                       </Text>
                       <Text style={styles.tenureDescription}>
            ({this.state.brekableTenures} tenures, up to {this.state.breakableInterest}% p.a.)
                       </Text>
                   </View>
                   <View style={{height:110}}>
                   <FlatList
                   style={{margintRight:0}}
                   horizontal = {true}
                    data = {this.state.tenures}
                       ItemSeparatorComponent = {this.itemSeparator}
                       renderItem={({ item }) => (
                        // Single Comes here which will be repeatative for the FlatListItems

                        <View style={styles.selectedCard}>
                          <Text style={styles.title}>
                              {item.months} months ({item.days} days)
                          </Text>
                          <Text style={{color:'white',paddingVertical:4,fontWeight:'400'}}>
                              upto {item.interest}% p.a.
                          </Text>
                          <Text style={{color:'white',paddingVertical:4,fontWeight:'400'}}>
                          Interest payout end of term and {item.options} other option(s)
                          </Text>
                        </View>
                      )}
                       keyExtractor = {(item,index)=> index.toString()}
                       >

                       </FlatList>
                   </View>
                    
                    
              </View>
        );
    }
}


const styles = StyleSheet.create({
    selectedCard:{
        paddingLeft:8,
        backgroundColor:'orange',
        shadowRadius:3,
        shadowOpacity:0.5,
        shadowOffset:{height:4,width: 3,},
    shadowColor:'gray',
    width:Math.round(Dimensions.get('window').width/1.5)},
    unselectedCard:{
        shadowRadius:3,
        shadowOpacity:0.5,
        shadowOffset:{height:4,width: 0,},
    shadowColor:'gray',
        paddingLeft:8,
        backgroundColor:'white',
    width:Math.round(Dimensions.get('window').width/1.5)},

    title:{
        color:'#474a4f',
        fontSize:16,
        fontWeight:'bold',
        paddingTop:16
    },
    content:{
        color:'#474a4f',
        fontSize:14,
        paddingTop:24
        
    },
    description:{
        color:'#999999',
        fontSize:14,
        paddingTop:10
    },
    tenureDescription:{
        color:'#999999',
        fontSize:14,
        paddingTop:18,
        paddingLeft:6
    },
    textField:{backgroundColor:'#e1e4eb',
    height:40,
    borderRadius:8}
});
export default TenureScreen;