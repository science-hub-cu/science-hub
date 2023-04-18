import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { useFonts } from "expo-font";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import COLORS from "../constants/colors";
import HomeScreen from "../screens/Home";
import VerifyScreen from "../screens/profileScreens/verifyScreen";
export const Drawer = createDrawerNavigator();
export const CustomizedDrawer = ({ children }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: "85%",
          backgroundColor: COLORS.navBarBackground,
          borderRightWidth: 10,
          borderRightColor: COLORS.mainBackground,
        },
        drawerType: "slide",
      }}
    >
      {children}
    </Drawer.Navigator>
  );
};
const CustomDrawerContent = (props) => {
  const [fontLoaded] = useFonts({
    Trebuchet: require("../assets/fonts/trebuc.ttf"),
  });
  if (!fontLoaded) return null;
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="notifications"
          size={32}
          style={{ color: COLORS.white, marginTop: "2%" }}
        />
        <Text style={styles.title}> Notifications</Text>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 400,
    fontSize: 32,
    fontFamily: "Trebuchet",
  },
});
// export default CustomizedDrawer;
