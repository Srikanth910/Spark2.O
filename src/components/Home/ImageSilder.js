import React, {Component} from 'react';
import {View} from 'native-base';
import {SliderBox} from 'react-native-image-slider-box';
import {connect} from 'react-redux';
 import {getBanners}from '../../Redux/actions/authAction'
import AsyncStorage from '@react-native-community/async-storage';
class ImageSilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        require('../../images/home/home_img.png'),
        require('../../images/home/home_img.png'),
        require('../../images/home/home_img.png'), // Local image
      ],
      banners:[],
      userDetails:{},
    };
  }
   componentDidMount= async ()=>{

    try{
      const data=  await  AsyncStorage.getItem('Loginuser');
       const  logindetail=JSON.parse(data)
        this.setState({
           userDetails: logindetail

        })
   } catch(e){
      console.log(e)
   }

    
    const {auth}=this.props

    const data={
      membarId:this.state.userDetails.memberid
    }
  

  this.props.getBanners(data).then(()=>{ 
     const {auth}=this.props
      if(auth.banners.code==="200"){
         this.setState({
           banners:auth.banners.bannerList
         })
      }else if(auth.sessionData.code==="403"){
         alert('session expired ')
          this.props.navigation.navigate('Login')
      }
      
     
     
  })
   }

  render() {
    const {auth} = this.props; 
    
    
    const images = this.state.banners.map(item => {
      return item.BannerURL;
    });
    console.log(images);
    return (
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={100}
          sliderBoxHeight={144}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={{
            marginLeft: 16,
            marginRight: 16,
            width: '97%',
            marginTop: 15,
          }}
          imageLoadingColor="#2196F3"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {getBanners},
)(ImageSilder);
