import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const MaterialContent = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        Description (this subject is offf a777 so much more than what you think,
        i have to mention that bakar is hotter more than Mo.Salah with his black
        skin and small 7amoksha, today we will talk about small 7amokshat & i
        wanna mention that small...
      </Text>
    </View>
  );
};
export default MaterialContent;

const styles = StyleSheet.create({
  view: { flexDirection: "row", justifyContent: "space-between" },
  text: {
    paddingLeft: "5%",
    color: COLORS.white,
    fontWeight: 400,
    fontSize: 10,
    width: "100%",
    paddingTop: "1%",
  },
});
