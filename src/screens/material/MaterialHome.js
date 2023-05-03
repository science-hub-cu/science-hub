import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import COLORS from "../../constants/colors";
import Matirial from "../../components/Material";



const MaterialHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Matirial />
      <Matirial />
      <Matirial />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  text: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
});
export default MaterialHome;
