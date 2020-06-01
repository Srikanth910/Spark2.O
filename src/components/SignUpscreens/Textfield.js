import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldText: '',
    };
  }
  updatedValue(txt) {
    this.setState({
      fieldText: txt,
    });
    console.log('input value is', txt);
    this.props.valueCallBack(txt);
  }
  render() {
    return (
      <View style={{marginHorizontal: 16, marginVertical: 8}}>
        <TextInput
          value={this.state.fieldText}
          maxLength={
            this.props.maxChar !== null
              ? this.props.maxChar
              : Number.MAX_SAFE_INTEGER
          }
          onChangeText={input => this.updatedValue(input)}
          keyboardType={this.props.isNumeric}
          style={[
            styles.input,
            {paddingHorizontal: 4, borderWidth: this.props.isValid ? 0 : 1},
          ]}
        />
        {this.props.isValid ? null : (
          <Text style={styles.inputText}>{this.props.message}</Text>
        )}
      </View>
    );
  }
}

export default TextField;

const styles = StyleSheet.create({
  input: {
    borderRadius: 6,
    backgroundColor: '#e1e4eb',
    height: 40,
    borderColor: 'red',
  },
  inputText: {
    color: 'red',
    fontSize: 10,
  },
});
