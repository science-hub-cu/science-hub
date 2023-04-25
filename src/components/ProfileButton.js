import React from "react";
import { TouchableNativeFeedback, Text, Image, View } from "react-native";
import COLORS from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
const ProfileButton = ({ title, iconname, style, onPress = () => {} }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingVertical: 4,
          // marginVertical: 10,
          minHeight: 18,
          // height: "11%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={iconname}
            style={{ width: 18, height: 18, marginLeft: 18 }}
          />
          <Text
            style={{
              color: COLORS.white,
              marginLeft: 10,
            }}
          >
            {title}
          </Text>
        </View>
        <MaterialIcons
          name="arrow-right"
          color={COLORS.white}
          style={{ fontSize: 20, marginRight: 20 }}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
export default ProfileButton;
