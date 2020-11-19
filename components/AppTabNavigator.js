import React,{Component} from 'react';
import {Image} from 'react-native';
import{createBottomTabNavigator} from 'react-navigation';
import PlannerScreen from '../Screens/PlannerScreen';
import CompletionsScreen from '../Screens/AllActivities';
export const AppTabNavigator= createBottomTabNavigator({
    PlannerScreen:{screen:PlannerScreen,
    navigationOption:{
        tabBarIcon:<Image source={require('../assets/splash.png')}
        style={{width:30,height:30}}/>,
        tabBarLabel:'Planner' ,
    }        
},
CompletionsScreen:{screen:CompletionsScreen,
navigationOption:{
    tabBarIcon:<Image source={require('../assets/completion.png')}
    style={{width:30,height:30}}/>,
    tabBarLabel:'Completions'

}
}

})