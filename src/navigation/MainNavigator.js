import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import ROUTES from "../constants/routes";
import COLORS from "../constants/colors";
import { useAuth } from "../context/AuthContext";
import CustomizedHeaderBackButton from "../components/CustomizedHeaderBackButton";

/**customzed navigators */
import { Drawer, DrawerNavigator } from "./drawer/DrawerNavigator";
import BottomNavBar from "./BottomNavBar";
/** Screens */
import VerifyScreen from "../screens/profile/VerifyScreen";
import AuthScreen from "../screens/auth/authScreen";
import ChangeUserNameScreen from "../screens/profile/ChangeUserNameScreen";
import ChangePassword from "../screens/profile/ChangePassword";
import ChangeDepartment from "../screens/profile/ChangeDepartment";
import Help from "../screens/profile/Help";
import Savedpost from "../screens/profile/Savedpost";
import DeleteAcc from "../screens/profile/DeleteAcc";
import Reportuser from "../screens/profile/Reportuser";
import AddScreen from "../screens/AddScreen";
import SplashScreen from "../screens/SplashScreen";
import TermsScreen from "../screens/TermsScreen";
import NotVerifiedScreen from "../screens/NotVerifiedScreen";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

export default function MainNavigator() {
  const { user, authLoading } = useAuth();

  const HomePage = () => {
    return (
      <DrawerNavigator>
        <Drawer.Screen
          name={`${ROUTES.HOME_ROUTE}_drawer`}
          component={BottomNavBar}
          options={({ route }) => {
            const selectedRoute =
              getFocusedRouteNameFromRoute(route) ?? ROUTES.FEED_ROUTE;
            const showHeader =
              selectedRoute === ROUTES.FEED_ROUTE ||
              selectedRoute === ROUTES.MATERIAL_ROUTE;

            return {
              title: selectedRoute,
              headerShown: showHeader,
            };
          }}
        />
      </DrawerNavigator>
    );
  };

  const NotAuthedStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.AUTH_ROUTE} component={AuthScreen} />
        <Stack.Screen
          name={ROUTES.TERMS_ROUTE}
          options={{ presentation: "modal" }}
          component={TermsScreen}
        />
      </Stack.Navigator>
    );
  };

  const AuthedStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.secBackground },
          headerTintColor: COLORS.white,
          headerShown: false,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name={ROUTES.HOME_ROUTE} component={HomePage} />
        {/** Profile pages group */}
        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <CustomizedHeaderBackButton navigation={navigation} />
            ),
            headerShown: true,
            presentation: "modal",
          })}
        >
          <Stack.Screen name={ROUTES.VERIFY_ROUTE} component={VerifyScreen} />
          <Stack.Screen
            name={ROUTES.CHANGE_USERNAME_ROUTE}
            component={ChangeUserNameScreen}
          />
          <Stack.Screen
            name={ROUTES.CHANGE_PASSWORD_ROUTE}
            component={ChangePassword}
          />
          <Stack.Screen
            name={ROUTES.CHANGE_DEP_ROUTE}
            component={ChangeDepartment}
          />
          <Stack.Screen
            name={ROUTES.SAVED_POTSTS_ROUTE}
            component={Savedpost}
          />
          <Stack.Screen name={ROUTES.DELETEACC_ROUTE} component={DeleteAcc} />
          <Stack.Screen name={ROUTES.REP_USER_ROUTE} component={Reportuser} />
          <Stack.Screen name={ROUTES.HELP_ROUTE} component={Help} />
        </Stack.Group>
        {/** Modals */}
        <Stack.Group
          screenOptions={{ headerShown: false, presentation: "modal" }}
        >
          <Stack.Screen name={ROUTES.ADD_ROUTE} component={AddScreen} />
          <Stack.Screen name={ROUTES.POST_ROUTE} component={PostScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  };

  const NotVerifiedStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ROUTES.YOU_ARE_NOT_VERIFIED_ROUTE}
          component={NotVerifiedScreen}
        />
      </Stack.Navigator>
    );
  };

  if (authLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {user ? (
        user.emailVerified ? (
          <AuthedStack />
        ) : (
          <NotVerifiedStack />
        )
      ) : (
        <NotAuthedStack />
      )}
    </NavigationContainer>
  );
}
