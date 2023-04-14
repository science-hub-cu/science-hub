import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import Input from "../../components/Input";
import { signInValidation } from "../../validations/SignInValidation";
import { disappearError } from "../../utils/uiHelper";

const LoginScreen = ({ navigation, state }) => {
  /********************** states  ***************************/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  /****************  reset data when hide ***************/
  if (state === "hide") {
    if (username !== "") setUsername("");
    if (password !== "") setPassword("");
    if (Object.keys(errors).length !== 0) setErrors({});
  }

  const loginPress = () => {
    let user = {
      username,
      password,
    };
    console.log(user);
    if (
      signInValidation({ username, password }, (error) => {
        setErrors((prevState) => ({
          ...prevState,
          ...error,
        }));
      })
    ) {
      // add auth function here
      console.log("tamam");
    } else {
      console.log("no");
    }
  };
  return (
    <View>
      <View style={styles.centerAligment}>
        <Input
          width="88%"
          onChangeText={(text) => setUsername(text)}
          value={username}
          onFocus={() => disappearError("username", errors, setErrors)}
          error={errors.username}
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
          onFocus={() => disappearError("password", errors, setErrors)}
          error={errors.password}
          password
        />
        <View style={styles.buttonView}>
          <Button
            width="100%"
            title={"Login"}
            onPress={() => loginPress()}
          ></Button>
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
