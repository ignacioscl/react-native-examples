import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator
} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import HiddenPage1 from './pages/HiddenPage1';
import HiddenPage2 from './pages/HiddenPage2';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParentFirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
};

const SecondScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParentSecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
};

const HiddenPage1Stack  = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HiddenPage12" component={HiddenPage1} />
    </Stack.Navigator>
  );
};

const FourthScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HiddenPage2" component={HiddenPage2} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#e91e63',
          drawerItemStyle: { padding: 0 },
        }}
       /* drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter(
                (routeName) =>
                  routeName !== 'HiddenPage1' && routeName !== 'HiddenPage2'
              ),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== 'HiddenPage1' && route.name !== 'HiddenPage2'
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}*/
      >
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First Page Option' }}
          component={FirstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second Page Option' }}
          component={SecondScreenStack}
        />
        <Drawer.Screen
          name="HiddenPage1"
          options={{ drawerLabel: 'Hidden Page One option' }}
          component={HiddenPage1Stack }
        />
        <Drawer.Screen
          name="HiddenPage2"
          options={{ drawerLabel: 'Hidden Page Two option' }}
          component={FourthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
