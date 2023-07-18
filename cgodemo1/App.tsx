import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import { styles } from './styles/styles';
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import AuthContext, {AuthProvider} from './src/context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LanguageProvider from './src/context/LanguajeContext';
import HomeScreen from './src/screens/Home/HomeScreen';
import AdditionalInfoRegisterScreen from './src/screens/Register/AdditionalInfoRegisterScreen';
const Stack = createNativeStackNavigator();



const StackApp = () => {
  const { state,authContext }  = useContext(AuthContext);
  console.log(state.isLoading)
  return (<Stack.Navigator>
    {state.isLoading ? (
      // We haven't finished checking for the token yet
      <Stack.Screen name="Splash" component={SplashScreen} options={{
        headerShown: false, // Ocultar el AppTop
      }}/>
    ) : state.userToken == null ? (
      // No token found, user isn't signed in
      <><Stack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{
          title: 'Sign in',
          headerShown: false, // Ocultar el AppTop
          // When logging out, a pop animation feels intuitive
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Sign Up',
          headerShown: false, // Ocultar el AppTop
        }}
      />
      </>
    ) : (state.user.age<18 ? (<><Stack.Screen name="AdditionalInfoRegisterScreen" component={(AdditionalInfoRegisterScreen)} /></>): (
      // User is signed in
      <Stack.Screen name="Home" component={(HomeScreen)} />
    ))}
  </Stack.Navigator>)
}
const App = () => {
  

  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#000000',
    },
  });

  return (
    <AuthProvider>
      <LanguageProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
          <StackApp/>
        </NavigationContainer>
      </SafeAreaView>
      
      </GestureHandlerRootView>
      </LanguageProvider>
    </AuthProvider>
    
  );
};


export default App;
