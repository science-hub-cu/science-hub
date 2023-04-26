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
import VerifyScreen from "../screens/profileScreens/VerifyScreen";
import AuthScreen from "../screens/auth/authScreen";

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