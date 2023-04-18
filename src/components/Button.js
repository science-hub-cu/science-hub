import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../constants/colors";
const Button = ({ title, onPress = () => {}, width = "88%", marginTop = 20, fontSize= 16 }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        marginTop: marginTop,
        height: 50,
        width: width,
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        borderRadius: 25,
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "bold",
          fontSize: fontSize,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
