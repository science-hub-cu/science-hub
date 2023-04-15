import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./src/screens/auth/RegisterScreen";
import AuthScreen from "./src/screens/auth/authScreen";
import HomeScreen from "./src/screens/Home";
import { StyleSheet } from "react-native";
import COLORS from "./src/constants/colors";
import RetryScreen from "./src/screens/retry";
import NetInfo from "@react-native-community/netinfo";
import "./src/config/firebaseConfig";
import { useFonts } from "expo-font";
import VerifyScreen from "./src/screens/profileScreens/verifyScreen";
import { onAuthStateChanged } from "@firebase/auth";
import { getAuth } from "@firebase/auth";

const Stack = createStackNavigator();

const App = () => {
  const [isNetConnected, setIsNetConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsNetConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []); // add empty array to run only once

  /******************* Loading resourses **************************/
  const [fontLoaded] = useFonts({
    majalla: require("./src/assets/fonts/majalla.ttf"),
  });
  if (!fontLoaded) return null;

  if (!isNetConnected) {
    return <RetryScreen />;
  }

  onAuthStateChanged(getAuth(), (user) => {
    console.log("-------Auth changed-----");
    console.log(user);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
