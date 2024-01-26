import React, { useEffect, useState } from "react";
import COLORS from "../constants/colors";
import Button from "../../src/components/Button";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Haptics from "expo-haptics";

import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  View,
  Keyboard,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PostService from "../services/PostService";
import { useAuth } from "../context/AuthContext";
import FireBaseStorage from "../services/FireBaseStorage";
import { ToastAndroid } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const AddScreen = ({ navigation }) => {
  const [postText, setPostText] = useState("");
  const [hapticTriggered, setHapticTriggered] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  // const { user } = useAuth();

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

  const addPost = async () => {
    if (!postText || postText === "") return;
    navigation.goBack();
    const createPost = (content, media) =>
      PostService.createPost(content, media, user.uid)
        .then((e) => ToastAndroid.show("Post published!", ToastAndroid.SHORT))
        .catch((e) =>
          ToastAndroid.show("error in publish post", ToastAndroid.SHORT)
        );

    if (imageUri) {
      const manipResult = await manipulateAsync(
        imageUri,
        [{ resize: { width: 800, height: 600 } }],
        { compress: 0, format: SaveFormat.PNG }
      );

      FireBaseStorage.uploadImageWithProgress(
        manipResult.uri,
        FireBaseStorage.folders.postImage,
        (prog) => console.log("image uploaded: ", prog),
        (e) => console.log("error : ", e),
        (url) => {
          createPost(postText, {
            type: "image",
            data: url,
          });
        }
      );
    } else createPost(postText, null);
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
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: "#5865F2",
                    borderRadius: 25,
                    marginHorizontal: 6,
                  }}
                ></View>
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.white,
                      fontWeight: "400",
                      marginHorizontal: 3,
                    }}
                  >
                    Anyone
                  </Text>
                  <FontAwesome name="sort-down" size={11} color="white" />
                </View>
              </View>
            </View>
            {/* submmit post here and navigate to posts screen*/}
            <Button
              title={"Post"}
              width="20%"
              height="75%"
              onPress={() => {
                addPost();
              }}
              opacity={0.2}
              disabled={postText.length > 200 ? true : false}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Text what you want little 7amoksha"
              placeholderTextColor={COLORS.gray1}
              style={styles.textInput}
              multiline={true}
              maxLength={250}
              value={postText}
              onChangeText={(text) => {
                if (text.length > 200 && !hapticTriggered) {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Warning
                  );
                  setHapticTriggered(true);
                } else if (text.length <= 200 && hapticTriggered) {
                  setHapticTriggered(false);
                }
                setPostText(text);
              }}
            />
          </View>

          <View style={styles.imageView1}>
            {imageUri ? (
              <View
                style={[
                  styles.selectedImage,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Image
                  style={styles.selectedImage}
                  source={{ uri: imageUri }}
                />
                <View
                  style={{ position: "absolute", top: 0, right: 0, padding: 0 }}
                >
                  <TouchableWithoutFeedback onPress={() => setImageUri(null)}>
                    <FontAwesome name="close" size={24} color={COLORS.gray1} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
            ) : null}
          </View>
          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "transparent",
              position: "absolute",
              bottom: 0,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row-reverse" }}>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: postText.length > 200 ? COLORS.red : COLORS.white,
                  }}
                >
                  {postText.length}/200
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleChooseImage()}>
                <Ionicons
                  style={{ marginHorizontal: 12 }}
                  name="image"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.mainBackground,
    padding: 10,
  },

  imageView1: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: "12%",
  },
  imageView2: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 5,
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
    color: COLORS.white,
    maxHeight: 200,
    fontSize: 14,
    fontWeight: "400",
  },
  textInputView: {
    height: "auto",
    backgroundColor: "transparent",
    padding: 10,
  },
  selectedImage: {
    width: "90%",
    height: "auto",
    aspectRatio: 1,
    marginVertical: 10,
    borderRadius: 15,
  },
  bottomView: {
    height: "35%",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  image: {
    justifyContent: "center",
    marginHorizontal: "50%",
  },
});
