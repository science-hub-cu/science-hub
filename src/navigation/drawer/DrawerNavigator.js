import React from "react";
import CustomDrawerContent from "./CustomDrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import COLORS from "../../constants/colors";
export const Drawer = createDrawerNavigator();
export const DrawerNavigator = ({ children }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleStyle: {
          color: COLORS.white,
          textAlign: "center",
        },
        headerStyle: {
          backgroundColor: COLORS.secBackground,
          // height: 65,
        },
        headerTintColor: COLORS.white,
        drawerIcon: {
          color: COLORS.white,
          backgroundColor: COLORS.white,
        },
        drawerStyle: {
          width: "85%",
          backgroundColor: COLORS.navBarBackground,
          borderRightWidth: 10,
          borderRightColor: COLORS.mainBackground,
        },
        drawerType: "slide",
        headerShadowVisible: false,
      }}
    >
      {children}
    </Drawer.Navigator>
  );
};
