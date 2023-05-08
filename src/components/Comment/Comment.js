import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import CommentHeader from "./CommentHeader";
import CommentContent from "./CommentContent";

const Comment = ({
  userName = "",
  userAvatar = "",
  content = "",
}) => {


  return (
    <View style={styles.CommentContaner}>
      <CommentHeader userName={userName} userAvatar={userAvatar} />
      <CommentContent content={content}/>
    </View>
  );
};

export default Comment;
const styles = StyleSheet.create({
  CommentContaner: {
    backgroundColor: COLORS.mainBackground,
    marginBottom: 9,
    marginTop: 1,
    minHeight: 0,
  },
});
