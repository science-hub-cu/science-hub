import React, { useState } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../assets/colors'
import { useFonts } from 'expo-font'
import Input from '../../components/input'
import Button from '../../components/Button'
import { AntDesign } from '@expo/vector-icons'
import LoginScreen from './Login'
import { ScrollView } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'

const RegistrationScreen = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)


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
              marginLeft: 110,
              fontFamily: 'majalla',
              fontSize: 25
            }}
            onPress={() => {
              navigation.navigate('LoginScreen')
            }}
          >
            Login
          </Text>
          <View
            style={{
              marginLeft: 50,
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
          placeholder='Username'
          placeholderTextColor={COLORS.gray2}
          imageSource={require('../../assets/images/User.png')}
        ></Input>
        <Input
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
              color: COLORS.gray2, margin: 1,
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
            backgroundColor: COLORS.mainBackground,
            
          }}
        >
          <Picker
          dropdownIconColor={COLORS.gray2}
            style={{
              backgroundColor: COLORS.secBackground,
              color: COLORS.gray2,
              margin:1
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
                color: COLORS.gray2,
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
          password
          placeholder='Password'
          placeholderTextColor={COLORS.gray2}
        ></Input>
        <View style={{paddingTop:20}}>
        <Button title='Register'></Button>
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
