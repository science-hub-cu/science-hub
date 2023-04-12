import React, { useState} from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import Input from "../../components/Input";

const LoginScreen = ({ navigation }) => {
  /********************** states  ***************************/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // change to error state if there is error in any field
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  const LoginPress = () => {
    let user = {
      username,
      password,
    };
    console.log(user);
    if (validate()) {
      // add auth function here
      console.log("tamam");
    } else {
      console.log("no");
    }
  };
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    return valid;
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
      <View style={styles.centerAligment}>
        <Input
          width="88%"
          onChangeText={(text) => setUsername(text)}
          value={username}
          onFocus={() => handleError(null, "name")}
          error={errors.name}
          placeholder="Username"
          placeholderTextColor={COLORS.gray2}
          iconName="account-circle-outline"
          iconLibrary="MaterialCommunityIcons"
        />
      </View>
      <View style={styles.centerAligment}>
        <Input
          width="88%"
          placeholder="Password"
          placeholderTextColor={COLORS.gray2}
          onChangeText={(text) => setPassword(text)}
          value={password}
          onFocus={() => handleError(null, "password")}
          error={errors.password}
          password
        />
        <View style={styles.buttonView}>
          <Button title={"Login"} onPress={() => LoginPress()}></Button>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  centerAligment: {
    alignItems: "center",
  },
});
