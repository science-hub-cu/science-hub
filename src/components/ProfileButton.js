import React from "react";
import { TouchableNativeFeedback, Text, View } from "react-native";
import COLORS from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Changeusernameicon,
  Changepassword,
  Changedepartment,
  Verifyfriend,
  Savedposts,
  Helpcenter,
  Deleteacc,
  Reportuser,
  Logout,
} from "./IconLibrary";
const Myicon = (iconname) => {
  iconname = iconname.iconname;
  let content;
  if (iconname == "Cus") {
    content = <Changeusernameicon />;
  } else if (iconname == "Cpass") {
    content = <Changepassword />;
  } else if (iconname == "Cdep") {
    content = <Changedepartment />;
  } else if (iconname == "VF") {
    content = <Verifyfriend />;
  } else if (iconname == "SP") {
    content = <Savedposts />;
  } else if (iconname == "HC") {
    content = <Helpcenter />;
  } else if (iconname == "DA") {
    content = <Deleteacc />;
  } else if (iconname == "RU") {
    content = <Reportuser />;
  } else {
    content = (
      <MaterialIcons
        name="logout"
        color={COLORS.white}
        style={{ fontSize: 25 }}
      />
    );
  }
  return content;
};
const ProfileButton = ({ title, iconname, onPress = () => {} }) => {
  console.log(iconname);
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingVertical: 8,
          // marginVertical: 10,
          minHeight: 18,
          // height: "11%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Myicon iconname={iconname} />
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
