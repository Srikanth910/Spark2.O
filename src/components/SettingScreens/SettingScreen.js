import React, { Component } from 'react'
import { Container, Header, Left,List,ListItem,Button, Icon,Item,  Right, Body, Content, CheckBox,Title, Text, Tabs, Tab, TabHeading, View } from 'native-base'
import { StatusBar,Switch, ImageBackground,Image,StyleSheet } from 'react-native'
export default class SettingPage extends Component {
    render() {
        return (
            <Container>
<Header style={{ backgroundColor: "#1b1464"  , height:80,}}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                        <Left  >
                            <Button transparent  >
                                <Icon name='close'
                                />
                            </Button>
                        </Left>
                        <Body >
                       <Title>Settings</Title>
                        </Body>
                    <Right >
                    <Button transparent
                    
                    onPress={()=>this.props.navigation.navigate('Editprofile')}
                    >
            <Text >Edit profile</Text>
            </Button>
                    </Right>
                </Header>
              
       
              <Content >
              <View style={styles.rectangle}>
                        <View style={styles.reactangleText}>
                        <Image  source={require('../../images/spark_logo.png')}/> 
                            <Text style={styles.rupi}> Vijay Kumar</Text>
                            <Text style={styles.loaded}>Member ID: 1256</Text>
                            <Text style={styles.loaded}>9845698456, vijayk@gmail.com</Text>
                            <Text style={styles.loaded}>A/C no.: 222333000111222</Text>
                            <Text style={styles.loaded}>IFSC: YESB0CMSNOC</Text>
                            <Text style={styles.user}>Karnataka, Ayshwarya Syndicate Souharda
Credit Co-operative Limited</Text>
                          </View>


                    </View>
                    <View style={styles.underline2}></View>
                    <View style={styles.rectBox}>
                        <Item style={styles.underline}>
                            <Text style={styles.details}> KYC STATUS</Text>

                        </Item>
    <View style={{marginLeft:10,marginTop:5}}>
                        <Text style={styles.current}>KYC verification pending</Text>
                        <Button bordered warning style={styles.buttonStyle}>
            <Text>Submit documents </Text>
          </Button>
            
                
                  
                        </View>
                    </View>
                    <View style={styles.underline2}></View>
                    <View style={styles.rectBox}>
                        <Item style={styles.underline}>
                            <Text style={styles.details}>LINKED ACCOUNTS</Text>
                            </Item>
                            <List>
            <ListItem  style={{justifyContent:'center',alignItems:'center'}}>
                <Left>
            <Image  source={require('../../images/bank.png')}/> 
                <Text style={styles.list_item} >My bank account</Text>
                </Left>
                <Right>
             <Icon name="ios-arrow-forward" />
             </Right>
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}
               onPress={() => this.props.navigation.navigate('Beneficiary')}
            >
                <Left>
            <Image  source={require('../../images/beneficiary.png')} style={{marginTop:8}}/> 
                <Text style={styles.list_item} >Beneficiaries</Text>
           
                </Left>
                <Right>
                <Icon name="ios-arrow-forward" />
                </Right>
            </ListItem>
            </List>
                       
  
                    </View>
                    <View style={styles.underline2}></View>
                    <View style={styles.settingsrectBox2}>
                        <Item style={styles.underline}>
                            <Text style={styles.details}>SETTINGS</Text>

                        </Item>
  
                        <List>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}
            
             onPress={()=>this.props.navigation.navigate('ChangePasseword')}
             >
       <Left>
            <Image  source={require('../../images/password.png')}/> 
                <Text style={styles.list_item} >Change password</Text>
                </Left>
           <Right>
                <Icon name="ios-arrow-forward" />
                </Right>
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
                <Left>
            <Image  source={require('../../images/passcode.png')} style={{marginTop:6}}/> 
         
                <Text style={styles.list_item} >Change passcode</Text>
           
                </Left>
                <Right>
                <Icon name="ios-arrow-forward" />
                </Right>
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
      <Left>
              <Image  source={require('../../images/notification.png')} style={{marginTop:3}}/> 
              <Text style={styles.list_item} > Notification settings</Text>
              </Left>
               
               <Right>
             <Icon name="ios-arrow-forward"/>
             </Right>
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
           <Left>
            <Image  source={require('../../images/money.png')} style={{marginTop:6}}/> 
                <Text style={styles.list_item} >Show balances</Text>
                </Left>
            <Right>
            <Switch />
                </Right>
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
            <Left>
            <Image  source={require('../../images/phone_unlock.png')} style={{marginTop:6}}/> 
                <Text style={styles.list_item} >Allow login using Phone Unlock</Text>
              
