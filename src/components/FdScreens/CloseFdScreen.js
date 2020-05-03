import React from 'react';
import { View, Button, Icon, Text } from 'native-base';
import { SafeAreaView } from 'react-native';

class CloseFDScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:0.1,backgroundColor:'#1b1464',flexDirection:'row',alignContent:'center'}}>
                    <Button icon transparent>
<Icon name = {'close'} style={{color:'white'}}>
</Icon>
                    </Button>
                    <Text style={{color:'white',fontSize:20,fontWeight:'500',marginTop:12}}>
                    Confirm Close
                    </Text>

                </View>
            </SafeAreaView>
        );
    }
}

export default CloseFDScreen;