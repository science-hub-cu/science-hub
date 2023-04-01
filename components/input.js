import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  error,
  Image,
  TouchableHighlight
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Feather'
import COLORS from '../assets/colors'
const Input = ({
  // label,
  iconName,
  error,
  password,
  onFocus = () => {},
  //... props to show what is in placeholder when there is no input
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hidePassword, setHidePassword] = React.useState(true)
  return (
    <View style={{}}>
      <View style={style.view}></View>
      <View
        style={[
          style.inputContainer,
          {
            borderWidth: 1,
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.white
              : COLORS.white
          }
        ]}
      >
        <TextInput
          secureTextEntry={password && hidePassword}
          style={style.textInputStyle}
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          {...props}
        />

        {!password && <Icon name={iconName} style={style.iconStyle}></Icon>}

        {password && (
          <Icon
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
            name={!hidePassword ? "unlock" : "lock"}
            style={style.iconStyle}
          ></Icon>
        )}
      </View>
      {error && <Text style={{ color: COLORS.red }}>{error}</Text>}
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    marginTop: 20
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.secBackground,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 9
  },
  iconStyle: {
    fontSize: 22,
    color: COLORS.gray,
    marginRight: 10
  },
  textInputStyle: {
    color: COLORS.white,
    flex: 1
  }
})
export default Input
