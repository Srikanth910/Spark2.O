import React from 'react';
import {Dimensions,Text,StyleSheet,View, FlatList} from 'react-native';
import { } from 'native-base';

const numberOfColumns = 2
const WIDTH = Dimensions.get('window').width

class InterestScreen extends React.Component{

    constructor(props){
super(props)


this.state = {
    payoutOptions:[
        {
            type:'Monthly',
            days:'30 days',
            interest:'10.5'
        },
        {
            type:'half-yearly',
            days:'180 days',
            interest:'11'
        },
        {
            type:'Yearly',
            days:'360 days',
            interest:'11.5'
        },
        {
            type:'End of term',
            days:'540 days',
            interest:'12.5'
        },
    ]
}
    }


    // seperator component
    _seperator = () =>{
        return(
            <View style={{ width: 16,height:0, backgroundColor: '#C8C8C8'}}/>
        );
    }
    // format cards into grid
    _formatData = (dataList,columns) =>{
        const totalrows =  Math.floor(dataList.length/columns)
        const totalLastRow = dataList.length - (totalrows * columns)
        while (totalLastRow !== 0 && totalLastRow !== columns){
dataList.push({type:'--',
days:'-- days',
interest:'--',
empty:true})
totalLastRow++
        }
        return dataList
    }


    // render item
    _renderItem = ({item,index}) =>{
        if (item.empty){
            return(
<View style={{backgroundColor:'red'}}>

</View>
            );
        }

        return(
<View style={styles.selectedInterestCard}>
<Text style={styles.cardTitle}>
    {item.type} ({item.days})
</Text>
<Text style={{color:'white',paddingTop:4,paddingBottom:16,fontSize:16,fontWeight:'bold'}}>
      {item.interest}% p.a.
    </Text>

</View>
        );
    }
    render(){
        return(
            <View style={{paddingHorizontal:16,flex:0.7,
                width:Math.round(Dimensions.get('window').width),
                }}>
                    <Text style={styles.title}>Interest payout frequency</Text>

<Text style={styles.description}>
Choose when you would like to receive interest. We have attractive interest rates for all options.
</Text>
<FlatList
bounces =  {false}
horizontal = {false}
 style={{marginTop:16}}
 data = {this._formatData(this.state.payoutOptions,numberOfColumns)}
renderItem = {this._renderItem}
ItemSeparatorComponent = {this._seperator}
keyExtractor   = {(item,index) => index.toString()}
numColumns={numberOfColumns}
>

</FlatList>
            </View>
        );
    }
}
export default InterestScreen;

const styles = StyleSheet.create({
    selectedInterestCard:{    
        marginRight:16,
        paddingHorizontal:8,
        marginVertical:8,
        backgroundColor:'orange',
        shadowRadius:3,
        shadowOpacity:0.5,
        shadowOffset:{height:4,width: 3,},
    shadowColor:'gray',
    width:WIDTH/2.3},
    unselectedInterestCard:{
        marginRight:16,
        paddingHorizontal:8,
        marginVertical:8,
        shadowRadius:3,
        shadowOpacity:0.5,
        shadowOffset:{height:4,width: 0,},
    shadowColor:'gray',
        paddingLeft:8,
        backgroundColor:'white',
    width:WIDTH/2.3},
    selectedCard:{    
        marginHorizontal:8,
        paddingHorizontal:8,
        marginVertical:8,
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

    cardTitle:{
        color:'white',
        fontSize:12,
        
        paddingTop:16
    },
    title:{
        color:'#474a4f',
        fontSize:16,
        fontWeight:'bold',
        paddingTop:16
    }, description:{
        color:'#999999',
        fontSize:14,
        paddingTop:10
    },
    cardDescription:{
        color:'white',
        fontSize:16,
        paddingTop:10,
        fontWeight:'bold',
    },
});
