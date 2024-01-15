import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import Input from "../../components/Input";
import DropdownList from "../../components/DropdownList";
import levels from "../../constants/Levels";
import Departments from "../../constants/Departments";
import { signUpValidation } from "../../validations/SignUpValidation";
import { disappearError } from "../../utils/uiHelper";
import UserService from "../../services/UserService";
import { useRef } from "react";
import LoadingButton from "../../components/LoadingButton";
import {
  useCheckAuthMutation,
  useSignUpMutation,
} from "../../services/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setCredentials, setUser } from "../../redux/AuthSlice";
import ROUTES from "../../constants/routes";
import { getUserData, storeUserData } from "../../Storage/SaveData";

const RegistrationScreen = ({ navigation, state, updateShowOverlay }) => {
  /********************** states  ***************************/
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState({ value: null, label: "" });
  const [department, setDepartment] = useState({ key: null, label: "" });
  const [errors, setErrors] = useState({});
  const btnRef = useRef(null);
  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useDispatch();
  /****************  reset data when hide ***************/
  if (state === "hide") {
    if (username !== "") setUsername("");
    if (code !== "") setCode("");
    if (level.value !== null) setLevel({ value: null, label: "" });
    if (department.key !== null) setDepartment({ key: null, label: "" });
    if (password !== "") setPassword("");
    if (Object.keys(errors).length !== 0) setErrors({});
  }
  const addError = (error) => {
    setErrors((prevState) => ({
      ...prevState,
      ...error,
    }));
  };

  /****************** ********************/

  const registerPress = async () => {
    try {
      updateShowOverlay(true);
      let user = {
        username,
        code,
        password,
        level: level.label,
        department_code: "GEN",
        department: department.label,
      };
      if (signUpValidation(user, addError)) {
        await UserService.registerNewUser(user, signUp, dispatch);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        error.response.data.errors.forEach((element) => {
          let er = {};
          er[element.param] = element.msg;
          addError(er);
          // console.log(element);
        });
      }
    } finally {
      btnRef.current?.setLoading(false);
      updateShowOverlay(false);
    }
  };
  return (
    <ScrollView>
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
        <Input
          width="88%"
          onChangeText={(text) => setCode(text)}
          value={code}
          onFocus={() => disappearError("code", errors, setErrors)}
          error={errors.code}
          keyboardType="numeric"
          placeholder="Code"
          placeholderTextColor={COLORS.gray2}
          iconName="hash"
        />
      </View>

      <DropdownList
        data={levels}
        labelField={"label"}
        valueField={"value"}
        placeholder={"Level..."}
        value={level.value}
        error={errors.level}
        onFocus={() => disappearError("level", errors, setErrors)}
        onChange={(item) => setLevel(item)}
      />
      <DropdownList
        data={Departments}
        labelField={"label"}
        valueField={"key"}
        placeholder={"Department..."}
        value={department.key}
        error={errors.department}
        onFocus={() => disappearError("department", errors, setErrors)}
        onChange={(item) => setDepartment(item)}
      />
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
          <LoadingButton
            ref={btnRef}
            title={"Register"}
            onPress={() => registerPress()}
            width="100%"
          ></LoadingButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;

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
    marginBottom: 20,
    alignItems: "center",
    width: "88%",
    marginTop: 10,
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
