import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Paso 1: Importar GestureHandlerRootView
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#0080FF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

function HomeScreen({setUserToken}:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={() => {setUserToken(null)}} />
    </View>
  );
}

function SimpleSignInScreen({ navigation, route,setUserToken }:any) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  //const { setUserToken } = route.params;

  return (
    <View style={styles.container}>
    <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.input}
      onChangeText={setEmail}
      placeholder="Email"
      placeholderTextColor="#888"
    />
    <Text style={styles.label}>Password</Text>
    <TextInput
      style={styles.input}
      onChangeText={setPassword}
      placeholder="Password"
      placeholderTextColor="#888"
      secureTextEntry={true}
    />
    <TouchableOpacity style={styles.button} onPress={() => setUserToken('token')}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(5000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"

              options={{
                headerTitle: 'Sign in',
                headerTitleAlign:"center",
                headerRight:() => (
                  <TouchableOpacity>
                    <Text>Register</Text>
                  </TouchableOpacity>
                )
              }}
            /* initialParams={{ setUserToken }}*/
            >
              {(props:any) => <SimpleSignInScreen {...props} setUserToken={setUserToken} />}
              </Stack.Screen>
          ) : (
            // User is signed in
            <Stack.Screen name="Home" >{(props:any) => <HomeScreen {...props} setUserToken={setUserToken} />}</Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

