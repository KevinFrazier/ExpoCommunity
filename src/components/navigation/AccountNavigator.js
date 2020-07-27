import React from 'react'
import UserProfile from '../../screens/SignUpSetUp'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AccountNavigator = () => {

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="UserProfile" component={UserProfile}/>
        </Stack.Navigator>
    )
    

}

export default AccountNavigator