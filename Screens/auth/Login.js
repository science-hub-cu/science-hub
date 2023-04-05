import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../assets/colors";
import { useFonts } from "expo-font";
import Input from "../../components/input";
import Button from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import RegistrationScreen from "./Register";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

const LoginScreen = ({ navigation }) => {
  const [fontLoaded] = useFonts({
    majalla: require("../../assets/fonts/majalla.ttf"),
  });
  if (!fontLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: "majalla",
            paddingTop: 15,
          }}
        >
          {"  "}By signing in you are agreeing
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: "majalla",
          }}
        >
          {"  "}our
          <Text style={{ color: COLORS.blue }}> Term and privacy policy</Text>
        </Text>
        <View
          style={{ paddingTop: 20, marginLeft: "32.25%", flexDirection: "row" }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.blue,
              fontFamily: "majalla",
              fontSize: 25,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
            }}
          >
            Login
          </Text>
          <View
            style={{
              marginLeft: "10%",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: COLORS.white,
                fontFamily: "majalla",
                fontSize: 25,
              }}
              onPress={() => {
                navigation.navigate("RegistrationScreen");
              }}
            >
              Register
            </Text>
          </View>
        </View>
        <Input
          placeholder="Username"
          placeholderTextColor={COLORS.gray2}
          imageSource={require("../../assets/images/User.png")}
        ></Input>
        <Input
          password
          placeholder="Password"
          placeholderTextColor={COLORS.gray2}
        ></Input>
        <View style={{ paddingTop: 5, alignItems: "center" }}>
          <Button title="Login"></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
});

export default LoginScreen;
