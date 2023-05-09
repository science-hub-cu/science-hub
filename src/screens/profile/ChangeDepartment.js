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
import DropdownList from "../../components/DropdownList";
import levels from "../../constants/Levels";
import Departments from "../../constants/Departments";
import { disappearError } from "../../utils/uiHelper";
import {
  isValidDepartment,
  isValidLevel,
} from "../../validations/CommonValidation";

const ChangeDepartment = ({ navigation }) => {
  const btn = useRef(null);
  const [level, setLevel] = useState({ value: null, label: "" });
  const [department, setDepartment] = useState({ key: null, label: "" });
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

  const updateDep = async () => {
    try {
      if (isValidDepartment(department) && isValidLevel(level)) {
        await UserService.changeDepartment(department);
        await UserService.changeLevel(level);
      } else if (isValidDepartment(department)) {
        addError({
          level: "",
        });
      } else if (isValidLevel(level)) {
        addError({
          department: "",
        });
      } else {
        addError({
          department: "",
          level: "",
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
          contentContainerStyle={{
            minHeight: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "100%" }}>
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
          </View>
          <Text style={styles.error}>{invalid}</Text>
          <LoadingButton
            ref={btn}
            marginTop={5}
            width="90%"
            height={50}
            fontSize={20}
            title={"update"}
            onPress={() => updateDep()}
            disabled={false}
          ></LoadingButton>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  caption: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default ChangeDepartment;
