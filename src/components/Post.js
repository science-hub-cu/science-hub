import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";
import {
  UpVoteIcon,
  DownVoteIcon,
  CommentIcon,
  SavePostIcon,
} from "./IconLibrary";

const Post = ({ imageSource = "" }) => {
  const [imageExist, setIsImageExist] = useState(imageSource != "");
  return (
    <View style={styles.postContaner}>
      <View style={styles.Header}>
        <View style={styles.imageView}>
          <Image
            style={styles.userImage}
            source={{
              uri: "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
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
              UserName
            </Text>
          </View>
          <Text style={{ color: COLORS.gray }}>Title</Text>
        </View>
      </View>
      <Text style={styles.content}>
        rdthjeryjeryjyerjeyrjyrdthjeryjeryjyerjeyrjyrdthjeryjeryjyerjeyrjyrdthjeryjeryjyerjeyrjy
      </Text>
      {imageExist && (
        <Image
          style={styles.image}
          source={{
            uri: imageSource,
          }}
        ></Image>
      )}
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <UpVoteIcon />
          <Text style={styles.number}>{10}</Text>
          <DownVoteIcon />
        </View>
        <View style={styles.iconContainer}>
          <CommentIcon />
          <Text style={{ color: COLORS.gray2 }}> Comment</Text>
        </View>
        <View style={styles.iconContainer}>
          <SavePostIcon />
          <Text style={{ color: COLORS.gray2 }}> Save Post</Text>
        </View>
      </View>
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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    // backgroundColor: COLORS.green,
    justifyContent: "space-between",
  },
  number: {
    paddingHorizontal: "5%",
    color: "grey",
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: "3%",
  },
});
