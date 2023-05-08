import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import COLORS from "../constants/colors";
import Post from "../components/Post/Post";
import PostService from "../services/PostService";
const HomeScreen = () => {
  const [lastDoc, setLastDoc] = useState(null);
  const [firstDoc, setfirstDoc] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dataEnding, setDataEnding] = useState(false);
  const [data, setData] = useState([]);

  const onRefresh = async () => {
    if (refreshing || dataLoading || !firstDoc) return;
    try {
      setRefreshing(true);
      let DBdata = await PostService.loadPostAsec(firstDoc);
      DBdata.forEach((doc) => {
        const media = doc.data().media;
        setData((old) => [
          {
            id: doc.id,
            userName: doc.data().user.username,
            imageSource: media ? media.data : "",
            title: doc.data().user.title,
            content: doc.data().content,
            userAvatar:
              "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
          },
          ...old,
        ]);
        if (!DBdata.empty) setfirstDoc(DBdata.docs[0]);
      });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };

  const loaddata = async () => {
    console.log("start loaddata");

    // loading true
    if (dataLoading || dataEnding || refreshing) return;
    try {
      if (lastDoc) console.log("after doc: ", lastDoc.id);
      console.log("start Accutly loaddata");

      setDataLoading(true);

      const DBdata = await PostService.loadPostDesc(lastDoc);
      DBdata.forEach((doc) => {
        const media = doc.data().media;
        setData((old) => [
          ...old,
          {
            id: doc.id,
            userName: doc.data().user.username,
            imageSource: media ? media.data : "",
            title: doc.data().user.title,
            content: doc.data().content,
            userAvatar:
              "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
          },
        ]);
      });
      setLastDoc(DBdata.docs[DBdata.docs.length - 1]);
      if (DBdata.empty) setDataEnding(true);
      if (!firstDoc && !DBdata.empty) setfirstDoc(DBdata.docs[0]);
    } catch (er) {
      console.log(er);
    } finally {
      setDataLoading(false);
    }
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
        refreshing={refreshing}
        onRefresh={() => onRefresh()}
        ListEmptyComponent={<Text style={styles.text}>No Posts</Text>}
        ListFooterComponent={
          dataEnding ? (
            <Text>Data ended refresh</Text>
          ) : (
            <Text style={styles.text}>Loading...</Text>
          )
        }
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
