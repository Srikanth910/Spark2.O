import React, { Component } from 'react'
import { View } from 'native-base'
import { SliderBox } from "react-native-image-slider-box";


export default class ImageSilder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [
        
                require('../../images/home/home_img.png'),  
                require('../../images/home/home_img.png'),    
                require('../../images/home/home_img.png'),      // Local image
              ]
        
        }
    }
    
    render() {
        return (
            <View>

<SliderBox images={this.state.images}
             sliderBoxHeight={144}
             sliderBoxHeight={144}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{ marginLeft: 16, marginRight: 16, marginTop: 15}}
  imageLoadingColor="#2196F3"
            />
            </View>
        )
    }
}
