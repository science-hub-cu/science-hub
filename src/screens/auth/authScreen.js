import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import COLORS from "../../constants/colors";
import RegistrationScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import ROUTES from "../../constants/routes";

const screenWidth = Dimensions.get("window").width;

const AuthScreen = ({ navigation }) => {
const [isRegister, setIsRegister] = useState(false);
const [showOverlay, setShowOverlay] = useState("auto");

  const { width } = Dimensions.get("window");

  const [sliderLocation, setSliderLocation] = useState(width * (25 / 100));

  const scrollRef = useRef(null);

  const setSliderPage = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const max = 2 * width * (25 / 100);
    let v = (x + width) * (25 / 100);

    setIsRegister(x >= width / 2 ? 1 : 0);

    setSliderLocation(Math.min(max, Math.round(v)));
  };
  const updateShowOverlay = (value) => {
    setShowOverlay(value);
  };

  // Conditional styles for terms text
  const termsTextStyle = {
    flex: 1,
    textAlign: "center",
    color: isRegister ? COLORS.white : COLORS.blue,
    fontFamily: "majalla",
    fontSize: 25,
  };

  return (
    <SafeAreaView style={styles.container} pointerEvents={showOverlay}>
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
                fontWeight: "400",
                fontFamily: "majalla",
                paddingTop: 15,
              }}
            >
              {"  "}By signing in you are agreeing
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={styles.text}>our </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.TERMS_ROUTE);
                }}
              >
                <Text style={[styles.text, { color: COLORS.blue }]}>
                  Term and privacy policy
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[{ flexDirection: "row" }, styles.text]}></View>
          </View>
          <View style={styles.rowView}>
            <Text
              style={termsTextStyle}
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
              <LoginScreen
                state={isRegister ? "hide" : "show"}
                updateShowOverlay={updateShowOverlay}
              />
            </View>
            <View style={{ width: screenWidth }}>
              <RegistrationScreen
                state={isRegister ? "show" : "hide"}
                updateShowOverlay={updateShowOverlay}
              />
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
    marginTop: "5%",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    color: COLORS.white,
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
