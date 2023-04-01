import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import Input from './components/input'
import COLORS from './assets/colors'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>OP app !</Text>
      <Button title='Login'></Button>
      
      <Input
        placeholder='Enter your passwrd here'
        placeholderTextColor={COLORS.gray}
        // label='Password'
        // iconName='email-outline'
        // onChangeText={text => {
        //   handleOnChange(text, 'password')
        // }}
        // onFocus={() => handleError(null, 'password')}
        // error={errors.password}
        password
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D31',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
