import React, { Component } from "react";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './AuthNavigator'
import ChatNavigator from './ChatNavigator'
import AccountNavigator from './AccountNavigator'
import * as constants from '../../constants'

/*consists of:
-header
-children
-footer
*/
// You can explore the built-in icon families and icons on the web at:
  // https://icons.expo.fyi/

const BottomTab = createBottomTabNavigator();

function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }

const BottomTabNavigator = () => {
    

    
    return (

      <BottomTab.Navigator
        initialRouteName={constants.CHAT_PATH}
        //tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
        <BottomTab.Screen
          name={constants.CHAT_PATH}
          component={ChatNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatboxes" color={color} />,
          }}
        />
        <BottomTab.Screen
          name={constants.ACCOUNT_PATH}
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    );
  }

export default BottomTabNavigator

