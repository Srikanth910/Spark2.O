
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
import HomeFooter from '../Home/Footer';
import Loadmoneyprogress from '../Home/LoadMoney/Loadmoneyprogress';
import LoadmoneySuccess from '../Home/LoadMoney/LoadmoneySuccess';
import Loadmoneyfail from '../Home/LoadMoney/Loadmoneyfail';
import PayBill from '../Bill_Payments/PayBill_rc';
import LoanPayment from '../Bill_Payments/LoanPayment';
import Loanpaymentprogress from '../Bill_Payments/LoanPaymentprogess';
import ScheduleTransfer from '../TransferScreens/ScheduleTransfer';
import AddBank_Account from '../TransferScreens/AddBank_Account';
import MyBank_Account from '../TransferScreens/MyBank_Account';
import Mybank_Confirm from '../TransferScreens/Mybank_Confirm';
import Transfer_Money from '../TransferScreens/Transfer_Money';
import To_myBankAcc from '../TransferScreens/To_myBankAcc';
import Schedulemybank from '../TransferScreens/Schedulemybank';
import Otherbank_acc from '../TransferScreens/Otherbank_acc';
import To_sparkAcc from '../TransferScreens/To_sparkAcc';
import Transfer_Schedule_Success from '../TransferScreens/Transfer_Schedule_Success';
import Transfer_Schedule_Confirm from '../TransferScreens/Transfer_Schedule_Confirm';
 
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
        <Stack.Screen name="Loadmoneyprogress" component={ Loadmoneyprogress} /> 
        <Stack.Screen name="LoadmoneySuccess" component={ LoadmoneySuccess} /> 
        <Stack.Screen name="Loadmoneyfail" component={Loadmoneyfail} /> 

        <Stack.Screen name="PayBill" component={PayBill} /> 
        <Stack.Screen name="LoanPayment" component={LoanPayment} /> 
        
        <Stack.Screen name="Loanpaymentprogress" component={Loanpaymentprogress} /> 
        <Stack.Screen name="ScheduleTransfer" component={ScheduleTransfer} /> 
        
        <Stack.Screen name="AddBank_Account" component={AddBank_Account} /> 
        <Stack.Screen name="MyBank_Account" component={MyBank_Account } /> 
        <Stack.Screen name="Mybank_Confirm" component={Mybank_Confirm } /> 
        
        <Stack.Screen name="Transfer_Money" component={Transfer_Money } /> 
        <Stack.Screen name="To_myBankAcc" component={To_myBankAcc } /> 
        <Stack.Screen name="Schedulemybank" component={Schedulemybank } /> 
        <Stack.Screen name="Otherbank_acc" component={Otherbank_acc } /> 
        <Stack.Screen name="To_sparkAcc" component={To_sparkAcc } /> 
       
        <Stack.Screen name="Transfer_Schedule_Success" component={Transfer_Schedule_Success } /> 
       
         
        <Stack.Screen name="Transfer_Schedule_Progress" component={Transfer_Schedule_Progress } /> 
       
        
        
        
{/*         Loadmoneyprogress
        <Stack.Screen name="HomeFooter" component={ HomeFooter} /> 
       */}

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;