
import React, { Component } from 'react'
import { Container, Header, Tabs, Text, List, Tab, ListItem, TabHeading, Title, Item, Input, Button, Body, View, Icon, Left, Right, Thumbnail, Form } from 'native-base'
import { StyleSheet, StatusBar, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

 import{getLastTentxns} from '../../Redux/actions/authAction'


 class Saving_Account_Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData:[]

        };
        
    }

     componentDidMount(){
          const data={
               "membarId":"1421"
          }
           this.props.getLastTentxns(data).then(()=>{
            const {auth}=this.props
                if(auth.getTransactionList.code==="200"){
                    this.setState({
                        arrayData:auth.getTransactionList.lasttxns
                    })
                }
           })
          
     }
    render() {
 const {auth}=this.props
 
  
         
        return (

            <Container style={styles.Container}>

                <Header style={{ backgroundColor: '#1b1464', height: 80 }} >
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
                    <Left>
                        <Button transparent style={styles.btnclose}>
                            <Icon name='arrow-back'
                                onPress={() => this.props.navigation.navigate('Otherbank')}
                            />
                        </Button>
                        <Body style={{ alignItems: 'flex-start', marginTop: -50, maarginleft: 20 }}>
                            <Title >Savings Account</Title>

                        </Body>
                        <Title style={styles.accountnumber}>22345676585467334</Title>
                    </Left>





                </Header>


                <ListItem style={{ backgroundColor: '#1b1464', height: 160, marginLeft: 0 }}>

                    <Body>

                        <Body>
                            <Text style={styles.Balancetext}>Balance</Text>
                            <Text style={styles.Balancetext}>₹ 20,000</Text>

                        </Body>

                        <Image source={require('../../images/savingsaccount/plusicon.png')} style={styles.plusicon} />

                        <Body>
                            <Text style={styles.loadmoney}>Load money</Text>

                        </Body>



                    </Body>



                    <Body>



                        <Right>
                            {/* style={styles.acticon}  */}

                            <Icon style={styles.acticon} name='ios-arrow-forward'
                                onPress={() => this.props.navigation.navigate('Otherbank')}
                            />

                            <Body>
                                <Text style={styles.numbertext}
                                
                                 onPress={()=>this.props.navigation.navigate('View_Account_Statement')}
                                >Account statement</Text>

                            </Body>

                            <Body>

                                {/* <Image source={require('../../images/savingsaccount/arrow.png')} style={styles.plusicon} /> */}
                                <Right>

                                </Right>


                            </Body>



                        </Right>



                        <Image source={require('../../images/savingsaccount/arrow.png')} style={styles.plusicon} />
                        <Body>
                            <Text style={styles.accounttext}> Transfer Money </Text>

                        </Body>

                    </Body>

                </ListItem>




                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }}>

                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabtext}>All</Text></TabHeading>}>

                        <ScrollView>
                            <View>
                                <List>


{this.state.arrayData.map(Items=>{

    return(
        <ListItem thumbnail>
        <Left style={{ width: 120 }}>
            <Body>

                <Image style={styles.allicon} source={require('../../images/savingsaccount/arrow_down.png')} />
    <Text>{Items.date}</Text>
    <Text>3.00</Text>

            </Body>



        </Left>
        <Body >
            <Text style={styles.prepaid}>
                From
        </Text>
            <Text style={styles.lightText}>Qugion jinn</Text>
    <Text style={styles.lightText}>{Items.finalbal}</Text>


        </Body>
        <Right>
            <Text>transtion ID</Text>
    <Text>{Items.id}</Text>
    <Text>{Items.amount}</Text>

        </Right>
    </ListItem>


    )
})}

