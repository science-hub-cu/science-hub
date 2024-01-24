import React, { forwardRef } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";

const Input = (
  {
    label,
    iconName,
    iconLibrary,
    error,
    password,
    onFocus = () => {},
    imageSource,
    width = "95%", // Default width is 95%
    fontSize = 16,
    ...props
  },
  ref
) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);

  let IconComponent = Icon;
  switch (iconLibrary) {
    case "MaterialCommunityIcons":
      IconComponent = MaterialCommunityIcons;
      break;
    case "AntDesign":
      IconComponent = AntDesign;
      break;
    // add cases for other libraries here
    default:
      IconComponent = Icon;
      break;
  }
  const borderStyles = {
    width: width,
    borderWidth: 1,
    borderColor: error ? COLORS.red : isFocused ? COLORS.white : COLORS.white,
  };

  return (
    <View>
      <View style={style.view}>
        {label && <Text style={style.label}>{label}</Text>}
      </View>
      <View style={[style.inputContainer, borderStyles]}>
        <TextInput
          ref={ref}
          secureTextEntry={password && hidePassword}
          style={[style.textInputStyle, { fontSize: fontSize }]}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />

        {!password && (
          <IconComponent
            name={iconName}
            style={style.iconStyle}
            size={22}
            color={COLORS.gray2}
          />
        )}

        {password && (
          <IconComponent
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
            name={!hidePassword ? "unlock" : "lock"}
            style={style.iconStyle}
            size={22}
            color={!hidePassword ? COLORS.white : COLORS.white}
          />
        )}
        {imageSource && <Image source={imageSource} style={style.iconStyle} />}
      </View>
      {error && <Text style={style.errors}>{error}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    marginVertical: 15,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.secBackground,
    flexDirection: "row",
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 9,
  },
  iconStyle: {
    marginRight: 10,
  },
  textInputStyle: {
    padding: 10,
    color: COLORS.white,
    flex: 1,
  },
  label: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  errors: {
    color: COLORS.red,
    padding: 5,
  },
});
const forwardInput = forwardRef(Input);
export default forwardInput;
