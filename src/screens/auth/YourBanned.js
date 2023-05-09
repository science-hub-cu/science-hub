import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const YourBanned = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Banned</Text>
      <Svg
        width={190}
        height={190}
        viewBox="0 0 190 190"
        color="white"
        fill="none"
      >
        <Circle cx={95} cy={95} r={71.25} stroke="white" strokeWidth={3} />
        <Path d="M145.5 145.5L44.5 44.5" stroke="white" strokeWidth={3} />
      </Svg>
      <TouchableOpacity onPress={() => console.log("Terms clicked")}>
        <Text style={styles.link}>
          View our{" "}
          <Text style={styles.blueText}>Terms> and Privacy Policy</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2D31",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  link: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
  },
  blueText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default YourBanned;
