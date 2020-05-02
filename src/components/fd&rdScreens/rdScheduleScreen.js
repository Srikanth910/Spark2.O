import React from 'react';

import {style,View,Dimensions,Text, StyleSheet,TextInput, Slider, FlatList,Switch, ListView} from  'react-native';


class RDScheduleScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            months:[
                {month:'March',year:'2020'},
                {month:'April',year:'2020'},
                {month:'May',year:'2020'}
            ],
            days:[
                {date:'5'},
                {date:'10'},
                {date:'15'},
                {date:'20'},
                {date:'25'},
                
            ]
        }
    }


    FlatListItemSeparator = () => {
        return (
          //Item Separator
          <View style={{ width: 16,height:0, backgroundColor: '#C8C8C8'}}/>
        );
      };
    render(){
        return(
            <View style={{paddingHorizontal:16,flex:0.7,
                width:Math.round(Dimensions.get('window').width),}}>
<Text style = {styles.content}>Select the month and date to start the deposit.</Text>
<Text style={styles.title}>
Starting month
</Text>
<Text style = {styles.content}>Select the month to start the deposit.</Text>
<View style={{height:60}}>

<FlatList 

paddingTop= {8}
horizontal = {true}
          data={this.state.months}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={styles.monthCard}>
              <Text style={styles.cellTitle}>
                  {item.month}
                </Text>
                <Text style={styles.cellSubtitle}>
                    {item.year}
                </Text>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
</View>

   <Text style={styles.title}>Deposit day</Text>
   <Text style={styles.content}>Select the monthly date that your Spark Savings Account will be debited towards instalment.</Text>
<View style={{height:80}}>

<FlatList 

paddingTop= {8}
horizontal = {true}
          data={this.state.days}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={styles.dateCard}>
              <Text style={styles.cellTitle}>
                  {item.date}th day
                </Text>
                <Text style={styles.cellSubtitle}>
                    every month
                </Text>
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
</View>

            </View>
        );
    }
}

export default RDScheduleScreen;
const styles = StyleSheet.create({
    monthCard:{backgroundColor:'orange',
    height:55,
    width:Math.round(Dimensions.get('window').width/1.5),
    flexDirection:'row',
    justifyContent:'flex-start',paddingLeft:32,
    alignItems:'center',
    shadowRadius:3,
    shadowOpacity:0.5,
    shadowOffset:{height:4,width: 0,},
shadowColor:'gray'},

    dateCard:{backgroundColor:'orange',
    height:65,
    width:Math.round(Dimensions.get('window').width/1.5,),
    shadowColor: 'gray',
    shadowRadius: 2,
    shadowOpacity:0.4,
    shadowOffset:{height: 4,width: 0,},
    justifyContent:'center',
    paddingLeft:32,
    alignItems:'flex-start'},

    cellTitle:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        paddingRight:8
    },
    cellSubtitle:{
        color:'white',
        fontSize:16,
        fontWeight:'500',
    },
    title:{
        color:'#474a4f',
        fontSize:16,
        fontWeight:'bold',
        paddingTop:8
    },
    content:{
        color:'#474a4f',
        fontSize:14,
        paddingTop:12
        
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
