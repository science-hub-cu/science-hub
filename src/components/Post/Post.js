import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Post = ({
  userName = "",
  userImage = "",
  title = "hamoksa",
  content = "",
  imageSource = "",
}) => {
  return (
    <View style={styles.postContaner}>
      <Header userName={userName} userImage={userImage} title={title} />
      <Content content={content} imageSource={imageSource} />
      <Footer />
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
