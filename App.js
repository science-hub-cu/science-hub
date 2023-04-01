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
          password
        />
        <StatusBar style='auto' />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
