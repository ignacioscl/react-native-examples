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
const Stack = createNativeStackNavigator();

const AccessMainScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (<View style={styles.container}>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.createAccountButton}>
        <Text style={styles.toggleButtonText}>{isLogin ? <Text>Create an Account<FontAwesomeIcon icon={faChevronRight} style={styles.toggleButtonText}/></Text>: 'Login'}</Text>
      </TouchableOpacity>
      {isLogin ? <LoginScreen /> : <RegisterScreen />}

      
    </View>)
}
function HomeScreen() {
  //const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={() => {}/*signOut*/} />
    </View>
  );
}
const StackApp = () => {
  const { state,authContext }  = useContext(AuthContext);
  return (<Stack.Navigator>
    {state.isLoading ? (
      // We haven't finished checking for the token yet
      <Stack.Screen name="Splash" component={SplashScreen} options={{
        headerShown: false, // Ocultar el AppTop
      }}/>
    ) : state.userToken == null ? (
      // No token found, user isn't signed in
      <Stack.Screen
        name="SignIn"
        component={AccessMainScreen}
        options={{
          title: 'Sign in',
          headerShown: false, // Ocultar el AppTop
          // When logging out, a pop animation feels intuitive
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
    ) : (
      // User is signed in
      <Stack.Screen name="Home" component={(HomeScreen)} />
    )}
  </Stack.Navigator>)
}
const App = () => {
  

  
  

  return (
    <AuthProvider>
      <NavigationContainer>
        <StackApp></StackApp>
      </NavigationContainer>
    </AuthProvider>
    
  );
};


export default App;
