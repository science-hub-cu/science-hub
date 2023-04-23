import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../constants/colors";
const Button = ({ title, onPress = () => {},height="12%", width = "88%", marginTop = 20, fontSize= 16,backgroundColor=COLORS.blue,fontColor=COLORS.white,borderColor=COLORS.white,borderWidth=0 }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={onPress}
      style={{
        marginTop: marginTop,
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        borderRadius: 20,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
    >
      <Text
        style={{
          color: fontColor,
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