{/* 
                                                                       <ListItem thumbnail>
                                        <Left style={{ width: 120 }}>
                                            <Body>

                                                <Image style={styles.allicon} source={require('../../images/savingsaccount/arrow_down.png')} />
                                                <Text>18-june 2016</Text>
                                                <Text>6:30 pm</Text>

                                            </Body>



                                        </Left>
                                        <Body >
                                            <Text style={styles.prepaid}>
                                                From
                                        </Text>
                                            <Text style={styles.lightText}>Qugion jinn</Text>
                                            <Text style={styles.lightText}>amount</Text>


                                        </Body>
                                        <Right>
                                            <Text>transtion ID</Text>
                                            <Text>6456785678</Text>
                                            <Text>+ 400.00</Text>

                                        </Right>
                                    </ListItem>


                                    <ListItem thumbnail>
                                        <Left style={{ width: 120 }}>
                                            <Body>

                                                <Image style={styles.allicon} source={require('../../images/savingsaccount/arrow_down.png')} />
                                                <Text>18-june 2016</Text>
                                                <Text>6:30 pm</Text>

                                            </Body>



                                        </Left>
                                        <Body >
                                            <Text style={styles.prepaid}>
                                                From
                                        </Text>
                                            <Text style={styles.lightText}>Qugion jinn</Text>
                                            <Text style={styles.lightText}>amount</Text>


                                        </Body>
                                        <Right>
                                            <Text>transtion ID</Text>
                                            <Text>6456785678</Text>
                                            <Text>+ 400.00</Text>

                                        </Right>
                                    </ListItem>

 */}

                                    <Image source={require('../../images/savingsaccount/103.png')} style={{ width: 410, height: 180, backgroundColor: '#e6e6e6' }} />


                                    {/* <ListItem thumbnail>
                                        <Left style={{ width: 120 }}>
                                            <Body>

                                                <Image style={styles.allicon} source={require('../../images/savingsaccount/arrow_down.png')} />
                                                <Text>18-june 2016</Text>
                                                <Text>6:30 pm</Text>

                                            </Body>



                                        </Left>
                                        <Body >
                                            <Text style={styles.prepaid}>
                                                From
                                        </Text>
                                            <Text style={styles.lightText}>Qugion jinn</Text>
                                            <Text style={styles.lightText}>amount</Text>


                                        </Body>
                                        <Right>
                                            <Text>transtion ID</Text>
                                            <Text>6456785678</Text>
                                            <Text>+ 400.00</Text>

                                        </Right>
                                    </ListItem>
 */}

                                    <Image source={require('../../images/savingsaccount/106.png')} style={{ width: 410, height: 180, backgroundColor: '#e6e6e6' }} />


                                </List>
                            </View>
                        </ScrollView>

                    </Tab>


                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabtext}>Sent</Text></TabHeading>}>




                    </Tab>
                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabtext}>Received</Text></TabHeading>}>




                    </Tab>
                    <Tab heading={<TabHeading style={styles.tabColor}><Text style={styles.tabtext}>Loaded</Text></TabHeading>}>




                    </Tab>




                </Tabs>

            </Container>


        )
    }
}



const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    {getLastTentxns}  )(Saving_Account_Main);
  

const styles = StyleSheet.create({

    Container: {
        flex: 1
    },

    allicon: {
        marginLeft: 29
    },

    headerText: {
        color: 'white',
    },
    accountnumber: {
    
        width: 450,
        fontSize:16,
        marginBottom:23,
        marginLeft:0
        
        
    },

    Balancetext: {
        color: '#ffffff',
        marginRight: 100,
        fontSize: 14,



    },
    accounttext: {
        color: '#f7931e',
        fontSize: 16,
        marginLeft: 10,
        marginTop: -20,



    },

    loadmoney:{
        color: '#f7931e',
        fontSize: 16,
        marginLeft: -10,
        marginTop: -20,
    },
    numbertext: {
        color: '#f7931e',
        fontSize: 16,
        marginLeft: 10,
        marginTop: -25,


    },
    acticon: {
        color: '#f7931e',
        marginLeft: 165,

    },

    plusicon: {
        marginLeft: 22,
        height: 16,
        width: 16,


    },
    curdtext: {
        marginLeft: 0,
        color: '#1b1464',
        fontFamily: 'Nunnito',
        fontSize: 14,
        marginRight: 100
    },

    usertext: {
        fontSize: 16,
        color: '#474a4f'

    },


    bank: {
        marginLeft: 22,
        height: 40,
        width: 40,
        alignSelf: 'center'

    },

    curd_user: {
        backgroundColor: '#ffffff',
        height: 97,
        marginVertical: 20,
        marginLeft: 21,
        marginRight: 21,

        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,

    },

    forgetText: {
        marginLeft: 300,

        marginTop: 10,
        color: "#f3a549",

    },
    tabColor: {
        backgroundColor: "white",
        color: '#474a4f'


    },
    tabtext: {
        color: '#474a4f'
    },

    textInput: {
        marginTop: 20,
        width: 328,
        marginLeft: 40,


    },
    cancel: {
        width: 91,
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e',
        textAlign: 'right',
        marginRight: 180,




    },

    otpText: {

        height: 70,
        fontSize: 18,
        marginLeft: 30

    },

    btnclose: {
        marginTop: 20,
        width: 80,
        marginLeft: -100,


    },


    // headertext: {
    //     marginTop: -37,
    //     width: 150,
    //     marginLeft: -60,
    //     fontSize: 24,


    // },
    textData: {
        marginTop: 10,
        marginLeft: 20

    },
    Addbtnbeni: {
        marginTop: 20,
        marginLeft: 16,
        width: 380,
    }
})



