import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../constants/colors";
const Button = ({ title, onPress = () => {}, width = "88%", marginTop = 20, fontSize= 16,backgroundColor=COLORS.blue,fontColor=COLORS.white }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        marginTop: marginTop,
        height: 50,
        width: width,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        borderRadius: 25,
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: fontColor,
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
