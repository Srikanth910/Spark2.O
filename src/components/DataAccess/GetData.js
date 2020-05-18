import AsyncStorage from "@react-native-community/async-storage";

export const getUserData = async item => {
    try {
      const value = await AsyncStorage.getItem('Loginuser');
       console.log(Value)
      return JSON.parse(value)
 
    } catch (error) {
        console.log(error)
    }
  ;
  };
  

  // async retrieveItem(key) {
  //   try {
  //     const retrievedItem =  await AsyncStorage.getItem(key);
  //     const item = JSON.parse(retrievedItem);
  //     return item;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   return
  // }