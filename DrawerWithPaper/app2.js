// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';
import SettingScreen from './pages/SettingScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#F8F8F8',
        tabBarStyle: {
          backgroundColor: '#f4511e',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="settings"
             color={color}
             size={size}
            />
          ),*/
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
};

const SettingScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{
            drawerLabel: 'Home Screen Option',
            title: 'Home Screen',
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{
            drawerLabel: 'Setting Screen Option',
            title: 'Setting Screen',
          }}
          component={SettingScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;