import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useMemo } from "react";


const AvatarBottomSheetScreen = ({ bottomSheetModalRef}) => {
    const snapPoints = useMemo(() => ["40%", "70%"], []);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      style={styles.BottomSheet}
      backgroundStyle={styles.backGround}
    >
      <View>
        <Text>omar</Text>
      </View>
    </BottomSheetModal>
  );
};

export default AvatarBottomSheetScreen;

const styles = StyleSheet.create({
  BottomSheet: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backGround: {
    borderRadius: 30,
  },
});