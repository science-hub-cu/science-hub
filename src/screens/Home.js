import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import COLORS from "../constants/colors";
import Post from "../components/Post";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Post/>
    <Post/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  postContaner: {
    backgroundColor: COLORS.secBackground,
    height: 200,
    marginVertical: 10,
  },
  imageView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  Header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  text: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
  text1: {
    color: COLORS.white,
  },
});
export default HomeScreen;
