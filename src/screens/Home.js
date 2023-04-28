import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import COLORS from "../constants/colors";
import Post from "../components/Post";
import { ScrollView } from "react-native-gesture-handler";
const HomeScreen = () => {
  const data = [
    {
      id: "1",
      imageSource:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    { id: "2", imageSource: "" },
    {
      id: "3",
      imageSource:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    { id: "4", imageSource: "" },
    { id: "5", imageSource: "" },
  ];

  const renderItem = ({ item }) => <Post imageSource={item.imageSource} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
