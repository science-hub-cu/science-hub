/**
 * Verify screen
 * @author abdelrahman aboelyaziz , Mahmoud atef, Hazem Muhammed
 * @desc page dependence to library (https://www.npmjs.com/package/react-native-otp-textinput?activeTab=readme)
 */

import React, { useState, useRef, useEffect } from "react";
import OTPTextInput from "react-native-otp-textinput";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import COLORS from "../../constants/colors";
import LoadingButton from "../../components/LoadingButton";
import UserService from "../../services/UserService";

const COUNT_OF_DIGITS = 7;
const VerifyScreen = ({ navigation }) => {
  const button = useRef(null);
  const otpInput = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      button.current.setLoading(false);
      button.current.setDisable(true);
      otpInput.current.clear();
    });
    return unsubscribe;
  }, [navigation]);

  const verifyCode = () => {
    // button.current.setLoading(false);
    const code = otpInput.current.state.otpText.join("");
    console.log(code);
    // UserService.verifyUser()
  };
  const handleTextChange = (text) => {
    if (text.length === COUNT_OF_DIGITS) {
      button.current.setLoading(false);
      Keyboard.dismiss();
    } else button.current.setDisable(true);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1, paddingBottom: "10%" }}
          behavior={Platform.OS === "ios" ? "height" : "postion"}
        >
          <View style={styles.content}>
            <Text style={styles.caption}>
              Enter your colleagues's code to verify him:{" "}
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
            <View style={{ height: 15 }} />
            <LoadingButton
              ref={button}
              marginTop={5}
              width="90%"
              height={50}
              fontSize={14}
              title={"Verify"}
              onPress={() => verifyCode()}
              disabled={true}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
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
    fontSize: 14,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign: "center",
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
