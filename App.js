import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RegistrationScreen from "./screens/auth/Register";
import LoginScreen from "./screens/auth/Login";
import HomeScreen from "./screens/Home";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "./assets/colors";
//-------------------------------------------------------------------------------//
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
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
