import React, { Component } from 'react'

import { WebView } from 'react-native-webview';
import { Container, Header, Icon, Text, Content, Left, Body, Title, Button } from 'native-base';
import { StatusBar, View  ,Image, StyleSheet} from 'react-native';
 import{getEula}from '../../Redux/actions/authAction'
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
 class Eula extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
            eulashow:'',
            eula:''
         }
     }
     
     componentDidMount=async()=>{
        this.props.getEula().then(()=>{
           const {auth}=this.props
           if(auth.eulaurl.code==="200"){
            this.setState({
               eula:auth.eulaurl
            })
           }

           })
        try {
            const data = await AsyncStorage.getItem('eulashow');
             
            const eulashow = JSON.parse(data);
             console.log(eulashow)

                  this.setState({
                       eulashow:eulashow
                  })
           
          } catch (e) {
            console.log(e);
          }
        

          if(this.state.eulashow===true){
                 this.props.navigation.navigate('Landingpage')
          }

          
     }


     handleIagree= async ()=>{
          this.setState({
              eulashow:true
          })
          try {
            await AsyncStorage.setItem('eulashow', JSON.stringify(this.state.eulashow));
            console.log('login user saved');
          } catch (e) {
            console.log(e);
          }
          this.props.navigation.navigate('Landingpage')

     }
    render() {
         const{auth}=this.props
          
         
        return (

            <Container>


<Header style={{ backgroundColor: "#1b1464", height: 30 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                   
                   <Left>
                    <Icon
              name="close"
             
              style={{color: '#ffffff', marginLeft: 16,}}
            />


          </Left>
          <Body>
              <Title style={styles.headerText}> END USER LICENSE AGREEMENT</Title>
          </Body>

                </Header>
          
             
                <WebView source={{ uri:this.state.eula.EULA }} />
              <View  style={styles.bottomBtn}>
              <Button transparent>
            <Text
            style={{color:'#474a4f'

             , fontSize:18}}
            >DECLINE</Text>
          </Button>
                  <Button transparent
                   onPress={this.handleIagree}
                   >
            <Text style={{color:'#f3a549' , fontSize:18}}> I AGREE</Text>
          </Button>

              </View>
           
              </Container>


        )
        
        
        
        
        // 
        
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    {
     getEula
    },) (Eula)


const styles = StyleSheet.create({
    headerText: {
      fontFamily: 'Nunito',
      fontSize: 13,
      color: '#ffffff',
       alignItems:'center',
        
    },
    bottomBtn:{
         flexDirection:'row',
        backgroundColor:'#f5f5ff',
         height:80,
         justifyContent: 'space-around',
           alignItems:'center'

        
        

    }

})