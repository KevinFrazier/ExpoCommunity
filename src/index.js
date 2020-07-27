import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import SignUp from './screens/Untitled'
import UserProfile from './screens/SignUpSetUp'

import ChooseChatScreen from './screens/ChooseChatScreen'
import NC_settings from './screens/NewChat'
import ChatScreen from './screens/ChatScreen'
import NC_friends from './screens/AddFriends'
import EditWallpaper from './screens/EditWallpaperClicked1'
import EditWallpaper2 from './screens/EditWallpaperClicked1'
import NC_wallpaper from './screens/WallpaperScreen2'
import NC_WEdit from './screens/EditWallpaperClicked'
import Timeline from './screens/WallpaperScreen3'
import Timeline2 from './screens/TimeLine1'
import Wallpaper from './screens/WallpaperScreen3'

import combineProviders, { UserContext } from './states/'

import AppNavigator from './components/navigation/'
import AuthenticationNavigator from './components/navigation/AuthNavigator'
import * as constants from './constants'
const Stack = createStackNavigator();

const App = () => {

  let [user, setUser] = useContext(UserContext)

  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName = {user && user.user ? constants.APP_PATH : constants.AUTH_PATH}  screenOptions={{headerShown: false}}>
        <Stack.Screen name={constants.AUTH_PATH} component={AuthenticationNavigator}/> 
        <Stack.Screen name={constants.APP_PATH} component={AppNavigator}/> 
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
};
export default combineProviders(App);
