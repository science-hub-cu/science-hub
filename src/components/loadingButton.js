import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import COLORS from "../constants/colors";

const LoadingButton = ({
  title,
  onPress = () => {},
  loading,
  width = "88%",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading || loading}
      style={{
        marginTop: 20,
        height: 50,
        width: width,
        backgroundColor: isLoading || loading ? COLORS.load : COLORS.blue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        marginHorizontal: 10,
      }}
    >
      {isLoading || loading ? (
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
};

export default LoadingButton;