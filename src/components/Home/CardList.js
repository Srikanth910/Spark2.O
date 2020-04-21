import React, { Component } from 'react'
import { Container, Text, Card, CardItem,Left,Button ,Body ,Icon, Right } from 'native-base'
 import {StyleSheet} from 'react-native'
 import { SliderBox } from "react-native-image-slider-box";

export default class CardList extends Component {
    render() {
        return (
            <Container>
              <Card style={styles.card}>
            <CardItem>
              <Left>
               
                <Body>
                  <Text style={styles.AcNO}>A/c NO :</Text>
                
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <Text style={styles.bal}>10000</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                 
                  <Text>LOAD</Text>
                </Button>
              </Left>

              <Right>
              <Button transparent textStyle={{color: '#87838B'}}>
                  
                  <Text>TRANSFER</Text>
                </Button>

              </Right>
            </CardItem>
          </Card>
            </Container>
        )
    }
}



const styles=StyleSheet.create({

     card:{
         marginTop:5,
         marginLeft:16,
         marginRight:16,
         backgroundColor:'red'
         
    
     },

     AcNO:{
       width:50,
  height:19,
  fontFamily:'Nunito',
  fontSize:14,
  color:'grey'

     },
     bal:{
       width:99,
       height:26,
       fontFamily:'Inconsolata',
       fontSize:24
,
fontWeight:'bold',
color:'#474a4f'     }

})
