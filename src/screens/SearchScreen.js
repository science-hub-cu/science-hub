import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";
import { SearchBar } from "react-native-elements";
import { useState } from "react";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  updateSearch = (search) => {
    setSearch(search);
    console.log(search);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          round={true}
          containerStyle={{
            backgroundColor: COLORS.mainBackground,
            borderRadius: 30,
          }}
          color={COLORS.white}
          cursorColor={COLORS.white}
          placeholderTextColor={COLORS.white}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    // justifyContent: "center",
    top: 200,
    alignContent: "center",
    width: "90%",
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
export default SearchScreen;
