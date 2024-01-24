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
import Input from "../../components/Input";
import { disappearError } from "../../utils/uiHelper";
import { isValidUserName } from "../../validations/CommonValidation";

const ChangeUserNameScreen = ({ navigation }) => {
  const btn = useRef(null);
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const [invalid, setInvalid] = useState("");
  const addError = (error) => {
    setErrors((prevState) => ({
      ...prevState,
      ...error,
    }));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      btn.current.setLoading(false);
      // btn.current.setDisable(true);
    });
    return unsubscribe;
  }, [navigation]);

  const updateUserName = async () => {
    try {
      if (isValidUserName(username)) {
        await UserService.changeUserName(username); // change logic
        console.log(await getAuth().currentUser.getIdToken());
        console.log("succ");
      } else {
        addError({ username: "your name should contains only letters" });
      }
    } catch (error) {
      if (error.response && error.response.status === 401)
        setInvalid("Invalid Username , username must be only chars");
      console.log(error);
    } finally {
      btn.current?.setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ minHeight: "100%" }}
        >
          <View style={styles.content}>
            <View style={{ width: "100%",backgroundColor:"transparent" }}>
              <Text style={{ color: COLORS.white, fontSize: 15 ,textAlign:"center" }}>
                By changing Username blah blah we know{" \n"}
                you won't read this just dont it change it alot
              </Text>
             <View style={{justifyContent:"center",alignItems:"center"}}>
             <Input
                width="88%"
                onChangeText={(text) => setUsername(text)}
                value={username}
                onFocus={() => disappearError("username", errors, setErrors)}
                error={errors.username}
                placeholder="Username"
                placeholderTextColor={COLORS.gray2}
              />
             </View>
            </View>
            <Text style={styles.error}>{invalid}</Text>
            <LoadingButton
              ref={btn}
              width="90%"
              height={50}
              fontSize={14}
              title={"Update"}
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
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    padding:10
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
