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
import PostService from "../services/PostService";
import { useAuth } from "../context/AuthContext";
import { StatusBar } from "expo-status-bar";

const AddScreen = ({ navigation }) => {
  const [postText, setPostText] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const { user } = useAuth();

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

  const addPost = () => {
    PostService.createPost("content", null, user.uid)
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.headericon}
            >
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
            <Button
              title={"Post"}
              width="20%"
              height="75%"
              onPress={() => addPost()}
              opacity={0.2}
            />
          </View>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ minHeight: "100%" }}
        >
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

          <View style={styles.imageView}>
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
            <Button
              title={"Upload Image"}
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
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    height: "100%",
    paddingTop: "10%",
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
  selectedImage: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
  },
});
