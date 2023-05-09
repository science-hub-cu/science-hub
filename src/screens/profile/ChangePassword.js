/**
 * Change Password screen
 */

import React, { useState, useRef, createRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import COLORS from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import LoadingButton from "../../components/LoadingButton";
import UserService from "../../services/UserService";
import Input from "../../components/Input";
import { disappearError } from "../../utils/uiHelper";
import { isValidPassword } from "../../validations/CommonValidation";

const ChangePassword = ({ navigation }) => {
  const btn = useRef(null);
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState("");
  const addError = (error) => {
    setErrors((prevState) => ({
      ...prevState,
      ...error,
    }));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      btn.current.setLoading(false);
      // btn.current.setDisable(true);
    });
    return unsubscribe;
  }, [navigation]);

  const updatePassword = async () => {
    try {
      if (isValidPassword(oldpassword) && isValidPassword(newpassword)) {
        await UserService.changePassword({ oldpassword, newpassword });
        console.log(await getAuth().currentUser.getIdToken());
        console.log("succ");
      } else if (isValidPassword(newpassword)) {
        addError({
          password: "password must be at least 6 digits",
        });
      } else if (isValidPassword(oldpassword)) {
        addError({
          password1: "password must be at least 6 digits",
        });
      } else {
        addError({
          password: "password must be at least 6 digits",
          password1: "password must be at least 6 digits",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401)
        setInvalid("Invalid Password , password must be at least 6 digits");
      console.log(error);
    } finally {
      btn.current?.setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.content}>
            <Input
              width="88%"
              placeholder="OldPassword"
              placeholderTextColor={COLORS.gray2}
              onChangeText={(text) => setOldPassword(text)}
              value={oldpassword}
              onFocus={() => disappearError("password", errors, setErrors)}
              error={errors.password}
              password
            />
            <Input
              width="88%"
              placeholder="NewPassword"
              placeholderTextColor={COLORS.gray2}
              onChangeText={(text) => setNewPassword(text)}
              value={newpassword}
              onFocus={() => disappearError("password1", errors, setErrors)}
              error={errors.password1}
              password
            />
            <Text style={styles.error}>{invalid}</Text>
            <LoadingButton
              ref={btn}
              width="88%"
              title={"update"}
              onPress={() => updatePassword()}
              disabled={false}
            ></LoadingButton>
          </View>
        </ScrollView>
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
  content: {
    height: "100%",
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
  },

  caption: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default ChangePassword;
