import React, { useState } from "react";
import COLORS from "../constants/colors";
import UserService from "../services/UserService";

import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Image,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { removeUserData } from "../Storage/SaveData";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/AuthSlice";
import { useAuth } from "../context/AuthContext";
const NotVerifiedScreen = () => {
  const { user, authLoading, updateUser } = useAuth();

  const dispatch = useDispatch();
  const handelLogout = async () => {
    dispatch(logOut());
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handelLogout}>
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
