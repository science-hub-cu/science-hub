import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";
import { SearchBar } from "react-native-elements";
import { useState } from "react";
import KeyboardAvoidingWarper from "../layouts/KeyboardAvoidingWarper";
import SafeAreaLayout from "../layouts/SafeAreaLayout";
import { EvilIcons } from "@expo/vector-icons";
const SearchScreen = () => {
  const [search, setSearch] = useState("");
  updateSearch = (search) => {
    setSearch(search);
    console.log(search);
  };
  return (
    <KeyboardAvoidingWarper style={styles.container}>
      <SafeAreaLayout>
        <View>
          <SearchBar
            placeholder="What are you looking for?"
            onChangeText={updateSearch}
            value={search}
            platform="android"
            showCancel={true}
            color={COLORS.white}
            searchIcon={null}
            cancelIcon={null}
            containerStyle={styles.search}
          />
        </View>
      </SafeAreaLayout>
    </KeyboardAvoidingWarper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackground,
    height: "100%",
    padding: 10,
  },
  search: {
    backgroundColor: COLORS.secBackground,
    marginBottom: 10,
    borderRadius: 10,
  },
});
export default SearchScreen;
