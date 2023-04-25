import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import COLORS from "../constants/colors";
import Notifications from "../components/Notifications";
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="notifications" size={32} style={styles.title} />
        <Text style={styles.title}> Notifications</Text>
      </View>
      <Notifications
        userName="omarKenawi"
        time="10:10pm"
        action=" upvote your post"
        image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
      />
      
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 30,
    fontFamily: "TrebuchetMS",
    marginBottom: "5%",
    marginTop: "2%",
    verticalAlign: "top",
    fontStyle: "normal",
  },
});
