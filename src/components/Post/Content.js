import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/colors";

const Content = ({ content = "", imageSource = "" }) => {
  const [imageExist, setIsImageExist] = useState(imageSource !== "");
  return (
    <View style={styles.postContaner}>
      <Text style={styles.content}>{content}</Text>
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

export default Content;

const styles = StyleSheet.create({
  image: {
    marginTop: 9,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  content: {
    color: COLORS.white,
    paddingHorizontal: "3%",
  },
});
