import React, { Component } from 'react'
import { Container, Header, Tabs, Text, Tab,Item, Input, Button, Body, View, Title, Left, Icon,ListItem } from 'native-base'
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
 import{ resendOtpBeneficiary,addBeneficiaryDetails,createOtpBeneficiary} from '../../Redux/actions/Beneficiary'
import { connect } from 'react-redux';
 
 class Otherbank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            radioBtnOne: false,
            radioBtnTwo: false,
            password: '',
            Name:'',
    Email:'',
    AccontNo:'',
    ConfirmAccontNo:'',
    IFCS:'',
    mobileNo:'',
     isVisible:false

        };
    }
    //  componentDidMount(){
    //       this.setState({
    //            isVisible:true
    //       })
    //  }

     

    otpVerify=()=>{
        const {beneficiary}=this.props

        const details= {
            "ifscCode":"",
            membarId:beneficiary.memberDetials.customerId, 
            "benificiaryAccNo":"",
            "benificiaryName":"",
            "phoneNo":"",
            "email":"",
            "isPrimaryAccunt":"true",
            "isWithInCoop":"true",
            refNo:beneficiary.createOtpBeneficiary.refNo,
        
            otp:this.state.mobileOtp,
            "accountType":"",
            "state":""
            }

             this.props.addBeneficiaryDetails(details).then(()=>{
                const {beneficiary}=this.props
                if(beneficiary.beneficiaryDetails.code==="200"){
                        this.setState({
                            isVisible:false
                        })
                     
                    this.props.navigation.navigate('Beneficiary ')
                }
             })

     }
    toggelopen = () => {
        this.setState({
           isVisible:true
        })
       
    }
     toggelclose=()=>{
          this.setState({
            isVisible:true

          })
       

     }
    changepage = () => {
        this.setState({
            ismodelopen: false
        })
        this.props.navigation.navigate('passwordSet')
    }
    addSubmit=()=>{
        const{ Name, AccontNo, ConfirmAccontNo, Email, IFCS, mobileNo}=this.state
     const { beneficiary}=this.props
         const Beneficiary={
            membarId:beneficiary.memberDetials.customerId, 
                benificiaryAccNo:this.state.AccontNo,
                benificiaryName:this.state.Name,
                phoneNo:this.state.mobileNo,
                "isPrimaryAccunt":"false",
                "isWithInCoop":"false",
                "state":"",
                ifscCode:this.state.IFCS,
                 email:this.state.Email,
                  "accountType":"Otherbank"
                

         }

         this.props.createOtpBeneficiary(Beneficiary).then(()=>{
              const{beneficiary}=this.props
            if(beneficiary.createBeneficiary.code==="200"){
              
                this.setState({
                    isVisible:true
                })
              
            }else{
                alert('fail')
            }
        })
    }

    otpVerify=()=>{
        const {beneficiary}=this.props
       
       
        const details= {
            "ifscCode":"",
            membarId:beneficiary.memberDetials.customerId, 
            "benificiaryAccNo":"",
            "benificiaryName":"",
            "phoneNo":"",
            "email":"",
            "isPrimaryAccunt":"true",
            "isWithInCoop":"true",
            refNo:beneficiary.createOtpBeneficiary.refNo,
        
            otp:this.state.mobileOtp,
            "accountType":"",
            "state":""
            }

             this.props.addBeneficiaryDetails(details).then(()=>{
                const {beneficiary}=this.props
                if(beneficiary.beneficiaryDetails.code==="200"){
                    alert('ss')
                     
                    this.props.navigation.navigate('Beneficiary ')
                }
             })

     }
    otpResend=()=>{
        const otp=
      {
        membarId:beneficiary.memberDetials.customerId,
        // "membarId":'1278',
        "benificiaryAccNo":"",
        "benificiaryName":"",
        "phoneNo":"",
        "isPrimaryAccunt":"false",
        "isWithInCoop":"false",
        "state":"",
        "accountType":""
        }
         this.props.resendOtpBeneficiary(otp)
    
     }
    render() {
        const { password } = this.state
        return (
            <Container>
                <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
                    <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

                    <Left>
                        <Button transparent>
                            <Icon name='close'
                                onPress={() => this.props.navigation.navigate('Login')} />
                        </Button>
                    </Left>

                    <Body style={{ alignItems: 'flex-start', marginLeft: 40 }} >
                        <Title style={styles.heddertext}>Add Beneficiary</Title>
                    </Body>
                </Header>

                <Tab tabBarUnderlineStyle={{ backgroundColor: '#f3a549' }} >
                    <ScrollView>
                        <Text style={styles.textstyle}>Name</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Name' style={styles.input}
                            
                             
                                value={this.state.Name}
                                onChangeText={Nametext => this.setState({ Name: Nametext })}
                            />
                            
                        </Item>

                        <Text style={styles.textstyle}>Account no.</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Account number' style={styles.input}
                            
                            
                            value={this.state.AccontNo}
                            onChangeText={Accounttext => this.setState({ AccontNo: Accounttext })}
                        />
                            
                        </Item>

                        <Text style={styles.textstyle}>Re-Enter Account no.</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Account number' style={styles.input} 
                value={this.state.ConfirmAccontNo}
                onChangeText={Accounttext => this.setState({ ConfirmAccontNo: Accounttext })}
            />
                
                        </Item>

                        <Text style={styles.textstyle}>IFSC code</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='IFSC code' style={styles.input}
                            
                            value={this.state.IFCS}
                            onChangeText={Accounttext => this.setState({ IFCS: Accounttext })}
                        />
                            
                    
                        </Item>

                        <Text style={styles.textstyle}>Email</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Email' style={styles.input}
                            
                            value={this.state.Email}
                            onChangeText={Emailtext => this.setState({ Email: Emailtext })}
                        />
                            
                        </Item>

                        <Text style={styles.textstyle}>Phone</Text>
                        <Item regular style={styles.Inputstyle}>
                            <Input placeholder='Phone' style={styles.input}
                            
                            value={this.state.mobileNo}
                            onChangeText={mobilenumber => this.setState({ mobileNo: mobilenumber })}
                        />
                            
                           
                        </Item>

                        <Text style={styles.textstyle}>Please ensure you enter the correct account details.Spark is not responsible for incorrect account details</Text>

                        <View>
                            <Modal style={{ width: 280, maxHeight: 200, alignSelf: 'center', marginTop: 200 }} isVisible={this.state.isVisible} >
                                <View style={{ backgroundColor: 'white' }}>

                                    <Text style={styles.otp}>Enter OTP</Text>
                                    <Text style={styles.otpText}> Enter the 5-digit one time password (OTP)</Text>
                                    <View style={{ alignSelf: 'center' }}>
                                        <SmoothPinCodeInput
                                            codeLength={5}
                                            cellStyle={{
                                                borderBottomWidth: 1,
                                                borderColor: 'gray',
                                                width: 20,

                                            }}
                                            cellStyleFocused={{
                                                borderColor: 'black',
                                            }}
                                            value={password}
                                            onTextChange={password => this.setState({ password })}
                                        />
                                    </View>
                                    <ListItem style={{ justifyContent: 'space-around', marginTop: 10 }}>
                                        <Text>2:00.0</Text>
                                        <Text style={styles.resendOtp}>Resend OTP</Text>
                                    </ListItem>
                                    <ListItem style={{ justifyContent: 'flex-end' }} >
                                        <Text style={styles.cancel} onPress={this.toggelopen}>Cancel</Text>
                                        <Text style={styles.otpSubmit}
                                            onPress={this.otpVerify}
                                        >Submit</Text>
                                    </ListItem>
                                </View>
                            </Modal>
                        </View>

                        <Button block warning style={styles.SubmitButton} onPress={this.addSubmit}     >
                            <Text>Submit</Text>

                        </Button>
                    </ScrollView>

                </Tab>
            </Container>


        )
    }
}

