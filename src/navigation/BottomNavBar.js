import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes";

//Screens used in the bottom navigation bar.
import HomeScreen from "../screens/Home";
import Profile from "../screens/profile/Profile";
import MaterialHome from "../screens/material/MaterialHome";
import SearchScreen from "../screens/SearchScreen";

//Icons' components.
import { routeToIcon } from "./NavigationHelper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
function PageAddPost() {
  return null;
}

function BottomNavBar({ navigation }) {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const IconComponent = routeToIcon(route.name);
          let opacity = focused ? 1 : 0.3;
          return <IconComponent color={color} opacity={opacity} />;
        },
        tabBarPressColor: "transparent",
        // lazy: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        // tabBarBounces: false,
        tabBarIndicatorStyle: { height: 0 },
        tabBarStyle: {
          height: 45,
          display: "flex",
          backgroundColor: COLORS.navBar,
        },
        // swipeEnabled: false,
        // tabBarScrollEnabled: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name={ROUTES.FEED_ROUTE} component={HomeScreen} />
      <Tab.Screen name={ROUTES.MATERIAL_ROUTE} component={MaterialHome} />
      <Tab.Screen
        name={ROUTES.ADD_ROUTE}
        options={{
          tabBarButton: ({ children, style }) => {
            return (
              <TouchableOpacity
                style={[...style, { height: "100%", width: 50 }]}
                onPress={() => navigation.navigate(ROUTES.ADD_ROUTE)}
              >
                {children}
              </TouchableOpacity>
            );
          },
        }}
        component={PageAddPost}
      />
      <Tab.Screen name={ROUTES.SEARCH_ROUTE} component={SearchScreen} />
      <Tab.Screen name={ROUTES.PROFILE_ROUTE} component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomNavBar;
