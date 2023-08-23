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
import { faComments, faPeopleGroup, faSliders } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab                           = createBottomTabNavigator();

const SettingsScreen = () => {
  const { state,authContext }     = useContext(AuthContext);
    return <><Text onPress={authContext.signOut}>Salir</Text></>
}
const MainScreen = ({navigation}:any) => {
    const { t, changeLanguage }     = React.useContext(LanguageContext);
    const { state,authContext }     = useContext(AuthContext);
    const [isModalVisible, setModalVisible] = useState(false);
    const GradientHeader = () => (
      <LinearGradient
      colors={['#FFA500', '#FF8C00']} // Colores del degradado
        style={{
          flex: 1,
          borderBottomRightRadius: 18,
          borderBottomLeftRadius: 18,
          shadowColor: 'black',
          
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      />
    );
    const GradientBar = () => {
      return (
        <View style={{ flex: 1 }}>
          <LinearGradient
            start={{ x: 0, y: 1 }} // Coordenada y: 1 indica "abajo"
            end={{ x: 0, y: 0 }} // Coordenada y: 0 indica "arriba"
            
            colors={['#FFA500', '#FF8C00']}
            style={{ height: "100%" }}
          />
        </View>
      );
    }
    return (
      <Tab.Navigator 
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarShowLabel:false,
          tabBarActiveTintColor:"darkred",
          tabBarInactiveTintColor:"white",
          headerBackground: () => <GradientHeader />,
          tabBarBackground: () => <GradientBar/>,
        }}>
        <Tab.Screen name="Home"  options={{
          //title:
          headerShadowVisible:true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ marginRight: 15 }}
            >
              <FontAwesomeIcon icon={faSliders} color={"darkred"} size={20}/>
            </TouchableOpacity>
          ),
          headerStyle:{borderBottomRightRadius:18,borderBottomLeftRadius:18,shadowColor:"black"},
          headerTitle:({}) => (
            <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faPeopleGroup} size={22} color={"darkred"} />
              <Text style={{paddingLeft:10,fontSize:16,color:"darkred",fontWeight:"400"}}>Gente Cerca</Text>
            </View>),

            tabBarIcon:({color,size}) => (
              <FontAwesomeIcon icon={faPeopleGroup} size={size} color={color} />
            )
        }}>
          {() => <HomeScreen isModalVisible={isModalVisible} setModalVisible={setModalVisible} />}
        </Tab.Screen>
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