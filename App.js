// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, {Component} from 'react';
import ForgotPassword from './src/components/LoginScreens/forgotScreens/forgotpassword';
import ForgotMpin from './src/components/LoginScreens/forgotScreens/ForgotMpin';
import Login from './src/components/LoginScreens/Login';
import Routing from './src/components/Routing/RoutingScreens';


export default class App extends Component {
  render() {
    return (
      <>
        <Routing/>
      </>
    );
  }
}



// import React from "react";

// import { StackNavigator } from "react-navigation";

// import ForgotPassword from  './src/components/LoginScreens/forgotScreens/forgotpassword';
// import ForgotMpin from "./src/components/LoginScreens/forgotScreens/ForgotMpin";
//    const App = StackNavigator({
//   ForgotMpin: { screen: ForgotMpin },
//   forgotPassword: { screen: ForgotPassword },
 
// });
//  export default App



