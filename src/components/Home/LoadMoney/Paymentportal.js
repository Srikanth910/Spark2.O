import React, { Component } from 'react'
import { Container, Header, Content, FooterTab, Left, Button, Icon, Body, Right, Text, View } from 'native-base'
import { SafeAreaView, ScrollView, StyleSheet, Image, StatusBar} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'


 class Paymentportal extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userDetails:{}
         }
     }
     
     componentDidMount= async()=>{
        try{
            const data=  await  AsyncStorage.getItem('Loginuser');
             const  logindetail=JSON.parse(data)
              this.setState({
                 userDetails: logindetail
     
              })
         } catch(e){
            console.log(e)
         }

     }


    handleSuccess=()=>{
         const{params}=this.state
         const payementDetails={
            membarId: this.state.userDetails.memberid,
            balance:params.amount,
            "chargeAmount":"0",
            "ServiceChargePayedByCust":"no",
            "ShareBuy":"false",
             pgTransId:params.razorpay_payment_id

         }
    }
    render() {
         const{params}=this.props.route
          console.log(params)
        return (
            <Container>
                 <Header  style={{ backgroundColor: "#1b1464", height: 80 }}>
                 <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                
                 <Left style={{ marginLeft:5 }}>
 
 <Button transparent  >
     <Icon name='arrow-back'
         onPress={() => this.props.navigation.navigate('Loadmoney')}
     />


 </Button>
 </Left>
 <Body>
     <Text style={styles.headerText}>Payment portal</Text>

 </Body>
    

                 </Header>

                 <Content padder >
                     <View style={{alignSelf:'center',  marginTop: 50
                    }}>
<Image source={require('../../../images/home/portal_img.png')}
style={styles.portalimg}

/>
<Text style={styles.contentText}>Payment portal screen for simulation</Text>
</View>

     </Content>
     <View style={{marginVertical:32 ,marginHorizontal: 16,justifyContent:'flex-end'}}>

     <Button block warning
                                onPress={this.handleSubmit}
                               
                            >
                                <Text>Failure</Text>
                            </Button>
                            <Button block warning
                                 onPress={this.handleSuccess}
                                    //  () => this.props.navigation.navigate('LoadmoneySuccess')}
                                style={{marginTop:20}}
                            >
                                <Text>Success</Text>
                            </Button>
     </View>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    loadmoney: state.loadmoney,
  });
  
  export default connect(
    mapStateToProps,
    {},
  )(Paymentportal);
const styles= StyleSheet.create({
     headerText:{
          fontFamily:'Nunito'
,
fontSize:20,
 color:'#ffffff'
     },
     portalimg:{ 
         
        
          
          
     },
     contentText:{
          fontFamily:'Nunito',
           fontSize:16,
            
          textAlign:'center',
           color: '#474a4f', 
        alignItems:'flex-end',
         marginTop: 75,
     }
 })