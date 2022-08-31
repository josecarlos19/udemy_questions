import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'ScreenA') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'ScreenB') {
        iconName = focused ? 'ios-list-box' : 'ios-list';
      }
      else if (route.name === 'ScreenC') {
        iconName = focused ? 'ios-list-box' : 'ios-list';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false
  })}
    initialRouteName='ScreenB'>
    <Tab.Screen name="ScreenA" component={ScreenA} />
    <Tab.Screen name="ScreenB" component={ScreenB} />
    <Tab.Screen name="ScreenC" component={ScreenC} />
  </Tab.Navigator>
)
