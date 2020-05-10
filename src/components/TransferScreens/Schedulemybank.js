import React, { Component } from 'react'
import { Container, Header, Content, View, Text, Icon, ListItem, Item, Input, Button } from 'native-base'
import { StatusBar, Image, StyleSheet , TouchableOpacity} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

export default class Schedulemybank extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              activeIndex:0,
         }
     }
     
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#1b1464", height: 90 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <View style={{ flexDirection: "row", flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

                        <Icon name='arrow-back'
                            onPress={() => this.props.navigation.navigate('Loasmoney')}
                            style={{ color: '#ffffff' }}
                        />
                        <Text style={styles.headerText}>To My Bank Account</Text>

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
                  <ListItem style={{justifyContent:"space-around" , alignItems:'center'}} >

               <Image source={ require('../../images/Transfer/mybank.png')}/>
                      
                      <View>
                          <Text style={styles.user}>srikanth</Text>
                          <Text style={styles.acctext}>AC No. - 00003541610094987</Text>
                          <Text style={styles.acctext}>IFSC - HDFC0000354</Text>
                      </View>
                      <Image source={require('../../images/home/arrow.png')}/>
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
              <Input placeholder="" style={styles.input}
             
              />
            </Item>

                <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:15, marginHorizontal: 16,}}>
                    <Text style={styles.selecttext}>
                    Transfer mode
                    </Text>
                    <Text style={styles.addbenficiarytext}>
                    View charges
                    </Text>
                </View>
                <Item regular style={styles.textInput}
                 onPress={() => this.RBSheet.open()}
            >
              <Input placeholder="" style={styles.input}
             
              />
              
                           
                           {/* <Text style={{marginLeft: 3,}}>{this.state.Statevalue}</Text> */}
                            <Icon name='ios-arrow-down' 
                             style={styles.arrowicon}/>
            </Item>
              
                            
                             <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={220}
          duration={250}
          customStyles={{
            container: {
              justifyContent:"flex-start",
              alignItems: "flex-start"
            }
          }}
        >
            <Text style={styles.selectState}>
            Select state
            </Text>
            
            <View>
            <TouchableOpacity onPress={()=>this.handleState('karnataka', 1)}
                                style={this.state.activeIndex === 1 ? styles.btnActive : styles.btn}>
                <Text style={styles.state}>Karnataka</Text>
                <Text style={styles.Statesubtext}>Ayshwarya Syndicate Souharda Credit Co-operative Limited</Text></TouchableOpacity>
            </View>
            <View>
                      <TouchableOpacity onPress= {()=>this.handleState('maharashtra',2)}
                                                      style={this.state.activeIndex === 2 ? styles.btnActive : styles.btn}
                      >
            <Text style={styles.state}>Maharashtra</Text>
            <Text style={styles.Statesubtext}>Ayshwarya Syndicate Souharda Credit Co-operative Limited</Text>
</TouchableOpacity>
            </View>
      
        </RBSheet>

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
                <View style={{ marginVertical: 32, marginHorizontal: 16,     }}>
               
               <Item  warning style={styles.paynowbtn}>
                         
                           <View style={{marginLeft: 5, textAlign:'center'}}>
                               <Text style={styles.btntext}>Schedule from 28-06-2020</Text>
                               <Text style={styles.btntext}>Monthly, 10 transfers</Text>
                               
                               </View>
                             

                               
                               <View style={{flexDirection:'row'}}>
                               <Button warning style={styles.arrow}>
                               <Image source={require('../../images/home/arrow.png')} style={{height:10}}/>
                        
                             
                         </Button>
                               <Button warning style={styles.schedulebtn}>
                        <Image source ={require('../../images/Transfer/edit.png')}/>
                        
                             
                         </Button>
                         <Button warning style={styles.schedulebtn}>
                      <Icon name="close" style={{color:'red' ,width:20}} />   
                         </Button>
                         </View>

                           </Item>
                           
                        
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
           },
           paynowbtn:{
            width:380,
             justifyContent:'space-between',
            backgroundColor:"#1b1464",
            height:41
             

        },
         schedulebtn:{
             backgroundColor:"#0c0744",
              width:40,
              height:40,
              justifyContent:'center'

         },
         arrow:{
          backgroundColor:"#1b1464",
          width:40,
          height:40,
          justifyContent:'center'

         },

 })
