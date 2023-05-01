import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";

const Post = ({
  imageSource = "",
}) => {
  const [imageExist, setIsImageExist] = useState(imageSource!="");
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
    resizeMode:"cover",
    overflow:"hidden",
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
  //   container: {
  //     flex: 1,
  //     backgroundColor:COLORS.gold
  //     // width: "100%",
  //     // height: "100%",
  //     // padding: 15,
  //     // backgroundColor: COLORS.secBackground,
  //     // flexDirection: "row",
  //     // marginBottom: "1%",
  //   },
  //   header: {
  //     height: 50,
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     marginTop: 6,
  //     paddingVertical: 11,
  //   },
  //   row: {
  //     alignItems: "center",
  //     flexDirection: "row",
  //   },
  //   user: {
  //     fontSize: 12,
  //     fontWeight: "bold",
  //     color: COLORS.white,
  //   },
  //   title: {
  //     fontSize: 9,
  //     color: COLORS.gray2,
  //   },
  //   image: {
  //     width: "100%",
  //     height: "100%",
  //     borderRadius: 50,
  //   },
  //   imageView: {
  //     width: 40,
  //     height: 40,
  //     borderRadius: 20,
  //   },
});
