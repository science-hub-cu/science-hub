import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import COLORS from "../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const VirticalFooter = () => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarPress = () => {
    setIsStarred(!isStarred);
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
          <AntDesign name="star" size={19} color="gold"/>
        ) : (
          <AntDesign name="staro" size={19} color="white" />
        )}
      </TouchableOpacity>
      <MaterialIcons name="keyboard-arrow-up" size={27} color="blue" />
      <Text style={{ color: COLORS.white, fontSize: 9 }}>69</Text>
      <MaterialIcons name="keyboard-arrow-down" size={27} color="white" />
    </View>
  );
};

export default VirticalFooter;
