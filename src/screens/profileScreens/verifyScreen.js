import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
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
import Icon from "react-native-vector-icons/AntDesign";
import Input from "../../components/Input";
import Button from "../../components/Button";

const VerifyScreen = ({ navigation }) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const seventhInput = useRef();
  const [otp, setOtp] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });

  const verifyCode = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.topNav}>
          <Text style={styles.header}>Verify page</Text>
          <Icon
            style={styles.icon}
            name="left"
            size={25}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.caption}>
            Enter your friend code to verify him:{" "}
          </Text>
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={firstInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 1: text });
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={secondInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 2: text });
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={thirdInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 3: text });
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={fourthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  text
                    ? fifthInput.current.focus()
                    : thirdInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={fifthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  text
                    ? sixthInput.current.focus()
                    : fourthInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={sixthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  text
                    ? seventhInput.current.focus()
                    : fifthInput.current.focus();
                }}
              />
            </View>
            <View style={styles.LotpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                caretHidden={true}
                ref={seventhInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  !text && sixthInput.current.focus();
                }}
              />
            </View>
          </View>
          <Button
            marginTop={5}
            width="90%"
            fontSize={20}
            title={"Verify"}
            onPress={() => verifyCode()}
          ></Button>
        </View>
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

  topNav: {
    position: "relative",
    width: "100%",
    height: 90,
    backgroundColor: COLORS.secBackground,
  },

  header: {
    left: 50,
    top: 50,
    fontSize: 20,
    color: "#fff",
  },

  icon: {
    left: 15,
    top: 25,
  },

  content: {
    marginTop: 190,
    alignItems: "center",
  },

  caption: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.5,
    marginRight: 8,
  },
  LotpBox: {
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 22,
    color: "#fff",
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 11,
    paddingVertical: 10,
  },
});

export default VerifyScreen;
