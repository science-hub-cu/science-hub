import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useRef, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../constants/colors";
import ProfileButton from "../../components/ProfileButton";
import Loading from "../Loading";
import Button from "../../components/Button";
import { useLayoutEffect } from "react";
import ROUTES from "../../constants/routes";
import { Svg, Rect } from "react-native-svg";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AvatarBottomSheetScreen from "./avatarBottmSheetScreen";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/AuthSlice";
import { Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const screenHeight = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUserName] = useState("k3br");
  const [code, setCode] = useState("2027115");
  const [points, setPointes] = useState("0");
  const [title, setTilte] = useState("Your Title");
  const bottomSheetModalRef = useRef(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  //open bottom sheet
  function handelPresentModal() {
    bottomSheetModalRef.current?.present();
    setIsBottomSheetOpen(true);
  }
  //close bottom sheet when navigate to another screen
  useFocusEffect(
    useCallback(() => {
      return () => {
        if (isBottomSheetOpen) {
          bottomSheetModalRef.current?.close();
          setIsBottomSheetOpen(false);
        }
      };
    }, [isBottomSheetOpen])
  );

  //close the bottom sheet when pressing outside of the content
  const handlePressOutside = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.close();
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        handlePressOutside(); 
      };
    }, [])
  );

  

  //handel logout
  const dispatch = useDispatch();
  const handelLogout = async () => {
    dispatch(logOut());
  };
  const [gradientcolors, setgradientcolors] = useState([
    COLORS.blue1,
    COLORS.mainBackground,
  ]);
  useLayoutEffect(() => {
    setLoading(false);
  }, []);

  addpost = () => {
    console.log("Addpost preesed");
  };
  changeusername = () => navigation.navigate(ROUTES.CHANGE_USERNAME_ROUTE);
  changepassword = () => navigation.navigate(ROUTES.CHANGE_PASSWORD_ROUTE);
  changedepartmentOrLevel = () =>
    navigation.navigate(ROUTES.CHANGE_DEP_LEV_ROUTE);
  verifyfriend = () => navigation.navigate(ROUTES.VERIFY_ROUTE);
  savedposts = () => navigation.navigate(ROUTES.SAVED_POTSTS_ROUTE);
  deletemyaccount = () => navigation.navigate(ROUTES.DELETEACC_ROUTE);
  reportuser = () => navigation.navigate(ROUTES.REP_USER_ROUTE);
  helpcenter = () => navigation.navigate(ROUTES.HELP_ROUTE);
  handelbutton = () => navigation.toggleDrawer();
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#33363F" }}>
      <BottomSheetModalProvider>
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <LinearGradient
              colors={gradientcolors}
              start={[0, 0]}
              end={[0, 1]}
              locations={[0, 0.8854]}
              style={styles.container}
            >
              <View
                style={styles.notificationIconView}
              >
                <TouchableOpacity onPress={handelbutton}>
                  <Image
                    source={require("../../assets/images/notificationIcon.png")}
                    style={styles.notificationIcon}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.topSection}>
                <Image
                  source={require("../../assets/favicon.png")}
                  style={styles.profileImage}
                />

                <Button
                  title={"Edit avatar"}
                  width="35%"
                  fontColor="#fff"
                  backgroundColor="transparent"
                  borderWidth={1}
                  onPress={handelPresentModal}
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
                <Text style={styles.points}>You have {points} points</Text>
                <Button
                  title={" Add post"}
                  fontSize={13}
                  width="30%"
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
                  justifyContent: "center",
                  paddingVertical: 1,
                  height: 35,
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
                  onPress={changedepartmentOrLevel}
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
                  onPress={handelLogout}
                  iconname="LG"
                ></ProfileButton>
              </View>
            </View>
            <AvatarBottomSheetScreen
              onDismiss={() => setIsBottomSheetOpen(false)}
              bottomSheetModalRef={bottomSheetModalRef}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: screenHeight * 0.45,
  },
  topSection: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  nameAndcode: {
    flexDirection: "row",
    width: "100%",
    marginTop: 4,
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
    fontSize: 13,
    fontWeight: "400",
    color: "rgba(255, 0, 0, 0.7)",
  },
  points: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    color: COLORS.gray2,
  },
  container2: {
    backgroundColor: "#33363F",
    padding: 5,
    width: "100%",
  },
  BottomSheet: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  notificationIconView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 15,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  }
});

export default Profile;
