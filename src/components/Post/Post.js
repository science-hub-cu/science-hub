import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/colors";
import Header from "./Header";
import Footer from "./Footer";
import {
  UpVoteIcon,
  DownVoteIcon,
  CommentIcon,
  SavePostIcon,
} from "../IconLibrary";


const Post = ({
  userName = "",
  userImage = "",
  title = "hamoksa",
  content = "",
  imageSource = "",
}) => {
  const [imageExist, setIsImageExist] = useState(imageSource != "");
  return (
    <View style={styles.postContaner}>
    <Header userName={userName} userImage={userImage} title={title}/>
      <Text style={styles.content}>{content}</Text>
      {imageExist && (
        <Image
          style={styles.image}
          source={{
            uri: imageSource,
          }}
        ></Image>
      )}
      <Footer/>
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
  image: {
    marginTop: 9,
    width: "100%",
    height: 300,
    resizeMode: "cover",
    overflow: "hidden",
  },
  text: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
  content: {
    color: COLORS.white,
    paddingHorizontal: "3%",
  },

});
