import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import COLORS from "../constants/colors";
import Post from "../components/Post/Post";
import PostService from "../services/PostService";
import ROUTES from "../constants/routes";

const HomeScreen = ({ navigation }) => {
  const [lastDoc, setLastDoc] = useState(null);
  const [firstDoc, setfirstDoc] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dataEnding, setDataEnding] = useState(false);
  const [data, setData] = useState([]);
  const [rerender, setRerender] = useState(true);

  const render = () => setRerender((r) => !r);

  const docToObj = (doc, state = "") => {
    const media = doc.data().media;
    return {
      id: doc.id,
      userName: doc.data().user.username,
      imageSource: media ? media.data : "",
      title: doc.data().user.title,
      content: doc.data().content,
      votes: doc.data().vote,
      votestate: state,
      userAvatar:
        "https://images.unsplash.com/photo-1664142315014-412c769e9a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    };
  };

  useEffect(() => {
    // const
    const unsubscribe = PostService.postLisiner(
      // on add no work yet
      (doc) => {},
      // on update
      (doc) => {
        setData((old) => old.map((o) => (o.id === doc.id ? docToObj(doc) : o)));
        setRerender((r) => !r);
      },
      (doc) => {
        setData((old) => old.filter((o) => o.id !== doc.id));
      }
    );

    return unsubscribe;
  }, []);

  const onRefresh = async () => {
    if (refreshing || dataLoading || !firstDoc) return;
    try {
      setRefreshing(true);
      let DBdata = await PostService.loadPostAsec(firstDoc);
      DBdata.forEach(async (doc) => {
        const state = await PostService.getVotePost(doc.id);
        setData((old) => {
          old.unshift(docToObj(doc, state));
          return old;
        });
        render();
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
      DBdata.forEach(async (doc) => {
        const state = await PostService.getVotePost(doc.id);
        setData((old) => {
          old.push(docToObj(doc, state));
          return old;
        });
        render();
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
      votes={item.votes}
      votestate={item.votestate}
      upvoteAction={() => {
        PostService.votePost(item.id, (state = "up"));
      }}
      downvoteAction={() => {
        console.log("down");
        PostService.votePost(item.id, (state = "down"));
      }}
      toPost={() =>
        navigation.navigate(ROUTES.POST_ROUTE, {
          content: item.content,
          imageSource: item.imageSource,
          userAvatar: item.userAvatar,
          userName: item.userName,
          title: item.title,
          votes: item.votes,
          votestate: item.votestate,
        })
      }
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        extraData={rerender}
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
            <ActivityIndicator size={"large"} />
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
