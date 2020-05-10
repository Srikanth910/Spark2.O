import React, { Component } from 'react'
import { Container, Header, Content, Button, Left, Icon, Body, Text, Right, Item, Input, View, List, ListItem } from 'native-base'
import { StatusBar, StyleSheet, Image  } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
export default class LoanPayment extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            mobileNum:'',
             isVisible:false,
             Data:""
         }
     }
     handlepayment=( name)=>{
          this.setState({
               isVisible:true,
               Data:name
              
              
          })
        this.RBSheet.close()
        
     }
     
    render() {
        return (
            <Container>
                <Header  style={{ backgroundColor: "#1b1464", height: 80 }}>
                 <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                
                 <Left style={{ marginLeft:5 }}>
 
 <Button transparent  >
     <Icon name='arrow-back'
         onPress={() => this.props.navigation.navigate('Loasmoney')}
     />


 </Button>
 </Left>
 <Body>
     <Text style={styles.headerText}>Loan Payment</Text>

 </Body>
    
    <Right> 
        <Image source={require('../../images/billpay/faq_ic.png')}/>
    </Right>

                 </Header>
                <Content>
                <Text style={styles.loginText}>lender</Text>
            <Item regular style={styles.textInput}
            >
             <Input placeholder="" style={styles.input}
                value={this.state.Data}
                
              />
                <Icon name='ios-arrow-down'  onPress={() => this.RBSheet.open()}
                             />
            </Item>
            
            <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          duration={250}
          customStyles={{
            container: {
              justifyContent:"flex-start",
              alignItems: "flex-start"
            }
          }}
        >
             <Item regular style={styles.search}
            >
                <Icon name="search"/>
              <Input placeholder=" search" style={styles.input}
                value={this.state.mobileNum}
                onChangeText={mobileText => this.setState({ mobileNum: mobileText })}
              />
            </Item>
            <View>
                <List>
                    <ListItem onPress={()=>this.handlepayment('Loanpayment')}>
                        <Image source={require('../../images/billpay/Airtel.png')}/>
                        <Text style={{marginLeft:20}}>Loan Payment</Text>
                    </ListItem>
                </List>
            </View>
            
      
        </RBSheet>
    
     {this.state.isVisible===true &&
     <View>
        <Text style={styles.loginText}>Loan Account Number </Text>
            <Item regular style={styles.textInput}
            >
              <Input placeholder="" style={styles.input}
                value={this.state.mobileNum}
                onChangeText={mobileText => this.setState({ mobileNum: mobileText })}
              />
            </Item></View>}



                </Content>

                <View style={{marginHorizontal: 16,marginVertical:16,}}>
                    <ListItem >
                        <Left>
                        <Text style={styles.bottomtext}>Your service provider will take two working 
                            days to reflect amount paid in your account.</Text>
                            </Left>
                            <Right>
                            <Image source={require('../../images/billpay/bharat_logo.png')} style={styles.logo}/></Right>
                    </ListItem>
                    {this.state.isVisible===true?
                    <Button block warning
                    onPress={()=>this.props.navigation.navigate('LoanpaymentSuccess')}
                                >
                                    <Text>Get Payable Amount</Text>
                                
                            </Button>:

                            <Button block warning
                               
                                >
                                <Text>Proceed</Text>
                            </Button>
    }
                            
                </View>
            </Container>
        )
    }
}

 const styles=StyleSheet.create({
    headerText:{
        fontFamily:'Nunito'
,
fontSize:20,
color:'#ffffff',
 alignSelf:'flex-end'

   },
   loginText: {
    paddingTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,


  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',
  },
  input: {

    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,

  },
  logo:{
      

  },
  
search:{
    marginTop: 40,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    backgroundColor: '#e1e4eb',

},
bottomtext:{
    color:'#999999',
     textAlign:'left',
      letterSpacing:0.33,
      fontSize:14
}

 })