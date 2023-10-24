import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LoadingButton from "../../components/LoadingButton";
import COLORS from "../../constants/colors";
import Input from "../../components/Input";
import { signInValidation } from "../../validations/SignInValidation";
import { disappearError } from "../../utils/uiHelper";
import UserService from "../../services/UserService";
import { getAuth } from "@firebase/auth";
import { Text } from "react-native";

const LoginScreen = ({ navigation, state, updateShowOverlay }) => {
  /********************** states  ***************************/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState("");
  const btnRef = useRef(null);

  /****************  reset data when hide ***************/
  if (state === "hide") {
    if (username !== "") setUsername("");
    if (password !== "") setPassword("");
    if (Object.keys(errors).length !== 0) setErrors({});
    if (Object.keys(invalid).length !== 0) setInvalid("");
  }

  const addError = (error) => {
    setErrors((prevState) => ({
      ...prevState,
      ...error,
    }));
  };

  /**************** *******************************/

  const loginPress = async () => {
    try {
      updateShowOverlay(true);
      let user = {
        username,
        password,
      };
      if (signInValidation(user, addError)) {
        await UserService.signInUser(username, password);
        console.log(await getAuth().currentUser.getIdToken());
      }
    } catch (error) {
      if (error.response && error.response.status === 401)
        setInvalid("Invalid Username or Password");
      console.log(error);
    } finally {
      btnRef.current?.setLoading(false);
      updateShowOverlay(false);
    }
  };
  return (
    <View style={{ marginBottom: 20 }}>
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
        <Text style={styles.error}>{invalid}</Text>
        <View style={styles.buttonView}>
          <LoadingButton
            ref={btnRef}
            width="100%"
            title={"Login"}
            onPress={() => loginPress()}
          ></LoadingButton>
          <TouchableOpacity>
            <Text style={styles.forgetPassword}>Forget my password</Text>
          </TouchableOpacity>
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
    paddingTop: 0,
    marginTop: 0,
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
  error: {
    color: COLORS.red,
    marginVertical: 5,
    marginLeft: "6%",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  forgetPassword: {
    paddingTop: "2%",
    color: COLORS.blue,
  },
});
