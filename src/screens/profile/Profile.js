import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../constants/colors";
import ProfileButton from "../../components/ProfileButton";

import Icon from "react-native-vector-icons/FontAwesome";
import bta3 from "../../assets/icons/bta3.png";
import help from "../../assets/icons/help.png";
import i from "../../assets/icons/i.png";
import lock from "../../assets/icons/lock.png";
import pen from "../../assets/icons/pen.png";
import s7 from "../../assets/icons/s7.png";
import save from "../../assets/icons/save.png";
import x from "../../assets/icons/x.png";

const Profile = () => {
  const [username, setuserName] = useState("k3br");
  const [code, setCode] = useState("2027115");
  const [points, setPointes] = useState("0");
  const [title, setTilte] = useState("Your Title");

  handlerEditavatar = () => {
    console.log("EditAvatar preesed");
  };
  addpost = () => {
    console.log("Addpost preesed");
  };
  changeusername = () => {
    console.log("changeusername preesed");
  };
  changepassword = () => {
    console.log("changepassword preesed");
  };
  changedepartment = () => {
    console.log("changedepartment preesed");
  };
  verifyfriend = () => {
    console.log("verifyfriend preesed");
  };
  savedposts = () => {
    console.log("savedposts preesed");
  };
  deletemyaccount = () => {
    console.log("deletemyaccount preesed");
  };
  reportuser = () => {
    console.log("reportuser preesed");
  };
  helpcenter = () => {
    console.log("helpcenter preesed");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <LinearGradient
          colors={[COLORS.blue1, COLORS.mainBackground]}
          start={[0, 0]}
          end={[0, 1]}
          locations={[0, 0.8854]}
          style={styles.container}
        >
          <View style={styles.container1}>
            <View
              style={styles.circle} //avatar
            />
            <TouchableOpacity style={styles.button} onPress={handlerEditavatar}>
              <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
                Edit avatar
              </Text>
            </TouchableOpacity>

            <View style={styles.nameAndcode}>
              <Text style={styles.text}>{username}</Text>
              <Text style={styles.text1}>
                {" #"}
                {code}
              </Text>
            </View>

            <Text style={styles.Title}>{title}</Text>

            <Text style={styles.points}>you have {points} points</Text>

            <TouchableOpacity style={styles.addpost} onPress={addpost}>
              <Icon
                name="plus"
                style={{
                  color: COLORS.white,
                  marginRight: 5,
                  marginTop: 6,
                  marginLeft: 10,
                }}
              />
              <Text style={{ color: COLORS.white, fontSize: 13 }}>
                Add post
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.container2}>
          <View
            style={{
              position: "absolute",
              backgroundColor: COLORS.navBarBackground,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "8%",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Settings
            </Text>
          </View>
          <View style={{ top: "8%" }}>
            {/* Profile button */}
            <ProfileButton
              title="Change username"
              onPress={changeusername}
              iconname={pen}
            ></ProfileButton>

            <ProfileButton
              title="Change password"
              onPress={changepassword}
              iconname={lock}
            ></ProfileButton>

            <ProfileButton
              title="Change department"
              onPress={changedepartment}
              iconname={bta3}
            ></ProfileButton>

            <ProfileButton
              title="Verify friend"
              onPress={verifyfriend}
              iconname={s7}
            ></ProfileButton>
            <ProfileButton
              title="Saved posts"
              onPress={savedposts}
              iconname={save}
            ></ProfileButton>
            <ProfileButton
              title="Delete my account"
              onPress={deletemyaccount}
              iconname={x}
            ></ProfileButton>
            <ProfileButton
              title="Report user"
              onPress={reportuser}
              iconname={i}
            ></ProfileButton>
            <ProfileButton
              title="Help Center & questions"
              onPress={helpcenter}
              iconname={help}
            ></ProfileButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
  },
  container1: {
    left: "4%",
    top: "50%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  circle: {
    width: "25%",
    height: "20%",
    borderColor: COLORS.white,
    borderRadius: 180,
    backgroundColor: COLORS.gray1,
  },
  button: {
    borderColor: COLORS.white,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 20,
    width: "28%",
    height: "5%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  nameAndcode: {
    flexDirection: "row",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    color: COLORS.white,
  },
  text1: {
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.5)",
  },

  Title: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "rgba(255, 0, 0, 0.7)",
  },
  points: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.5)",
  },
  addpost: {
    borderColor: COLORS.white,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 25,
    width: "24%",
    backgroundColor: COLORS.graish,
    flexDirection: "row",
    fontSize: 13,
  },
  container2: {
    width: "100%",
    height: "40%",
    backgroundColor: "#33363F",
  },
});
export default Profile;
