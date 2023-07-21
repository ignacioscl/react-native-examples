import React, { useContext, useState } from 'react';
import { View, Text, Button  } from 'react-native';
import { LanguageContext } from '../../context/LanguajeContext';
import AuthContext from '../../context/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { buttonBackgroundColor } from '../../../styles/colors';
const Tab                           = createBottomTabNavigator();

const SettingsScreen = () => {
    return <></>
}
const MainScreen = ({navigation}:any) => {
    const { t, changeLanguage }     = React.useContext(LanguageContext);
    const { state,authContext }     = useContext(AuthContext);

  
    return (
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:buttonBackgroundColor,
        /*tabBarBadge:'s'*/
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({color,size}) => (
                <Ionicons name='location-outline' color={color} size={size} />
            )
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarIcon:({color,size}) => (
                <Ionicons name='settings-outline' color={color} size={size} />
                
            )
        }}/>
        {/*<Ionicons name='heart-outline' color={color} size={size} />*/}
      </Tab.Navigator>
    );
  };
  
  export default MainScreen;