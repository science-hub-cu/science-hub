import React, { forwardRef } from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import VirticalFooter from "./VerticalFooter";
const Matirial = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.secBackground,
        width: "96%",
        height: 100,
        borderRadius: 15,
        marginTop: "1.5%",
        marginHorizontal: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "82%",
        }}
      >
        <Text
          style={{
            fontFamily: "TrebuchetMS",
            paddingLeft: "5%",
            paddingTop: "2%",
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 12,
          }}
        >
          Subject code
        </Text>
        <Text
          style={{
            paddingLeft: "5%",
            color: COLORS.gray1,
            fontWeight: 400,
            fontSize: 9,
          }}
        >
          subject name
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              paddingLeft: "5%",
              color: COLORS.white,
              fontWeight: 400,
              fontSize: 10,
              width: "100%",
              paddingTop: "1%",
            }}
          >
            Description (this subject is offf a777 so much more than what you
            think, i have to mention that bakar is hotter more than Mo.Salah
            with his black skin and small 7amoksha, today we will talk about
            small 7amokshat & i wanna mention that small...
          </Text>
        </View>
      </View>
      <VirticalFooter />
    </View>
  );
};
export default Matirial;
