import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import COLORS from "../constants/colors";
import Post from "../components/Post/Post";
import NoCommentScreen from "./NoCommentScreen";
import CommentInput from "../components/Comment/CommentInput";
import Comment from "../components/Comment/Comment";

const PostScreen = ({ route }) => {
  const comments = [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ marginTop: StatusBar.currentHeight }}>
          <Post
            content={route.params.content}
            imageSource={route.params.imageSource}
            userAvatar={route.params.userAvatar}
            title={route.params.title}
            userName={route.params.userName}
            votes={route.params.votes}
            votestate={route.params.votestate}
          />
        </View>
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
      </ScrollView>
      <View style={styles.commentInputContainer}>
        <CommentInput />
      </View>
    </SafeAreaView>
  );
};
export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  scrollViewContent: {
    paddingBottom: "20%", // Adjust as needed to leave space for the CommentInput
  },
  commentInputContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: "1%",
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1,
  },
});
