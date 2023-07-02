import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import  LoginScreen from './src/screens/LoginScreen/LoginScreen';
import  HomeScreen from './src/screens/HomeScreen/HomeScreen';
import  RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import { decode, encode } from 'base-64';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { requestPermission } from './src/components/PushNotifications';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from "react-native-splash-screen";

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(/*{name:'ignacio'}*/);
  useEffect(() => {
    SplashScreen.hide();
    requestPermission();
    messaging()
      .getToken()
      .then(token => {
        console.log(token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      console.log(token);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {  user? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}