import * as React from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';

const Device_Width = Dimensions.get('width').width;

export default class Backgroundcarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  
  render() {
      const {images} = this.props;
      const {selectedIndex} = this.state

      return (
          
          <View style={{height: '100%', width: '100%'}}>
              <ScrollView>
                  {images.map(image => {
                      <Image 
                        key={image}
                        source={{uri: image}}
                        style={styles.BackgroundImage}
                      />
                  })}
              </ScrollView>
          </View>
          
      )
  }

}

const stytles = StyleSheet.create({
    BackgroundImage: {
        height: '100%',
        width: Device_Width
    }
}) 
