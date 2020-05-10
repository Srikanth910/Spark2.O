import React, { Component } from 'react'
import { Container ,Header, Content, Button, View, ListItem, } from 'native-base'
import { StatusBar, Text, StyleSheet,Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class LoadmoneySuccess extends Component {
    render() {
        return (
           <Container>

               <ImageBackground  source={require('../../../images/home/success_bg.png')}style={{height:'100%', width:'100%', flex:1}} >
             
               <StatusBar barStyle="light-content" backgroundColor="#429c40" />
                
              <ScrollView>
               
                <ListItem style={{borderColor:'transparent', justifyContent: 'center',}}>
                   
                    <Image source ={require('../../../images/home/white_rupi.png')}/>
                    <View style={styles.header}>
                        <Text style={styles.headerbal}>
                        5,000
                        </Text>
                        <Text style={styles.text}>
                        Paid successfully

                        </Text >
                        <Text style={styles.text} >TXN ID: CC1ZK173928, 07-05-2020, 10:30:23</Text>
                    </View>
                    
                </ListItem>
              
               <View style={styles.overlopcurd}>
               <Content padder >
                  <View style={{marginHorizontal: 23,}} >
                  <View style={styles.curd_user}>
                      <ListItem>
                      <Image source={require('../../../images/home/pet_bank.png')} style={styles.bank}/>
                          <View style={{paddingLeft:20}}>
                              <Text style={styles.usertext}>
                                   B.Srikanth
                           </Text> 
                           <Text style={styles.curdtext}>(Your Spark Savings Account))</Text> 

                           <Text style={styles.curdtext}>9100146410</Text> 
                           <Text style={styles.curdtext}>Location</Text>    
                          </View>

                      </ListItem>
                
                  </View>
                  <View style={styles.curdview}>
                      <Text style={styles.transctiondetials}>Transaction details</Text>
                      <Text   style={styles.textdetails}>For personal expenses, loaded from
                      KKBK Netbanking</Text>

                
                  </View>
                  </View>

                  <Image source={require('../../../images/home/success_img.png')} style={styles.img}/>




                  <View  style={{flex:1}}>
                  <Button block success style={styles.btn}
                   onPress={() => this.props.navigation.navigate('Loadmoneyfail')}
                   >
            <Text style={{color:'#ffffff'}}>Success</Text>


          </Button> 
          </View>
              </Content>



               </View>
               </ScrollView>
        
               </ImageBackground>
             
          

    
           </Container>
        )

    }
}

 const styles=StyleSheet.create({

     headerbal:{
          fontSize:36,
           textAlign:'center',
             color:'#ffffff',
              fontFamily:'Inconsolata',
                fontWeight:"bold"
     

     },
      text:{
          fontSize:14,
           color:'#ffffff',
         
             alignSelf:'center', 
             

      },
      curdview:{ 
           backgroundColor:'#ffffff',
            height:97,
           
              
             shadowColor: "#000",
             shadowOffset: {
                 width: 10,
                 height: 10,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 10,

      },
      curd_user:{
        backgroundColor:'#ffffff',
        height:97,
         marginVertical: 20,
          
         shadowColor: "#000",
         shadowOffset: {
             width: 10,
             height: 10,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         
         elevation: 10,

      },
      img:{
        height: 198,
         marginTop: 20,
          alignSelf:'flex-end',
         marginHorizontal: 16,
      },
      btn:{

          marginVertical: 21,
           marginHorizontal: 16,
      } ,
       usertext:{
        color:'#1b1464',
        fontFamily:'Nunnito' ,
         fontWeight:'bold',
          fontSize:16,
           textAlign:'left'
             

          

       },

       curdtext:{
            color:'#1b1464',
          fontFamily:'Nunnito' ,
        
            fontSize:14,
             textAlign:'left'
               

            


       },
        
       transctiondetials:{
            fontSize:16,
             fontFamily:'Nunito',
              fontWeight:'bold',
               color:'#707070',
                textAlign:'left',
                 marginLeft:18, 
                 marginTop: 10,
                 
       },
        textdetails:{
             fontSize:14,
               textAlign:'left',
                color:'#707070',
                 marginLeft: 18,
                 


        },
        overlopcurd:{
             height:'100%',
              backgroundColor:'#ffffff',
               width:'100%',
              
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
        },
        bank:{

            height:40,
             width:34,
              alignSelf:'center'
              
            }

 })