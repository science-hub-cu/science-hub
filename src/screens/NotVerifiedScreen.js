import React, { useState } from "react";
import COLORS from "../constants/colors";
import Button from "../../src/components/Button";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Image,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const NotVerifiedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          //add log out method here
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginRight: "3%" }}
              source={require("../assets/images/Sign_out.png")}
            ></Image>
            <Text style={styles.text}>logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "60%" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: Colors.white,
          }}
        >
          YOU ARE NOT VERIFIED :(
        </Text>
        <Image
          source={require("../assets/images/SadFace.png")}
          style={styles.image}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: Colors.white,
          }}
        >
          lET YOUR FRIEND MAKE YOU VERIFIED
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NotVerifiedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: "3%",
    paddingTop: "5%",
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,

    marginBottom: "10%",
    alignSelf: "center",
  },
});
