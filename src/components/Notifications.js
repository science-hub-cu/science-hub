import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";

const Notifications = ({
  userName = "",
  image = "",
  time = "",
  action = "",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          ></Image>
        </View>
        <View style={{ marginLeft: "3%" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: COLORS.blue1,
                fontSize: 15,
              }}
            >
              {userName}
            </Text>
            <Text style={{ marginLeft: "3%", color: COLORS.white }}>
              {action}
            </Text>
          </View>
          <Text style={{ color: COLORS.white }}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    marginBottom: "1%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  imageView: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    color: COLORS.white,
    fontWeight: 400,
    fontSize: 32,
    fontFamily: "Trebuchet",
    marginBottom: "2%",
  },
});
