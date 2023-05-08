import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";
import { Octicons } from "@expo/vector-icons";
const CommentContent = ({
  content = "",
}) => {
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
      }
    return (
      <View
        style={{
          width: "90%",
          backgroundColor: COLORS.secBackground,
          borderRadius: 20,
          marginLeft: "10%",
          paddingHorizontal: "1%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "85%",
            minHeight: 44,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              marginHorizontal: "1%",
              marginVertical: "3%",
            }}
          >
            {content}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleLovePress}
            style={{ paddingTop: 10, marginBottom: "20%" }}
          >
            {!isLoved && <Octicons name="heart" size={24} color="white" />}
            {isLoved && <Octicons name="heart-fill" size={24} color="red" />}
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.white,
              textAlign: "center",
              marginBottom: "20%",
            }}
          >
            {LoveCount}
          </Text>
        </View>
      </View>
    );
};
export default CommentContent;