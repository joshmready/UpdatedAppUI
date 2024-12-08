import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Profile from "../screens/Profile";
import CreatePost from "../screens/CreatePost";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


// Adding headerShown to some of the Screens below, removes a duplicate header from appearing
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ContactStackNavigator, ProfileStackNavigator };
