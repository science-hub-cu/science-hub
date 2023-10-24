import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import COLORS from "../../constants/colors";
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

const ChangeDepartmentOrLevelScreen = ({ navigation }) => {
  const btn = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false); // overlay
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

  const updateDepLev = async () => {
    try {
      // console.log(1);
      setShowOverlay(true); // Show the overlay
      if (isValidDepartment(department.label) && isValidLevel(level.label)) {
        // console.log(2);
        await UserService.changeDepartment(department.label);
        await UserService.changeLevel(level.label);
      } else if (isValidDepartment(department.label)) {
        // console.log(3);
        addError({
          level: "enter your level",
        });
      } else if (isValidLevel(level.label)) {
        // console.log(4);
        addError({
          department: "enter your department",
        });
      } else {
        // console.log(5);
        addError({
          department: "Enter your department",
          level: "Enter your level",
        });
      }
    } catch (error) {
      // console.log(6);
      if (error.response && error.response.status === 401){
        // console.log(7);
        // setInvalid("please choose your department and level ");
      }
      console.log(error);
    } finally {
      btn.current?.setLoading(false);
      setShowOverlay(false); // Hide the overlay

    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {showOverlay && <View style={styles.overlay}></View>}
      <View>
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
        <Text style={styles.error}>{invalid}</Text>
        <View style={styles.Button}>
          <LoadingButton
            ref={btn}
            marginTop={5}
            width="90%"
            height={50}
            fontSize={20}
            title={"update"}
            onPress={() => updateDepLev()}
            disabled={false}
          ></LoadingButton>
        </View>
      </View>
    </SafeAreaView>
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
  overlay: {
    position: "absolute",
    height: "200%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  Button: { alignItems: "center" },
});

export default ChangeDepartmentOrLevelScreen;
