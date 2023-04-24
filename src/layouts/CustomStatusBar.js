import React from "react";
import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomStatusBar = ({
  backgroundColor,
  barStyle = "dark-content",
  //add more props StatusBar
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
export default CustomStatusBar;

