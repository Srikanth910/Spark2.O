import React, { Component } from 'react';
import { Image,Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List, Row, View } from 'native-base';
export default class NotificationList extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#F0F0FF'}}>
        
        <Content style={{paddingTop:0}}> 
          <Card style={{flex: 0,shadowOpacity:0,borderRadius:0}}>
            
          <CardItem>
              <Body>
                <Image 
                source={require('../../images/react_box.png')} 
                style={{  width:360, height:144,
                 }}/> 
                 <Row>
                   <List>
                   <Image source={require('../../images/mic.png')}
                     
                     resizeMode = 'center'
                   style={{height:30,width:30,paddingRight:8}}>

                  

                   </Image>
                   <View 
                   style={{height:12,
                    width:12,
                    paddingRight:8,
                    backgroundColor:'red',
                   borderRadius:6,
                   marginTop:7}}>

                   </View>
                   </List>
                   
                 <List>
                   <Text style={{paddingTop:8,color:'black',fontSize:16,fontWeight:'bold'}}>
                 Refer and earn!
                </Text>
                <Text style={{paddingTop:8,color:'black',fontSize:14,fontWeight:'normal'}}>
                Refer a friend and get upto Rs. 100 cashback when they become members of Spark.
                </Text>
                <Text style={{paddingTop:8,color:'gray',fontSize:13,fontWeight:'normal'}}>
                April 2, 2018
                </Text> 
                   </List>
                 </Row>
              </Body>
            </CardItem>
            <CardItem style={{height:16,backgroundColor:'#F0F0FF'}}>

            </CardItem> 

            <CardItem>
              <Body>
              <Image 
                source={require('../../images/img_box.png')} 
                style={{  width:360, height:144,
                 }}/> 
                 <Row>
                 <Image source={require('../../images/mic.png')}
                     
                     resizeMode = 'center'
                   style={{height:30,width:30,paddingRight:8}}>

                  

                   </Image>
                 <List>
                   <Text style={{paddingTop:8,color:'black',fontSize:16,fontWeight:'bold'}}>
                 Refer and earn!
                </Text>
                <Text style={{paddingTop:8,color:'black',fontSize:14,fontWeight:'normal'}}>
                Refer a friend and get upto Rs. 100 cashback when they become members of Spark.
                </Text>
                <Text style={{paddingTop:8,color:'gray',fontSize:13,fontWeight:'normal'}}>
                April 2, 2018
                </Text> 
                   </List>
                 </Row>
              </Body>
            </CardItem>
            <CardItem style={{height:16,backgroundColor:'#F0F0FF'}}>

            </CardItem> 
            <CardItem>
              <Body>
              <Image 
                source={require('../../images/img_box.png')} 
                style={{  width:360, height:144,
                 }}/> 
                 <Row>
                   <Image source={{
                     uri: '/Users/raghava/Desktop/spark\ rect/src/images/generalIcon.png'}} 
                     resizeMode = 'center'
                   style={{height:30,width:30,paddingRight:8}}>

                   </Image>
                 <List>
                   <Text style={{paddingTop:8,color:'black',fontSize:16,fontWeight:'bold'}}>
                 Refer and earn!
                </Text>
                <Text style={{paddingTop:8,color:'black',fontSize:14,fontWeight:'normal'}}>
                Refer a friend and get upto Rs. 100 cashback when they become members of Spark.
                </Text>
                <Text style={{paddingTop:8,color:'gray',fontSize:13,fontWeight:'normal'}}>
                April 2, 2018
                </Text> 
                   </List>
                 </Row>
              </Body>
            </CardItem>
            <CardItem style={{height:16,backgroundColor:'#F0F0FF'}}>

            </CardItem> 

            <CardItem>
              <Body>
              <Image 
                source={require('../../images/img_box.png')} 
                style={{  width:360, height:144,
                 }}/> 
                 <Row>
                   <Image source={require('../../images/mic.png')} 
                     resizeMode = 'center'
                   style={{height:30,width:30,paddingRight:8}}>

                   </Image>
                 <List>
                   <Text style={{paddingTop:8,color:'black',fontSize:16,fontWeight:'bold'}}>
                 Refer and earn!
                </Text>
                <Text style={{paddingTop:8,color:'black',fontSize:14,fontWeight:'normal'}}>
                Refer a friend and get upto Rs. 100 cashback when they become members of Spark.
                </Text>
                <Text style={{paddingTop:8,color:'gray',fontSize:13,fontWeight:'normal'}}>
                April 2, 2018
                </Text> 
                   </List>
                 </Row>
              </Body>
            </CardItem>
            <CardItem style={{height:16,backgroundColor:'#F0F0FF'}}>

            </CardItem> 
            <CardItem>
              <Body>
                <Image 
                source={{uri: '/Users/raghava/Desktop/spark\ rect/src/images/notif2.png'}} 
                style={{aspectRatio: 2.6/1, width: Math.round(Dimensions.get('window').width - 36),
                 flex: 1}}/> 
                 <Row>
                   <Image source={{
                     uri: '/Users/raghava/Desktop/spark\ rect/src/images/generalIcon.png'}} 
                     resizeMode = 'center'
                   style={{height:30,width:30,paddingRight:8}}>

                   </Image>
                 <List>
                   <Text style={{paddingTop:8,color:'black',fontSize:16,fontWeight:'bold'}}>
                 Refer and earn!
                </Text>
                <Text style={{paddingTop:8,color:'black',fontSize:14,fontWeight:'normal'}}>
                Refer a friend and get upto Rs. 100 cashback when they become members of Spark.
                </Text>
                <Text style={{paddingTop:8,color:'gray',fontSize:13,fontWeight:'normal'}}>
                April 2, 2018
                </Text> 
                   </List>
                 </Row>
              </Body>
            </CardItem>
            <CardItem style={{height:16,backgroundColor:'#F0F0FF'}}>

            </CardItem> 

            <CardItem>
              <Body>
                <Image 
                source={{uri: '/Users/raghava/Desktop/spark\ rect/src/images/notif1.png'}} 
                style={{aspectRatio: 2.6/1, width: Math.round(Dimensions.get('window').width - 36),
                 flex: 1}}/> 
                 <Row>
                   <Image source={{
                     uri: '/Users/raghava/Desktop/spark\ rect/src/images/promoIcon.png'}} 
                     resizeMode = 'center'
                   style={{height:30,width:30,paddingRight:8}}>

                   </Image>
                 <List>
                   <Text style={{paddingTop:8,color:'black',fontSize:16,fontWeight:'bold'}}>
                 Refer and earn!
                </Text>
                <Text style={{paddingTop:8,color:'black',fontSize:14,fontWeight:'normal'}}>
                Refer a friend and get upto Rs. 100 cashback when they become members of Spark.
                </Text>
                <Text style={{paddingTop:8,color:'gray',fontSize:13,fontWeight:'normal'}}>
                April 2, 2018
                </Text> 
                   </List>
                 </Row>
              </Body>
            </CardItem>
            <CardItem style={{height:16,backgroundColor:'#F0F0FF'}}>

            </CardItem>  
          </Card>
        </Content>
      </Container>
    );
  }
}