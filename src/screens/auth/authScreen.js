import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import RegistrationScreen from "./Register";
import LoginScreen from "./Login";
const AuthScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    code: "",
    level: "",
    department: "",
    password: "",
  });
  const nameInputRef = useRef(null);
  const codeInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isRegister, setIsRegister] = useState(true);
  const [value, setValue] = useState(null);
  const [key, setKey] = useState(null);
  const [fontLoaded] = useFonts({
    majalla: require("../../assets/fonts/majalla.ttf"),
  });
  if (!fontLoaded) return null;
  // change to error state if there is error in any field
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  /* 
                            handleOnChange
     to change the state for my varables (name,code,password,level,department)
     it is make text = input; 
  */
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const resetAll = () => {
    // handleOnChange("", "name");
    // handleOnChange("", "code");
    // handleOnChange("", "password");
    // handleOnChange("", "department");
    // handleOnChange("", "level");
    // handleError(null, "name");
    // handleError(null, "code");
    // handleError(null, "password");
    // handleError(null, "level");
    // handleError(null, "department");
    // if (nameInputRef.current) {
    //   nameInputRef.current.clear();
    // }
    // if (codeInputRef.current) {
    //   codeInputRef.current.clear();
    // }
    // setKey(0);
    // setValue(0);
    // if (passwordInputRef.current) {
    //   passwordInputRef.current.clear();
    // }
  };

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
              resetAll();
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
              resetAll();
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
