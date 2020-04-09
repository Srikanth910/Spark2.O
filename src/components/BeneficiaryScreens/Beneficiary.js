import React, { Component } from 'react'

import { Container, Header, Tabs,Text, Tab,TabHeading,Item,Input,Button,Body, View ,Left} from 'native-base'
import {StyleSheet} from 'react-native'
export default class  Beneficiary extends Component {
    render() {
        return (
          <Container>
          <Header style={{backgroundColor:"#1b1464" ,height:120}}>
              

          <Body>
            <Text style={styles.headerText}>
             
            </Text>
            </Body>
              </Header>       
                <Tabs
                  tabBarUnderlineStyle = {{backgroundColor:'#f3a549'}}
                >
      <Tab heading={ <TabHeading  style={styles.tabColor}><Text>Spark</Text></TabHeading>}>
          {/* <Text  style={styles.textData}>Enter MPIN</Text>
          <Item regular  style={styles.textInput}>
        <Input placeholder='Regular Textbox' />

        
      </Item> */}
      {/* <Text style={styles.forgetText} >Forgot MPIN</Text> */}
    
      <Button block warning  style={styles.LoginButton}
      
      onPress={()=>this.props.navigation.navigate('AddBeneficiarys')}
      >
        <Text>Add beneficiries</Text>
        {/* <Left>
            <Button transparent>
                            <Icon name='arrow-back'
                             onPress={() => this.props.navigation.navigate('AddBeneficiarys')}
                            />
                        </Button>
                    </Left> */}
      </Button>

      
                 

      </Tab>
      <Tab heading={ <TabHeading  style={styles.tabColor}><Text>Others</Text></TabHeading>}>
       
      </Tab>
     
     
    </Tabs> 
   </Container>
              
          
        )
    }
}


 const styles= StyleSheet.create({
      headerText:{
          color:'white'
      },
    forgetText:{
        marginLeft:300,

        marginTop:10,
        color:"#f3a549",
       
    },
    tabColor:{
        backgroundColor:"#1b1464"
    },
     
     textInput:{
         marginTop:20,
         width:328,
         marginLeft:40,
        
       
     },
      textData:{
          marginTop:10,
          marginLeft:20

      },
      LoginButton:{
          marginTop:370,
        marginLeft:30,
            width:328
      }
 })