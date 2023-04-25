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

import bta3 from "../../assets/icons/bta3.png";
import help from "../../assets/icons/help.png";
import i from "../../assets/icons/i.png";
import lock from "../../assets/icons/lock.png";
import pen from "../../assets/icons/pen.png";
import s7 from "../../assets/icons/s7.png";
import save from "../../assets/icons/save.png";
import x from "../../assets/icons/x.png";
import Button from "../../components/Button";
import UserService from "../../services/UserService";
import { useLayoutEffect } from "react";
import ROUTES from "../../constants/routes";
const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUserName] = useState("k3br");
  const [code, setCode] = useState("2027115");
  const [points, setPointes] = useState("0");
  const [title, setTilte] = useState("Your Title");

  useLayoutEffect(() => {
    setLoading(true);
    UserService.getCurrentUserData()
      .then((user) => {
        setCode(user.code);
        setUserName(user.username);
        setTilte(user.title);
        setPointes(user.points);
      })
      .finally(() => setLoading(false));
  }, []);
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
    navigation.navigate(ROUTES.VERIFY_ROUTE);
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

  return loading ? (
    <View>
      <Text>Loading.....</Text>
    </View>
  ) : (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#33363F" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={[COLORS.blue1, COLORS.mainBackground]}
          start={[0, 0]}
          end={[0, 1]}
          locations={[0, 0.8854]}
          style={styles.container}
        >
          <View style={styles.topSection}>
            <View
              style={styles.circle} //avatar
            />
            <Button
              title={"Edit avatar"}
              width="28%"
              fontColor="#fff"
              backgroundColor="transparent"
              borderWidth={1}
              onPress={handlerEditavatar}
              opacity={.2}
            />

            <View style={styles.nameAndcode}>
              <Text style={styles.text}>{username}</Text>
              <Text style={styles.text1}>
                {" #"}
                {code}
              </Text>
            </View>

            <Text style={styles.Title}>{title}</Text>

            <Text style={styles.points}>you have {points} points</Text>
            <Button
              title={"add post"}
              fontSize={13}
              width="24%"
              height="10%"
              backgroundColor={COLORS.graish}
              onPress={addpost}
              icon="plus"
              opacity={.2}
            />
          </View>
        </LinearGradient>
        <View style={styles.container2}>
          <View
            style={{
              backgroundColor: COLORS.navBarBackground,
              alignItems: "center",
              paddingVertical: 1,
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
          {/* Profile buttons  */}
          <View>
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
            <ProfileButton
              title="Log Out"
              onPress={() => UserService.signOut()}
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
  },
  topSection: {
    top: 0,
    paddingLeft: "4%",
    paddingTop: "30%",
    paddingBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  circle: {
    width: "25%",
    aspectRatio: 1 / 1,
    borderColor: COLORS.white,
    borderRadius: 180,
    backgroundColor: COLORS.gray1,
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
    color: COLORS.gray2,
  },

  Title: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "rgba(255, 0, 0, 0.7)",
  },
  points: {
    fontStyle: "normal",
    fontWeight: "400",
    color: COLORS.gray2,
  },
  container2: {
    backgroundColor: "#33363F",
  },
});
export default Profile;
