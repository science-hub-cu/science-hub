import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/colors";

const Header = ({ userName = "", userImage = "", title = "hamoksa" }) => {
  return (
    <View style={styles.Header}>
      <View style={styles.imageView}>
        <Image
          style={styles.userImage}
          source={{
            uri: userImage,
          }}
        ></Image>
      </View>
      <View style={{ marginLeft: "3%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 15,
            }}
          >
            {userName}
          </Text>
        </View>
        <Text style={{ color: COLORS.gray }}>{title}</Text>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({

  imageView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  Header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },



});
