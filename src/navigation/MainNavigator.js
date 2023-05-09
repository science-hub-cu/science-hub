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
import AddScreen from "../screens/AddScreen";
import SplashScreen from "../screens/SplashScreen";
import TermsScreen from "../screens/TermsScreen";

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
        </Stack.Group>
        {/** Modals */}
        <Stack.Group
          screenOptions={{ headerShown: false, presentation: "modal" }}
        >
          <Stack.Screen name={ROUTES.ADD_ROUTE} component={AddScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  };
  if (authLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {user ? <AuthedStack /> : <NotAuthedStack />}
    </NavigationContainer>
  );
}
