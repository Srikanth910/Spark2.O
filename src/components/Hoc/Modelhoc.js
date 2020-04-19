import React from 'react';

import Otpscreen from './Otpscreen';

const Otpmodel = (WrappedComponent) => {
  class Otpmodel extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isVisible:false
             
        }
    }
    
    
    toggelopen = () => {
         alert('hello')
        this.setState({
          isVisible: true
        })
      }
      toggelclose = () => {
          console.log('helo')
        this.setState({
          isVisible: false
        })
      }
      otpSubmit=()=>{
          alert('hello')
      }


    render() {
      console.log('HOC');
      return (
        <>
        
        <WrappedComponent toggle={this.toggelopen}  {...this.props} />
        
        </>
      );
    }
  }
  return Otpmodel;
};

export default Otpmodel;