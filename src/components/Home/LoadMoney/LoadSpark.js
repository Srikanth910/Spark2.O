import React, { Component } from 'react'


import { Container, Content, Footer, Header, Text, View, ListItem, Button, Item, Left, Right, Icon,  } from 'native-base'
import { StatusBar, StyleSheet, ListView } from 'react-native'
import { connect } from 'react-redux'
 


import {getRazorpayDetails} from '../../../Redux/actions/LoadMoneyaction'
 class LoadSpark extends Component {
  componentDidMount(){
       const  details={
           "memberId":"1278",
           "isFirsttime":"false"
       }
    //    this.props.getRazorpayDetails(details)

            
    }
    render() {
         const {accountDetails}=this.props.loadmoney
         console.log('data',accountDetails)
        
        return (
     <Container style={styles.Container}>
        

          <Header style={{ backgroundColor: "#1b1464", height: 130 }}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
         
         <View  style={{justifyContent:'center',alignSelf:'flex-start' ,alignSelf:'flex-end'}}>

         
          <Button transparent  >
                                <Icon name='close' style={styles.icon}
                                    onPress={() => this.props.navigation.navigate('Login')}
                                />
                            </Button>
              <Text style={styles.headertext}>
              How to load money to your Spark account?

              </Text>
              </View>

          

         </Header>
         <Content>
             <View >
       <Text style={styles.LoadSparktext}>
       You can load money in to your Spark account in two quick and easy ways.
       </Text>
  

             </View>
             <View style={styles.whiteCard}>
                 <View>
                     <ListItem>
                         <Text style={styles.whiteheader}>1. WITHIN THE APP</Text>
                     </ListItem>
                      <View>
                          <Text  style={styles.subtext}>
                          The easiest way to load your Spark account is to use the LOAD MONEY feature.
                          </Text>
                          <Text  style={styles.subtext}>
                          Note: You can load up to Rs. 5,00,000 at a time through this feature.
                          </Text>
                          
                          <Button bordered warning  style={styles.warningbtn}
                          
                           onPress={()=>this.props.navigation.navigate('Loadmoney')}
                          
                          >
                        <Text>Load Money</Text>
                    </Button>

                      </View>
                 </View>

             </View>
             <View  style={styles.whitebox}>
                 <ListItem>
                 <Text style={styles.whiteheader}>2. THROUGH AN EXISTING BANK ACCOUNT</Text>
                 </ListItem>
                 <Text style={styles.subtext}>
                 You can also transfer the desired amount (even above Rs. 5,00,000) to your virtualized Spark account from an existing bank account.

                 </Text>
                 <View>
                     <Item style={styles.Item}>
                     <Text style={styles.accDetails}>Account no. * </Text>
        {/* <Text>{accountDetails.AccNo }</Text> */}
                     </Item>
                     <Item style={styles.Item}>
                     <Text style={styles.accDetails}>IFSC code * </Text>
        {/* <Text>{accountDetails.IFSCCode}</Text> */}
                     </Item>
                     <Item style={styles.Item}>
                     <Text style={styles.accDetails}>Bank </Text>
                     <Text>null</Text>
                     </Item>
                     <Item style={styles.Item}>
                     <Text style={styles.accDetails}>Branch </Text>
                     <Text>null</Text>
                     </Item>
                     <Item style={styles.Item}>
                     <Text style={styles.accDetails}>City </Text>
                     <Text>null</Text>
                     </Item>
                     

                   
                    
                 </View>
                 <Text  style={styles.subtext}>Payment is credited to your Spark account when your bank clears the payment.</Text>


                 </View>

            <View style={styles.btnbg}>

            </View>
         </Content>
         
     </Container>

          
        )
    }
}
const mapStateToProps = (state) => ({
    loadmoney:state.loadmoney
  })
  
  export default connect(mapStateToProps, { getRazorpayDetails, })(LoadSpark)
  
 const  styles= StyleSheet.create({ 
     Container:{
         flex:1,
          backgroundColor:'#f0f0ff'
     },
     btnbg:{
        backgroundColor:'#f0f0ff',
         height:50


     }, 
     whiteCard:{
          height:249,
           
          backgroundColor: '#ffffff',

     },
     whitebox:{
        height:390,
         marginTop:20,
        backgroundColor: '#ffffff',

   },
   LoadSparktext:{
       height:57,
        fontFamily:'Nunito',
         fontSize:16,
         color: '#474a4f',
           marginLeft: 16,
            marginRight: 16,
             marginTop: 25,
   },
   whiteheader:{
  height:19,
   fontFamily:'Nunito',
     fontWeight:'bold',
      color:'#474a4f',
        textAlign:'left',
         fontSize:14,
          marginRight:16,
          
         

   }    ,
    subtext:{
         paddingTop:20,

         fontSize:16,
          color:'#474a4f',
           textAlign:'left',
             fontFamily:'Nunito',
               marginLeft: 16,
               marginRight: 16,
    },
    warningbtn:{
         justifyContent:'center',
          marginRight: 16,
          marginLeft: 16,
          height:40,
         marginTop: 10,
    },
    accDetails:{
         height:22,
          fontFamily:'Nunito',
           fontSize:16,
            color:'#999999',
             textAlign:'left',
             marginLeft: 16,
             marginRight: 16,
         
              
         

    },
     Item:{
          borderColor: 'transparent',
          paddingTop: 10,
          
     },
      headertext:{
          height:51,
           fontSize:20,
            color:'#ffffff',
             textAlign:'left',
            
              marginLeft: 16,
              
      },
      icon: {
        marginLeft: 16,
        color: '#ffffff',
        width: 14,
        height: 20
    },
 })