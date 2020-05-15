import React, { Component } from 'react'
import { Container, Header, Content, View, Text, Icon, ListItem, Item, Input, Button, Left, Body, Right } from 'native-base'
import { StatusBar, Image, StyleSheet , TouchableOpacity} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

export default class To_sparkAcc extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              activeIndex:0,
         }
     }
     
    render() {
         const {params}=this.props.route
       
        return (
            <Container>
                <Header style={{ backgroundColor: "#1b1464", height: 90 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <View style={{ flexDirection: "row", flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

                        <Icon name='arrow-back'
                            onPress={() => this.props.navigation.navigate('Loasmoney')}
                            style={{ color: '#ffffff' }}
                        />
                        <Text style={styles.headerText}>To Spark Savings Account</Text>

                   
                    
                        <Image source={require('../../images/billpay/faq_ic.png')} />
                    </View>

                </Header>
                <Content>

                <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:15, marginHorizontal: 16,}}>
                    <Text style={styles.selecttext}>
                        Select Beneficiary
                    </Text>
                    <Text style={styles.addbenficiarytext}>
                      Add a Beneficiary
                    </Text>
                </View>

             

        
              <View style={styles.curdview}>
                  <ListItem    style={{justifyContent:'space-around', alignItems:'center', borderColor: 'transparent',marginVertical:10}}>


               <Image source={ require('../../images/home/pet_bank.png')}/>
               {params.type===2?<>

<Text style={styles.user}>Select Beneficiary</Text></>:
                  <View>
                          <Text style={styles.user}>srikanth</Text>
                          <Text style={styles.acctext}>AccountNo: 9100146410</Text>
                          <Text style={styles.acctext}>Location: Karnataka</Text>
                          </View>}
                   

                         <TouchableOpacity
                         onPress={() =>
                            this.props.navigation.navigate('Transfer_Spark_otherbank',{type:2})}
                         >
                      <Image source={require('../../images/home/arrow.png')} />
                      </TouchableOpacity>
                  </ListItem>


              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:15, marginHorizontal: 16,}}>
                    <Text style={styles.balance}>
                    Balance available
                    </Text>
                    <Text style={styles.amount}>
                    ₹ 1,80,000
                    </Text>
                </View>



                <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:15, marginHorizontal: 16,}}>
                    <Text style={styles.selecttext}>
                    Enter amount
                    </Text>
                    <Text style={styles.addbenficiarytext}>
                    View transfer limits
                    </Text>
                </View>

                <Item regular style={styles.textInput}
            >
                <Image source={require('../../images/Transfer/rupi_icon.png')} style={{marginLeft: 5,}}/>
              <Input placeholder="" style={styles.input}
             
              />
            </Item>

               
                

            <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:15, marginHorizontal: 16,}}>
                    <Text style={styles.selecttext}>
                    Description
                    </Text>
                    <Text style={styles.selecttext}>
                    50/50
                    </Text>
                </View>
                <Item regular style={styles.textInput}
            >
              <Input placeholder="" style={styles.input}
             
              />
            </Item>
         
        
                </Content>
                <View style={{flexDirection:'row',  justifyContent:'center' ,marginVertical: 16, marginHorizontal: 16,     }}>
               
               <Button  warning style={styles.paynowbtn}
                           onPress={()=>this.props.navigation.navigate('Transfer_Otherbank_confirm')}
                           >
                               <Text style={styles.btntext}
                               
                               
                               >Pay now</Text>
                           </Button>
                           <Button warning style={styles.schedulebtn}
                         
                         >
                             <Text style={styles.btntext_1}
                             
                             
                             >schedule</Text>
                         </Button>
                         </View>
                           
            </Container>
        )
    }

     
}


 const styles=  StyleSheet.create({
    headerText: {
        fontFamily: 'Nunito'
        ,
        fontSize: 20,
        color: '#ffffff'
    },
    curdview: {
           marginHorizontal: 16,
        backgroundColor: '#ffffff',
        height: 97,


        shadowColor: "#000",
        shadowOffset: {
            width:2,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 15,

    },
    addbenficiarytext:{

    },
    selecttext:{
  fontSize:16,
  color:'#4a4a4a',
   fontFamily:'Nunito',
    textAlign:'left'
    },
     addbenficiarytext:{
         fontSize:16,
          color:'#f79d32',
           textAlign:'right',
            fontFamily:'Nunito',
             textAlign:'center'
            

     },
     user:{
          fontSize:16,
           color:'#474a4f',
            fontFamily:"Nunito"
     },
      acctext:{
           color:'#474a4f',
            fontSize:14,
       
      },
       balance:{
            fontFamily:'Nunito',
             color:'grey',
             fontSize:16,
              height:22

        
       },
        amount:{
            color:'#4a4a4a',
             textAlign:'center',
             height: 20,
              fontSize:19
        },
        textInput: {
            
            borderRadius: 5,
            height: 40,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: '#e1e4eb',
          },
          input: {

            height: 40,
            backgroundColor: '#e1e4eb',
            borderRadius: 5,
        
          },
          paynowbtn:{
              width:300,
              justifyContent:'center',
              height:40
               

          },
           schedulebtn:{
               backgroundColor:"#1b1464",
                width:80,
                height:40,
                justifyContent:'center'

           },
           btntext:{
               fontSize:16,
                textAlign:'center',
                 color:'#ffffff',
                  alignSelf:'center'
                  
           },
           btntext_1:{
               fontSize:9.5,
                color:'#ffffff',
                 textAlign:'center'
           }
       
 })
