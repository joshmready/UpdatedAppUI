import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Appearance, useColorScheme } from 'react-native';
import React, { useState, useMemo } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import DarkTheme from './theme/DarkTheme';
import LightTheme from './theme/LightTheme';
import { AppContext } from './theme/AppContext';



export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

 

  const appContext = useMemo(() => {
    return { isDarkTheme, setIsDarkTheme }
  })

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <DrawerNavigator />
      </AppContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
