import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


/*consists of:
-header
-children
-footer
*/
const BottomTab = createBottomTabNavigator();

function TabBarIcon() {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }
  
function TabOneNavigator() {
return (
    <TabOneStack.Navigator>
    <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
    />
    </TabOneStack.Navigator>
);
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
return (
    <TabTwoStack.Navigator>
    <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
    />
    </TabTwoStack.Navigator>
);
}


export default function BottomTabNavigator() {
    
    
    
    return (

      <BottomTab.Navigator
        initialRouteName="TabOne"
        tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen
          name="TabOne"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="TabTwo"
          component={TabTwoNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    );
  }
  
  // You can explore the built-in icon families and icons on the web at:
  // https://icons.expo.fyi/