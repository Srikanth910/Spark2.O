import React, { Component } from 'react'
import { Container, Header, Left, Body, Button, Icon, Title, Content, Text, Item, Input, CardItem, Card, CheckBox, View } from 'native-base'
import { StatusBar, StyleSheet ,TouchableOpacity, Image, ImageBackgroundBase} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class Loadmoney extends Component {
    state = { activeIndex: 0 };

    constructor(props) {
        super(props)

        this.state = {
            value: false
        }
    }
    checked = () => {
        this.setState({
            value: !this.state.value
        })
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#1b1464', height: 80 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <Left>
                        <Button transparent>

                            <Icon name='close'
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }} >
                        <Title  > Load  money</Title>
                    </Body>


                </Header>
                <ScrollView>
                    <Content style={styles.Container} >
                        <Text style={styles.textAmount}>Amount (up to Rs. 5,00,000 at a time)</Text>

                        <Item regular style={styles.loginInput}>
                            <Input placeholder='' />

                        </Item >
                            <Item style={styles.borderline}>
                                <Image source={require('../../../images/info.png')} style={styles.infoicon}/>
                        <Text style={styles.text}>Loaded amount may be adjusted with pending amount of Rs. 1100.
                            <Text  style={{color: '#f7931e'}} > Tap to know more</Text></Text>
                            
                        </Item>
                        <Text style={styles.textAmount}>Description / Purpose</Text>
                        

                        <Item regular style={styles.loginInput}>
                            <Input placeholder='Member Deposit' />

                        </Item>

                        <Text style={styles.selecttext}>
                            Select payment method
                            </Text>

                           <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 0 }) }}
                                style={this.state.activeIndex === 0? styles.btnActive : styles.btn}>
                                <Item style={styles.borderline}>
                       <Image source={require('../../../images/loptop.png')} style={styles.Icon}/>
                                    
                                <View style={styles.cardtext} >
                                <Text>Net banking </Text>
                                <Text style={{ color: '#f7931e' }}> no charges </Text></View>
                                </Item>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 1 }) }}
                                style={this.state.activeIndex === 1 ? styles.btnActive : styles.btn}>
                                    <Item style={styles.borderline}>
                                    <Image source={require('../../../images/cr-card.png')} style={styles.Icon}/>
                                    <View style={styles.cardtext}>
                                <Text> Debit card </Text>
                                <Text  style={{ color: '#f7931e'}}> No charges </Text></View></Item>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 2 }) }}
                                style={this.state.activeIndex === 2 ? styles.btnActive : styles.btn}>

                                    <Item style={styles.borderline}>
                                     <Image source={require('../../../images/cr-card.png')} style={styles.Icon}/>
                                    
                                     <View style={styles.cardtext}>

                                <Text> Credit card  </Text>
                                <Text> Charges up to 4% apply </Text>
                                </View>
                                </Item>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cardlist}>
                            <TouchableOpacity onPress={() => { this.setState({ activeIndex: 3 }) }}
                                style={this.state.activeIndex === 3 ? styles.btnActive : styles.btn}>
                              <Item style={styles.borderline} >
                              <Image source={require('../../../images/wallet.png')} style={styles.Icon}/>
                                    
                               <View style={styles.cardtext}>
                                <Text> Paytm </Text>
                                <Text> Charges up to 1% onely  </Text>
                                </View>
                             
                             </Item>
                            </TouchableOpacity>
                        </View>


                        <Text style={styles.bottomtext}>
                            You will be redirected to our select payment partners
                            depending on the chosen payment method.
                        </Text>

                        <Item style={styles.grpItem}>
                            <CheckBox onPress={this.checked} checked={this.state.value} style={styles.check} />
                            <Text style={styles.termsCondtion}>I agree to the
                          <Text style={{ color: '#f7931e', padding: 5, }}>
                                    Terms and Conditions</Text></Text>

                        </Item>

                        <Button block warning style={styles.bottombtn}
                            onPress={()=>this.props.navigation.navigate('MoneyLoading')} >
                            <Text>proceed</Text>
                        </Button>
                    </Content>


                </ScrollView>
            </Container>

        )
    }
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ffffff'

    },
    Icon:{
        width:30,
        height:20,
        marginLeft:10

    },

    btn: {
        
        // backgroundColor: '#DDDDDD',
        // borderColor: '#dc00ff',
        // borderRadius: 10,
        borderWidth:1,
        padding: 10,
        opacity: 0.5,
        
    
    },
    btnActive: {
        // alignItems: 'center',
        // backgroundColor: '#f7931e',
        borderColor: '#f7931e',
        // borderRadius: 10,
        borderWidth: 2,
        padding: 10,
       
        
    },
     notetext: {
        marginTop: 300,
        marginLeft: 14,
        width: 328,
        opacity: 0.5,

    },
    Content: {
        marginRight: 16,
        marginLeft: 16
    },
    loginInput: {
        borderRadius: 5,
        height: 40,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        backgroundColor: '#e1e4eb',

    },
    textAmount: {
        // width:236,
        height: 19,
        fontFamily: 'Nunito',
        fontWeight: 'normal',
        color: '#474a4f',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20

    },
    cardtext:{
          marginLeft:30
    },
    text: {
        width: 304,
        height: 38,
        fontFamily: 'Nunito',
        fontSize: 14,
        fontWeight: "normal",
        color: '#474a4f',
      
    },

    selecttext
        : {
        height: 19,
        fontFamily: 'Nunito',
        fontWeight: 'normal',
        color: '#474a4f',
        textAlign: 'left',
        marginLeft: 16,
        marginRight: 16,
        fontSize: 14,
        marginTop: 10
    }
    , netbanking: {
        width: 87,
        height: 22,
        fontSize: 16,
        color: '#474a4f',

        fontFamily: 'Nunito',
        fontWeight: "normal",
        fontStyle: 'normal',
        textAlign: 'center'
    },
    cardItem: {

        height: 44

    },
    card: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 15,
        height: 44,
        //  width:328,
    },
    bottomtext: {
        height: 30,
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 40,

        color: '#aaadb2'

    }
    , bottombtn: {
        marginRight: 16,
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 16,
    },

    termsCondtion: {
        // height: 19,
        fontFamily: "Nunito",
        fontWeight: 'normal',
        color: '#474a4f',
        fontSize: 14,
        marginLeft: 20
    },
    check: {
        borderColor: '#f7931e',
        // height:14,
        // width:14,
        borderRadius: 2,
         backgroundColor: '#f7931e'
    },
    grpItem: {
        marginTop: 20,
        borderColor: 'transparent',
        marginRight:16,
        marginLeft:16
    },
    cardlist:{
        marginLeft:16,
        marginRight:16,
        padding:10
    },
    infoicon:{
        
         height:16,
         width:16, 
         marginBottom:10,
        marginRight:16,
        marginLeft: 16,
         
         
         
    },
    borderline:{
        borderColor:'transparent'
    }


})