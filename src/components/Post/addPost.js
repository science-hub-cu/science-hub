import React, { useState } from "react";
import COLORS from "../constants/colors";
import Button from "../../src/components/Button";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

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

const AddPost = () => {
  const [postText, setPostText] = useState("");
  const [imageUri, setImageUri] = useState(null);
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.header}>
            {/* add X icon action here (pop to prev screen)  */}
            <TouchableOpacity onPress={() => {}} style={styles.headericon}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
            {/* submmit post here and navigate to posts screen*/}
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
              value={postText}
              onChangeText={(text) => setPostText(text)}
            ></TextInput>
          </View>

          <View style={styles.imageView1}>
            {imageUri ? (
              <Image
                style={styles.selectedImage}
                source={{ uri: imageUri }}
              ></Image>
            ) : (
              <Image
                style={styles.image}
                source={require("../assets/images/uplodeImage.png")}
              ></Image>
            )}
          </View>
          <View style={styles.bottomView}>
            <Button
              title={imageUri ? "change Image" : "upload Image"}
              fontSize={13}
              width="40%"
              height="15%"
              backgroundColor={COLORS.graish}
              onPress={handleChooseImage}
              opacity={0.2}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },

  imageView1: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageView2: {
    paddingTop: "30%",
    justifyContent: "center",
    alignItems: "center",
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
    maxHeight: 200,
    fontSize: 20,
  },
  textInputView: {
    height: "30%",
    paddingRight: "3%",
    paddingTop: "3%",
  },
  selectedImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
  },
  bottomView: {
    height: "35%",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    marginHorizontal: "50%",
  },
});