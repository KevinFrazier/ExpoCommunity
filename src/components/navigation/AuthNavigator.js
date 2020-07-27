import React from 'react'
import HomeScreen from '../../screens/HomeScreen'
import SignUp from '../../screens/Untitled'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigator = () => {

    return(

        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>

    )

}

export default AuthNavigator