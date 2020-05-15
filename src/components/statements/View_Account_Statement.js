import React, { Component } from 'react'
import { Container, Header, Text, View, Right, List, Radio, Button, Body, Title, Left, Icon, ListItem } from 'native-base'
import { StyleSheet, StatusBar, Image, AppRegistry, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
// import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment';


export default class View_Account_Statement extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      mobileOtp: '',
      DateText: '5/13/2020',
      DateHolder: null,

      date: "15-05-2018"

    }

  }


  DatePickerMainFunctionCall = () => {
    let DateHolder = this.state.DateHolder;
    if (!DateHolder || DateHolder == null) {
      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }
    this.refs.DatePickerDialog.open({
      date: DateHolder,

    });

  }

  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }


  render() {
    return (
      <Container>
        <Header icon="eye" style={{ backgroundColor: '#1b1464', height: 80 }}>
          <StatusBar barStyle="light-content" backgroundColor="#1b1464" />
          <Left>
            <Button transparent>
              <Icon name='arrow-back'
                onPress={() => this.props.navigation.navigate('Login')} />
            </Button>
          </Left>



          <Body style={{ alignItems: 'flex-start', marginLeft: 10 }} >
            <Title style={styles.heddertext}> View Statement</Title>
          </Body>



          <Right >
            <Image source={require('../../images/home/white_dot.png')} style={styles.doticon} />
          </Right>
        </Header>







        <Text style={styles.textstyle}>Request statement for :</Text>


        <List style={{ marginLeft: -60 }}>


          <ListItem style={{ borderColor: 'transparent', }} onPress={() => this.setState({ radioBtnOne: !this.state.radioBtnOne })}>
            <Right>
              <Radio selected={this.state.radioBtnOne} color="orange" selectedColor="orange" onPress={() => this.setState({ radioBtnOne: !this.state.radioBtnOne })} />
            </Right>
            <Text>    Last 30 days</Text>
          </ListItem>

          <ListItem style={{ borderColor: 'transparent', }} onPress={() => this.setState({ radioBtnTwo: !this.state.radioBtnTwo })}>
            <Right>
              <Radio selected={this.state.radioBtnTwo} color="orange" selectedColor="orange" onPress={() => this.setState({ radioBtnTwo: !this.state.radioBtnTwo })} />
            </Right>
            <Text>   Last 3 months</Text>
          </ListItem>

          <ListItem style={{ borderColor: 'transparent', }} onPress={() => this.setState({ radioBtnThree: !this.state.radioBtnThree })}>
            <Right>
              <Radio selected={this.state.radioBtnThree} color="orange" selectedColor="orange" onPress={() => this.setState({ radioBtnThree: !this.state.radioBtnThree })} />
            </Right>
            <Text>   Last 6 months</Text>
          </ListItem>

          <ListItem style={{ borderColor: 'transparent', }} onPress={() => this.setState({ radioBtnfour: !this.state.radioBtnfour })}>
            <Right>
              <Radio selected={this.state.radioBtnfour} color="orange" selectedColor="orange" onPress={() => this.setState({ radioBtnfour: !this.state.radioBtnfour })} />
            </Right>
            <Text>  Select duration</Text>
          </ListItem>


        </List>







        {/* <View style={styles.fieldcontainer}>
          <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
            <Text>From Date</Text>
            <View style={styles.datePickerBox} >
              <Text style={styles.datePickerText}>{this.state.DateText}</Text>

            </View>
          </TouchableOpacity>

          
          <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />

        </View> */}




     


        <View style={styles.container}>

          <DatePicker
           hideText
          
            style={{ width: 200 }}
            date={this.state.date} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />

        </View>
















        <Text style={styles.notetext}>Statement are sent to your mail</Text>
        <Button block warning
          onPress={this.handleSubmit}
          style={styles.SubmitButton}  >
          <Text  >Request Statement</Text></Button>



      </Container>




    )
  }
}





const styles = StyleSheet.create({
  heddertext: {
    fontSize: 20,
  },
  liststyle: {
    flex: 1,
    padding: 1,
    borderColor: 'transparent',
    marginRight: 69

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16
  },


  fieldcontainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },

  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  datePickerBox: {
    marginTop: 9,
    borderColor: '#FF5722',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 40,


    justifyContent: 'center'
  },

  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',
    width: 200


  },
  textstyle: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 14,



  },
  SubmitButton: {
    marginLeft: 16,
    width: 382,
    marginRight: 16,

    marginBottom: 32,
  },
  notetext: {
    marginTop: 150,
    marginLeft: 70,
    width: 328,
    opacity: 0.5,
  },



  statestyle: {
    marginLeft: 78,
    width: 266,
    width: 266,
    opacity: 0.5,



  },
  namestyle: {
    marginLeft: 78,
    fontSize: 16,
    height: 22,



  },
  otp: {

    width: 94,
    height: 27,
    marginTop: 15,
    color: '#000000',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: "bold"


  },
  resendOtp: {
    width: 91,
    height: 22,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#f7931e',
    textAlign: 'right',


  },
  cancel: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    color: '#999999',
    textAlign: 'left'

  },
  otpText: {
    marginLeft: 15,
    fontFamily: 'Nunito',
    fontSize: 16,
    marginTop: 10,
    color: '#000000'

  },

  otpSubmit: {
    width: 73,
    height: 39,
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f7931e',
    textAlign: 'right'
  },



})


