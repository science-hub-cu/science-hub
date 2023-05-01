import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import {
  UpVoteIcon,
  DownVoteIcon,
  CommentIcon,
  SavePostIcon,
} from "../IconLibrary";

const Footer=()=>{
return (
  <View style={styles.footer}>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => {}}>
        <UpVoteIcon />
      </TouchableOpacity>
      <Text style={styles.number}>{10}</Text>
      <TouchableOpacity onPress={() => {}}>
        <DownVoteIcon />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.iconContainer}>
        <CommentIcon />
        <Text style={styles.text}> Comment</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.iconContainer}>
        <SavePostIcon />
        <Text style={styles.text}> Save Post</Text>
      </View>
    </TouchableOpacity>
  </View>
);
};
export default Footer;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-between",
  },
  number: {
    paddingHorizontal: "5%",
    color: "grey",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: "3%",
  },
  text: {
    color: COLORS.gray2,
  },
});
