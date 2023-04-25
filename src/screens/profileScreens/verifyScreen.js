/**
 * Verify screen
 * @author abdelrahman aboelyaziz , Mahmoud atef
 * @desc page dependence to library (https://www.npmjs.com/package/react-native-otp-textinput?activeTab=readme)
 */

import React, { useState, useRef, createRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import OTPTextInput from "react-native-otp-textinput";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import COLORS from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import LoadingButton from "../../components/LoadingButton";
import UserService from "../../services/UserService";

const COUNT_OF_DIGITS = 7;
const VerifyScreen = ({ navigation }) => {
  const btn = useRef(null);
  const otpInput = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      btn.current.setLoading(false);
      btn.current.setDisable(true);
      otpInput.current.clear();
    });
    return unsubscribe;
  }, [navigation]);

  const verifyCode = () => {
    // btn.current.setLoading(false);
    const code = otpInput.current.state.otpText.join("");
    console.log(code);
    // UserService.verifyUser()
  };
  const handleTextChange = (text) => {
    if (text.length === COUNT_OF_DIGITS) {
      btn.current.setLoading(false);
      Keyboard.dismiss();
    } else btn.current.setDisable(true);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.content}>
            <Text style={styles.caption}>
              Enter your friend code to verify him:{" "}
            </Text>
            <OTPTextInput
              inputCount={COUNT_OF_DIGITS}
              textInputStyle={styles.otpBox}
              containerStyle={styles.otpContainer}
              tintColor={COLORS.blue}
              offTintColor={COLORS.white}
              handleTextChange={handleTextChange}
              ref={otpInput}
            />
            <LoadingButton
              ref={btn}
              marginTop={5}
              width="90%"
              height={50}
              fontSize={20}
              title={"Verify"}
              onPress={() => verifyCode()}
              disabled={true}
            ></LoadingButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  content: {
    height: "100%",
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  caption: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  otpContainer: {
    justifyContent: "space-evenly",
    width: "100%",
    padding: 5,
    marginBottom: 10,
  },
  otpBox: {
    borderColor: "#fff",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderBottomEndRadius: 5,
    margin: 0,
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.white,
    width: `${100 / (COUNT_OF_DIGITS + 1)}%`,
    aspectRatio: 1 / 1,
  },
});

export default VerifyScreen;
