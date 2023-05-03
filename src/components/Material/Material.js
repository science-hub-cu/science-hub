import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import VirticalFooter from "./VerticalFooter";
import MaterialData from "./MaterialData";
const Matirial = () => {
  return (
    <View style={styles.MatirialContainer}>
      <MaterialData />
      <VirticalFooter />
    </View>
  );
};
export default Matirial;

const styles = StyleSheet.create({
  MatirialContainer: {
    backgroundColor: COLORS.secBackground,
    width: "96%",
    height: 100,
    borderRadius: 15,
    marginTop: "1.5%",
    marginHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
