
import React, { Component } from 'react';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { View } from 'native-base';
import { Text } from 'react-native';

   
  export  default class Demo extends Component {
       render(){
            return(
    <View style={{ alignItems:'flex-end'}}>
      <Text>Hello world!</Text>
      <Menu>
        <MenuTrigger  >
            <Text>helo</Text>
            </MenuTrigger>
        <MenuOptions>
       <MenuOption onSelect={() => alert(`Save`)} text='Save' />
          <MenuOption onSelect={() => alert(`Delete`)} >
            <Text style={{color: 'red'}}>Delete</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' /> 
        </MenuOptions>
      </Menu>
    </View>)

  }
}