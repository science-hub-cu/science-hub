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
 
  const [sliderLocation, setSliderLocation] = useState(width * (25 / 100));
 
  const scrollRef = useRef(null);
 
  const setSliderPage = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const max = (2*width) * (25 / 100);
    let v = (x + width) * (25 / 100);
 
    setIsRegister(x >= width / 2 ? 1 : 0);
 
    setSliderLocation(Math.min(max, Math.round(v)));
    //console.log(v);
    // console.log(max);
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
                flex: 1,
                textAlign: "center",
                color: isRegister ? COLORS.white : COLORS.blue,
                fontFamily: "majalla",
                fontSize: 25,
              }}
              onPress={() => {
                scrollRef.current.scrollTo({ x: 0 });
              }}
            >
              Login
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                color: isRegister ? COLORS.blue : COLORS.white,
                fontFamily: "majalla",
                fontSize: 25,
              }}
              onPress={() => {
                scrollRef.current.scrollTo({ x: width });
              }}
            >
              Register
            </Text>
          </View>
          <View>
            <View
              style={[styles.paginationDots, { marginLeft: sliderLocation }]}
            />
          </View>
 
          <ScrollView
            ref={scrollRef}
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
              <RegistrationScreen state={isRegister?"show":"hide"} />
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
    marginLeft: "25%",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
  paginationDots: {
    height: 2,
    width: "25%",
    backgroundColor: "#fff",
  },
});
export default AuthScreen;
