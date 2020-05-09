import React, { Component } from 'react'
import { Container, Header, Content, Left, Button, Icon, Body, Text, Right, ListItem, List } from 'native-base'
import { StatusBar ,StyleSheet, View,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class PayBill extends Component {
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
     <Text style={styles.headerText}>Pay Bills and Recharge</Text>

        <Image source ={require('../../images/billpay/faq_ic.png')}/>
        </View>

                 </Header>
               <Content>
                   <View style={{backgroundColor:'#f0f0ff', height:20}}>

                   </View>
                    <View style={styles.PayBillCurd}>
                
                    <View style={{ flexDirection:"row",alignItems:'center' ,marginVertical:16}}>
              <View style={styles.box}>
                  <Image source={require('../../images/home/phone.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>Mobile {"\n"}Prepaid</Text>


                </View>
                <View style={styles.box}>
                  <Image source={require('../../images/home/phone.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>Mobile Postpaid</Text>


                </View>
                <View style={styles.box}>
                  <Image source={require('../../images/home/Broadband.png')} style={styles.broadband}/>
        <Text style={styles.iconText}>Broadband</Text>


                </View>
                <View style={styles.box}>
                  <Image source={require('../../images/home/Electricity.png')} style={styles.billIcon}/>
        <Text style={styles.iconText}>Electricity</Text>


                </View>
               
                

              </View>

              <View style={{flex:1, flexDirection:"row", marginVertical:16, marginTop: 15, }}>
                <View style={styles.box}>
                  <Image source={require('../../images/home/DTH.png')} style={styles.billIcon}/>
                 <Text style={styles.iconText}>DTH</Text>


                </View>
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop:2,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                <Image source={require('../../images/home/euro.png')} style={styles.euroicon}/>
                <Text style={styles.iconText}>PAYMENT</Text>

                </View>

                <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('LoanPayment')}
                >
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop: 6,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                <Image source={require('../../images/home/water.png')} style={styles.watericon}
                
                
                />
            

                <Text style={styles.iconText}
                
                >water</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.box}>
                <Image source={require('../../images/home/Landline.png')} style={styles.watericon}/>

                <Text style={styles.iconText}>Landline</Text>
                </View>
                </View>


                <View style={{flex:1, flexDirection:"row", marginVertical:16, marginTop: 15, }}>
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop: 6,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                  <Image source={require('../../images/billpay/ub_img.png')} style={styles.Insurance}/>
                 <Text style={styles.iconText}>Insurance</Text>


                </View>
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop:2,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                <Image source={require('../../images/billpay/Gas.png')} style={styles.gas}/>
                <Text style={styles.iconText}>Book a Cylinder</Text>


                </View>
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop: 6,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                <Image source={require('../../images/billpay/fast_tag.png')} style={styles.fasttag}/>

                <Text style={styles.iconText}>FAStag</Text>
                </View>
                <View style={styles.box}>
                <Image source={require('../../images/home/water.png')} style={styles.watericon}/>

                <Text style={styles.iconText}>water</Text>
                </View>
                </View>


                <View style={{flex:1, flexDirection:"row", marginVertical:16, marginTop: 15, }}>
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop:2,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                  <Image source={require('../../images/billpay/heart.png')} style={styles.health}/>
        <Text style={styles.iconText}>Health {'\n'}Insurance</Text>


                </View>
                <View style={styles.box}>
                <View style={{height:10, width:40, backgroundColor:'#f77d0e', borderRadius:20, alignSelf:'center', marginTop:2,}}>
             <Text style={{fontSize:10, textAlign:"center", color:'#ffffff' ,bottom:2}}>new</Text>
                     </View>
                  <Image source={require('../../images/billpay/piped_gas.png')} style={styles.pipedgas}/>
                 <Text style={styles.iconText}>Piped GasPayment</Text>



                </View>


                </View>







    



                        <View>
                            <View>

                            </View>
                        </View>

                    </View>


                    <View style={{backgroundColor:'#f0f0ff', height:60}}>

              <ListItem style={{borderColor: 'transparent',}}>
                  <Left>
                      <Text>Recent</Text>
                  </Left>
                     <Right>
                         <Image source={require('../../images/billpay/bharat_logo.png')}/>
                     </Right>
              </ListItem>

                    </View>


                    <View>
                        <List>
                        <ListItem  thumbnail>
                            <Left style={{width:50}}>
    <Image source={require('../../images/billpay/Airtel.png')}/>
    

                            </Left>
                            <Body >
                            <Text style={styles.prepaid}>
                                Mobile Prepaid
                                </Text>
                                <Text style={styles.lightText}>+919035440399</Text>
                                <Text style={styles.lightText}>txid:654654654654</Text>
                                <Text style={styles.lightText}>Status:SUCCESS</Text>

                            </Body>
                            <Right>
                                <Text>400.00</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left style={{width:50}}>
    <Image source={require('../../images/billpay/Airtel.png')}  style={{height:30, width:30}}/>
    

                            </Left>
                            <Body style={{justifyContent:'center'}}>
                                <Text style={styles.prepaid}>
                                Mobile Prepaid
                                </Text>
                                <Text style={styles.lightText}>+919035440399</Text>
                                <Text style={styles.lightText}>txid:654654654654</Text>
                                <Text style={styles.lightText}>Status:SUCCESS</Text>

                            </Body>
                            <Right>
                                <Text>400.00</Text>
                            </Right>
                        </ListItem>
                        </List>
                    </View>

               </Content>
               
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
    PayBillCurd:{
        backgroundColor:'#ffffff',
         
        
    },
    box:{
        backgroundColor:'#ffffff',
         height:75,
         width:75,
         
      
         borderRadius: 10,
       marginLeft:20,
      alignContent:'center',shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      
      elevation: 5,
      
        
      
      },
      iconText:{ 

        fontFamily:'Nunito',
        fontSize:12,
        color:'#474a4f',
        textAlign:'center'
        
      
      
      },
      
billIcon:{
    height:42,
    width:24,
    marginTop: 5,
    alignSelf:'center'
    
  
  },
  broadband:{
    height:42,
    width:34,
    marginTop: 5,
    alignSelf:'center'
  
  },
  
  watericon:{
    height:42,
    width:40,
    // marginTop: 5,
    alignSelf:'center'
  },
  euroicon:{
    height:42,
    width:40,
    marginTop: 5,
    alignSelf:'center'
  
  },
  Insurance:{
       height:40,
        width:44,
      
        alignSelf:'center'
  },
   gas:{ 
       height:36,
        width:22,
       
        alignSelf:'center'


   },
    fasttag:{
         height: 31,
          width:55,
          marginTop: 10,
          alignSelf:'center'
  

    },
     health:{
          height:38,
           width:40,
       
           alignSelf:'center'
   

     },
      pipedgas:{
           height:33,
           width:33,
       
           alignSelf:'center'
           

      },
      prepaid:{
           fontFamily:'Nunito',
            fontSize:14,
             fontWeight:"bold",
             color:'#474a4f'

      },
      lightText:{
           fontSize:14,
            color:'#999999',
             textAlign:'left',

      }
     
})