import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import COLORS from "../constants/colors";
import Post from "../components/Post/Post";
import NoCommentScreen from "./NoCommentScreen";
import CommentInput from "../components/Comment/CommentInput";
import Comment from "../components/Comment/Comment";

const PostScreen = ({ route }) => {
  const comments = [];

  return (
    <SafeAreaView style={styles.container}>
      <Post
        content={route.params.content}
        userAvatar={route.params.userAvatar}
        title={route.params.title}
        userName={route.params.userName}
        votes={route.params.votes}
        votestate={route.params.votestate}
      />
      {comments.length === 0 ? (
        <NoCommentScreen />
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Comment userName={item.userName} userAvatar={item.userAvatar} />
          )}
        />
      )}
      <CommentInput />
    </SafeAreaView>
  );
};
export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  image: {
    marginTop: 9,
  },
  text: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
  textInputView: {
    height: 45,
    paddingLeft: "3%",
    backgroundColor: COLORS.secBackground,
    borderRadius: 20,
    flexDirection: "row",
    paddingRight: "5%",
    justifyContent: "space-between",
  },
  textInput: {
    width: "90%",
    fontSize: 20,
    color: COLORS.white,
    maxHeight: 300,
    fontSize: 20,
  },
});
