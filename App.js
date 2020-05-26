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
import {Provider} from 'react-redux';

import Quicklogin from './src/components/LoginScreens/Quick_login';
import store from './src/Redux/store';
// import NotificationList from './src/components/Notifications/Notication';
import NotifClass from './src/components/Notifications/NotifcationList';
import Beneficiary from './src/components/BeneficiaryScreens/Beneficiary';
import AddBeneficiarys from './src/components/BeneficiaryScreens/AddBeneficiarys';
import Otherbank from './src/components/BeneficiaryScreens/Otherbank';
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
import  MyCarousel from './src/components/Razorpay/Razorpay';
import RecurringDepositScreen from './src/components/fd&rdScreens/recurringDeposit';
import LoadSpark from './src/components/Home/LoadMoney/LoadSpark';
import FixedDepositScreen from './src/components/fd&rdScreens/Fdscreen';
import Paymentportal from './src/components/Home/LoadMoney/Paymentportal';
import LoadmoneySuccess from './src/components/Home/LoadMoney/LoadmoneySuccess';
import Loadmoneyfail from './src/components/Home/LoadMoney/Loadmoneyfail';
import Loadmoneyprogress from './src/components/Home/LoadMoney/Loadmoneyprogress';
import PayBill from './src/components/Bill_Payments/PayBill_rc';
import LoanPayment from './src/components/Bill_Payments/LoanPayment';
import Loanpaymentprogress from './src/components/Bill_Payments/LoanPaymentprogess';
import LoanpaymentSuccess from './src/components/Bill_Payments/LoanpaymentSuccess';
import ScheduleTransfer from './src/components/TransferScreens/ScheduleTransfer';
import DatePicker from 'react-native-datepicker';
import To_myBankAcc from './src/components/TransferScreens/To_myBankAcc';
import To_sparkAcc from './src/components/TransferScreens/To_sparkAcc';
import ScheduleSpark from './src/components/TransferScreens/ScheduleSpark';
import Schedulemybank from './src/components/TransferScreens/Schedulemybank';
import Transfer_Money from './src/components/TransferScreens/Transfer_Money';
import MyBank_Account from './src/components/TransferScreens/MyBank_Account';
import Transfer_Schedule_Success from './src/components/TransferScreens/Transfer_Schedule_Success';
import Transfer_Schedule_Confirm from './src/components/TransferScreens/Transfer_Schedule_Confirm';
import Transfer_Otherbank_Success from './src/components/TransferScreens/Transfer_Otherbank/Transfer_Otherbank_Success';
import Transfer_Otherbank_confirm from './src/components/TransferScreens/Transfer_Otherbank/Transfer_Otherbank_Confirm';
import Loanpayment_Success from './src/components/Bill_Payments/Lanpayment_Success';
import Otherbank_acc from './src/components/TransferScreens/Otherbank_acc';
import Transfer_Spark_otherbank from './src/components/TransferScreens/Transfer_Spark_otherbank';
import Saving_Account_Main from './src/components/statements/Saving_Account_Main';
import ViewRd from './src/components/fd&rdScreens/ViewRd';
import Mybank_Confirm from './src/components/TransferScreens/Mybank_Confirm';
import To_spark_confirm from './src/components/TransferScreens/Transfer_Otherbank/To_spark_confirm';
import Confirmation from './src/components/BeneficiaryScreens/Confirmation';
import Terms_Conditions from './src/components/Terms&&Conditions/Terms_Conditions';
import PrivacyPolicy from './src/components/Terms&&Conditions/Privacy_policy';
import Viewfd from './src/components/fd&rdScreens/ViewRd';
import Transfer_Schedule_Progress from './src/components/TransferScreens/Transfer_Schedule_Progress';
import Schedule_Progress from './src/components/TransferScreens/Transfer_Schedule_Progress';
import Editprofile from './src/components/SettingScreens/Editprofile';
// import Eula from './src/components/landingpage/Eula';
import View_Account_Statement from './src/components/statements/View_Account_Statement';
import Eula from './src/components/landingpage/Eula';
import ReferralCode from './src/components/Kycscreens/ReferralCode';
import PersonalDetails from './src/components/Kycscreens/PersonalInformation';
import Signature from './src/components/Kycscreens/Signature';
import Photograph from './src/components/Kycscreens/Photograph';
import PanCard from './src/components/Kycscreens/PanCard';
import AdharCard from './src/components/Kycscreens/AdharCard';
import AdharDoces from './src/components/Kycscreens/AdharDocs';
import PermanentAddress from './src/components/Kycscreens/PermanentAddress';
import Verticalbox from './src/components/Kycscreens/KycStatus';
 import GetRDchart from './src/components/fd&rdScreens/RdCharts'
// import Transfer_Schedule_Progress from './src/components/TransferScreens/Transfer_Schedule_Progress';
// import Saving_Account_Main from './src/components/statements/Saving_Account_Main';
//  import View_Account_Statement  from './src/components/statements/View_Account_Statement'
  //  import LoadingSpinnerOverLayDemo from './src/components/Loading'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
    };
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <     Routing/>

        </Provider>
      </>
    );
  }
}
