import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import {SafeAreaView} from 'react-native'
import Signup from './src/screens/auth/Signup';
import Config from 'react-native-config';
import Signin from './src/screens/auth/Signin';
import Splash from './src/screens/auth/Splash';

import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const WEB_CLIENT_ID = 

const Stack = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/home-active.png')
              : require('./src/assets/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/favorites-active.png')
              : require('./src/assets/favorites.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/profile-active.png')
              : require('./src/assets/profile.png');
          }

          // You can return any component that you like here
          return <Image style={{width: 24, height: 24}} source={icon} />
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGray}
      })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, 
      offlineAccess: true,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID
    })
  }, [])

const Stack = createNativeStackNavigator();
const theme = {
  colors: {
    background: colors.white
  },
};

const isSignedIn = true

  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
              <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default React.memo(App)