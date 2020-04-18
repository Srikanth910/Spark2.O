import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Kyc status", content: 
  "Lorem ipsum dolor sit ametgvsxavsgsvgsddssdds"
},

 
];
export default class KycAccordion extends Component {
  render() {
    return (
      <Container>
       
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#ffffff" }}
            // contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        

        </Content>
        
      </Container>
    );
  }
}