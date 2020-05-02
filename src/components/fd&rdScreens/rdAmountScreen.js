import React from 'react';
import {Dimensions, StyleSheet,TextInput, Slider} from  'react-native';
import { View, Text,Button } from 'native-base';

class RDAmountScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            amount: 1000,
            minAmount:1000,
            maxAmount:500000,
    
        }
    }
    render(){
        return (
            <View style={{paddingHorizontal:16,flex:0.7,
                width:Math.round(Dimensions.get('window').width),
                }}>
                    <View style={{alignItems:'flex-start',
                    flexDirection:'row',
                    justifyContent:'space-between'}}>
                        <View>
                        <Text style={styles.content}>
                        Monthly Deposit
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.content}>
                    Bal 1,50,000 |
                    </Text>
                   <Button transparent style={{marginTop:1}}>
                       <Text style={{color:'#f59c34'}}>Load Money</Text>
                   </Button>
                    </View>
                    </View>
                   
                    <TextInput keyboardType =  {'number-pad'}
                     style={styles.textField} 
                     value = {this.state.amount.toString()}>

                    </TextInput>
                    <Text style={styles.content}>
                    Note: This is the monthly instalment towards your Recurring Deposit.

                    </Text>
                    <Text style={styles.title}>
                    ₹
                    </Text>
                    <Slider style={{height: 40}}
    minimumValue={this.state.minAmount}
    maximumValue={this.state.maxAmount}
    minimumTrackTintColor="#e1e4eb"
    maximumTrackTintColor="#e1e4eb"
    thumbTintColor = "#f7931e"
    onValueChange = {val =>this.setState({
        amount : val
    })} >

                    </Slider>
                    <View style={{flexDirection:'row',
                    justifyContent:'space-between'}}>
<Text style={{fontSize:14}}>1000</Text>
<Text style={{fontSize:14}}>500000</Text>
                    </View>
                    
              </View>
        );
    }
}
export default RDAmountScreen;
const styles = StyleSheet.create({
    title:{
        color:'#474a4f',
        fontSize:16,
        fontWeight:'500',
        paddingTop:16
    },
    content:{
        color:'#474a4f',
        fontSize:14,
        paddingTop:16
        
    },
    textField:{backgroundColor:'#e1e4eb',
    height:40,
    borderRadius:8}
});