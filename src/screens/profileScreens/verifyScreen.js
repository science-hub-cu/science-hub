import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import COLORS from "../../constants/colors";
import Icon from "react-native-vector-icons/AntDesign";
import Input from "../../components/Input";

const VerifyScreen = ({ navigation }) => {
  const codeInputRef = useRef(null);

  const handlePress = () => {
    codeInputRef.current.blur(); // call blur() method to unfocus the TextInput component
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.header}>Verify page</Text>
          <Icon style={styles.icon} name="left" size={25} color="#fff" />
        </View>
        <View style={styles.content}>
          <Text style={styles.caption}>
            Enter your friend code to verify em:{" "}
          </Text>
          <Input
            ref={codeInputRef}
            width="60%"
            //   onChangeText={(text) => handleOnChange(text, "name")}
            //   onFocus={() => handleError(null, "name")}
            keyboardType="numeric"
            maxLength={6}
            placeholder="Friend code"
            placeholderTextColor={COLORS.gray2}
            fontSize={35}
            textAlign="center"
            textAlignVertical="center"
          ></Input>
        </View>
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

  topNav: {
    position: "relative",
    width: "100%",
    height: 90,
    backgroundColor: COLORS.secBackground,
  },

  header: {
    left: 50,
    top: 50,
    fontSize: 20,
    color: "#fff",
  },

  icon: {
    left: 15,
    top: 25,
  },

  content: {
    marginTop: 190,
    alignItems: "center",
  },

  caption: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 400,
  },
});

export default VerifyScreen;
