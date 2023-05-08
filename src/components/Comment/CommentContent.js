import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";
import { Octicons } from "@expo/vector-icons";
const CommentContent = ({ content = "" }) => {
  const [isLoved, setIsLoved] = useState(false);
  const [LoveCount, setLoveCount] = useState(0);
  const handleLovePress = () => {
    if (!isLoved) {
      setLoveCount(LoveCount + 1);
      setIsLoved(true);
    } else {
      setLoveCount(LoveCount - 1);
      setIsLoved(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{content}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleLovePress} style={styles.icon}>
          {!isLoved && <Octicons name="heart" size={24} color="white" />}
          {isLoved && <Octicons name="heart-fill" size={24} color="red" />}
        </TouchableOpacity>
        <Text style={styles.container}>{LoveCount}</Text>
      </View>
    </View>
  );
};
export default CommentContent;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: COLORS.secBackground,
    borderRadius: 20,
    marginLeft: "10%",
    paddingHorizontal: "1%",
    flexDirection: "row",
  },
  counter: {
    color: COLORS.white,
    textAlign: "center",
    marginBottom: "20%",
  },
  content: {
    width: "85%",
    minHeight: 44,
    marginLeft: 10,
  },
  text: {
    color: COLORS.white,
    marginHorizontal: "1%",
    marginVertical: "3%",
  },
  icon: { paddingTop: 10, marginBottom: "20%" },
});
