import React, { Component } from 'react'
import { Container, Header, View, Icon, Text, Content ,Item, Button, Input} from 'native-base'
 import { Image, StatusBar, StyleSheet} from 'react-native'

export default class ScheduleTransfer extends Component {
    render() {
        return (
          <Container>
              <Header  style={{ backgroundColor: "#1b1464", height:  90}}>
                 <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                
                <View style={{flexDirection:"row",  flex:1, alignItems:'center',justifyContent:'space-around'}}>
 
            <Icon name='arrow-back'
                onPress={() => this.props.navigation.navigate('Loasmoney')}
                style={{color:'#ffffff'}}
            />
     <Text style={styles.headerText}>Schedule Transfer</Text>

        <Image source ={require('../../images/billpay/faq_ic.png')}/>
        </View>

                 </Header>

                 <Content>
                 <Text style={styles.inputText}>Select a start date</Text>
            <Item regular style={styles.textInput}
             onPress={() => this.RBSheet.open()}>

<Input placeholder='' style={styles.input} />               

                                
                 <Image source={require('../../images/Transfer/calender.png')} style={styles.calenndericon} />
              
            </Item>
            <Text style={styles.inputText}>Select transfer frequency</Text>
                <View  style={{flexDirection:"row", justifyContent:'space-between', marginHorizontal:16, marginVertical:16}}>
                <Button bordered warning style={styles.btnborder}>
            <Text style={styles.btntext}>Once</Text>
          </Button>
          <Button bordered warning style={styles.btnborder}>
            <Text  style={styles.btntext}>Weekly</Text>
          </Button>
          <Button bordered warning style={styles.btnborder}>
            <Text  style={styles.btntext}>Monthly</Text>
          </Button>
                </View>

                <View style={{ marginVertical:16, marginHorizontal: 16,}}>
                    <Text style={styles.NumberText}>Number of Transfers</Text>
                    <Text style={styles.lightText}>Select how many transfers should be made.
                         E.g. Monthly frequency + 12 transfers = 1 year.</Text>

      <View style={{   alignItems:'flex-end' ,marginVertical:20}}>
                         <Image source={require('.././../images/Transfer/month_img.png')} style={styles.months}/>
                         </View>
                </View>
            
                 </Content>

             <View style={{justifyContent:'flex-end', marginVertical: 16, marginHorizontal:16}}>
             <Button block warning>
            <Text>Set</Text>
          </Button>
             </View>
          </Container>
        )
    }
}

 const styles= StyleSheet.create({
    headerText:{
        fontFamily:'Nunito'
,
fontSize:20,
color:'#ffffff'
   },
   inputText: {
    paddingTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 16,



  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 16,
    backgroundColor: '#e1e4eb',
  },
      
  btnborder:{
       width:100,
        height:30,
        
        borderColor:'#1b1464'
  },
   btntext:{
        alignSelf:"center",
         textAlign:'center',
         color:'#1b1464',
         fontSize:14
   },
   input: {

    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,

},
NumberText:{
     fontSize:16, 
     color:'#4a4a4a',
      textAlign:"left",
       
},
lightText:{
     color:'#989898',
      textAlign:'left',
       fontSize:13.6,
       paddingTop:5
        
},
months:{
    alignSelf:"center"
     
},
calenndericon:{
     alignSelf:'center',
      marginRight:10
}
 })