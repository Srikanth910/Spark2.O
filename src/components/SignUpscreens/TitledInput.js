import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class TitledInput extends Component {
    constructor(props) {
      super(props);
      this.state = { text: ''};
    }
  

  handleTextChange(value){
     this.setState({text:value});
     this.props.onChangeText(value);
  }
  render() {
        return (
          <View >
                <Text>{props.label.toUpperCase()}</Text>
                <TextInput
                  autoCorrect={false}
                  placeholder={props.placeholder}
                  secureTextEntry={props.secureTextEntry}
                  value={this.state.text}
                  onChangeText={this.handleTextChange()}
                  style={input}
                />
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
      });