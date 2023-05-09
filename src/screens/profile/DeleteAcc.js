import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import LoadingButton from "../../components/LoadingButton";
import COLORS from "../../constants/colors";
const DeleteAcc = ({ navigation }) => {
  const btn = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      btn.current.setLoading(false);
      // btn.current.setDisable(true);
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ backgroundColor: "#33363F" }}>
          <Text style={{ color: COLORS.red, fontSize: 20 }}>
            by deleting account its is impossiple to restore your account please
            reconsider . if you faced any problem or smth you can always use
            help center
          </Text>
          <LoadingButton
            ref={btn}
            width="90%"
            height={50}
            fontSize={20}
            title={"delete account"}
            onPress={() => DEL()}
            disabled={true}
            backgroundColor={COLORS.red}
          ></LoadingButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#33363F",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default DeleteAcc;
