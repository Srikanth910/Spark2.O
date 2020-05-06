import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { withNavigation } from 'react-navigation';
 class HomeFooter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            tabStatus1:true,
            tabStatus2:false,
            tabStatus3:false,
            tabStatus4:false,
         }
     }
     
     
     
checkTabSelected(tab, props){
    switch(tab) {
      case 1:
        this.setState({
  
          tabStatus1:true,
          tabStatus2:false,
          tabStatus3:false,
          tabStatus4:false
        })
        // code block
        break;
      case 2:
        this.setState({
  
          tabStatus1:false,
          tabStatus2:true,
          tabStatus3:false,
          tabStatus4:false
        })
        // code block
        break;
      case 3:
        // code block
        this.setState({
  
          tabStatus1:false,
          tabStatus2:false,
          tabStatus3:true,
          tabStatus4:false
        })
    

        break;
      case 4:
        this.setState({
  
          tabStatus1:false,
          tabStatus2:false,
          tabStatus3:false,
          tabStatus4:true
        })
        // code block
        break;
  
    }
  }
  
  
    render() {
        return (
            
        
        
        <FooterTab style={{ backgroundColor: '#ffffff' }} >
          <Button
onPress={()=>{this.checkTabSelected(1)}} active={this.state.tabStatus1} style={{backgroundColor: this.state.tabStatus1?null:null}} >
          
            <Icon name="home" style={styles.bottomIcon} style={{color:this.state.tabStatus1?'#1b1464':'#474a4f'}} />
            <Text style={styles.footertext} style={{color:this.state.tabStatus1?'#1b1464':'#474a4f'}}>Home</Text>
          </Button>

          <Button
         onPress={()=>{this.checkTabSelected(2)}} active={this.state.tabStatus2} style={{backgroundColor: this.state.tabStatus1?null:null}} >
      
            <Icon name="notifications"
              style={styles.bottomIcon}

              style={{color:this.state.tabStatus2?'#1b1464':'#474a4f'}}
              // onPress={() => this.props.navigation.navigate('NotifClass')}
            />
            <Text style={styles.footertext}
            style={{color:this.state.tabStatus2?'#1b1464':'#474a4f'}}
            >Notification</Text>
          </Button>
          <Button
         onPress={()=>{this.checkTabSelected(3)}} active={this.state.tabStatus3} style={{backgroundColor: this.state.tabStatus3?null:null}} >
      
          
            <Icon name="settings" style={styles.bottomIcon}
            style={{color:this.state.tabStatus3?'#1b1464':'#474a4f'}} />
            <Text style={styles.footertext}
            style={{color:this.state.tabStatus3?'#1b1464':'#474a4f'}}
             onPress={()=>       this.props.navigation.navigate('SettingPage')}
            >settings</Text>
          </Button>
        </FooterTab>
     
            
        )
    }
}
export default ( HomeFooter) 


 const styles=StyleSheet.create({
    footertext:{
   
        height:16,
         fontSize:13,
          fontFamily:'Nunito',
          
     
             opacity:0.8
    },
    bottomIcon: {
        color: 'grey'
    
    
      },
 })

