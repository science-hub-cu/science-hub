import React, { useState, useRef } from "react";
import { View,StyleSheet,Keyboard } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import { useFonts } from "expo-font";
import Input from "../../components/Input";
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
      if (isRegister) {
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
        if (!inputs.level) {
          handleError("please choose your level", "level");
          valid = false;
        }
        if (!inputs.department) {
          handleError("please choose your department", "department");
          valid = false;
        }
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
      </View>
        <DropdownList
          ref={levelInputRef}
          data={levels}
          labelField={"label"}
          valueField={"value"}
          placeholder={"Level..."}
          value={value}
          error={errors.level}
          onChange={(item) => {
            setValue(item.value);
            handleError(null, "level");
            handleOnChange(item.label.toString(), "level");
          }}
        />
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
            handleError(null, "department");
            handleOnChange(item.label.toString(), "department");
          }}
        />
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
            title={"Register"}
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
    width:"88%"
  },
  rowView: {
    paddingTop: "10%",
    marginLeft: "32.25%",
    flexDirection: "row",
  },
});
export default RegistrationScreen;
