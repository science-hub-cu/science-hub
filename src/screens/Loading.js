import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import COLORS from "../constants/colors";

const Loading = () => (
  <View style={[styles.container]}>
    <ActivityIndicator
      size="large"
      color="blue"
      style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    justifyContent: "center",
  },
});

export default Loading;
