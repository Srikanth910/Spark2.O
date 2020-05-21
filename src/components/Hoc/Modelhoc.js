import React from 'react';

// import Erroralert from  '../Hoc/Erroralert'
import { connect } from 'react-redux';

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
   componentDidMount(){
      if(auth.isAutherticated===true){
         this.props.navigation.navigate('Home')
      }else if(auth.sessionData.code===403){
         this.props.navigation.navigate('Login')
      }

   }

    render() {
   
      return (
        <>
        
        <WrappedComponent toggle={this.showmodel}  {...this.props} />
       
        
        </>
      );
    }
  }
  return Otpmodel;
};


const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
});

export default connect(
  mapStateToProps,
  {},
)(Otpmodel);