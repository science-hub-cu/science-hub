import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import COLORS from "../constants/colors";

import HomeScreen from "../screens/Home";
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "85%",
        },
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
  
};
const CustomDrawerContent=(props)=> {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: COLORS.navBarBackground }}
    >
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="notifications" size={32} style={{color:COLORS.white,marginTop:"2%"}} />
        <Text style={styles.title}>Notifications</Text>
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 400,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
});
export default MyDrawer;
