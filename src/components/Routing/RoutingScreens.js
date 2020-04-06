
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from '../LoginScreens/forgotScreens/forgotpassword';
import Login from '../LoginScreens/Login';
import ForgotMpin from '../LoginScreens/forgotScreens/ForgotMpin';




const Stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="ForgotMpin" component={ForgotMpin} />
      
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;