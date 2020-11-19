import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen.js';
import PlannerScreen from './Screens/PlannerScreen';
import CompletionsScreen from './Screens/CompletionsScreen';
import AppTabNavigator from './components/AppTabNavigator'
import {createBottomDrawerNavigator} from 'react-native-tabs';
import {createTabNavigator,createSwitchNavigator} from 'react-navigation';
import {RN} from 'react-native';

export default function App(){
  return (
    <WelcomeScreen/>
  );
}

const switchNavigator= createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator},

})
const AppContainer=createAppContainer(switchNavigator);
