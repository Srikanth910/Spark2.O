import React, { Component } from 'react'
import { Container, Header, Content, Button, View, ListItem, Item, Left, Right, Body, } from 'native-base'
import { StatusBar, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default class Loanpaymentprogress extends Component {
    render() {
        return (
            <Container>

                <ImageBackground source={require('../../images/home/progress_bg.png')} style={{ height: '100%', width: '100%', flex: 0.7, bottom:0 }} >
                

                    <ListItem style={{ borderColor: 'transparent' ,  }}>
               <Image source={require('../../images/billpay/logo_b.png')}/>
                        <View   style={{marginLeft:40}} >
                            <Item style={{ borderColor: 'transparent', alignSelf: 'center' }}>
                                <Image source={require('../../images/home/blue_rupi.png')} style={{ height: 23, width: 15, marginTop: 5 }} />
                                <Text style={styles.headerbal}>
                                    5,000
                        </Text>
                            </Item>
                            <Text style={styles.text}>
                                Schedule In progress


                        </Text >
                            <Text style={styles.text} >07-05-2020, 10:30:23</Text>
                        </View>

                    </ListItem>


                    <View style={styles.overlopcurd}>
                       
                    <ScrollView >

                        <Content padder>
                           
                            <View style={{ marginHorizontal: 23, }} >
                                <View style={styles.curd_user}>
                                    <ListItem>
                                        <Image source={require('../../images/home/pet_bank.png')} style={styles.bank} />
                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={styles.usertext}>
                                                B.Srikanth
                           </Text>
                                            <Text style={styles.curdtext}>Loan A/c no.          012345678901</Text>

                                            
                                        </View>

                                    </ListItem>

                                </View>
                                <View style={styles.fulldetails}>

                                    {/* <Left>
                                    <Image source={require('../../images/billpay/Airtel.png')} />

                                    </Left>
                                    <Right/> */}

                                    <ListItem thumbnail>
                                        <Left>
                                        <Image source={require('../../images/billpay/Airtel.png')} />

                                        </Left>
                                        <Body>
                                        <View style={{marginLeft:15}} >
                                    <Text style={styles.paymentName}>AEON CREDIT</Text>
                                    <Text style={styles.textData}>Loan A/c No.              012345678901</Text>
                                    <Text style={styles.textData}> Loan period                JUNE</Text>
                                    {/* <Text style={styles.textData}>Loan date              10 June 2020</Text>
                                    <Text style={styles.textData}> Loan Due date           20 June 2019</Text>
                                    <Text style={styles.textData}>EMI Principal              00.00
                                          </Text>
                                    <Text style={styles.textData}>Total EMI	     0.00
                                          </Text>
                                    <Text style={styles.textData}>EMI Interest	     0.00
                                      </Text>
                                    <Text style={styles.textData}>Total Out Standing    0.00
                                                       0.00
                                  </Text>
                                    <Text style={styles.textData}>Additional charges    0.00
                                          </Text>
                                    <Text style={styles.textData}>Convenience fee        0.00
                                        </Text>
                                        <Text style={styles.textData}>Payment mode          Cash
                                        </Text> */}
                                    </View>


                                        </Body>

                                        
                                    </ListItem>
                                    <View style={{alignSelf:'center', bottom:10}}>
                                    <Text style={styles.textData}>Loan date               
                                    <Text>
                                     10 June 2020
                                     </Text>
                                     </Text>
                                    <Text style={styles.textData}>Loan Due date        <Text style={{textAlign:'center'}}>
                                     10 June 2020
                                     </Text></Text>
                                    <Text style={styles.textData}>EMI Principal         <Text style={{textAlign:'center'}}>
                                     10 June 2020
                                     </Text>
                                          </Text>
                                    <Text style={styles.textData}>Total EMI	     :        <Text style={{textAlign:'center'}}>
                                     10 June 2020
                                     </Text>
                                          </Text>
                                    <Text style={styles.textData}>EMI Interest	:          <Text>
                                     10 June 2020
                                     </Text>   
                                      </Text>
                                    <Text style={styles.textData}>Total Out Standing :   0.00
                                                       0.00
                                  </Text>
                                    <Text style={styles.textData}>Additional charges   : 0.00
                                          </Text>
                                    <Text style={styles.textData}>Convenience fee      :  0.00
                                        </Text>
                                        <Text style={styles.textData}>Payment mode      :    Cash
                                        </Text>
                                    </View>
                                    
                                 
{/*                                   
                                  <Image source={require('../../images/billpay/Airtel.png')} />
                                        <View style={{alignSelf:'flex-end'}}>
                                    <Text style={styles.paymentName}>AEON CREDIT</Text>
                                    <Text style={styles.textData}>Loan A/c No.              012345678901</Text>
                                    <Text style={styles.textData}> Loan period                JUNE</Text>
                                    <Text style={styles.textData}>Loan date              10 June 2020</Text>
                                    <Text style={styles.textData}> Loan Due date           20 June 2019</Text>
                                    <Text style={styles.textData}>EMI Principal              00.00
                                          </Text>
                                    <Text style={styles.textData}>Total EMI	     0.00
                                          </Text>
                                    <Text style={styles.textData}>EMI Interest	     0.00
                                      </Text>
                                    <Text style={styles.textData}>Total Out Standing    0.00
                                                       0.00
                             </Text>
                                    <Text style={styles.textData}>Additional charges    0.00
                                          </Text>
                                    <Text style={styles.textData}>Convenience fee        0.00
                                        </Text>
                                        <Text style={styles.textData}>Payment mode          Cash
                                        </Text>
                                    </View>
                                  */}
                                </View>
                                




                            </View>

                           
                           
                            
                        </Content>
                       
                        
                        </ScrollView>
                        <View style={{flex:1}}>
                            <Text style={styles.bottomText}>Your service provider will take two 
                                working days to reflect amount paid in your account.</Text>
                        <Button block warning style={styles.btn}
                                onPress={() => this.props.navigation.navigate('LoadmoneySuccess')}
                            >
                                <Text style={{ color: '#ffffff' }}>Done</Text>
                            </Button>
                            </View>


                    </View>





                  
                </ImageBackground>




            </Container>
        )

    }
}

const styles = StyleSheet.create({

 header:{
   

 },
    headerbal: {
        fontSize: 36,
        paddingLeft: 5,
        textAlign: 'center',
        color: '#1b1464',
        fontFamily: 'Inconsolata',
        fontWeight: "bold",
        alignSelf:'center',
      


    },
    text: {
        fontSize: 14,
        color: '#ffffff',

        alignSelf: 'center',


    },
    curdview: {
        backgroundColor: '#ffffff',
        height: 97,


        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },
    fulldetails:{
        backgroundColor: '#ffffff',
        height: 240,


        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },
    curd_user: {
        backgroundColor: '#ffffff',
        height: 97,
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
    img: {
        height: 198,
        marginTop: 20,
        alignSelf: 'flex-end',
        marginHorizontal: 16,
    },
    btn: {

        marginHorizontal: 16,
   marginBottom: 32,
    
      
        height: 40,
       
        backgroundColor: '#fbbe05'

    },
    usertext: {
        color: '#1b1464',
        fontFamily: 'Nunnito',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left'




    },

    curdtext: {
        color: '#1b1464',
        fontFamily: 'Nunnito',

        fontSize: 14,
        textAlign: 'left'





    },

    transctiondetials: {
        fontSize: 16,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'left',
        marginLeft: 18,
        marginTop: 10,

    },
    textdetails: {
        fontSize: 14,
        textAlign: 'left',
        color: '#707070',
        marginLeft: 20,



    },
    overlopcurd: {
        height: '100%',
        backgroundColor: '#ffffff',
        width: '100%',
       
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      
    },
    bank: {

        height: 40,
        width: 34,
        alignSelf: 'center'

    },
    paymentName:{
        color:'#322b74',
         fontSize:16,
         fontWeight:'bold',

    },
     textData:{
         color:'#322b74',
          fontSize:12,
         
           textAlign:'left'
     },
     bottomText:{

        color:'#999999',
         textAlign:'left',
          fontSize:11,
           letterSpacing:0.33,
           marginHorizontal: 16,

     }

})