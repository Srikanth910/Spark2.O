
    

import React, { Component } from'react';
import { View, Button,TouchableHighlight} from'react-native';
import RazorpayCheckout from'react-native-razorpay';
 
export default class RazorApp extends React.Component{






     razrpaysumbit=()=>{
        
            var options = {
             description: 'Credits towards consultation',
             image: 'https://i.imgur.com/3g7nmJC.png',
             currency: 'INR',
             key: 'rzp_test_1DP5mmOlF5G5ag',
             amount: '5000',
             name: 'Spark',
             prefill: {
             email: 'void@razorpay.com',
             contact: '9191919191',
             name: 'Razorpay Software'
             },
             theme: {color: '#F37254'}
             }
             RazorpayCheckout.open(options).then((data) => {
                  console.log( data)
            // handle success
             alert(`Success: ${data.razorpay_payment_id}`);
             console.log( data.razorpay_payment_id)
             }).catch((error) => {
            // handle failure
             alert(`Error: ${error.code} | ${error.description}`);
             });
             }
             
            
     
 render(){
return(
<View style={{flex:1,backgroundColor: 'red',justifyContent:'center'}}>
<Button style ={{backgroundColor:'blue'}}title = 'hello'onPress = {this.razrpaysumbit}>
 
</Button>
</View>
 );
 }
}

