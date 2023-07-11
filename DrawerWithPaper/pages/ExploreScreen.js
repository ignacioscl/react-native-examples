// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const ExploreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
            Explore Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreen')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
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

export default ExploreScreen;