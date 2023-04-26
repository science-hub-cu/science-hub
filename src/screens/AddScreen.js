import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";
const AddScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Add Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
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
export default AddScreen;
