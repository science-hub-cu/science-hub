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
       <View>
       <Text style={styles.heading}>Report User</Text>
       </View>
        <View style={styles.formContainer}>
          <Input
            width="88%"
            onChangeText={(text) => setCode(text)}
            value={code}
            placeholder="Code"
            placeholderTextColor={COLORS.gray2}
          />
          <View style={{ width: "100%" }}>
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
          <View style={{height:20}}/>
          <LoadingButton
            ref={btn}
            width="90%"
            height={50}
            fontSize={14}
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
    height:"100%",
    backgroundColor: "#33363F",
    padding:5
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical:5
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
