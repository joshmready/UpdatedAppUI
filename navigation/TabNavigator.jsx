import React from "react";
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { TouchableOpacity } from "react-native";
// import Icon from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as Icon from 'react-native-feather';

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

// const screenOptions = (route, color) => {
//   let iconName;

//   switch (route.name) {
//     case 'Home':
//       iconName = 'home';
//       break;
//     case 'Browse':
//       iconName = 'appstore-o';
//       break;
//     case 'Library':
//       iconName = 'folder1';
//       break;
//     default:
//       break;
//   }
//   return <Icon name={iconName} color={color} size={24} />;
// }


const BottomTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.tabbarBackground
        },
        useBottomTabBarHeight: 50,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons 
              name="home" 
              color={focused ? colors.tabbarActiveColor : colors.tabbarInactiveColor}
              size={size} 
            />
          ),
          tabBarActiveTintColor: colors.barText,
          tabBarInactiveTintColor: colors.barText,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Updates',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons 
              name="bell" 
              color={focused ? colors.tabbarActiveColor : colors.tabbarInactiveColor}
              size={size} 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;