import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useScreens } from 'react-native-screens'; // optimisation for screens

// Packages to install when working with react navigation
// npm install react-navigation react-navigation-tabs react-naivgation-drawer react-navigation-stack react-native-screens
// expo install react-native-gesture-handler react-native-reanimated
// for header buttons, npm install react-navigation-header-buttons
// for android specific material bottom tabs, npm install react-navigation-material-bottom-tabs react-native-paper


import MealsNavigator from './navigation/MealsNavigator';

useScreens();

export default function App() {
  return (
    <MealsNavigator />
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
