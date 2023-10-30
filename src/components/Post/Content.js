import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Lightbox from "react-native-lightbox-v2";
import COLORS from "../../constants/colors";

const Content = ({ content = "", imageSource = "" }) => {
  const [imageExist, setIsImageExist] = useState(imageSource !== "");
  return (
    <View style={styles.postContaner}>
      <Text style={styles.content}>{content}</Text>
      {imageExist && (
        <Lightbox underlayColor="black">
        <Image
          style={styles.image}
          source={{
            uri: imageSource,
          }}
        ></Image>
        </Lightbox>
      )}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  content: {
    marginBottom: 9,
    color: COLORS.white,
    paddingHorizontal: "3%",
  },
});
