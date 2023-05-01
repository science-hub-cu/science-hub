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
import Loading from "../Loading";
import Button from "../../components/Button";
import UserService from "../../services/UserService";
import { useLayoutEffect } from "react";
import ROUTES from "../../constants/routes";
import { Svg, Rect } from "react-native-svg";
const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUserName] = useState("k3br");
  const [code, setCode] = useState("2027115");
  const [points, setPointes] = useState("0");
  const [title, setTilte] = useState("Your Title");
  const [gradientcolors, setgradientcolors] = useState([
    COLORS.blue1,
    COLORS.mainBackground,
  ]);
  useLayoutEffect(() => {
    setLoading(true);
    UserService.getCurrentUserData()
      .then((user) => {
        setCode(user.code);
        setUserName(user.username);
        setTilte(user.title);
        setPointes(user.points);
        const BgColor = user.avatar.cover ?? "default";
        if (BgColor === "gold")
          setgradientcolors([COLORS.gold, COLORS.mainBackground]);
      })
      .finally(() => setLoading(false));
  }, []);
  handlerEditavatar = () => {
    console.log("EditAvatar preesed");
  };
  addpost = () => {
    console.log("Addpost preesed");
  };
  changeusername = () => navigation.navigate(ROUTES.CHANGE_USERNAME_ROUTE);
  changepassword = () => {
    console.log("changepassword preesed");
  };
  changedepartment = () => {
    console.log("changedepartment preesed");
  };
  verifyfriend = () => navigation.navigate(ROUTES.VERIFY_ROUTE);

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
  handelbutton = () => navigation.toggleDrawer();
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#33363F" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={gradientcolors}
          start={[0, 0]}
          end={[0, 1]}
          locations={[0, 0.8854]}
          style={styles.container}
        >
          <TouchableOpacity
            style={{ padding: 15, flexDirection: "row-reverse" }}
            onPress={handelbutton}
          >
            <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <Rect
                x="4"
                y="5"
                width="16"
                height="5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <Rect
                x="4"
                y="14"
                width="16"
                height="5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
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
              opacity={0.2}
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
              opacity={0.2}
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
              iconname="Cus"
            ></ProfileButton>

            <ProfileButton
              title="Change password"
              onPress={changepassword}
              iconname="Cpass"
            ></ProfileButton>

            <ProfileButton
              title="Change department or level"
              onPress={changedepartment}
              iconname="Cdep"
            ></ProfileButton>

            <ProfileButton
              title="Verify friend"
              onPress={verifyfriend}
              iconname="VF"
            ></ProfileButton>

            <ProfileButton
              title="Saved posts"
              onPress={savedposts}
              iconname="SP"
            ></ProfileButton>

            <ProfileButton
              title="Delete my account"
              onPress={deletemyaccount}
              iconname="DA"
            ></ProfileButton>

            <ProfileButton
              title="Report user"
              onPress={reportuser}
              iconname="RU"
            ></ProfileButton>
            <ProfileButton
              title="Help Center&questions"
              onPress={helpcenter}
              iconname="HC"
            ></ProfileButton>
            <ProfileButton
              title="Log Out"
              onPress={() => UserService.signOut()}
              iconname="LG"
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
