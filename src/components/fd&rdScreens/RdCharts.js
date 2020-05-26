import React, {Component} from 'react';

import {WebView} from 'react-native-webview';
import {
  Container,
  Header,
  Icon,
  Text,
  Content,
  Left,
  Body,
  Title,
  Button,
} from 'native-base';
import {StatusBar, View, Image, StyleSheet} from 'react-native';
import {getRDcharts} from '../../Redux/actions/authAction';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
class GetRDchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eulashow: '',
      eula: '',
    };
  }

  componentDidMount = async () => {
    this.props.getRDcharts().then(() => {
      const {auth} = this.props;
      if (auth.getRDchart.code === '200') {
        this.setState({
          eula: auth.getRDchart,
        });
      }
    });
   
  };

 
  render() {
    const {auth} = this.props;
     console.log(auth.getRDchart)

    return (
      <Container>
        <Header style={{backgroundColor: '#f7931e', height: 60}}>
          <StatusBar barStyle="light-content" backgroundColor="#f7931e" />

          <Left>
            <Icon name="close" style={{color: '#ffffff', marginLeft: 16 ,marginTop: 5,}}
             onPress={()=>this.props.navigation.navigate('Home')}
            
             />
          </Left>
          <Body>
            <Title style={styles.headerText}> Deposit Rates</Title>
          </Body>
        </Header>

        <WebView source={{uri: this.state.eula.RDImage}} />
        
      </Container>
    );

    //
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {
    getRDcharts,
  },
)(GetRDchart);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#ffffff',
    alignItems: 'center',
  },
  bottomBtn: {
    flexDirection: 'row',
    backgroundColor: '#f5f5ff',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
