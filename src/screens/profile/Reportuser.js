import React, { useState, useEffect, useRef } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import DropdownList from "../../components/DropdownList";
import Input from "../../components/Input";
import LoadingButton from "../../components/LoadingButton";
import Reasons from "../../constants/Reasons";
import COLORS from "../../constants/colors";
const Reportuser = ({ navigation }) => {
  const btn = useRef(null);
  const [code, setCode] = useState("");
  const [res, setRes] = useState("");
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      btn.current.setLoading(false);
      // btn.current.setDisable(true);
    });
    return unsubscribe;
  }, [navigation]);
  const send = () => {
    console.log(code);
    console.log(res);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Report User</Text>
        <View style={styles.formContainer}>
          <Input
            width="88%"
            onChangeText={(text) => setCode(text)}
            value={code}
            placeholder="Code"
            placeholderTextColor={COLORS.gray2}
          />
          <View style={{ width: "100%", marginBottom: 10 }}>
            <DropdownList
              data={Reasons}
              labelField={"label"}
              valueField={"value"}
              placeholder={"reason ..."}
              value={Reasons.value}
              onFocus={() => disappearError("reason", errors, setErrors)}
              onChange={(item) => setRes(item)}
            />
          </View>
          <LoadingButton
            ref={btn}
            width="90%"
            height={50}
            fontSize={20}
            title={"Report"}
            onPress={() => send()}
            disabled={true}
          ></LoadingButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33363F",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    marginVertical: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dropDown: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007aff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Reportuser;
