import React, { Component } from 'react'
import { View } from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';

 class Erroralert extends Component {
    render() {
         console.log(this.props.showAlert)
        return (
           <View>



               
<AwesomeAlert
                    show={this.props.showAlert}
                    showProgress={false}
                    title="fucker"
                    message="he;;o fucker"
                    // closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}

                    confirmText="ok"
                    confirmColor="blue"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

           </View>
        )
    }
}

export default (Erroralert)