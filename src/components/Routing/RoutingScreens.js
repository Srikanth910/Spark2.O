
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from '../LoginScreens/forgotScreens/forgotpassword';
import Login from '../LoginScreens/Login';
import ForgotMpin from '../LoginScreens/forgotScreens/ForgotMpin';


import Forgot from '../LoginScreens/Forgot'
import ChangeMpin from '../LoginScreens/forgotScreens/ChangeMpin';
import ForgotpasswordSet from '../LoginScreens/forgotScreens/ForgotpasswordSet';
import ChangePasseword from '../LoginScreens/forgotScreens/ChangePassword';
import Setmpin from '../LoginScreens/forgotScreens/Setmpin';
import Home from '../Home/Home'
import LoginButton from '../LoginScreens/LoginButton';
import NotifClass from '../Notifications/NotifcationList';
import AddBeneficiarys from '../BeneficiaryScreens/AddBeneficiarys';
import Beneficiary from '../BeneficiaryScreens/Beneficiary';
import Otherbank from '../BeneficiaryScreens/Otherbank';
import Quick_login from '../LoginScreens/Quick_login';

import {ErrorAlert} from '../modelAlerts/DialogAlert';
 import LoadSpark from '../Home/LoadMoney/LoadSpark'

import Signup from '../SignUpscreens/SignupScreen';
import Loadmoney from '../Home/LoadMoney/Loadmoney';
import MoneyLoading from '../Home/LoadMoney/MoneyLoading';
//  import MoneyLoadingFail from '../../components/Home/LoadMoney/MoneyLoadFail'
import CardList from '../Home/CardList';
 import Landingpage from '../landingpage/Landingpage'
import Setpassword from '../SignUpscreens/Setpassword';
import Welcomeboard from '../landingpage/Welcomeboard';
import Confirmationdetails from '../BeneficiaryScreens/Confirmation';
import SettingPage from '../SettingScreens/SettingScreen';
import RecurringDepositScreen from '../fd&rdScreens/recurringDeposit';
import ConfirmCloseRDScreen from '../fd&rdScreens/confirmCloseRDScreen';
import FixedDepositScreen from '../fd&rdScreens/Fdscreen';
 
const Stack = createStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
         <Stack.Screen name="Landingpage" component={Landingpage} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgotpass" component={ForgotPassword} />
        <Stack.Screen name="ForgotMpin" component={ForgotMpin} />
        <Stack.Screen name="Forgotview" component={Forgot} />
        <Stack.Screen name="ChangeMpin" component={ChangeMpin} />
        <Stack.Screen name="passwordSet" component={ForgotpasswordSet} />
        <Stack.Screen name="ChangePasseword" component={ChangePasseword} />
        <Stack.Screen name="Setmpin" component={Setmpin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginButton" component={LoginButton} />
        <Stack.Screen name="NotifClass" component={NotifClass} />

        <Stack.Screen name="AddBeneficiarys" component={AddBeneficiarys} />

        <Stack.Screen name="Beneficiary" component={Beneficiary} />
        <Stack.Screen name="Otherbank" component={Otherbank} /> 
        <Stack.Screen name="Quicklogin" component={Quick_login} /> 
        <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="Setpassword" component={Setpassword} /> 


        <Stack.Screen name="Loadmoney" component={Loadmoney} /> 
        
        <Stack.Screen name="MoneyLoading" component={MoneyLoading} /> 
        <Stack.Screen name="Welcomeboard" component={Welcomeboard} /> 
      
        <Stack.Screen name="Confirmationdetails" component={Confirmationdetails} /> 
      

       
        <Stack.Screen name="SettingPage" component={SettingPage} /> 
      

        <Stack.Screen name="RDScreen" component={RecurringDepositScreen} /> 
      

        <Stack.Screen name="LoadSpark" component={LoadSpark} /> 
      
        
        <Stack.Screen name=" ConfirmCloseRDScreen" component={ ConfirmCloseRDScreen} /> 
      

     
        <Stack.Screen name="Fdscreen" component={ FixedDepositScreen} /> 
      

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;