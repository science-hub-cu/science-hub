import React, { useImperativeHandle, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import COLORS from "../constants/colors";
import { forwardRef } from "react";

const LoadingButton = forwardRef(
  ({ title, onPress = () => {}, width = "88%" }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePress = () => {
      setIsLoading(true);
      onPress();
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          setLoading(load) {
            setIsLoading(load);
          },
        };
      },
      []
    );

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={isLoading}
        style={{
          marginTop: 0,
          height: 50,
          width: width,
          backgroundColor: isLoading ? COLORS.load : COLORS.blue,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          marginHorizontal: 10,
        }}
      >
        {isLoading ? (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                marginRight: 10,
              }}
            >
              {title}
            </Text>
            <ActivityIndicator color="#fff" />
          </View>
        ) : (
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
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
