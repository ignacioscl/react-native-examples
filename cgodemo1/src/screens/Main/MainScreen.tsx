import React, { useContext, useState } from 'react';
import { View, Text, Button  } from 'react-native';
import { LanguageContext } from '../../context/LanguajeContext';
import AuthContext from '../../context/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import { buttonBackgroundColor } from '../../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
const Tab                           = createBottomTabNavigator();

const SettingsScreen = () => {
    return <></>
}
const MainScreen = ({navigation}:any) => {
    const { t, changeLanguage }     = React.useContext(LanguageContext);
    const { state,authContext }     = useContext(AuthContext);
    const GradientHeader = () => (
      <LinearGradient
      colors={['#FFA500', '#FF8C00']} // Colores del degradado
        style={{
          flex: 1,
          borderBottomRightRadius: 28,
          borderBottomLeftRadius: 28,
          shadowColor: 'black',
          
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      />
    );
  
    return (
      <Tab.Navigator 
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarShowLabel:false,
        tabBarActiveTintColor:"black",
        tabBarInactiveTintColor:"white",
        headerBackground: () => <GradientHeader />,
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            <LinearGradient
               start={{ x: 0, y: 1 }} // Coordenada y: 1 indica "abajo"
               end={{ x: 0, y: 0 }} // Coordenada y: 0 indica "arriba"
              
              colors={['#FFA500', '#FF8C00']}
              style={{ height: "100%" }}
            />
          </View>
        ),
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          //title:
          headerShadowVisible:true,
          headerStyle:{borderBottomRightRadius:18,borderBottomLeftRadius:18,shadowColor:"black"},
          headerTitle:({}) => (<View  style={{ flexDirection: 'row', alignItems: 'center' }}><FontAwesomeIcon icon={faPeopleGroup} size={18} color={"white"} /><Text style={{paddingLeft:10,fontSize:18,color:"white"}}>Gente Cerca</Text></View>),
          tabBarLabel: ({ color }) => (
            <View><Text>Gente Cerca</Text></View>
          ),
            tabBarIcon:({color,size}) => (
              <FontAwesomeIcon icon={faPeopleGroup} size={size} color={color} />
            )
        }}/>
        <Tab.Screen name="Chats" component={HomeScreen} options={{
            tabBarIcon:({color,size}) => (
              <FontAwesomeIcon icon={faComments} size={size} color={color} />
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