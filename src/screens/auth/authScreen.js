import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import COLORS from "../../constants/colors";
import RegistrationScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import ROUTES from "../../constants/routes";

const Tab = createMaterialTopTabNavigator();

const AuthScreen = ({ navigation }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const updateShowOverlay = (value) => {
    setShowOverlay(value);
  };

  const CustomTabLabel = ({ label, focused }) => (
    <Text
      style={[styles.text, { color: focused ? COLORS.blue : COLORS.white }]}
    >
      {label}
    </Text>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/icons/SH-LogoWhite.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.tabContainer}>
          <Tab.Navigator
            screenOptions={() => ({
              tabBarStyle: {
                backgroundColor: COLORS.mainBackground,
                shadowOpacity: 0,
              },
              tabBarLabelStyle: styles.text,
              tabBarIndicatorStyle: {
                backgroundColor: COLORS.white,
                height: 2,
                width: "23%",
                marginLeft: 28,
                left: 25,
              },
            })}
            sceneContainerStyle={{ backgroundColor: COLORS.mainBackground }}
            tabBarAndroidRipple={{ color: "transparent", borderless: true }}
          >
            <Tab.Screen
              name="Login"
              options={{
                tabBarLabel: (props) => (
                  <CustomTabLabel label="Login" focused={props.focused} />
                ),
              }}
            >
              {() => (
                <LoginScreen
                  navigation={navigation}
                  updateShowOverlay={updateShowOverlay}
                  showOverlay={showOverlay}
                />
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Register"
              options={{
                tabBarLabel: (props) => (
                  <CustomTabLabel label="Register" focused={props.focused} />
                ),
              }}
            >
              {() => (
                <RegistrationScreen
                  navigation={navigation}
                  updateShowOverlay={updateShowOverlay}
                  showOverlay={showOverlay}
                />
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
        {showOverlay && <View style={styles.overlay}></View>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: "15%",
  },
  headerText: {
    fontSize: 32,
    color: COLORS.white,
  },

  tabContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: COLORS.white,
    fontFamily: "majalla",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default AuthScreen;
