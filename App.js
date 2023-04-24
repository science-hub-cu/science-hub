import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./src/screens/auth/authScreen";
import HomeScreen from "./src/screens/Home";
import { StyleSheet } from "react-native";
import COLORS from "./src/constants/colors";
import RetryScreen from "./src/screens/retry";
import NetInfo from "@react-native-community/netinfo";
import "./src/config/firebaseConfig";
import { useFonts } from "expo-font";
import VerifyScreen from "./src/screens/profileScreens/verifyScreen";
import Profile from "./src/screens/profile/Profile";
import { onAuthStateChanged } from "@firebase/auth";
import { getAuth } from "@firebase/auth";
import { AuthContext, AuthContextProvider } from "./src/context/AuthContext";
import ROUTES from "./src/constants/routes";
import { useContext } from "react";
import { CustomizedDrawer, Drawer } from "./src/layouts/DrawerNavigator";
import { StatusBar, I18nManager } from "react-native";

const Stack = createStackNavigator();
// hide status bar
StatusBar.setHidden(true);
//RTL 
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
const NotAuthedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.AUTH_ROUTE} component={AuthScreen} />
    </Stack.Navigator>
  );
};

const AuthedStack = () => {
  return (
    <CustomizedDrawer>
      <Drawer.Screen name={ROUTES.PROFILE_ROUTE} component={Profile} />
      <Drawer.Screen name={ROUTES.HOME_ROUTE} component={HomeScreen} />
      <Drawer.Screen
        name={ROUTES.VERIFY_ROUTE}
        component={VerifyScreen}
        options={{ headerShown: false }}
      />
    </CustomizedDrawer>
  );
};

const App = () => {
  const [isNetConnected, setIsNetConnected] = useState(false);
    state = { rtl: false };
  // const { signIn, sigOut, user } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsNetConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []); // add empty array to run only once

  /******************* Loading resourses **************************/
  const [fontLoaded] = useFonts({
    majalla: require("./src/assets/fonts/majalla.ttf"),
    Trebuchet: require("./src/assets/fonts/Trebuchet-MS-Italic.ttf"),
    TrebuchetMS: require("./src/assets/fonts/Trebuchet-MS-Italic.ttf"),
  });
  if (!fontLoaded) return null;

  if (!isNetConnected) {
    return <RetryScreen />;
  }

  onAuthStateChanged(getAuth(), (user) => {
    console.log("-------Auth changed-----");
    console.log(user);
    setUser(user);
    // if (user) setUser(user);
    // else sigOut();
  });
 const rtlText = this.state.rtl && {
   textAlign: "right",
   writingDirection: "rtl",
 };
 const rtlView = this.state.rtl && { flexDirection: "row-reverse" };
  return (
    <AuthContext.Provider value={{ user }}>
      <NavigationContainer>
        {user ? <AuthedStack /> : <NotAuthedStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
