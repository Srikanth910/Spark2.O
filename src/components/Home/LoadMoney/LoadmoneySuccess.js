import React, { Component } from 'react'
import { Container ,Header, Content, Button, View, ListItem, } from 'native-base'
import { StatusBar, Text, StyleSheet,Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class LoadmoneySuccess extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
    value:1000,
     interest:12,
     tenure:12,
      maturity:''         



         }
     }
    //   componentDidMount(){
    //        this.getmount()
             
           
        
       
    //   }
    //   getmount=()=>{
    //     const{value,interest,tenure}=this.state
    //     let interestAmount = (   value* (interest * 0.01)) *( tenure * 0.0833333333)
    //     this.setState({
    //          maturity:value+interestAmount
    //     })

    //   }
     
    render() {

          const {params}=this.props.route

        return (
           <Container>
<Header style={{ backgroundColor:"#429c40",height:140 ,}}>
      
 <StatusBar barStyle="light-content" backgroundColor="#429c40" /> 
                
    
               <ImageBackground  source={require('../../../images/Transfer/success_wave.png')}style={{width:'100%'  }} >
           
    
               
                <ListItem style={{borderColor:'transparent', marginTop:50,}} thumbnail>
                   
                    <Image source ={require('../../../images/Transfer/logo_s.png')}/>
                    <View style={styles.header}>
                        <Text style={styles.headerbal}>
                        ₹ {params.balance}
                        </Text>
                        <Text style={styles.text_1} >
                        Paid successfully

                        </Text >
                       
                    </View>
                    
                </ListItem>
        <Text style={styles.text} >TXN ID: {params.tnxid}</Text>
               
                </ImageBackground>
              
                </Header>
               {/* <View style={styles.overlopcurd}> */}

               
               <Content padder style={{borderTopRightRadius:20, borderTopRightRadius: 20,}}>
                 
                  <View style={{marginHorizontal: 23,}} >
                  <View style={styles.curd_user}>
                      <ListItem>
                      <Image source={require('../../../images/home/pet_bank.png')} style={styles.bank}/>
                          <View style={{paddingLeft:20}}>
                              <Text style={styles.usertext}>
                                   {params.name}
                           </Text> 
                           <Text style={styles.curdtext}>(Your Spark Savings Account))</Text> 

        <Text style={styles.curdtext}>{params.accNo}</Text> 
                           <Text style={styles.curdtext}>Location</Text>    
                          </View>

                      </ListItem>
                
                  </View>
                  <View style={styles.curdview}>
                      <Text style={styles.transctiondetials}>Transaction details</Text>
                      <Text   style={styles.textdetails}>For personal expenses, loaded from
        {params.card}</Text>

                
                  </View>
                  </View>

                  <Image source={require('../../../images/home/success_img.png')} style={styles.img}/>




                 
              </Content>


              <View  >
                  <Button block success style={styles.btn}
                   onPress={() => this.props.navigation.navigate('Home')}
                   >
            <Text style={{color:'#ffffff'}}>Success</Text>


          </Button> 
          </View>
               
             

    
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
                fontWeight:"bold",
                 marginLeft: 30,
     

     },
      text:{
          fontSize:14,
           color:'#ffffff',
         
             alignSelf:'center', 
             
             

      },
      text_1:{
        fontSize:14,
        color:'#ffffff',
      
          alignSelf:'center', 
          
     marginLeft: 30,
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
     marginVertical:21,
        
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