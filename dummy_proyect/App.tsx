import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

function SettingsScreen({ route, navigation }:any) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}
interface CustomDrawerContentProps extends DrawerContentComponentProps {
  userThumbnail: any; // Tipo de dato para la imagen del usuario
  userName: string;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  // Obtener las propiedades necesarias del usuario logueado
  const { userThumbnail, userName, ...rest } = props;

  return (
    <DrawerContentScrollView {...rest}>
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <Image source={userThumbnail} style={{ width: 80, height: 80, borderRadius: 40 }} />
        <Text style={{ marginTop: 10 }}>{userName}</Text>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Root" drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawerContent userThumbnail={{ uri: 'http://192.168.0.8:5000/img/get/channels/26/ci1dal.png' }} userName="John Doe" {...props} />
        )}>
        <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
    </NavigationContainer>
  );
}
