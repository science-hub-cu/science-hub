import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RegistrationScreen from "./src/screens/auth/Register";
import HomeScreen from "./src/screens/Home";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "./src/constants/colors";
import RetryScreen from "./src/screens/retry";
import NetInfo from "@react-native-community/netinfo";

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

  if (!isNetConnected) {
    return <RetryScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
