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
import ChangePassword from './src/components/LoginScreens/forgotScreens/ChangePassword';
import ForgotpasswordSet from './src/components/LoginScreens/forgotScreens/ForgotpasswordSet';
import ChangePasseword from './src/components/LoginScreens/forgotScreens/ChangePassword';
import Setmpin from './src/components/LoginScreens/forgotScreens/Setmpin';
import ChangeMpin from './src/components/LoginScreens/forgotScreens/ChangeMpin';
// import Home from './src/components/Home';
import Forgot from './src/components/LoginScreens/Forgot';
import { Provider } from 'react-redux';

 import Quicklogin from './src/components/LoginScreens/Quick_login'
 import  store from './src/Redux/store'
// import NotificationList from './src/components/Notifications/Notication';
import NotifClass from './src/components/Notifications/NotifcationList';
import Beneficiary from './src/components/BeneficiaryScreens/Beneficiary';
import AddBeneficiarys from './src/components/BeneficiaryScreens/AddBeneficiarys';
 import Otherbank  from './src/components/BeneficiaryScreens/Otherbank'
import ErrorAlert from './src/components/modelAlerts/DialogAlert';
import Home from './src/components/Home/Home';
 
import Landingpage from './src/components/landingpage/Landingpage';
import Loadmoney from './src/components/Home/LoadMoney/Loadmoney';
import MoneyLoading from './src/components/Home/LoadMoney/MoneyLoading';
import MoneyLoadingFail from './src/components/Home/LoadMoney/MoneyLoadFail';
import LandingBillpay from './src/components/landingpage/LandingBillpay';
import Moneytransfer from './src/components/landingpage/Moneytransfer';
import FixedDeposite from './src/components/landingpage/Fd_layout';
import Setpassword from './src/components/SignUpscreens/Setpassword';
import Signup from './src/components/SignUpscreens/SignupScreen';
import Welcomeboard from './src/components/landingpage/Welcomeboard';
// import Bottom from './src/components/LoginScreens/Bottomsheet';
import Confirmationdetails from'./src/components/BeneficiaryScreens/Confirmation'
export default class App extends Component {
  render() {
    return (
      <>
      
      <Provider store={store}>
      
      <Confirmationdetails />
        </Provider>
      </>
    );
  }
}


