import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, Alert } from "react-native-safe-area-context";
import COLORS from "../../assets/colors";
import { useFonts } from "expo-font";
import Input from "../../components/input";
import Button from "../../components/Button";
import LoginScreen from "./Login";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const levels = [
  { label: "level 1", value: "1" },
  { label: "level 2", value: "2" },
  { label: "level 3", value: "3" },
  { label: "level 4", value: "4" },
];

const Departments = [
  { label: "Computer Scince", key: "1" },
  { label: "Chem", key: "2" },
  { label: "Ph", key: "3" },
  { label: "math", key: "4" },
  { label: "math/CS", key: "5" },
  { label: "Bio", key: "6" },
  { label: "keko", key: "7" },
];

const RegistrationScreen = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    code: "",
    level: "",
    department: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const [value, setValue] = useState(null);
  const [key, setKey] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.name) {
      handleError("please enter your name", "name");
      valid = false;
    }
    if (!inputs.name) {
      handleError("please enter your name", "name");
      valid = false;
    }
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
    if (!inputs.password) {
      handleError("please enter your password", "password");
      valid = false;
    } else if (inputs.password.length < 6) {
      handleError("password is to small", "password");
      valid = false;
    }
    return valid;
  };
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

  const [fontLoaded] = useFonts({
    majalla: require("../../assets/fonts/majalla.ttf"),
  });
  if (!fontLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: "majalla",
            paddingTop: 15,
          }}
        >
          {"  "}By signing in you are agreeing
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: "majalla",
          }}
        >
          {"  "}our
          <Text style={{ color: COLORS.blue }}> Term and privacy policy</Text>
        </Text>
        <View
          style={{ paddingTop: 20, marginLeft: "32.25%", flexDirection: "row" }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              fontFamily: "majalla",
              fontSize: 25,
            }}
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            Login
          </Text>
          <View
            style={{
              marginLeft: "10%",
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: COLORS.blue,
                fontFamily: "majalla",
                fontSize: 25,
              }}
            >
              Register
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Input
            width="88%"
            onChangeText={(text) => handleOnChange(text, "name")}
            onFocus={() => handleError(null, "name")}
            error={errors.name}
            placeholder="Username"
            placeholderTextColor={COLORS.gray2}
            imageSource={require("../../assets/images/User.png")}
          ></Input>
          <Input
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

        <View style={{ alignItems: "center", marginTop: 25 }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={levels}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Level..."
            search={0}
            // searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderItem={renderItem}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Departments}
            maxHeight={300}
            labelField="label"
            valueField="key"
            placeholder="Department..."
            search={0}
            // searchPlaceholder="Search..."
            value={key}
            onChange={(item) => {
              setKey(item.key);
            }}
            renderItem={renderItem}
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Input
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
        </View>
        <View style={{ paddingTop: 5, alignItems: "center" }}>
          <Button
            title="Register"
            onPress={() => {
              if (validate()) {
              }
            }}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: COLORS.white,
    height: 55,
    width: "88%",
    backgroundColor: COLORS.secBackground,
    borderRadius: 9,
    padding: 12,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secBackground,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.gray2,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#fff",
  },
});
