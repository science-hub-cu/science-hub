import React from "react";
import { View,StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import COLORS from "../constants/colors";
import Notifications from "../components/notifications";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
        <Ionicons name="notifications" size={32} style={styles.title} />
        <Text style={styles.title}> Notifications</Text>
      </View>
        <Notifications />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 400,
    fontSize: 32,
    fontFamily: "Trebuchet",
    marginBottom:"2%"
  },
});
