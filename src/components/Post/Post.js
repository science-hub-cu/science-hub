import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Post = ({
  userName = "",
  userAvatar = "",
  title = "hamoksa",
  content = "",
  imageSource = "",
  votes = 0,
}) => {
  return (
    <View style={styles.postContaner}>
      <Header userName={userName} userAvatar={userAvatar} title={title} />
      <Content content={content} imageSource={imageSource} />
      <Footer votes={votes} />
    </View>
  );
};

export default Post;
const styles = StyleSheet.create({
  postContaner: {
    backgroundColor: COLORS.secBackground,
    marginBottom: 9,
    marginTop: 1,
    minHeight: 0,
  },
});