                </Left>
                <Right>
                <Switch />
                </Right>
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
                <Left>
            <Image  source={require('../../images/i-ic-set-limit.png')} style={{marginTop:5}}/> 
                <Text style={styles.list_item} >Set transfer limit</Text>
                </Left>
      <Right>
                <Icon name="ios-arrow-forward" />
                </Right> 
            </ListItem>
        
          </List>
                    </View>
                    <View style={styles.underline2}></View>
                    <View style={styles.settingsrectBox}>
                        <Item style={styles.underline}>
                            <Text style={styles.details}>SUPPORT</Text>

                        </Item>
                        <List>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
            <Left>
            <Image  source={require('../../images/information.png')} style={{marginTop:4}}/> 
                <Text style={styles.list_item} >About us</Text>
                </Left>
         <Right>
                <Icon name="ios-arrow-forward"  />
                </Right>
              
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>
            <Left>
            <Image  source={require('../../images/faq.png')} style={{marginTop:4}}  /> 
                <Text style={styles.list_item} >FAQs</Text>
                </Left>
          <Right>
                <Icon name="ios-arrow-forward" />
                </Right> 
            </ListItem>
            <ListItem style={{justifyContent:'center',alignItems:'center'}}>  
            <Left>
            <Image  source={require('../../images/contact_us.png')} style={{marginTop:6}}/> 
                <Text style={styles.list_item} >Contact us</Text>
                </Left>
           <Right>
                <Icon name="ios-arrow-forward" />
                </Right>
            </ListItem>
        
        
          </List>
                    </View>
                </Content>
                <View style={styles.footerbox}>
                <Text style={styles.logout}>
                    Logout
                </Text>
              </View>
        
            </Container>
        )
    }
}
 const styles= StyleSheet.create({
     footerbox:{
        height: 64,
    
     borderBottomColor: '#f0f0ff',
     borderBottomWidth: 25,

      },
      container: {
        flex: 1,

        height: 640
    },
    headerText: {
        width: 221,
        height: 27,
        fontFamily: 'Nunito',
        fontSize: 20,

        marginLeft: 10,
        color: '#ffffff',
        alignItems: 'flex-start'
    },
    footerbox:{
        height: 64,
        justifyContent:'center',
     backgroundColor: '#e1e4eb',
     alignItems: 'center',
      },
      buttonStyle:{
     height: 40,
    width:178,
    marginTop:10
      },
    headerCross: {
        color: '#ffffff',
        marginLeft: 20,
        marginTop: 20,
        height: 20
    },
    reactangleText: {
        alignItems: 'center',
        marginTop: 15

    },
    underline: {textDecorationLine: 'underline'}

,


    textInput: {
        marginTop: 20,
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        backgroundColor: '#e1e4eb',
    },

logout:{
justifyContent:'center',
color:'#f7931e',
alignItems:'center'
},
    textData: {
        marginTop: 20,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,

    },
    icon: {
        width: 14,

        marginBottom: 50
    },
    rectangle: {
        backgroundColor: '#ffffff',
        height: 250,
        marginTop: 10

    },
    underline2:{
        borderBottomColor: '#f0f0ff',
        borderBottomWidth: 20,
     
        marginTop:25,
    
    },
    rectBox: {

        backgroundColor: '#ffffff',
        height: 151,
        marginTop:10
    },
    settingsrectBox: {

        backgroundColor: '#ffffff',
        height: 251,
        marginTop:10
    },
    settingsrectBox2: {

        backgroundColor: '#ffffff',
        height: 370,
        marginTop:10
    },
    rupi: {

        height: 30,
        fontFamily: 'Nunito',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#474a4f',
        textAlign: 'center'
      

    },
    loaded: {

        height: 19,
        marginTop: 10,
        fontFamily: 'Nunito',
        fontSize: 14,
        color: '#474a4f',
        textAlign: 'center',
        fontStyle: 'normal'
    },
    list_item: {

        height: 19,
        marginLeft: 12,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#474a4f',
        textAlign: 'center',
        fontStyle: 'normal'
    },
    spark: {
      
        height: 27,
        fontFamily: 'Nuntio',
  
        fontWeight: 'bold',
        fontSize: 20,
        color: '#474a4f',
        marginTop: 5,
        textAlign: 'center'
    },
    user: {
    
        height: 32,
        fontFamily: 'Nunito',
        color: '#999999',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center'
    },
    transaction: {
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: "normal",
        textAlign: 'center',
        color: '#474a4f',
        marginLeft: 15


    },
    details: {

        marginTop: 10,
        fontSize: 19

    },
    underline: {
        padding: 10,
        marginLeft: 16


    },
    current: {
        height: 19,
        fontFamily: 'Nunito',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#474a4f',
        textAlign: 'left',
        marginLeft: 16

    },
    bal: {
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#474a4f',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 5

    },
    divider:{
       
       
    },
    userText:{
         textDecorationLine:'underline',
         
    }

 })