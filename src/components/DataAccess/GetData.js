import AsyncStorage from "@react-native-community/async-storage";

export const getUserData = async item => {
    try {
      const value = await AsyncStorage.getItem('Loginuser');
      const logindetails= JSON.parse(value)
      return   logindetails
 
    } catch (error) {
        console.log(error)
    }
  ;
  };
  

