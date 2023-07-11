// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {Button, View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const HomeScreen = ({navigation}) => {
    const changeHeaderText = () => {
        console.log("pasa")
        navigation.getParent()?.getParent()?.setOptions({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Acciones al presionar el botón derecho
              }}
              style={{ marginRight: 10 }}
            >
              <Text style={{ color: 'white' }}>Nuevo Botón Derecho</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity 
          style={{ marginLeft:10}}
          onPress={() => navigation.goBack()} >
      
      <FontAwesomeIcon icon={faChevronLeft} color='darkgray'/>
     
      
      </TouchableOpacity>
          ),
        });
      };

      
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
        navigation.getParent()?.getParent()?.setOptions({
          headerShown: true,
        });
        return () =>
          navigation.getParent()?.getParent()?.setOptions({
            headerShown: true,
          });
      }, [navigation]);
      
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 0}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor:'black',
            borderWidth:1,
            padding:0
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home Screen
          </Text>
          
          <Button
            onPress={() => navigation.navigate('SettingScreenStack')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
            <Button onPress={changeHeaderText} title="Change Header Text" />
            <Text style={{margin:5,padding:5}}>
                <Icon
                    style={{padding:5,margin:5}}
                    name='arrow-left'
                    type='evilicon'
                    color='#517fa4'
                />
            </Text>
            <FontAwesomeIcon icon={faClose} />
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


export default HomeScreen;