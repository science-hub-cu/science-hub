import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({ title,icon="", onPress = () => {},height="12%", width = "88%", marginTop = "3%", fontSize= 16,backgroundColor=COLORS.blue,fontColor=COLORS.white,borderColor=COLORS.white,borderWidth=0 }) => {
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
        flexDirection: "row",
      }}
    >
      {(icon!=="")&&<Icon
        name={icon}
        style={{
          color: COLORS.white,
          alignItems: "center",
          alignContent: "center",
          paddingTop: "5%",
          paddingRight:"4%"
        }}
      />
      }
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
