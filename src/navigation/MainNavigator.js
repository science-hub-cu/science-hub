import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import ROUTES from "../constants/routes";
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
const Stack = createStackNavigator();

export default function MainNavigator() {
  const { user } = useAuth();

  const NotAuthedStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.AUTH_ROUTE} component={AuthScreen} />
      </Stack.Navigator>
    );
  };

  const AuthedStack = () => {
    return (
      <DrawerNavigator>
        <Drawer.Screen
          name={ROUTES.HOME_ROUTE}
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
        ></Drawer.Screen>
        {/** Profile pages group */}
        <Drawer.Group
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <CustomizedHeaderBackButton navigation={navigation} />
            ),
          })}
        >
          <Drawer.Screen name={ROUTES.VERIFY_ROUTE} component={VerifyScreen} />
          <Drawer.Screen
            name={ROUTES.CHANGE_USERNAME_ROUTE}
            component={ChangeUserNameScreen}
          />
          <Drawer.Screen
            name={ROUTES.CHANGE_PASSWORD_ROUTE}
            component={ChangePassword}
          />
          <Drawer.Screen
            name={ROUTES.CHANGE_DEP_ROUTE}
            component={ChangeDepartment}
          />
          <Drawer.Screen
            name={ROUTES.SAVED_POTSTS_ROUTE}
            component={ChangeDepartment}
          />
          <Drawer.Screen
            name={ROUTES.DELETEACC_ROUTE}
            component={ChangeDepartment}
          />
          <Drawer.Screen
            name={ROUTES.REP_USER_ROUTE}
            component={ChangeDepartment}
          />
          <Drawer.Screen
            name={ROUTES.HELP_ROUTE}
            component={ChangeDepartment}
          />
        </Drawer.Group>
      </DrawerNavigator>
    );
  };

  return (
    <NavigationContainer>
      {user ? <AuthedStack /> : <NotAuthedStack />}
    </NavigationContainer>
  );
}
