import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import NotificationList  from'./Notication'

export default class NotifClass extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs  style={{backgroundColor:'#1b1464'}}/>
        <Tabs tabBarActiveTextColor = 'black'
        tabBarInactiveTextColor = 'black'
        tabBarUnderlineStyle  ={{backgroundColor:'#f79d32'}}>
          <Tab heading="All" style={{backgroundColor: "#1b1464"}}>
            {/* <Tab1 /> */}
            <NotificationList></NotificationList>
          </Tab>
          <Tab heading="General">
            {/* <Tab2 /> */}
            <NotificationList></NotificationList>
          </Tab>
          <Tab heading="Promo">
            {/* <Tab3 /> */}
            <NotificationList></NotificationList>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}