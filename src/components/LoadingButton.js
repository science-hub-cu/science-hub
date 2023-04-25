import React, { useImperativeHandle, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import COLORS from "../constants/colors";
import { forwardRef } from "react";

const LoadingButton = forwardRef(
  (
    {
      title,
      onPress = () => {},
      width = "88%",
      disabled = false,
      backgroundColor = COLORS.blue,
      disabledColor = COLORS.load,
      fontColor = COLORS.white,
      fontSize = 16,
      conntainrStyle = {},
      textStyle = {},
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(false);
    const [disable, setDisable] = useState(disabled);

    const handlePress = () => {
      if (isLoading) return;
      setIsLoading(true);
      setDisable(true);
      onPress();
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          setLoading(load) {
            setDisable(load);
            setIsLoading(load);
          },
          setDisable(load) {
            setDisable(load);
          },
        };
      },
      []
    );

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={disable}
        style={{
          marginTop: 0,
          height: 50,
          width: width,
          backgroundColor: disable ? disabledColor : backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          marginHorizontal: 10,
          ...conntainrStyle,
        }}
      >
        {isLoading ? (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: fontColor,
                fontWeight: "bold",
                fontSize: fontSize,
                textAlign: "center",
                marginRight: 10,
                ...textStyle,
              }}
            >
              {title}
            </Text>
            <ActivityIndicator color="#fff" />
          </View>
        ) : (
          <Text
            style={{
              color: fontColor,
              fontWeight: "bold",
              fontSize: fontSize,
              textAlign: "center",
              ...textStyle,
            }}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);

export default LoadingButton;
