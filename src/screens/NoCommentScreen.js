import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import COLORS from "../../src/constants/colors";
const NoCommentScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/noComments.png")}
      ></Image>
      <Text style={styles.text1}>There is no Comments</Text>
      <Text style={styles.text2}>
        Would you like to be the first one comment
      </Text>
    </View>
  );
};
export default NoCommentScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: "9%",
  },
  image: {
    marginTop: 9,
  },
  text1: { color: COLORS.gray2, fontWeight: 400, fontSize: 24 },
  text2: {
    color: COLORS.gray2,
    fontSize: 12,
    fontWeight: 400,
  },
});
