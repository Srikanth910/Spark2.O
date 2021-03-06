import React, {Component} from 'react';
import {
  Container,
  Text,
  Header,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Title,
  Content,
  List,
  ListItem,
  Item,
  Input,
  View,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import DeviceInfo from 'react-native-device-info';
import {getModel} from 'react-native-device-info';
import {StyleSheet, Image, ImageBackground, StatusBar} from 'react-native';
import {ThemeColors} from 'react-navigation';

import Dialog from 'react-native-dialog';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {NetworkInfo} from 'react-native-network-info';
import {createMemberToken} from '../../Redux/actions/authAction';
import validatePassword from '../LoginScreens/Validation/validatePassword';

class Setpassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,

      confirmPassword: '',
      newPassword: '',
      
      signupUser:{},
      deviceIp: '',
      errorsData:{},
    };
  }

  Dialogopen = () => {
    this.setState({
      visible: true,
    });
  };
  Dialogclose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount = () => {
    let model = DeviceInfo.getModel();

    NetworkInfo.getIPAddress().then(ipAddress => {
      this.setState({
        deviceIp: ipAddress,
      });
    });
  };


validpassword(){
  const {errorsData, isValid} =validatePassword(this.state)
   if(!isValid){
       this.setState({errorsData})
   }
    return isValid
}
  submitPassword = async () => {
    let model = DeviceInfo.getModel();

    try {

      //  const {signupUser}=this.state
      const userDetails = await AsyncStorage.getItem('signupDetails');
      const user = JSON.parse(userDetails);
       console.log(user)

      this.setState({
        signupUser: user,
      });
    } catch (e) {
      alert('Failed to load name.');
    }


    //  if(this.validpassword()){

      // this.setState({errorsData:{}})
 
     const {signupUser}=this.state
      const passworddata = {

      email: signupUser.email,
      mobileNo: signupUser.mobileno,
      DEVICEMODEL: model,
      IPADDRESS:this.state.deviceIp,
      Password:this.state.newPassword,
    };
    console.log(passworddata);


    this.props.createMemberToken(passworddata).then(()=>{
       const {auth}=this.props
       if(auth.userMpin.code==="200"){
         this.props.navigation.navigate('Welcomeboard')
       }
      })   
      
    // }
   
  };

  render() {
     const{auth}=this.props 
      console.log(this.state.errorsData.confirmPassword)
       const{errorsData}=this.state
    return (
      <Container style={styles.Container}>
        <Header style={{backgroundColor: '#1b1464', height: 160}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left style={{marginLeft: 5}}>
            <Button transparent>
              <Icon
                name="arrow-back"
                style={styles.icon}
                onPress={() => this.props.navigation.navigate('Signup')}
              />
            </Button>

            <Text style={{color: '#ffffff', marginLeft: 10, width: 167}}>
              Set your password
            </Text>
          </Left>

          <Right />
        </Header>
        <ScrollView>
          <Content>
            <View style={styles.rectbox}>
              <Text style={styles.maintext}>
                {' '}
                Set a strong ,memorable password
              </Text>

              <Item style={styles.doted}>
                <Text style={styles.data} />
                <Text style={styles.text}>
                  {' '}
                  At least 8 Characters (no spaces){' '}
                </Text>
              </Item>
              <Item style={styles.doted}>
                <Text style={styles.data} />
                <Text style={styles.text}>
                  {' '}
                  At least 1 upper and lower case alphabet{' '}
                </Text>
              </Item>
              <Item style={styles.doted}>
                <Text style={styles.data} />
                <Text style={styles.text}>
                  {' '}
                  At least 1 alphabet and 1number{' '}
                </Text>
              </Item>
              <Item style={styles.doted}>
                <Text style={styles.data} />
                <Text style={styles.text}> At least 1 number </Text>
              </Item>
              <Item style={styles.doted}>
                <Text style={styles.data} />
                <Text style={styles.text}> At least 1 special characters </Text>
              </Item>

              <Text style={styles.mobileinput}>Enter a password to set</Text>
              <Item regular style={styles.loginInput}>
                <Input
                  placeholder=""
                  style={styles.input}
                  value={this.state.newPassword}
                  textContentType={'password'}
                  secureTextEntry={true}
                  onChangeText={edittext =>
                    this.setState({newPassword: edittext})
                  }
                />
                {/* <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/> */}
              </Item>
              

                <Text style={styles.errorText}>{errorsData.newPassword}</Text>

              <Text style={styles.mobileinput}>Enter password again</Text>

              <Item regular style={styles.loginInput}>
                {/* <Icon style={styles.passwordicon} type="FontAwesome" name="eye" /> */}
                <Input
                  placeholder=""
                  style={styles.input}
                  textContentType={'password'}
                  secureTextEntry={true}
                  value={this.state.confirmPassword}
                  onChangeText={editedText =>
                    this.setState({confirmPassword: editedText})
                  }
                />
                {/* <ImageBackground  source={require('../../../images/pass_icon.png')} style={{width:22, height:19, marginRight:10}}/> */}
              </Item>

                <Text style={styles.errorText}>{errorsData.confirmPassword}</Text>
            </View>
          </Content>

          <View
            style={{
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              marginVertical: 60,
              marginBottom: 0,
            }}>
            <Button
              block
              warning
              style={styles.btnSubmit}
              onPress={this.submitPassword}>
              <Text style={styles.submit}>Submit</Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
});

export default connect(
  mapStateToProps,
  {createMemberToken},
)(Setpassword);

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f5f5ff',
  },

  mpintext: {
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'normal',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
  },
  doted: {
    borderColor: 'transparent',
    marginLeft: 20,
  },
  Dialog: {
    height: 200,
    width: 300,
    alignSelf: 'center',
  },
  submit: {
    // width:52,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  loginInput: {
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    marginTop: 5,
    backgroundColor: '#e1e4eb',
  },
  data: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f7931e',
  },

  text: {
    height: 22,
    textAlign: 'left',
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#474a4f',
    marginLeft: 5,
  },
  maintext: {
    marginTop: 20,
    height: 40,
    textAlign: 'left',
    fontFamily: 'Nunito',
    fontSize: 16,
    marginLeft: 15,
    color: '#474a4f',
    fontWeight: 'bold',
  },
  mobileinput: {
    marginTop: 10,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 14,
  },
  btnSubmit: {
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,

    // position:'fixed'
  },

  image: {
    width: 92,
    height: 38,
    alignSelf: 'center',
    marginTop: 30,
  },
  content: {
    marginTop: 40,
  },
  DialogText: {},
  rectbox: {
    backgroundColor: '#ffffff',
    marginTop: 25,
    height: 380,
    width: '100%',
  },
  headerText: {
    width: 221,
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,

    marginLeft: 10,
    color: '#ffffff',
    alignItems: 'flex-start',
  },

  textcolor: {
    height: 32,
    marginLeft: 16,
    color: '#ffffff',
    fontFamily: 'Nunito',
  },

  errorText: {
    color: 'red',
    marginLeft: 20,
    fontSize: 14,
  }
});
