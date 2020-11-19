  
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import CompletionsScreen from '../screens/CompletionsScreen';
import PlannerScreen from '../screens/PlannerScreen';
export const AppStackNavigator = createStackNavigator({
    Planner:{screen:PlannerScreen,
                    navigationOptions:{
                        headerShown:false
                    } },
    Completions:{screen:CompletionsScreen,
                    navigationOptions:{
                        headerShown:false
                    }},
},
    {initialRouteName:'Planner'}
);