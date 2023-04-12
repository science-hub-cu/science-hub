import React, { forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import { Dropdown } from "react-native-element-dropdown";

const DropdownList = (
  {
    labelField,
    valueField,
    placeholder,
    data,
    value,
    onChange,
    error,
    onFocus,
  },
  ref
) => {
  return (
    <View style={styles.view}>
      <Dropdown
        ref={ref}
        style={[
          styles.dropdown,
          {
            borderWidth: 1,
            borderColor: error ? COLORS.red : COLORS.white,
          },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        maxHeight={300}
        search={0}
        onChange={onChange}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item[labelField]}</Text>
          </View>
        )}
      />
      {error && <Text style={styles.errors}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    // alignItems: "center",
    marginTop: 25,
    // flex: 1,
  },
  dropdown: {
    borderWidth: 1,
    //  borderColor: COLORS.white,
    height: 55,
    width: "88%",
    backgroundColor: COLORS.secBackground,
    borderRadius: 9,
    padding: 12,
    // alignItems: "center",
    marginHorizontal: "6%",
  },
  item: {
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secBackground,
  },
  textItem: {
    flex: 1,
    fontSize: 20,
    color: COLORS.white,
  },
  placeholderStyle: {
    fontSize: 20,
    color: COLORS.gray2,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: COLORS.white,
  },
  errors: {
    color: COLORS.red,
    marginHorizontal: "8%",
  },
});
const forwardDropdownList = forwardRef(DropdownList);

export default forwardDropdownList;
