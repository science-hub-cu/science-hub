import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import RegistrationScreen from "./Register";
import LoginScreen from "./Login";
const AuthScreen = ({ navigation }) => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <Text style={{ color: COLORS.blue }}> Term and privacy policy</Text>
        </Text>
        <View style={styles.rowView}>
          <Text
            style={{
              textAlign: "center",
              color: isRegister ? COLORS.white : COLORS.blue,
              fontFamily: "majalla",
              fontSize: 25,
              borderBottomWidth: !isRegister ? 1 : 0,
              borderBottomColor: COLORS.white,
            }}
            onPress={() => {
              setIsRegister(false);
            //   resetAll();
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
              borderBottomWidth: isRegister ? 1 : 0,
              borderBottomColor: COLORS.white,
            }}
            onPress={() => {
              setIsRegister(true);
            //   resetAll();
            }}
          >
            Register
          </Text>
        </View>
        {isRegister ? <RegistrationScreen /> : <LoginScreen />}
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
    paddingTop: "10%",
    marginLeft: "32.25%",
    flexDirection: "row",
  },
});
export default AuthScreen;
