import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../constants/colors';

//Screens used in the bottom navigation bar.
import HomeScreen from '../screens/Home';

//Icons' components.
import { HomeIcon } from '../components/IconLibrary';
import { AddIcon } from '../components/IconLibrary';
import { MaterialIcon } from '../components/IconLibrary';
import { SearchIcon } from '../components/IconLibrary';
import { ProfileIcon } from '../components/IconLibrary';


const Tab = createBottomTabNavigator();

function BottomNavBar() {

  //To specify the pressed icon.
  const icons = {
    Home: HomeIcon,
    Material: MaterialIcon,
    Add: AddIcon,
    Search: SearchIcon,
    Profile: ProfileIcon
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const IconComponent = icons[route.name];
          let opacity = focused ? 1 : 0.3;

          return <IconComponent color={color} opacity={opacity} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: [
            {
                height: 45,
                display: 'flex', 
                backgroundColor: COLORS.navBar,
            },
            null
        ],
        headerShown: false,
      })}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Material" component={HomeScreen} />
      <Tab.Screen name="Add" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
      
    </Tab.Navigator>
  );
}

export default BottomNavBar;