const mapStateToProps = state => ({
    beneficiary: state.beneficiary,
    error: state.error

})

export default connect(mapStateToProps, { resendOtpBeneficiary,addBeneficiaryDetails,createOtpBeneficiary})(Otherbank)
const styles = StyleSheet.create({

    textstyle: {
        marginTop: 10,
        marginLeft: 20,
        color: '#474a4f',
        fontSize: 14,

    },

    Inputstyle: {
        borderRadius: 5,
        height: 40,
        marginLeft: 17,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#e1e4eb',

    },
    input: {

        height: 40,
        backgroundColor: '#e1e4eb',
        borderRadius: 5,
    },




    headerText: {
        color: 'white'
    },

    // forgetText: {
    //     marginLeft: 300,

    //     marginTop: 10,
    //     color: "#f3a549",

    // },
    tabColor: {
        backgroundColor: "#1b1464",

    },

    textInput: {
        marginTop: 20,
        width: 328,
        marginLeft: 40,


    },
    // textData: {
    //     marginTop: 10,
    //     marginLeft: 20

    // },

    SubmitButton: {
        marginTop: 5,
        marginLeft: 16,
        width: 382,
    },

    cancel: {
        width: 73,
        height: 39,
        fontFamily: 'Nunito',
        color: '#999999',
        textAlign: 'left'

    },
    otpSubmit: {
        width: 73,
        height: 39,
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f7931e',
        textAlign: 'right'
    },


    resendOtp: {
        width: 91,
        height: 22,
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#f7931e',
        textAlign: 'right',


    },
    otp: {

        width: 94,
        height: 27,
        marginTop: 15,
        color: '#000000',
        fontSize: 20,
        marginLeft: 15,
        fontWeight: "bold"


    },
    otpText: {
        // width:228,
        // height:82,
        marginLeft: 15,
        fontFamily: 'Nunito',
        fontSize: 16,
        marginTop: 10,
        color: '#000000'

    },

})

