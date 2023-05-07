import React from "react";
import COLORS from "../constants/colors";
import Button from "../../src/components/Button";
import { AntDesign } from "@expo/vector-icons";

import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  View,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AddScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {}} style={styles.headericon}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
            <Button
              title={"Post"}
              width="20%"
              height="75%"
              onPress={() => {}}
              opacity={0.2}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="enter your post"
              placeholderTextColor={COLORS.gray1}
              style={styles.textInput}
              multiline={true}
            ></TextInput>
          </View>
          
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require("../assets/images/uplodeImage.png")}
            ></Image>          
            <Button
              title={"Upload Image"}
              fontSize={13}
              width="40%"
              height="15%"
              backgroundColor={COLORS.graish}
              // onPress={}
              opacity={0.2}
            />
          </View>
          
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
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
    fontWeight: 700,
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
});
export default AddScreen;
