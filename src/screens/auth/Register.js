import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { useFonts } from "expo-font";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import DropdownList from "../../components/DropdownList";
import levels from "../../constants/Levels";
import Departments from "../../constants/Departments";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    code: "",
    level: "",
    department: "",
    password: "",
  });
  const nameInputRef = useRef(null);
  const codeInputRef = useRef(null);
  const levelInputRef = useRef(null);
  const departmntInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isRegister, setIsRegister] = useState(true);
  const [value, setValue] = useState(null);
  const [key, setKey] = useState(null);
  const [fontLoaded] = useFonts({
    majalla: require("../../assets/fonts/majalla.ttf"),
  });
  if (!fontLoaded) return null;
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
    if (!inputs.code) {
      handleError("please enter your code", "code");
      valid = false;
    } else if (!inputs.code.match(/^[0-9]+$/)) {
      handleError("please enter valid code", "code");
      valid = false;
    } else if (inputs.code.length != 7) {
      handleError("the code must be 7 numbers", "code");
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
    handleOnChange("", "name");
    handleOnChange("", "code");
    handleOnChange("", "password");
    handleOnChange("", "department");
    handleOnChange("", "level");
    handleError(null, "name");
    handleError(null, "code");
    handleError(null, "password");
    handleError(null, "level");
    handleError(null, "department");
    if (nameInputRef.current) {
      nameInputRef.current.clear();
    }
    if (codeInputRef.current) {
      codeInputRef.current.clear();
    }
    setKey(0);
    setValue(0);
    // if (levelInputRef.current) {
    //   levelInputRef.current.clear();
    // }
    // if (departmntInputRef.current) {
    //   departmntInputRef.current.clear();
    // }
    if (passwordInputRef.current) {
      passwordInputRef.current.clear();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
          }}
        >
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
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: "majalla",
          }}
        >
          {"  "}our
          <Text style={{ color: COLORS.blue }}> Term and privacy policy</Text>
        </Text>
        <View
          style={{
            paddingTop: "10%",
            marginLeft: "32.25%",
            flexDirection: "row",
          }}
        >
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
            imageSource={require("../../assets/images/User.png")}
          ></Input>
          {isRegister && (
            <Input
              ref={codeInputRef}
              width="88%"
              onChangeText={(text) => handleOnChange(text, "code")}
              onFocus={() => handleError(null, "code")}
              error={errors.code}
              keyboardType="numeric"
              placeholder="Code"
              placeholderTextColor={COLORS.gray2}
              iconName="hash"
            ></Input>
          )}
        </View>
        {isRegister && (
          <DropdownList
            ref={levelInputRef}
            data={levels}
            labelField={"label"}
            valueField={"value"}
            placeholder={"Level..."}
            value={value}
            onChange={(item) => {
              setValue(item.value);
              handleOnChange(item.label.toString(), "level");
            }}
          />
        )}
        {isRegister && (
          <DropdownList
            ref={departmntInputRef}
            data={Departments}
            labelField={"label"}
            valueField={"key"}
            placeholder={"Department..."}
            value={key}
            error={errors.department}
            onChange={(item) => {
              setKey(item.key);
              handleOnChange(item.label.toString(), "department");
            }}
          />
        )}
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
        </View>
        <View style={{ paddingTop: 5, alignItems: "center" }}>
          <Button
            title={isRegister ? "Register" : "Login"}
            onPress={() => {
              if (validate()) {
              }
              // console.log(inputs.name);
              // console.log(inputs.department);
              // console.log(inputs.level);
            }}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
});
