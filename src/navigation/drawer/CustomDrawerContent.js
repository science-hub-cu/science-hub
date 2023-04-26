import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import COLORS from "../../constants/colors";
import Notifications from "../../components/Notifications";
import { useNotification } from "../../context/NotificationContext";
const CustomDrawerContent = (props) => {
  const { notificationsList } = useNotification();
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
      {notificationsList.map((notif) => {
        return <Notifications {...notif} />;
      })}
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
