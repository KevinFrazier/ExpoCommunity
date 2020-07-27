import React from 'react'

import ChooseChatScreen from '../../screens/ChooseChatScreen'
import NC_settings from '../../screens/NewChat'
import ChatScreen from '../../screens/ChatScreen'
import NC_friends from '../../screens/AddFriends'
import EditWallpaper from '../../screens/EditWallpaperClicked1'
import EditWallpaper2 from '../../screens/EditWallpaperClicked1'
import NC_wallpaper from '../../screens/WallpaperScreen2'
import NC_WEdit from '../../screens/EditWallpaperClicked'
import Timeline from '../../screens/WallpaperScreen3'
import Timeline2 from '../../screens/TimeLine1'
import Wallpaper from '../../screens/WallpaperScreen3'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigator = () => {

    return(

            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="ChooseChatScreen" component = {ChooseChatScreen} />
                <Stack.Screen name="NC_settings" component = {NC_settings} />
                <Stack.Screen name="ChatScreen" component = {ChatScreen} />
                <Stack.Screen name="NC_friends" component = {NC_friends} />
                <Stack.Screen name="EditWallpaper" component = {EditWallpaper} />
                <Stack.Screen name="EditWallpaper2" component = {EditWallpaper2} />
                <Stack.Screen name="NC_wallpaper" component = {NC_wallpaper} />
                <Stack.Screen name="NC_WEdit" component = {NC_WEdit} />
                <Stack.Screen name="Timeline" component = {Timeline} />
                <Stack.Screen name="Timeline2" component = {Timeline2} />
                <Stack.Screen name="Wallpaper" component = {Wallpaper} />

            </Stack.Navigator>
    )
    

}

export default AuthNavigator