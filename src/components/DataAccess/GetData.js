import AsyncStorage from "@react-native-community/async-storage";

export const getUserData = async item => {
    try {
      const value = await AsyncStorage.getItem(item);
      return JSON.parse(value)
 
    } catch (error) {
        console.log(error)
    }
  ;
  };
  