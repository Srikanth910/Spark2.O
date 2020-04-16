import React, { Component ,useState,useEffect} from 'react'
import { View ,Text, Container} from 'native-base'
import AwesomeAlert from 'react-native-awesome-alerts';
import { connect } from 'react-redux';
    const ErrorAlert = (props)=> {
const [showAlert, setshowAlert] = useState(false)


 useEffect(() => {
    ErrorAlert
      const{error}=props
      console.log('hello',error.loginError.code)
   if(error.loginError.code==="302"){
//  alert('helo')
        setshowAlert(true)
   }
     })
    
   
     const hideAlert = () => {
        setshowAlert(false)
    };
   
        
    return (
     
             <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="hhhhhhh"
                    message="vkuvv"
                    closeOnTouchOutside={true}
                    //   closeOnHardwareBackPress={false}
                    //   showCancelButton={true}
                    showConfirmButton={true}

                    confirmText="ok"
                    confirmColor="blue"
                    onCancelPressed={() => {
                        hideAlert();
                    }}
                    onConfirmPressed={() => {
                        hideAlert();
                    }}
                />
     
    
    )
}



const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error

})

export default connect(mapStateToProps)(ErrorAlert)