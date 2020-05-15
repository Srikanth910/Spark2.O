import React, {Component} from 'react';
import {
  Container,
  Header,
  Tabs,
  Text,
  Tab,
  InputGroup,
  ListItem,
  TabHeading,
  Title,
  Item,
  Input,
  Button,
  Body,
  View,
  Icon,
  Left,
  Right,
  Thumbnail,
  Form,
} from 'native-base';
import {StyleSheet, StatusBar, Image} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {getBeneficiaryBank} from '../../Redux/actions/TransferAction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

class Transfer_Spark_otherbank extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
     
    
  }

  componentDidMount() {
   const{params}=this.props.route
    if(params.type===2){
      const data = {
        membarId: '1421',
        isPrimaryAccunt: 'false',
        isWithInCoop: 'false',
        type: '1',
      };
      this.props.getBeneficiaryBank(data);
    }else if(params.type===4){
     
    const data = {
      membarId: '1421',
      isPrimaryAccunt: 'false',
      isWithInCoop: 'false',
      type: '2',
    };
    this.props.getBeneficiaryBank(data);
  }else{
     alert('loading errpr')
  }
}



    handleData=(Name, acc, ifcs)=>{
     
        this.props.navigation.navigate('To_myBankAcc', {
          type: 4,
          name: 'To Other Bank Account',
          holder:Name,
           AccountBen:acc,
           IFCS:ifcs,
           otherBeneficiary:"true"

        })
      

    }
  render() {
    const {transferDetails} = this.props;
    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 90}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
          <Left>
            <Button transparent style={styles.btnclose}>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.navigate('Otherbank')}
              />
            </Button>
            <Body
              style={{alignItems: 'flex-start', marginRight: -250, bottom: 30}}>
              <Title>Beneficiaries</Title>
            </Body>
          </Left>
          <Right>
            <Button
              transparent
              style={styles.btnclose}
              onPress={this.toggelopen}>
              <Icon name="md-add" />
              {/* onPress={() => this.props.navigation.navigate('')} */}
            </Button>
          </Right>
        </Header>

        <ListItem
          style={{backgroundColor: '#1b1464', height: 60, marginLeft: 0}}>
          <InputGroup>
            <Icon
              style={{
                backgroundColor: '#e1e4eb',
                height: 40,
                marginLeft: 30,
                color: '#999999',
              }}
              name="ios-search"
            />
            <Input placeholder="Search" style={styles.input} />
          </InputGroup>
        </ListItem>
        <ScrollView>
          {transferDetails.array &&
            transferDetails.array.map(data => {
              return (
                // <TouchableOpacity onPress={()=>alert('hello')}>
                <View style={styles.curd_user}>
                    <TouchableOpacity onPress={()=>this.handleData(data.Name, data.BeneficiaryAccNo, data.IFSCCode)}>
                  <ListItem
                    style={{
                      borderColor: 'transparent',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../../images/Transfer/Other_Bank.png')}
                      style={styles.bank}
                    />

                  
                    <View style={{paddingLeft: 40}}>
                      <Text style={styles.usertext}>{data.Name}</Text>
                      <Text style={styles.user}>{data.BeneficiaryAccNo}</Text>
                      <Text style={styles.user}>{data.IFSCCode}</Text>
                    </View>
                   
                  </ListItem>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transferDetails: state.transferDetails.getbackDetials,
});

export default connect(
  mapStateToProps,
  {getBeneficiaryBank},
)(Transfer_Spark_otherbank);

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
  },

  input: {
    marginLeft: -3,
    marginRight: 21,
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  curdtext: {
    color: '#1b1464',
    fontFamily: 'Nunnito',
    fontSize: 14,
    marginRight: 100,
  },
  bank: {
    // marginLeft: 16,
    height: 40,
    width: 60,
    alignSelf: 'center',
  },

  curd_user: {
    backgroundColor: '#ffffff',
    height: 97,
    marginVertical: 20,
    marginLeft: 21,
    marginRight: 21,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },

  forgetText: {
    marginLeft: 300,

    marginTop: 10,
    color: '#f3a549',
  },
  tabColor: {
    backgroundColor: 'white',
    color: '#474a4f',
  },
  tabtext: {
    color: '#474a4f',
  },

  textInput: {
    marginTop: 20,
    width: 328,
    marginLeft: 40,
  },
  cancel: {
    width: 91,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    textAlign: 'right',
    marginRight: 180,
  },

  otpText: {
    height: 70,
    fontSize: 18,
    marginLeft: 30,
  },

  btnclose: {
    marginTop: 20,
    width: 80,
    marginLeft: 10,
  },

  headertext: {
    marginTop: -37,
    width: 150,
    marginLeft: -60,
    fontSize: 24,
  },
  textData: {
    marginTop: 10,
    marginLeft: 20,
  },
  Addbtnbeni: {
    marginTop: 20,
    marginLeft: 16,
    width: 380,
  },
});
