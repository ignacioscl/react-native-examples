// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {Button, View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const SettingScreen = ({navigation}) => {

    React.useEffect(() => {
        /*navigation.getParent()?.setOptions({
            title: 'Página de Ejemplo',
            headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    // Acciones al presionar el botón
                  }}
                  style={{ marginRight: 10 }}
                >
                  <Text style={{ color: 'white' }}>Botón Derecho</Text>
                </TouchableOpacity>
              )
          });*/
        navigation.getParent()?.setOptions({
          headerShown: false,
        });
        return () =>
          navigation.getParent()?.getParent()?.setOptions({
            headerShown: true,
          });
      }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
        <AppBar
    title="Title"
    color="blue"
    leading={props => (
        <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen')
              }}
              style={{ marginRight: 10 }}
            >
        <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft:10}} />
        </TouchableOpacity>
      )}
    trailing={props => (
      <HStack>
        <FontAwesomeIcon icon={faClose} />
      </HStack>
    )}
  />
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Setting Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('HomeScreenStack')}
            title="Go to Home Stack"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer with Top Tab
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;