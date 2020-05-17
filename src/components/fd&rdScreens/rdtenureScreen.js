import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TextInput,
  Slider,
  FlatList,
  Switch,
} from 'react-native';
import {} from 'native-base';
import {getActiveRds,createOTPRD} from '../../Redux/actions/fdAction';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

class RDTenureScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1000,
      minAmount: 1000,
      maxAmount: 500000,
      isBreakable: true,
      minBreakInterest: 2.77,
      minNonBreakInterest: 3.77,
      brekableTenures: 9,
      breakableInterest: 16,
      nonBrekableTenures: 9,
      nonBreakableInterest: 16,
      selectedItem: 0,
      isEnabled: false,
      integerValue: '',
      tenureValue: '',
      maturityData:''
      //   tenures: [
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //     {days: '540', months: '18', interest: '12.3', options: '1'},
      //   ],
    };
  }

  toggleSwitch = () => {
    this.setState({
      isEnabled: true,
    });
  };

  itemSeparator = () => {
    return <View style={{width: 16, height: 0, backgroundColor: '#C8C8C8'}} />;
  };

  componentDidMount = () => {
    this.props.getActiveRds();
  };

  handledata = (tenure, value) => {
    
    this.setState({
      tenureValue: tenure,
      interestValue: value,
    });

    let p = this.state.amount;

    let  interestData = this.state.interestValue * 0.01;
      let  tenureData=this.state.tenureValue
    var sum1 = 0;
    var i = 0;
    var sum2 = 0;
      for  (i = 0; i<= tenureData; i++) {
       console.log(i)
      sum1 = p + sum1
       sum2 = sum1 * (interestData / 12.0);

      sum1 = sum1 + sum2;
       this.setState({
            maturityData:sum1
       })
    }
  };

  render() {
    const {FDRDcreation} = this.props;
    // console.log(FDRDcreation.getactiveRd);
     console.log(this.state.maturityData)
    return (
      <View
        style={{
          paddingHorizontal: 16,
          flex: 0.7,
          width: Math.round(Dimensions.get('window').width),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <Text style={styles.title}>Show Breakable Deposit</Text>
          <Switch
            style={{marginTop: 10}}
            thumbColor={'white'}
            trackColor={'#f7931e'}
            onValueChange={this.toggleSwitch}
            value={this.state.isEnabled}
          />
        </View>
        <Text style={styles.description}>
          This option allows you to break the deposit before maturity at
          appropriately readjusted interest rates. Average exit load is low at{' '}
          {this.state.minNonBreakInterest}%.
        </Text>
        <View style={(styles.row, {flexDirection: 'row'})}>
          <Text style={styles.title}>Tenure period</Text>
          <Text style={styles.tenureDescription}>
            ({this.state.brekableTenures} tenures, up to{' '}
            {this.state.breakableInterest}% p.a.)
          </Text>
        </View>
        <View style={{height: 110}}>
          <FlatList
            style={{margintRight: 0}}
            horizontal={true}
            data={FDRDcreation.getactiveRd.accountListMain}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={({item, index}) => {
              if (item.isFlexible === true && this.state.isEnabled === true) {
          
                return (
                  
                  <View style={styles.selectedCard}>
                    <Text
                      style={styles.title}
                      onPress={() =>
                        this.handledata(item.tenure, item.interest)
                      }>
                      {item.tenure} months ({item.tenure * 30} days)
                    </Text>

                    <Text
                      style={{
                        color: 'white',
                        paddingVertical: 4,
                        fontWeight: '400',
                      }}>
                      upto {item.interest}% p.a.
                    </Text>

                    <Text
                      style={{
                        color: 'white',
                        paddingVertical: 4,
                        fontWeight: '400',
                      }}>
                      Interest payout end of term and {item.tenure} other
                      option(s)
                    </Text>
                  </View>
                );
              } else if (
                item.isFlexible === false &&
                this.state.isEnabled === false
              ) {
                console.log(item);
                return (
                  <View style={styles.selectedCard}>
                    <Text style={styles.title}>
                      {item.tenure} months ({item.tenure * 30} days)
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        paddingVertical: 4,
                        fontWeight: '400',
                      }}>
                      upto {item.interest}% p.a.
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        paddingVertical: 4,
                        fontWeight: '400',
                      }}>
                      Interest payout end of term and {item.tenure} other
                      option(s)
                    </Text>
                  </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectedCard: {
    paddingLeft: 8,
    backgroundColor: 'orange',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {height: 4, width: 3},
    shadowColor: 'gray',
    width: Math.round(Dimensions.get('window').width / 1.5),
  },
  unselectedCard: {
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {height: 4, width: 0},
    shadowColor: 'gray',
    paddingLeft: 8,
    backgroundColor: 'white',
    width: Math.round(Dimensions.get('window').width / 1.5),
  },
  title: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 16,
  },
  content: {
    color: '#474a4f',
    fontSize: 14,
    paddingTop: 24,
  },
  description: {
    color: '#999999',
    fontSize: 14,
    paddingTop: 10,
  },
  tenureDescription: {
    color: '#999999',
    fontSize: 14,
    paddingTop: 18,
    paddingLeft: 6,
  },
  textField: {backgroundColor: '#e1e4eb', height: 40, borderRadius: 8},
});

const mapStateToProps = state => ({
  FDRDcreation: state.FDRDcreation,
});
export default connect(
  mapStateToProps,
  {getActiveRds},
)(RDTenureScreen,createOTPRD);
