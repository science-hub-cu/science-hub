import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({
  title,
  icon = "",
  onPress = () => {},
  height = "12%",
  width = "88%",
  marginTop = "3%",
  fontSize = 16,
  backgroundColor = COLORS.blue,
  disabledColor = COLORS.load,
  fontColor = COLORS.white,
  borderColor = COLORS.white,
  borderWidth = 0,
  disabled = false,
  opacity = 0.7,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPress={onPress}
      disabled={disabled}
      style={{
        marginTop: marginTop,
        height: height,
        width: width,
        backgroundColor: disabled ? disabledColor : backgroundColor,
        justifyContent: "center",
        borderRadius: 20,
        borderColor: borderColor,
        borderWidth: borderWidth,
        flexDirection: "row",
      }}
    >
      {icon !== "" && <Icon name={icon} style={styles.icon} />}
      <Text
        style={[
          {
            color: fontColor,
            fontSize: fontSize,
          },
          styles.text,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  icon: {
    color: COLORS.white,
    alignItems: "center",
    alignContent: "center",
    paddingTop: "3%",
    paddingRight: "4%",
    textAlignVertical: "center",
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
  },
});
