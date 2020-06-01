import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import TextField from './Textfield';

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      validMobile: true,
      validMail: true,
      validPin: true,
      mobile: '',
      mail: '',
    };
  }

  checkMobile = received => {
    console.log('mobile number is', received);
    if (String(received).length == 10) {
      this.setState({
        validMobile: true,
      });
    } else {
      this.setState({
        validMobile: false,
      });
    }
  };
  checkMail = received => {
    console.log('e mail is', received);
    if (String(received).length > 10) {
      this.setState({
        validMail: true,
      });
    } else {
      this.setState({
        validMail: false,
      });
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextField
          fieldTitle="eMail"
          maxChar={null}
          valueCallBack={this.checkMail.bind(this)}
          isNumeric="ascii-capable"
          message={'please enter valid mail'}
          isValid={this.state.validMail}
        />

        <TextField
          fieldTitle="mobile"
          maxChar={10}
          valueCallBack={this.checkMobile.bind(this)}
          isNumeric="number-pad"
          message={'please enter valid mobile'}
          isValid={this.state.validMobile}
        />
        <TextField
          fieldTitle="pin code"
          maxChar={6}
          valueCallBack={this.checkMobile.bind(this)}
          isNumeric="number-pad"
          message={'please enter valid pincode'}
          isValid={this.state.validPin}
        />
      </View>
    );
  }
}
