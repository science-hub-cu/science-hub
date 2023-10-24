import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>SCI-Hub</Text>
        <Text style={styles.policyText}>
          By signing in, you are agreeing to our{" "}
          <Text
            style={styles.policyLink}
            onPress={() => {
              navigation.navigate(ROUTES.TERMS_ROUTE);
            }}
          >
            Terms and Privacy Policy
          </Text>
        </Text>
      </View>
      <View style={styles.tabContainer}>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarStyle: { backgroundColor: COLORS.mainBackground },
            tabBarLabelStyle: styles.text,
          })}
          sceneContainerStyle={{ backgroundColor: COLORS.mainBackground }}
        >
          <Tab.Screen
            name="Login"
            children={() => (
              <LoginScreen updateShowOverlay={updateShowOverlay}
              showOverlay={showOverlay} />
            )}
          />

          <Tab.Screen
            name="Register"
            children={() => (
              <RegistrationScreen updateShowOverlay={updateShowOverlay}
              showOverlay={showOverlay} />
            )}
          />
      
        </Tab.Navigator>
        {showOverlay && (
        <View style={styles.overlay}>
        </View>
      )}
      </View>
      
    </View>
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
  policyText: {
    fontSize: 25,
    color: COLORS.white,
    fontFamily: "majalla",
    paddingTop: 15,
    textAlign: "center",
  },
  policyLink: {
    color: COLORS.blue,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
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
});

export default AuthScreen;
