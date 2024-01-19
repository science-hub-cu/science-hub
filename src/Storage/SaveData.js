// User Data

import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log("Save user data", jsonValue);
    await AsyncStorage.setItem("userData", jsonValue);
  } catch (e) {
    console.log("Save user data error", e);
  }
};

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Read user data error", e);
  }
};

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    console.log("User data removed");
  } catch (error) {
    console.log("Remove user data error", error);
  }
};
