import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import COLORS from "../../src/constants/colors"
const NoCommentScreen=()=>{
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../assets/images/noComments.png")}
        ></Image>
        <Text style={{ color: COLORS.gray2, fontWeight: 400, fontSize: 24 }}>
          There is no Comments
        </Text>
        <Text style={{ color: COLORS.gray2, fontSize: 12, fontWeight: 400 }}>
          Would you like to be the first one comment
        </Text>
      </View>
    );
}
export default NoCommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  image: {
    marginTop: 9,
  },
  text: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
});