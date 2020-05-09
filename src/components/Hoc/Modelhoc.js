import React from 'react';

import Erroralert from  '../Hoc/Erroralert'

const Otpmodel = (WrappedComponent) => {
  class Otpmodel extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isVisible:true,
            showAlert:false
             
        }
    }
    
    
    showmodel = () => {
      console.log('show')
      this.setState({
          isVisible: true
      });
  };

    render() {
   
      return (
        <>
        
        <WrappedComponent toggle={this.showmodel}  {...this.props} />
        <Erroralert showAlert={this.state.isVisible} />
        
        </>
      );
    }
  }
  return Otpmodel;
};

export default Otpmodel;