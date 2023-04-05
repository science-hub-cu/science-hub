import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import COLORS from '../assets/colors'

const Input = ({
  label,
  iconName,
  iconLibrary,
  error,
  password,
  onFocus = () => {},
  imageSource,
  width = '95%', // Default width is 95%
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hidePassword, setHidePassword] = React.useState(true)

  let IconComponent = Icon
  switch (iconLibrary) {
    case 'AntDesign':
      IconComponent = AntDesign
      break
    // add cases for other libraries here
    default:
      IconComponent = Icon
      break
  }

  return (
    <View style={{}}>
      <View style={style.view}>
        {label && <Text style={style.label}>{label}</Text>}
      </View>
      <View
        style={[
          style.inputContainer,
          {
            width: width, // Set the width dynamically based on the `width` prop
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
              setHidePassword(!hidePassword)
            }}
            name={!hidePassword ? 'unlock' : 'lock'}
            style={style.iconStyle}
            size={22}
            color={COLORS.gray2}
          />
        )}
        {imageSource && <Image source={imageSource} style={style.iconStyle} />}
      </View>
      {error && <Text style={style.errors}>{error}</Text>}
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    marginTop: 25
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.secBackground,
    flexDirection: 'row',
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 9,
    marginHorizontal: 10
  },
  iconStyle: {
    marginRight: 10
  },
  textInputStyle: {
    paddingLeft: 20,
    color: COLORS.white,
    flex: 1
  },
  label: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  errors: {
    color: COLORS.red,
    paddingLeft: 20
  }
})

export default Input
