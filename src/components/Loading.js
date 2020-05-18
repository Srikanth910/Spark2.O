import React, {
    Component,
} from 'react'
import {
    View,Button
} from 'react-native'

// import Button from 'react-native-smart-button'
// import TimerEnhance from 'react-native-smart-timer-enhance'
import Toast from 'react-native-smart-loading-spinner-overlay'

class LoadingSpinnerOverLayDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#fff',}}>
                <Button
                    onPress={this._showModalLoadingSpinnerOverLay}
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show modal loading spinner (模态)
                </Button>
                <Button
                    onPress={this._showPartModalLoadingSpinnerOverLay}
                    touchableType={Button.constants.touchableTypes.highlight}
                    underlayColor={'#C90000'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    [part modal]can click header (导航栏允许点击)
                </Button>
              
                <LoadingSpinnerOverlay
                    ref={ component => this._modalLoadingSpinnerOverLay = component }/>
                
            </View>
        )
    }




    _showModalLoadingSpinnerOverLay = () => {
        this._modalLoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._modalLoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _showPartModalLoadingSpinnerOverLay = () => {
        this._partModalLoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._partModalLoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _showNoModalLoadingSpinnerOverLay = () => {
        this._LoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._LoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _showImmediateLoadingSpinnerOverLayAndImmediateHide = () => {
        this._modalImmediateLoadingSpinnerOverLay.show({
            duration: 0,
            children: this._renderActivityIndicator(),
        })
        //simulate http request
        this.setTimeout( () => {
            this._modalImmediateLoadingSpinnerOverLay.hide({
                duration: 0,
            })
        }, 3000)
    }

    _showModal_2_LoadingSpinnerOverLay = () => {
        this._modal_2_LoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._modal_2_LoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _renderActivityIndicator() {
        return ActivityIndicator ? (
            <ActivityIndicator
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    color={'#ff0000'}
                    styleAttr={'small'}/>

            ) :  (
            <ActivityIndicatorIOS
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        )
    }

}


export default TimerEnhance(LoadingSpinnerOverLayDemo)