import React, {Component} from 'react';
import {
  Container,
  Header,
  View,
  Icon,
  Text,
  Content,
  Item,
  Button,
  Input,
} from 'native-base';
import {Image, StatusBar, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DatePicker from 'react-native-datepicker'
import DatePicker from 'react-native-datepicker';

export default class ScheduleTransfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDatePickerVisible: false,
      imageshow: false,
      pickDate: '',
      date: '',
      activeIndex: '0',
    };
  }

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  handleConfirm = date => {
    this.setState({
      pickDate: date,
    });
    alert(date);
    this.hideDatePicker();
  };

  handleschedule = (name, value) => {
    this.setState({
      imageshow: name,
      activeIndex: value,
    });
  };

  handlespark = () => {
     const{params}=this.props.route
     console.log(params)
    // const {params} = this.props.route;
    if (params.type === 3) {
      this.props.navigation.navigate('To_sparkAcc', {
        date: this.state.date,
        scheduledays: this.state.imageshow,
        sparkSchedule: true,
        name: 'To Spark Bussiness Account',
      });
    } else if (params.type === 2) {
      this.props.navigation.navigate('To_sparkAcc', {
        date: this.state.date,
        scheduledays: this.state.imageshow,
        sparkSchedule: true,
        name: 'To Spark Saving Account',
      });
    } else if (params.type === 1) {
      this.props.navigation.navigate('To_myBankAcc', {
        date: this.state.date,
        scheduledays: this.state.imageshow,
        bankSchedule: true,
        name: 'To My Bank  Account',
      });
    } else if (params.type === 4) {
      this.props.navigation.navigate('To_myBankAcc', {
        date: this.state.date,
        scheduledays: this.state.imageshow,
        bankSchedule: true,
        name: 'To Other Bank Account',
      });
    }
  };
  render() {
    console.log(this.state.date);

    const {params} = this.props.route;
    console.log(params);
    return (
      <Container>
        <Header style={{backgroundColor: '#1b1464', height: 90}}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Loasmoney')}
              style={{color: '#ffffff'}}
            />
            <Text style={styles.headerText}>Schedule Transfer</Text>

            <Image source={require('../../images/billpay/faq_ic.png')} />
          </View>
        </Header>

        <Content>
          <Text style={styles.inputText}>Select a start date</Text>
          <Item regular style={styles.textInput} onPress={this.showDatePicker}>
            <Input
              placeholder=""
              style={styles.input}
              value={this.state.date}
            />
            <View style={{alignSelf: 'flex-end'}}>
              <DatePicker
                date={this.state.date}
                mode="date"
                hideText
                dateInput
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    width: 30,
                    height: 30,
                    marginLeft: 80,
                  },
                  dateInput: {
                    height: 0,
                    width: 0,
                    marginRight: -30,
                  },
                }}
                onDateChange={date => {
                  this.setState({date: date});
                }}
              />
            </View>

            
          </Item>
          <Text style={styles.inputText}>Select transfer frequency</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              marginVertical: 16,
            }}>
            <Button
              bordered
              warning
              style={styles.btnborder}
              onPress={() => this.handleschedule('oneTime', '1')}
              style={
                this.state.activeIndex === '1'
                  ? styles.btnActive
                  : styles.btnborder
              }>
              <Text
                style={styles.btntext}
                style={
                  this.state.activeIndex === '1'
                    ? styles.btntextcolor
                    : styles.btntext
                }>
                One Time
              </Text>
            </Button>
            <Button
              bordered
              warning
              style={styles.btnborder}
              onPress={() => this.handleschedule('weekly', '2')}
              style={
                this.state.activeIndex === '2'
                  ? styles.btnActive
                  : styles.btnborder
              }>
              <Text
                style={styles.btntext}
                style={
                  this.state.activeIndex === '2'
                    ? styles.btntextcolor
                    : styles.btntext
                }>
                Weekly
              </Text>
            </Button>
            <Button
              bordered
              warning
              style={styles.btnborder}
              onPress={() => this.handleschedule('monthly', '3')}
              style={
                this.state.activeIndex === '3'
                  ? styles.btnActive
                  : styles.btnborder
              }>
              <Text
                style={styles.btntext}
                style={
                  this.state.activeIndex === '3'
                    ? styles.btntextcolor
                    : styles.btntext
                }>
                Monthly
              </Text>
            </Button>
          </View>

          {/*  data pikker */}

          <View>
           
          </View>

          {this.state.imageshow === 'monthly' ? (
            <View style={{marginVertical: 16, marginHorizontal: 16}}>
              <Text style={styles.NumberText}>Number of Transfers</Text>
              <Text style={styles.lightText}>
                Select how many transfers should be made. E.g. Monthly frequency
                + 12 transfers = 1 year.
              </Text>

              <View style={{alignItems: 'flex-end', marginVertical: 20}}>
                <Image
                  source={require('.././../images/Transfer/month_img.png')}
                  style={styles.months}
                />
              </View>
            </View>
          ) : (
            <View style={{alignItems: 'center', marginVertical: 30}}>
              <Image
                source={require('../../images/Transfer/schedule_img.png')}
              />
            </View>
          )}
        </Content>
        {params.type === 2 || params.type === 3 ? (
          <View
            style={{
              justifyContent: 'flex-end',
              marginVertical: 16,
              marginHorizontal: 16,
            }}>
            <Button
              block
              warning
              onPress={this.handlespark}
              //  this.props.navigation.navigate('To_sparkAcc', {date:this.state.date, scheduledays:this.state.imageshow, bankSchedule:true,
              //   name:'To Other Bank Account'
              //  })
            >
              <Text>Set</Text>
            </Button>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'flex-end',
              marginVertical: 16,
              marginHorizontal: 16,
            }}>
            <Button block warning onPress={this.handlespark}>
              <Text>Set</Text>
            </Button>
          </View>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ffffff',
    // borderColor: '#dc00ff',
    // borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,

    shadowOpacity: 0.25,
    shadowColor: '#ffffff',
    shadowRadius: 2.84,

    elevation: 2,
  },
  btnActive: {
    // alignItems: 'center',
    backgroundColor: '#1b1464',

    width: 100,
    height: 30,
  },
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffffff',
  },
  inputText: {
    paddingTop: 20,
    marginLeft: 20,
    color: '#474a4f',
    fontSize: 16,
  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    marginLeft: 17,
    marginRight: 16,
    backgroundColor: '#e1e4eb',
  },

  btnborder: {
    width: 100,
    height: 30,

    borderColor: '#1b1464',
  },
  btntext: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#1b1464',
    fontSize: 14,
  },

  btntextcolor: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
  },

  input: {
    height: 40,
    backgroundColor: '#e1e4eb',
    borderRadius: 5,
  },
  NumberText: {
    fontSize: 16,
    color: '#4a4a4a',
    textAlign: 'left',
  },
  lightText: {
    color: '#989898',
    textAlign: 'left',
    fontSize: 13.6,
    paddingTop: 5,
  },
  months: {
    alignSelf: 'center',
  },
  calenndericon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  DateTimePickerModal: {},
});
