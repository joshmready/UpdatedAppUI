import React, { useContext } from "react";
import { Pressable, Text, View, Switch, Button } from "react-native";
import { useTheme } from '@react-navigation/native';
import { AppContext } from "../theme/AppContext";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { ContactStackNavigator, MainStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomNavigationDrawer from "../components/CustomDrawerNavigator";
import CreatePost from "../screens/CreatePost";

const Drawer = createDrawerNavigator();

// function LogoTitle({ navigation }) {
//     return (
//         <View>
//             <Switch
//                 value={isDarkTheme}
//                 onValueChange={() => {
//                     setIsDarkTheme(prev => !prev)
//                 }}
//             />
//         </View>
//     )
// }

const DrawerNavigator = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext)
    const { colors } = useTheme();

    


    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'right',
                headerLeft: () => (
                    <Switch
                    value={isDarkTheme}
                    onValueChange={() => {
                        setIsDarkTheme(prev => !prev)
                    }}
                />
                ),
                headerRight: () => <DrawerToggleButton />,
                headerStyle: {
                    backgroundColor: '#F3D849'
                },
                headerTitle: 'Track',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 700,
                    color: '#000'
                },
                drawerActiveBackgroundColor: colors.drawerActiveBackgroundColor,
                drawerInactiveBackgroundColor: colors.drawerInactiveBackgroundColor,
                drawerContentContainerStyle: {
                    backgroundColor: colors.drawerBackgroundColor,
                    flex: 1
                },
                drawerActiveTintColor: colors.barText,
                drawerInactiveTintColor: colors.barText,
                // headerTransparent: true
            }}
        // drawerContent={props => <CustomNavigationDrawer {...props} />}

        >
            <Drawer.Screen
                name="Home"

                component={TabNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ size, focused }) => (
                        <MaterialCommunityIcons
                            name='home'
                            size={size}
                            color={focused ? colors.drawerActiveIconColor : colors.drawerInactiveIconColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Contact"
                component={ContactStackNavigator}
                options={{
                    title: 'Contact',
                    drawerIcon: ({ size, focused }) => (
                        <MaterialCommunityIcons
                            name='phone'
                            size={size}
                            color={focused ? colors.drawerActiveIconColor : colors.drawerInactiveIconColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    title: 'Profile',
                    drawerIcon: ({ size, focused }) => (
                        <MaterialCommunityIcons
                            name='account'
                            size={size}
                            color={focused ? colors.drawerActiveIconColor : colors.drawerInactiveIconColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="CreatePost"
                component={CreatePost}
                options={{
                    title: 'My Workout Programs',
                    drawerIcon: ({ size, focused }) => (
                        <MaterialCommunityIcons
                            name='dumbbell'
                            size={size}
                            color={focused ? colors.drawerActiveIconColor : colors.drawerInactiveIconColor}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
    );
}

export default DrawerNavigator;