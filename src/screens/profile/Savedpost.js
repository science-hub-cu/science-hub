import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
const Savedpost = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ backgroundColor: "#33363F" }}>
          <Text>save posts</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#33363F",
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
});
export default Savedpost;
