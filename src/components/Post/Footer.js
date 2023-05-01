import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import {
  UpVoteIcon,
  DownVoteIcon,
  CommentIcon,
  SavePostIcon,
} from "../IconLibrary";

const Footer = () => {
  const [voteCount, setVoteCount] = useState(0);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const handleUpVote = () => {
    if (!isUpvoted && !isDownvoted) {
      setVoteCount(voteCount + 1);
      setIsUpvoted(true);
    }
  };

  const handleDownVote = () => {
    if (!isDownvoted && !isUpvoted) {
      setVoteCount(voteCount - 1);
      setIsDownvoted(true);
    }
  };
  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleUpVote}>
          {isUpvoted ? <UpVoteIcon color={COLORS.white} /> : <UpVoteIcon />}
        </TouchableOpacity>
        <Text style={styles.number}>{voteCount}</Text>
        <TouchableOpacity onPress={handleDownVote}>
          {isDownvoted ? (
            <DownVoteIcon color={COLORS.white} />
          ) : (
            <DownVoteIcon />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.iconContainer}>
          <CommentIcon />
          <Text style={styles.text}> Comment</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.iconContainer}>
          <SavePostIcon />
          <Text style={styles.text}> Save Post</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-between",
  },
  number: {
    paddingHorizontal: "5%",
    color: "grey",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: "3%",
  },
  text: {
    color: COLORS.gray2,
  },
});
