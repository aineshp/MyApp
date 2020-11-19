import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import CustomSideBarMenu from './CustomSideBarMenu';
import { AppTabNavigator } from './AppTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import Calendar from '../components/Calendar';
import CompletionsScreen from '../screens/CompletionsScreen';
import PlannerScreen from '../screens/PlannerScreen';
import NotificationScreen from '../screens/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
        navigationOptions:{
            drawerIcon:<Icon name='home' type='font-awesome' />
        }
    },
    Calendar:{
        screen:Calendar,       
         navigationOptions:{
            drawerIcon:<Icon name='calendar' type='font-awesome' />,
            drawerLabel:'My Donations'
        }
    },
    Planner:{
        screen:PlannerScreen,
        navigationOptions:{
            drawerIcon:<Icon name='planner' type='font-awesome' />,
            drawerLabel:'My Received Books'
        }
    },
    Notifications:{
        screen:NotificationScreen,
        navigationOptions:{
            drawerIcon:<Icon name='bell' type='font-awesome' />,
            drawerLabel:'Notifications'
        }
    },
    Settings:{
        screen:SettingsScreen,
        navigationOptions:{
            drawerIcon:<Icon name='cog' type='font-awesome' />,
            drawerLabel:'Settings'
        }
    }
},
    {contentComponent:CustomSideBarMenu},
    {initialRouteName:'Home'
})
