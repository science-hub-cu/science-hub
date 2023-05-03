import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"; 



const MaterialHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.secBackground,
          width: "96%",
          height: 100,
          borderRadius: 15,
          marginTop: "1.5%",
          marginHorizontal: "2%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            // backgroundColor: COLORS.red,
            width: "82%",
            // height: 100,
            // borderRadius: 15,
            // marginTop: "1.5%",
            // marginHorizontal: "2%",
          }}
        >
          <Text
            style={{
              fontFamily: "TrebuchetMS",
              paddingLeft: "5%",
              paddingTop: "2%",
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            Subject code
          </Text>
          <Text
            style={{
              paddingLeft: "5%",
              color: COLORS.gray1,
              fontWeight: 400,
              fontSize: 9,
            }}
          >
            subject name
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                paddingLeft: "5%",
                color: COLORS.white,
                fontWeight: 400,
                fontSize: 10,
                width: "100%",
                paddingTop: "1%",
                // backgroundColor: COLORS.red,
              }}
            >
              Description (this subject is offf a777 so much more than what you
              think, i have to mention that bakar is hotter more than Mo.Salah
              with his black skin and small 7amoksha, today we will talk about
              small 7amokshat & i wanna mention that small...
            </Text>
          </View>
        </View>
        <View
          style={{
            marginRight: "4%",
            paddingTop: "2%",
            // backgroundColor: COLORS.red,
            alignItems: "center",
          }}
        >
          <AntDesign name="star" size={19} color="gold" style={{}} />
          {/* <AntDesign name="staro" size={19} color="white" style={{}} /> */}
          <MaterialIcons name="keyboard-arrow-up" size={27} color="blue" />
          <Text style={{ color: COLORS.white, fontSize: 9 }}>69</Text>
          <MaterialIcons name="keyboard-arrow-down" size={27} color="white" />
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  text: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 32,
    textAlign: "center",
    flex: 1,
    textAlignVertical: "center",
  },
});
export default MaterialHome;
