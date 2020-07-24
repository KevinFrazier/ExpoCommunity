import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import ChooseChatScreen from './screens/ChooseChatScreen'
import SignUp from './screens/Untitled'
import ChatScreen2 from './screens/ChatScreen2'
import EditWallpaper from './screens/EditWallpaperClicked1'
import EditWallpaper2 from './screens/EditWallpaperClicked1'
import NC_friends from './screens/AddFriends'
import NC_settings from './screens/NewChat'
import NC_wallpaper from './screens/WallpaperScreen2'
import NC_WEdit from './screens/EditWallpaperClicked'
import Timeline from './screens/WallpaperScreen3'
import Timeline2 from './screens/TimeLine1'
import UserProfile from './screens/SignUpSetUp'
import Wallpaper from './screens/WallpaperScreen3'

import combineProviders from './states/'
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
        <Stack.Screen name="ChooseChatScreen" component={ChooseChatScreen}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ChatScreen2" component={ChatScreen2}/>
        <Stack.Screen name="EditWallpaper" component={EditWallpaper}/>
        <Stack.Screen name="EditWallpaper2" component={EditWallpaper2}/>
        <Stack.Screen name="NC_friends" component={NC_friends}/>
        <Stack.Screen name="NC_settings" component={NC_settings}/>
        <Stack.Screen name="NC_wallpaper" component={NC_wallpaper}/>
        <Stack.Screen name="NC_WEdit" component={NC_WEdit}/>
        <Stack.Screen name="Timeline" component={Timeline}/>
        <Stack.Screen name="Timeline2" component={Timeline2}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="Wallpaper" component={Wallpaper}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
};
export default combineProviders(App);
