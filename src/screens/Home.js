import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
  docs,
} from "firebase/firestore";
import COLORS from "../constants/colors";
import Post from "../components/Post/Post";
import { ScrollView } from "react-native-gesture-handler";
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { set } from "react-native-reanimated";
const HomeScreen = () => {
  let postnum = 6;
  let ldoc = null;
  const [dataloading, setdataloading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    loaddata();
  }, []);
  const loaddata = async () => {
    // loading true
    const db = getFirestore();
    const postref = collection(db, "posts");
    const DBq = query(
      postref,
      orderBy("createdAt"),
      startAfter(ldoc || 0),
      limit(2)
    );
    const DBdata = await getDocs(DBq);
    DBdata.forEach((doc) => {
      console.log(doc.id);
      setData((old) => [
        ...old,
        {
          id: postnum++,
          userName: doc.data().user.username,
          imageSource:
            "https://www.unigreet.com/wp-content/uploads/2022/11/100-very-special-good-morning-images-quotes-photos-751x1024.jpg",
          title: doc.data().user.title,
          content: doc.data().content,
          userAvatar:
            "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        },
      ]);
    });
    latestDoc = DBdata.docs[DBdata.docs.length - 1];
    if (DBdata.empty) {
      // no more data
    }
    // loading false
  };
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
        onEndReached={loaddata}
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
