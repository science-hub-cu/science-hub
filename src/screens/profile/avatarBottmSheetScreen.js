import React from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

    const BottomSheetScreen = ({ navigation }) => {
  return (
    <BottomSheet snapPoints={snapPoints}>
      <View>this is awesome</View>
    </BottomSheet>
  );
}
export default BottomSheetScreen;
