/**
 * Change Username screen
 */

import React, { useState, useRef, createRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import COLORS from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import LoadingButton from "../../components/LoadingButton";
import UserService from "../../services/UserService";

const ChangeUserNameScreen = ({ navigation }) => {
  const btn = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      btn.current.setLoading(false);
      // btn.current.setDisable(true);
    });
    return unsubscribe;
  }, [navigation]);

  const updateUserName = () => {
    console.log("Update pressed.");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.content}>
            <Text style={styles.caption}>
              Update Username -- not compelet...
            </Text>

            <LoadingButton
              ref={btn}
              marginTop={5}
              width="90%"
              height={50}
              fontSize={20}
              title={"update"}
              onPress={() => updateUserName()}
              disabled={true}
            ></LoadingButton>
          </View>
        </ScrollView>
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
  content: {
    height: "100%",
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  caption: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});

export default ChangeUserNameScreen;
