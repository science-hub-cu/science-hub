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
              title={imageUri ? "Upload Image" : "change Image"}
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
    paddingTop: "3%",
  },
});
