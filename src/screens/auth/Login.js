import React, { useState, useRef } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import { useFonts } from "expo-font";
import Input from "../../components/Input";
const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isRegister, setIsRegister] = useState(true);
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
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (inputs.name === "") {
      handleError("please enter your name", "name");
      valid = false;
    } else if (!inputs.name.match(/^[A-Za-z]+$/)) {
      handleError("your name should contains only letters", "name");
      valid = false;
    }
    if (!inputs.password) {
      handleError("please enter your password", "password");
      valid = false;
    } else if (inputs.password.length < 6) {
      handleError("password is to small", "password");
      valid = false;
    }
    return valid;
  };
  return (
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Input
          ref={nameInputRef}
          width="88%"
          onChangeText={(text) => handleOnChange(text, "name")}
          onFocus={() => handleError(null, "name")}
          error={errors.name}
          placeholder="Username"
          placeholderTextColor={COLORS.gray2}
          iconName="account-circle-outline"
          iconLibrary="MaterialCommunityIcons"
        ></Input>
      </View>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <Input
          ref={passwordInputRef}
          width="88%"
          placeholder="Password"
          placeholderTextColor={COLORS.gray2}
          onChangeText={(text) => {
            handleOnChange(text, "password");
          }}
          onFocus={() => handleError(null, "password")}
          error={errors.password}
          password
        ></Input>
        <View style={styles.buttonView}>
          <Button
            title={"Login"}
            onPress={() => {
              if (validate()) {
                // add auth function here
                console.log("tamam");
              } else {
                console.log("no");
              }
            }}
          ></Button>
        </View>
      </View>
    </View>
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
    width: "88%",
  },
  rowView: {
    paddingTop: "10%",
    marginLeft: "32.25%",
    flexDirection: "row",
  },
});
export default LoginScreen;
