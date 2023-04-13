import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Directions } from "react-native-gesture-handler";
import COLORS from "../../constants/colors";
import RegistrationScreen from "./Register";
import LoginScreen from "./Login";

const screenWidth = Dimensions.get("window").width;

const AuthScreen = ({ navigation }) => {
  const [isRegister, setIsRegister] = useState(false);

  const { width, height } = Dimensions.get("window");

  const [sliderLocation, setSliderLocation] = useState(0);

  const setSliderPage = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const max = (width * 40) / 100;
    let v = (x * 40) / 100;

    setIsRegister(v >= max / 2 ? 1 : 0);

    setSliderLocation(Math.min(max, Math.round(v)));
    console.log(v);
    console.log(max);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View>
          <View>
            <Text style={styles.headerText}>
              {isRegister ? "Register" : "Login"}
            </Text>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                color: COLORS.white,
                fontWeight: 400,
                fontFamily: "majalla",
                paddingTop: 15,
              }}
            >
              {"  "}By signing in you are agreeing
            </Text>
            <Text style={styles.text}>
              {"  "}our
              <Text style={{ color: COLORS.blue }}>
                {" "}
                Term and privacy policy
              </Text>
            </Text>
          </View>
          <View style={styles.rowView}>
            <Text
              style={{
                textAlign: "center",
                color: isRegister ? COLORS.white : COLORS.blue,
                fontFamily: "majalla",
                fontSize: 25,
              }}
            >
              Login
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: isRegister ? COLORS.blue : COLORS.white,
                fontFamily: "majalla",
                fontSize: 25,
                marginLeft: "10%",
              }}
            >
              Register
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={[styles.paginationDots, { marginLeft: sliderLocation }]}
            />
          </View>

          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={setSliderPage}
          >
            <View style={{ width: screenWidth }}>
              <LoginScreen />
            </View>
            <View style={{ width: screenWidth }}>
              <RegistrationScreen />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  headerText: {
    fontSize: 32,
    textAlign: "center",
    color: COLORS.white,
    fontWeight: 400,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    color: COLORS.white,
    fontWeight: 400,
    fontFamily: "majalla",
  },
  buttonView: {
    paddingTop: 5,
    alignItems: "center",
  },
  rowView: {
    paddingTop: 15,
    marginLeft: "32.25%",
    flexDirection: "row",
  },
  paginationDots: {
    marginRight: "25%",
    height: 2,
    width: "18%",
    backgroundColor: "#fff",
  },
});
export default AuthScreen;
