import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../constants/colors";

const CommentInput = () => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder="enter your Comment"
        placeholderTextColor={COLORS.gray1}
        style={styles.textInput}
        multiline={true}
        onChangeText={() => {}}
      ></TextInput>
      <TouchableOpacity
        style={{ justifyContent: "center", alignContent: "center" }}
      >
        <Image source={require("../../assets/images/send.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  textInputView: {
    height: 45,
    paddingLeft: "3%",
    backgroundColor: COLORS.secBackground,
    borderRadius: 20,
    flexDirection: "row",
    paddingRight: "5%",
    justifyContent: "space-between",
  },
  textInput: {
    width: "90%",
    fontSize: 20,
    color: COLORS.white,
    maxHeight: 300,
    fontSize: 20,
  },
});
