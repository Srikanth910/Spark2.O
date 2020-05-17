import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {
  Header,
  Container,
  Body,
  Text,
  Button,
  Radio,
  Content,
  Icon,
  Item,
  Input,
  ListItem,
  CheckBox,
  Left,
  Right,
  Title,
  List,
  InputGroup,
} from 'native-base';
//import { Constants } from 'expo';
import {
  getProfile,
  createOtpForEditProfile,
} from '../../Redux/actions/authAction';
import {connect} from 'react-redux';
class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isModalVisible2: false,
      isModalVisible3: false,
      isModalVisible4: false,
      selected2: undefined,
      radioBtnOne: false,
      radioBtnTwo: false,
      selected2: undefined,
      displayname: '',
      membarId: '',
      aadharNo: '',
      emailId: '',
      city: '',
      pan: '',
      OffAddress: '',
      mobileNo: '',
      selected2: '',
      membarId: '',
      NomineeAdress: '',
      // NomineeCity:"",
      NomineeDOB: '',
      MState: '',
      NomineeState: '',
      NomineeName: '',
      NomineePinCode: '',
      NomineeRelation: '',
      pan: '',
    };

    this.callFunc = this.callFunc.bind(this);
  }

  callFunc() {
    if (this.state.isModalVisible) {
      this.setState({isModalVisible: false});
    } else {
      this.setState({isModalVisible: true});
    }
  }
  callFunc2() {
    if (this.state.isModalVisible2) {
      this.setState({isModalVisible2: false});
    } else {
      this.setState({isModalVisible2: true});
    }
  }
  callFunc3() {
    if (this.state.isModalVisible3) {
      this.setState({isModalVisible3: false});
    } else {
      this.setState({isModalVisible3: true});
    }
  }
  callFunc4() {
    if (this.state.isModalVisible4) {
      this.setState({isModalVisible4: false});
    } else {
      this.setState({isModalVisible4: true});
    }
  }
  radiobtn = name => {
    this.setState({
      name: name,
    });
  };
  onValueChange2 = value => {
    this.setState({
      selected2: value,
    });
  };
  componentDidMount() {
    const data = {
      membarId: '1421',
    };
    this.props.getProfile(data).then(() => {
      const {getProfiledata} = this.props.auth;
      if (getProfiledata.code === '200') {
        this.setState({
          displayname: getProfiledata.displayname,
          membarId: getProfiledata.memberid,
          emailId: getProfiledata.emailId,
          mobileNo: getProfiledata.mobileNo,
          aadharNo: getProfiledata.aadharNo,
          dob: getProfiledata.dob,
          city: getProfiledata.City,
          pincode: getProfiledata.pincode,
          OffAddress: getProfiledata.OffAddress,
          selected2: getProfiledata.gender,
          pan: getProfiledata.panNo,
          NomineeAdress: getProfiledata.NomineeAdress,
          NomineeName: getProfiledata.NomineeName,
          NomineeDOB: getProfiledata.NomineeDOB,
          NomineePinCode: getProfiledata.NomineePinCode,
          //  NomineeCity:getProfiledata,NomineeCity,
          NomineeRelation: getProfiledata.NomineeRelation,
          NomineeState: getProfiledata.NomineeState,
        });
      }
    });

    this.props.createOtpForEditProfile(data);
  }

  render() {
    const {auth} = this.props;
    console.log(auth.getProfiledata);
    return (
      <Container style={styles.Container}>
        <Header icon="eye" style={{backgroundColor: '#1b1464', height: 80}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('')}
              />
            </Button>
          </Left>

          <Body style={{alignItems: 'flex-start', marginLeft: 40}}>
            <Title style={styles.mpintext}>Edit profile</Title>
          </Body>

          <Right>
            <Title style={{marginRight: 50}}>Save</Title>
          </Right>
        </Header>

        <Content>
          <ListItem>
            <Left>
              <Image
                style={styles.imagestyle}
                source={require('../../images/spark_logo.png')}
                style={{height: 64, width: 64}}
              />
              <Text style={{marginLeft: -50, color: '#f7931e'}}>Edit</Text>

              <Body>
                <Text style={styles.textstyle}>Name</Text>
                <Item regular style={styles.Inputstyle}>
                  <Input
                    placeholder="Name"
                    style={styles.input}
                    value={this.state.displayname}
                    onChangeText={editedText =>
                      this.setState({Name: editedText})
                    }
                  />
                </Item>

                <Text style={styles.textstyle}>Member ID</Text>
                <Item regular style={styles.Inputstyle}>
                  <Input
                    placeholder="2356"
                    style={styles.input}
                    value={this.state.memberid}
                    onChangeText={editedText =>
                      this.setState({memberid: editedText})
                    }
                  />
                </Item>
              </Body>
            </Left>
            <Right>
              {/* <Text style={styles.textstyle}>Name</Text>
                            <Item regular style={styles.Inputstyle}>
                                <Input placeholder='Name' style={styles.input} />

                            </Item> */}
            </Right>
          </ListItem>
          <View style={{flex: 1}}>
            <List>
              {/* < Button
          onPress={()=>{ this.callFunc(); }}
         >
              <Text style
              ={{flex:1,}}>IDENTIFICATION</Text>
         </Button>*/}

              <View style={styles.underline2} />
              <ListItem
                onPress={() => {
                  this.callFunc();
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                }}>
                <Left>
                  <Text style={styles.list_item}>IDENTIFICATION</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>

              {this.state.isModalVisible && (
                <View style={{flex: 1, backgroundColor: 'white'}}>
                  <Text style={styles.textstyle2}>Aadhaar</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="********9999"
                      style={styles.input}
                      value={this.state.aadharNo}
                      onChangeText={editedText =>
                        this.setState({aadharNo: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>PAN</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="*****1234A"
                      style={styles.input}
                      value={this.state.pan}
                      onChangeText={editedText =>
                        this.setState({pan: editedText})
                      }
                    />
                  </Item>
                </View>
              )}
              <View style={styles.underline2} />
              <ListItem
                onPress={() => {
                  this.callFunc2();
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                }}>
                <Left>
                  <Text style={styles.list_item}>PERSONAL INFORMATION</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>

              {this.state.isModalVisible2 && (
                <View style={{flex: 1, backgroundColor: 'white'}}>
                  <Text style={styles.textstyle2}>Display name</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="Vijay Kumar"
                      style={styles.input}
                      value={this.state.displayname}
                      onChangeText={editedText =>
                        this.setState({displayname: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>Email</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.emailId}
                      onChangeText={editedText =>
                        this.setState({emailId: editedText})
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>Phone</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.mobileNo}
                      onChangeText={editedText =>
                        this.setState({mobileNo: editedText})
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>Date of birth</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="2356"
                      style={styles.input}
                      value={this.state.dob}
                      onChangeText={editedText =>
                        this.setState({dob: editedText})
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>Gender</Text>
                  <Item regular style={styles.dropInput}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.gender}
                      onChangeText={editedText =>
                        this.setState({gender: editedText})
                      }
                    />

                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{width: undefined}}
                      placeholder="Select your SIM"
                      placeholderStyle={{color: '#bfc6ea'}}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange2.bind(this)}>
                      <Picker.Item label="Select" value="key0" />
                      <Picker.Item label="Karnataka" value="karnataka" />
                      <Picker.Item label="maharashtra" value="maharashtra" />
                    </Picker>
                  </Item>
                </View>
              )}
              <View style={styles.underline2} />

              <ListItem
                onPress={() => {
                  this.callFunc3();
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                }}>
                <Left>
                  <Text style={styles.list_item}>PERMANENT ADDRESS</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>

              {this.state.isModalVisible3 && (
                <View style={{flex: 1, backgroundColor: 'white'}}>
                  <Text style={styles.textstyle2}>Address</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="#86, Maxwell Street, Cox Town"
                      style={styles.input}
                      value={this.state.OffAddress}
                      onChangeText={editedText =>
                        this.setState({OffAddress: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>City</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="Bangalore"
                      style={styles.input}
                      value={this.state.city}
                      onChangeText={editedText =>
                        this.setState({city: editedText})
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>PIN code</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="560001"
                      style={styles.input}
                      value={this.state.pincode}
                      onChangeText={editedText =>
                        this.setState({pincode: editedText})
                      }
                    />
                  </Item>

                  <ListItem
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 0,
                    }}>
                    <Left>
                      <Text style={styles.list_item}>
                        CORRESPONDENCE ADDRESS
                      </Text>
                    </Left>
                  </ListItem>
                  <ListItem
                    onPress={() => {
                      this.callFunc();
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 0,
                    }}>
                    <Left>
                      <CheckBox
                        style={{justifyContent: 'center'}}
                        checked={this.state.checked}
                        onPress={() =>
                          this.setState({checked: !this.state.checked})
                        }
                      />
                      <Text style={styles.textstyle3}>
                        My Correspondence Address is the same {'\n'} as the
                        Permanent Address above
                      </Text>
                    </Left>
                  </ListItem>
                  {this.state.checked && (
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                      <Text style={styles.textstyle2}>Address</Text>
                      <Item regular style={styles.Inputstyle2}>
                        <Input
                          placeholder="#86, Maxwell Street, Cox Town"
                          style={styles.input}
                          value={this.state.address}
                          onChangeText={editedText =>
                            this.setState({address: editedText})
                          }
                        />
                      </Item>

                      <Text style={styles.textstyle2}>City</Text>
                      <Item regular style={styles.Inputstyle2}>
                        <Input
                          placeholder=""
                          style={styles.input}
                          value={this.state.city}
                          onChangeText={editedText =>
                            this.setState({city: editedText})
                          }
                        />
                      </Item>
                      <Text style={styles.textstyle2}>PIN code</Text>
                      <Item regular style={styles.Inputstyle2}>
                        <Input
                          placeholder=""
                          style={styles.input}
                          value={this.state.pincode}
                          onChangeText={editedText =>
                            this.setState({pincode: editedText})
                          }
                        />
                      </Item>
                      <Text style={styles.textstyle2}>State</Text>
                      <Item regular style={styles.dropInput}>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          style={{width: undefined}}
                          placeholder="Select your SIM"
                          placeholderStyle={{color: '#bfc6ea'}}
                          placeholderIconColor="#007aff"
                          selectedValue={this.state.selected2}
                          onValueChange={this.onValueChange2.bind(this)}>
                          <Picker.Item label="Select" value="key0" />
                          <Picker.Item label="Karnataka" value="karnataka" />
                          <Picker.Item
                            label="maharashtra"
                            value="maharashtra"
                          />
                        </Picker>
                      </Item>
                    </View>
                  )}
                </View>
              )}

              <View style={styles.underline2} />
              <ListItem
                onPress={() => {
                  this.callFunc4();
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 0,
                }}>
                <Left>
                  <Text style={styles.list_item}>NOMINEE DETAILS</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" />
                </Right>
              </ListItem>

              <View style={{marginLeft: -20, borderColor: 'transparent'}}>
                <ListItem style={{borderColor: 'transparent'}}>
                  <Right>
                    <Radio
                      selected={this.state.radioBtnOne}
                      color="orange"
                      selectedColor="orange"
                      onPress={() => this.radiobtn('false')}
                    />
                  </Right>
                  <Text> I do not want to add a Nominee</Text>
                </ListItem>
                <Text style={styles.radiotext}>
                  Choose this if you want to wavie off the Nomination option.
                </Text>

                <ListItem style={{marginLeft: -6, borderColor: 'transparent'}}>
                  <Right>
                    <Radio
                      selected={this.state.radioBtnTwo}
                      color="orange"
                      selectedColor="orange"
                      onPress={() => this.radiobtn('SavingsAccount')}
                    />
                  </Right>
                  <Text> I want to add Nominee</Text>
                </ListItem>
                <Text style={styles.radiotext}>
                  Chose this you want to add a Nominee to your account in the
                  untimely event of your death,we will hand over your account to
                  your nominee once they supplysufficient identification
                  documentaion.{' '}
                </Text>
              </View>

              {this.state.name === 'SavingsAccount' && (
                <View>
                  <Text style={styles.textstyle2}>Name of the nominee</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.NomineeName}
                      onChangeText={editedText =>
                        this.setState({NomineeName: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>
                    Relaionship to the depositor
                  </Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.NomineeRelation}
                      onChangeText={editedText =>
                        this.setState({NomineeRelation: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>Date of birth</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.NomineeDOB}
                      onChangeText={editedText =>
                        this.setState({NomineeDOB: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>Address</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="Nominee's address"
                      style={styles.input}
                      value={this.state.NomineeAdress}
                      onChangeText={editedText =>
                        this.setState({NomineeAdress: editedText})
                      }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>City</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}

                      // value={this.state.NomineeCity}
                      // onChangeText={editedText =>
                      //   this.setState({NomineeCity: editedText})
                      // }
                    />
                  </Item>
                  <Text style={styles.textstyle2}>Pin code</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder="6-digit PIN code"
                      style={styles.input}
                      value={this.state.NomineePinCode}
                      onChangeText={editedText =>
                        this.setState({NomineePinCode: editedText})
                      }
                    />
                  </Item>

                  <Text style={styles.textstyle2}>State</Text>
                  <Item regular style={styles.Inputstyle2}>
                    <Input
                      placeholder=""
                      style={styles.input}
                      value={this.state.NomineeState}
                      onChangeText={editedText =>
                        this.setState({NomineeState: editedText})
                      }
                    />
                  </Item>
                </View>
              )}
            </List>
          </View>
        </Content>
        <View style={styles.footerbox} />

        <Modal
          style={{
            width: 280,
            maxHeight: 200,
            alignSelf: 'center',
            marginTop: 200,
          }}
          isVisible={this.state.isVisible}>
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.otp}>Enter OTP</Text>
            <Text style={styles.otpText}>
              {' '}
              Enter the 5-digit one time password (OTP)
            </Text>
            <View style={{alignSelf: 'center'}}>
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
                value={mobileOtp}
                onTextChange={mobileOtp => this.setState({mobileOtp})}
              />
            </View>
            <ListItem
              style={{
                justifyContent: 'space-around',
                marginTop: 10,
                borderColor: 'transparent',
              }}>
              <Text>2:00.0</Text>
              <TouchableOpacity>
                <Text style={styles.resendOtp} onPress={this.resendOtpDetails}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{justifyContent: 'flex-end'}}>
              <Text style={styles.cancel} onPress={this.toggelclose}>
                Cancel
              </Text>
              <TouchableOpacity onPress={this.otpsubmit}>
                <Text style={styles.otpSubmit} onPress={this.OtpDetails}>
                  Submit
                </Text>
              </TouchableOpacity>
            </ListItem>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {getProfile, createOtpForEditProfile},
)(Editprofile);
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  listview: {
    borderColor: 'transparent',
    height: 15,
  },

  radiotext: {
    marginLeft: 65,
    color: '#94979d',
    width: 360,
  },

  Inputstyle: {
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 15,
    marginTop: 5,
    backgroundColor: '#e1e4eb',
  },
  footerbox: {
    height: 64,
    borderBottomColor: '#f0f0ff',
    borderBottomWidth: 25,
  },

  dropInput: {
    backgroundColor: '#e1e4eb',
    marginLeft: 16,
    marginRight: 15,
    borderRadius: 5,
    height: 40,
    marginTop: 10,
  },
  list_item: {
    height: 19,
    marginLeft: 12,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#474a4f',
    textAlign: 'center',
    fontStyle: 'normal',
  },
  mpintext: {
    width: 200,
    height: 27,
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'normal',
    alignItems: 'center',
  },
  bottomtext: {
    marginLeft: 21,
    marginRight: 21,
    alignItems: 'center',
    marginTop: 280,
  },

  submit: {
    height: 40,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    marginLeft: 21,
    marginRight: 21,
  },
  underline2: {
    borderBottomColor: '#f0f0ff',
    borderBottomWidth: 20,

    marginTop: 5,
  },
  StateText: {
    marginLeft: 21,
    marginRight: 21,
  },
  textstyle: {
    marginTop: 10,
    marginLeft: 30,
    color: '#474a4f',
    fontSize: 14,
    marginRight: 11,
  },

  textstyle2: {
    marginTop: 10,
    marginLeft: 16,
    color: '#474a4f',
    fontSize: 14,
    marginRight: 11,
  },
  textstyle3: {
    marginLeft: 16,
    color: '#474a4f',
    fontSize: 16,
    marginRight: 11,
    justifyContent: 'center',
  },
  Inputstyle: {
    width: 248,
    borderRadius: 5,
    height: 40,
    marginLeft: 30,
    marginRight: 16,
    marginTop: 0,
    backgroundColor: '#e1e4eb',
  },

  Inputstyle2: {
    flex: 1,
    borderRadius: 5,
    height: 40,

    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    backgroundColor: '#e1e4eb',
  },

  otp: {
    width: 94,
    height: 27,
    marginTop: 15,
    color: '#000000',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  resendOtp: {
    width: 91,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    textAlign: 'right',
  },
  cancel: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    color: '#999999',
    textAlign: 'left',
  },
  otpText: {
    marginLeft: 15,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },

  otpSubmit: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f7931e',
    textAlign: 'right',
  },
});
