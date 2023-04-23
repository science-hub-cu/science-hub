import { View, Text, StyleSheet, Image } from "react-native";
import COLORS from "../constants/colors";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg",
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
            omar
          </Text>
          <Text style={{ marginLeft: "3%", color: COLORS.white }}>
            upvote your post
          </Text>
        </View>
        <Text style={{ color: COLORS.white }}>10:10 pm</Text>
      </View>
    </View>
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
