import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const SafeAreaLayout = ({ children, style }) => {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default SafeAreaLayout;
