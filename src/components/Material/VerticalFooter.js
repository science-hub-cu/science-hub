import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const VirticalFooter = () => {
  const [isStarred, setIsStarred] = useState(false);
  const [isUped, setIsUped] = useState(false);
  const [isDowned, setIsDowned] = useState(false);
  const [voteCount, setVoteCount] = useState(0);


  const handleStarPress = () => {
    setIsStarred(!isStarred);
  };
   const handleUpPress = () => {
        if (!isUped && !isDowned) {
          setVoteCount(voteCount + 1);
          setIsUped(true);
        }else if(isDowned){
           setVoteCount(voteCount + 2);
           setIsUped(true);
           setIsDowned(false);
        }else{
           setIsUped(false);
           setVoteCount(voteCount - 1);
        }
   };
    const handleDownPress = () => {
              if (!isUped && !isDowned) {
                setVoteCount(voteCount - 1);
                setIsDowned(true);
              } else if (isUped) {
                setVoteCount(voteCount - 2);
                setIsUped(false);
                setIsDowned(true);
              }else{
                setIsDowned(false);
                setVoteCount(voteCount + 1);
              }
    };

  return (
    <View
      style={{
        marginRight: "4%",
        paddingTop: "2%",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={handleStarPress}>
        {isStarred ? (
          <AntDesign name="star" size={19} color="gold" />
        ) : (
          <AntDesign name="staro" size={19} color="white" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUpPress}>
        {isUped ? (
          <MaterialIcons name="keyboard-arrow-up" size={27} color="blue" />
        ) : (
          <MaterialIcons name="keyboard-arrow-up" size={27} color="white" />
        )}
      </TouchableOpacity>
      <Text style={{ color: COLORS.white, fontSize: 9 }}>{voteCount}</Text>
      <TouchableOpacity onPress={handleDownPress}>
        {isDowned ? (
          <MaterialIcons name="keyboard-arrow-down" size={27} color="blue" />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={27} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VirticalFooter;
