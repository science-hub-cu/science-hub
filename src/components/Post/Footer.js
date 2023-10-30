import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import AnimatedLottieView from "lottie-react-native";
import {
  UpVoteIcon,
  DownVoteIcon,
  CommentIcon,
  SavePostIcon,
} from "../IconLibrary";

const Footer = ({ votes, votestate, upvoteAction, downvoteAction, toPost }) => {
  // const [voteCount, setVoteCount] = useState(votes);
  const [isUpvoted, setIsUpvoted] = useState(votestate === "up");
  const [isDownvoted, setIsDownvoted] = useState(votestate === "down");
  const [isSaved, setIsSaved] = useState(false);
  const handleUpVote = () => {
    if (!isUpvoted) {
      // setVoteCount(voteCount + 1);
      setIsUpvoted(true);
      upvoteAction();
    } else {
      setIsUpvoted(false);
    }
  };

  const handleDownVote = () => {
    if (!isDownvoted && !isUpvoted) {
      // setVoteCount(voteCount - 1);
      setIsDownvoted(true);
      downvoteAction();
    }
  };
  const handleSavepost = () => {
    setIsSaved(!isSaved);
  };
  const upVoteAnimation = useRef(null);
  useEffect(() => {
    if (upVoteAnimation.current) {
      if (isUpvoted) {
        upVoteAnimation.current.play(0, 13);
      } else {
        upVoteAnimation.current.play(0, 0);
      }
    }
  }, [isUpvoted]);

  const downVoteAnimation = useRef(null);
  useEffect(() => {
    if (downVoteAnimation.current) {
      if (isDownvoted === "down") {
        downVoteAnimation.current.play(0, 0);
      }
    }
  }, [isDownvoted]);
  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleUpVote}>
          <AnimatedLottieView
            ref={upVoteAnimation}
            style={{ width: 30, height: 30 }}
            source={require("../../assets/icons/lottie/vote.json")}
            autoPlay={false}
            loop={false}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          {isUpvoted ? (
            <UpVoteIcon color={COLORS.blue1} stroke={COLORS.blue1} />
          ) : (
            <UpVoteIcon />
          )}
        </TouchableOpacity> */}
        <Text style={styles.number}>{votes}</Text>
        <TouchableOpacity onPress={handleDownVote}>
          {isDownvoted ? (
            <DownVoteIcon color={COLORS.blue1} stroke={COLORS.blue1} />
          ) : (
            <DownVoteIcon />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          toPost();
        }}
      >
        <View style={[styles.iconContainer, { flex: 1 }]}>
          <CommentIcon />
          <Text style={styles.text}> Comment</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSavepost}>
        <View style={[styles.iconContainer, { width: 80 }]}>
          {isSaved ? (
            <>
              <SavePostIcon color={COLORS.gold} />
              <Text style={styles.text}> Saved</Text>
            </>
          ) : (
            <>
              <SavePostIcon color={COLORS.gray1} />
              <Text style={styles.text}> Save Post</Text>
            </>
          )}
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
