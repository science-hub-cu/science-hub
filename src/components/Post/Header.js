import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/colors";

const Header = ({ userName = "", userAvatar = "", title = "hamoksa" }) => {
  return (
    <View style={styles.Header}>
      {
        // make this on press open screen where can buy the avatar
      }
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.imageView}>
          <Image
            style={styles.userImage}
            source={{
              uri: userAvatar,
            }}
          ></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.userDate}>
        {
          //make this on press open small screen about user
        }
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.row}>
            <Text style={styles.username}>{userName}</Text>
          </View>
        </TouchableOpacity>
        {
          //make this on press open screen where can buy the title
        }
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
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
  username: {
    color: COLORS.white,
    fontSize: 15,
  },
  title: {
    color: COLORS.gray,
  },
  row: {
    flexDirection: "row",
  },
  userDate: {
    marginLeft: "3%",
  },
});
