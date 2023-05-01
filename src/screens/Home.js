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
import Post from "../components/Post/Post";
import { ScrollView } from "react-native-gesture-handler";
const HomeScreen = () => {
  const data = [
    {
      id: "1",
      userName: "omar",
      imageSource:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      title: "hamoksa",
      content: "rwagearhah",
      userAvatar:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: "2",
      userName: "k3bar",
      imageSource: "",
      title: "hamoksa",
      content: "erayaeh",
      userAvatar:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: "3",
      userName: "faris",
      imageSource:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      title: "hamoksa ",
      content: "sthsteysedryser",
      userAvatar:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: "4",
      userName: "bakar",
      imageSource:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      title: "hamoksa ",
      content: "sthsteysedryser",
      userAvatar:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: "5",
      userName: "aboElyazed",
      imageSource:
        "https://www.unigreet.com/wp-content/uploads/2022/11/100-very-special-good-morning-images-quotes-photos-751x1024.jpg",
      title: "hamoksa",
      content: "sthsteysedryser",
      userAvatar:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
  ];

  const renderItem = ({ item }) => (
    <Post
      userAvatar={item.userAvatar}
      userName={item.userName}
      imageSource={item.imageSource}
      title={item.title}
      content={item.content}
    />
  );
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
