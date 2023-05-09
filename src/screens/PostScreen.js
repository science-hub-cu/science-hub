import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import COLORS from "../../constants/colors";
import Post from "../../components/Post/Post";
import NoCommentScreen from "../NoCommentScreen";
import CommentInput from "../../components/Comment/CommentInput";
import Comment from "../../components/Comment/Comment";

const PostScreen=()=>{
    const comments = [
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Post
        content="omar"
        userAvatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3dkuKIs9nPKdgatRQnKz-d&ust=1683662683629000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjlhbPC5v4CFQAAAAAdAAAAABAE"
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

