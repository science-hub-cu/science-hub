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

  const CustomTabLabel = ({ label, focused }) => (
    <Text style={[styles.text, { color: focused ? COLORS.blue : COLORS.white }]}>
      {label}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>SCI-Hub</Text>
      </View>
      <View style={styles.tabContainer}>
      <Tab.Navigator
          screenOptions={() => ({
            tabBarStyle: { backgroundColor: COLORS.mainBackground },
            tabBarLabelStyle: styles.text, 
            tabBarIndicatorStyle: { backgroundColor: COLORS.white, height: 2, width: "23%", marginLeft:28,left:25 },
          
            tabBarActiveTintColor: COLORS.blue, 
          })}
          sceneContainerStyle={{ backgroundColor: COLORS.mainBackground }}
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
});

export default AuthScreen;
