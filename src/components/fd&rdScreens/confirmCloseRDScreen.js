import React, { Component } from 'react';
import {StyleSheet,View,Text, SafeAreaView} from 'react-native'; 
import { Button, Icon } from 'native-base';

class ConfirmCloseRDScreen extends Component{

confirmClose = ()=>{
console.log('trying to close RD')
};

    constructor(props){
        super(props)
        this.state = {
            maturityAmount:20000,
            interest:9.1,
            prematureAmount:8300,
            prematureInterest:6.1,
            adjustment:3
        };
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <View style={{flex:0.95}}>
                <View style={styles.header}>
                    <View style={styles.buttonRow}>
                        <Button transparent>
                            <Icon name = {'close'} style={{color:'white'}}/>
                           
                        </Button>
                        <Text style={{color:'white',
                        fontSize:20,
                        marginLeft:-16,
                        fontWeight:'500'}}>
                        Confirm Close
                        </Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.paddingScreen}>
              <View>
              <Text style={styles.content}>
                On maturity
                </Text>
                <Text style={styles.amount}>
                   {this.state.maturityAmount}
                </Text>
                <Text style={styles.content}>
                    @ {this.state.interest}% p.a.
                </Text>
                <View style={styles.divider}></View>
                <Text style={styles.content}>
                Premature withdrawal
                </Text>
                <Text style={styles.amount}>
                   {this.state.prematureAmount}
                </Text>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.content}>
                    @ {this.state.interest}% p.a.
                </Text>
                <Text style={styles.content}>
                {this.state.adjustment} % readjustment
                </Text>
</View>
                <Text style={{color:'#999999',marginTop:8}}>
                Due to premature withdrawal your maturity amount will readjust. Are you sure you want to break this RD?
                </Text> 
              </View>
                </View>
                </View>
               
            </View>
            <Button transparent style={{justifyContent:'center'}}
                onPress = {this.confirmClose}>
                    <Text style={styles.closebutton}>
                    Close Deposit
                    </Text>
                </Button>
            </SafeAreaView>
        );
    }
}

export default ConfirmCloseRDScreen;

const styles = StyleSheet.create({
    divider:{height:1,
        backgroundColor:'#e1e1e1',marginTop:8
    },
    closebutton:{
        color:'#d2313d',
        fontSize:16,
        fontWeight:'bold'
    },
container:{
    backgroundColor:'white',
flex: 1,
},
header:{
    backgroundColor:'orange',
height:60,
justifyContent:'center'
},
buttonRow:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginBottom: 0,
    marginHorizontal:16,
},
content:{
    fontSize:14,
    fontWeight:'300',
    color:'#474a4f',
    marginTop:8
},
paddingScreen:{
    marginHorizontal:16,
    marginTop:16,
    justifyContent:'space-between'
},
amount:{
    fontSize:24,
    fontWeight:'bold',
    color:'#474a4f',
    marginTop:8
}
});