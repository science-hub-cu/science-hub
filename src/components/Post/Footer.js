import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import AnimatedLottieView from "lottie-react-native";
import { CommentIcon, SavePostIcon } from "../IconLibrary";

const Footer = ({ votes, votestate, upvoteAction, downvoteAction, toPost }) => {
  const [isUpvoted, setIsUpvoted] = useState(votestate === "up");
  const [isDownvoted, setIsDownvoted] = useState(votestate === "down");
  const [isSaved, setIsSaved] = useState(false);

  

  const handleUpVote = () => {
    if(isDownvoted){
      setIsDownvoted(false);
      upvoteAction();
    }
    if (!isUpvoted) {
      setIsUpvoted(true);
      upvoteAction();
    } else {
      setIsUpvoted(false);
      downvoteAction();
    }
  };

  const handleDownVote = () => {
    if (isUpvoted) {
      setIsUpvoted(false);
      downvoteAction();
    }
    if (!isDownvoted) {
      setIsDownvoted(true);
      downvoteAction();
    } else {
      setIsDownvoted(false);
       upvoteAction();
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
      if (isDownvoted) {
        downVoteAnimation.current.play(0, 13);
      } else {
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
        <Text style={styles.number}>{votes}</Text>
        <TouchableOpacity onPress={handleDownVote}>
          <AnimatedLottieView
            ref={downVoteAnimation}
            style={{ width: 30, height: 30, transform: [{ rotate: "90deg" }] }}
            source={require("../../assets/icons/lottie/vote.json")}
            autoPlay={false}
            loop={false}
          />
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
        <View
          style={[
            styles.iconContainer,
            {
              flex: 1,
            },
          ]}
        >
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
    marginTop: 3,
    marginBottom: 7,
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
