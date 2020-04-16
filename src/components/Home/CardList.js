import React, { Component } from 'react'
import { Container, Text, Card, CardItem,Left,Button ,Body ,Icon, Right } from 'native-base'
 import {StyleSheet} from 'react-native'
export default class CardList extends Component {
    render() {
        return (
            <Container>
              <Card style={styles.card}>
            <CardItem>
              <Left>
               
                <Body>
                  <Text>Ac: - 1213232434</Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                <Text>
                  1000000
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
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
         marginRight:16
    
     }

  

})