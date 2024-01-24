import React, { forwardRef } from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import VirticalFooter from "./VerticalFooter";

const MaterialHeader = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "TrebuchetMS",
          paddingLeft: "5%",
          paddingTop: "2%",
          color: COLORS.white,
          fontWeight: "700",
          fontSize: 12,
        }}
      >
        Subject code
      </Text>
      <Text
        style={{
          paddingLeft: "5%",
          color: COLORS.gray1,
          fontWeight: "400",
          fontSize: 9,
        }}
      >
        subject name
      </Text>
    </View>
  );
};
export default MaterialHeader;
