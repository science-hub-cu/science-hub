import React, { useState } from 'react'
import { Text, StyleSheet, View,Keyboard } from 'react-native'
import { SafeAreaView,Alert } from 'react-native-safe-area-context'
import COLORS from '../../assets/colors'
import { useFonts } from 'expo-font'
import Input from '../../components/input'
import Button from '../../components/Button'
import LoginScreen from './Login'
import { ScrollView } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'


const RegistrationScreen = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [inputs, setInputs] = useState({
    name: '',
    code: '',
    level: '',
    department: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const validate = () => {
    Keyboard.dismiss()
    let valid = true
    if (!inputs.name) {
      handleError('please enter your name', 'name')
      valid = false
    }
    if (!inputs.name) {
      handleError('please enter your name', 'name')
      valid = false
    }
    if (!inputs.code) {
      handleError('please enter your code', 'code')
      valid = false
    } else if (!inputs.code.match(/^[0-9]+$/)) {
      handleError('please enter valid code', 'code')
      valid = false
    } else if (inputs.code.length != 7) {
      handleError('the code must be 7 numbers', 'code')
      valid = false
    }
    if (!inputs.password) {
      handleError('please enter your password', 'password')
      valid = false
    } else if (inputs.password.length < 6) {
      handleError('password is to small', 'password')
      valid = false
    }
    return valid
  }
  // change to error state if there is error in any field
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({ ...prevState, [input]: errorMessage }))
  }
  /* 
                            handleOnChange
     to change the state for my varables (name,code,password,level,department)
     it is make text = input; 
  */
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }))
  }

  const [fontLoaded] = useFonts({
    majalla: require('../../assets/fonts/majalla.ttf')
  })
  if (!fontLoaded) return null

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            textAlign: 'center',
            color: COLORS.white,
            fontWeight: 400
          }}
        >
          Register
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: 'majalla',
            paddingTop: 15
          }}
        >
          {'  '}By signing in you are agreeing
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: COLORS.white,
            fontWeight: 400,
            fontFamily: 'majalla'
          }}
        >
          {'  '}our
          <Text style={{ color: COLORS.blue }}> Term and privacy policy</Text>
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              paddingTop: 20,
              textAlign: 'center',
              color: COLORS.white,
              marginLeft: "34%",
              fontFamily: 'majalla',
              fontSize: 25,

            }}
            onPress={() => {
              navigation.navigate('LoginScreen')
            }}
          >
            Login
          </Text>
          <View
            style={{
              marginLeft: "10%",
              paddingTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.blue,
                fontFamily: 'majalla',
                fontSize: 25
              }}
            >
              Register
            </Text>
          </View>
        </View>
        <Input
          onChangeText={text => handleOnChange(text, 'name')}
          onFocus={() => handleError(null, 'name')}
          error={errors.name}
          placeholder='Username'
          placeholderTextColor={COLORS.gray2}
          imageSource={require('../../assets/images/User.png')}
        ></Input>
        <Input
          onChangeText={text => handleOnChange(text, 'code')}
          onFocus={() => handleError(null, 'code')}
          error={errors.code}
          keyboardType='numeric'
          placeholder='Code'
          placeholderTextColor={COLORS.gray2}
          iconName='hash'
        ></Input>
        <View
          style={{
            width: '95%',
            marginTop: 20,
            borderWidth: 1,
            borderColor: COLORS.white,
            marginHorizontal: 10,
            borderRadius: 5,
            backgroundColor: COLORS.mainBackground
          }}
        >
          <Picker
            dropdownIconColor={COLORS.gray2}
            style={{
              backgroundColor: COLORS.secBackground,
              color: COLORS.gray2,
              margin: 1
            }}
            selectedValue={selectedLevel}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLevel(itemValue)
            }
          >
            <Picker.Item
              label='Level 1'
              value='Level 1'
              style={{
                backgroundColor: COLORS.secBackground,
                // borderColor: COLORS.secBackground,
                color: COLORS.gray2,
                shadowColor: COLORS.blue
              }}
            />
            <Picker.Item
              label='Level 2'
              value='Level 2'
              style={{
                backgroundColor: COLORS.secBackground,
                borderColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
            <Picker.Item
              label='Level 3'
              value='Level 3'
              style={{
                backgroundColor: COLORS.secBackground,
                borderColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
            <Picker.Item
              label='Level 4'
              value='Level 4'
              style={{
                backgroundColor: COLORS.secBackground,
                borderColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
          </Picker>
        </View>

        <View
          style={{
            width: '95%',
            marginTop: 20,
            borderWidth: 1,
            borderColor: COLORS.white,
            marginHorizontal: 10,
            borderRadius: 5,
            backgroundColor: COLORS.mainBackground
          }}
        >
          <Picker
            dropdownIconColor={COLORS.gray2}
            style={{
              backgroundColor: COLORS.secBackground,
              color: COLORS.gray2,
              margin: 1
            }}
            selectedValue={selectedDepartment}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDepartment(itemValue)
            }
          >
            <Picker.Item
              label='Computer science'
              value='Computer science'
              style={{
                backgroundColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
            <Picker.Item
              label='Level 2'
              value='Level 2'
              style={{
                backgroundColor: COLORS.secBackground,
                borderColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
            <Picker.Item
              label='Level 3'
              value='Level 3'
              style={{
                backgroundColor: COLORS.secBackground,
                borderColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
            <Picker.Item
              label='Level 4'
              value='Level 4'
              style={{
                backgroundColor: COLORS.secBackground,
                borderColor: COLORS.secBackground,
                color: COLORS.gray2
              }}
            />
          </Picker>
        </View>
        <Input
          placeholder='Password'
          placeholderTextColor={COLORS.gray2}
          onChangeText={text => {
            handleOnChange(text, 'password')
          }}
          onFocus={() => handleError(null, 'password')}
          error={errors.password}
          password
        ></Input>
        <View style={{ paddingTop: 20 }}>
          <Button title='Register' onPress={()=>{
            if(validate()){

            }
          }}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground
  }
})

export default RegistrationScreen
