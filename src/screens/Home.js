import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../services/auth/firebase";
const HomeScreen = ({ route, navigation }) => {
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <SafeAreaView>
      <Text>hello,{route.params}</Text>
    </SafeAreaView>
  );
};
export default HomeScreen;
