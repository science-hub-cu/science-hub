import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView,Image } from "react-native";
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
import * as ImagePicker from "expo-image-picker";


const ForgetPasswordScreen = ({ navigation, state }) => {
  /********************** states  ***************************/
  const [mail, setMail] = useState("");
  const [code, setCode] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [errors, setErrors] = useState({});
  const btnRef = useRef(null);
  /****************  reset data when hide ***************/
  if (state === "hide") {
    if (mail !== "") setMail("");
    if (code !== "") setCode("");
    if (Object.keys(errors).length !== 0) setErrors({});
  }

   const handleChooseImage = async () => {
     let result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.Images,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });

     if (!result.canceled) {
       setImageUri(result.assets[0].uri);
     }
   };

  /****************** ********************/

  const onPressRegister = () => {
    // Define your registerPress function here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: "6%" }}>
        <Text style={{ color: COLORS.white, fontSize: 16 }}>
          Fill your information:
        </Text>
        <Text style={{ color: COLORS.white, fontSize: 10 }}>
          By filling your information and submit, We will mail you an new
          password in 3 Days to login again and you will change the password to
          setup your security.
        </Text>
      </View>
      <View style={styles.centerAligment}>
        <Input
          width="88%"
          onChangeText={(text) => setCode(text)}
          value={code}
          // onFocus={() => disappearError("code", errors, setErrors)}
          // error={errors.code}
          keyboardType="numeric"
          placeholder="Code"
          placeholderTextColor={COLORS.gray2}
          iconName="hash"
        />
        <Input
          width="88%"
          onChangeText={(text) => setMail(text)}
          value={mail}
          placeholder="mail"
          placeholderTextColor={COLORS.gray2}
          iconName="mail"
        />
      </View>
      <View style={{}}>
        <View style={styles.imageView}>
          {imageUri ? (
            <Image
              style={styles.selectedImage}
              source={{ uri: imageUri }}
            ></Image>
          ) : (
            <Image
              style={styles.image}
              source={require("../../assets/images/uplodeImage.png")}
            ></Image>
          )}
          <Button
            title={"Upload Image"}
            fontSize={13}
            width="30%"
            height="20%"
            backgroundColor={COLORS.graish}
            onPress={handleChooseImage}
            opacity={0.2}
            style={{alignItems:"center"}}
          />
        </View>
        <View style={styles.buttonView}>
          <LoadingButton
            ref={btnRef}
            title={"Submit"}
            onPress={onPressRegister}
            width="100%"
          ></LoadingButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    paddingTop: "20%",
  },
  headerText: {
    fontSize: 32,
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "400",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "400",
    fontFamily: "majalla",
  },
  buttonView: {
    paddingTop: 5,
    marginBottom: 20,
    alignItems: "center",
    width: "88%",
    marginTop: 10,
    marginHorizontal:"6%"
  },
  rowView: {
    paddingTop: "10%",
    marginLeft: "32.25%",
    flexDirection: "row",
  },
  centerAligment: {
    alignItems: "center",
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  scrollView: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  headericon: {
    marginTop: "3%",
    paddingLeft: "3%",
  },
  text: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
  textInput: {
    fontSize: 20,
    color: COLORS.white,
    paddingLeft: "3%",
    maxHeight: 300,
    fontSize: 20,
  },
  textInputView: {
    height: "40%",
    paddingRight: "3%",
    paddingTop: "3%",
  },
  image: {
    justifyContent: "center",
    marginHorizontal: "50%",
  },
  selectedImage: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
  },
});
