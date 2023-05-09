import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialHeader from "./MaterialHeader";
import MaterialContent from "./MaterialContent";

const MaterialData = () => {
  return (
    <View style={styles.view}>
      <MaterialHeader />
      <MaterialContent />
    </View>
  );
};
export default MaterialData;

const styles = StyleSheet.create({
  view: { width: "82%" },
});
