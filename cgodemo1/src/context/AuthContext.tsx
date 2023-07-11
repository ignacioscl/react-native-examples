
import React, { ReactNode, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';

interface AuthContextData {
    authContext:AuthContextType
    state:AppState
}
export interface AppState {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
  }
interface AuthProviderProps {
    children: ReactNode;
  }
const AuthContext = React.createContext<AuthContextData>({} as any);
export interface AuthContextType {
    signIn: (data: any) => void;
    signOut: () => void;
    signUp: (data: any) => void;
  }
  
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    //const [token, setToken]                       = useState<string | null>(localStorage.getItem('token'));
    //const [userLogued,setUserLogued]              = useState<IUser>({} as IUser);
    const [isUserInfoLoaded,setIsUserInfoLoaded]  = useState<boolean>(false);
    const [isAuthenticated,setIsAuthenticated]    = useState<boolean>(false);
   
    const pathImagesProfile                       = '/img/get/user_profiles/';
    //const pathImagesChat                          = process.env.REACT_APP_URL_BACKEND + '/img/get/chats';


 /* const fetchUserLogued = async (force?:boolean) => {
    if ((!userLogued.id && token) || force) {
      const response : {data:{data: IUser}} = await getAxiosInstance().get("/api/user/getUserLoguedFull");
      response.data.data.thumbnail = response.data.data.thumbnail != null ? pathImagesProfile + response.data.data.id + '/' + response.data.data.thumbnail : '/img/get/-1/-1/foto-perfil.jpg'

      setUserLogued(response.data.data);
      setIsUserInfoLoaded(true);
    }
  }*/

  /*
    useEffect(() => {
      fetchUserLogued();
    },[])

    useEffect(() => {
      fetchUserLogued();
    },[token])
*/
    const [state, dispatch] = React.useReducer(
        (prevState:any, action:any) => {
        switch (action.type) {
            case 'RESTORE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
            };
            case 'SIGN_IN':
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
            };
            case 'SIGN_OUT':
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
            };
        }
        },
        {
        isLoading: true,
        isSignout: false,
        userToken: null,
        }
    );
    
    const authContext = React.useMemo<AuthContextType>(
        () => ({
          signIn: async (data:any) => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async (data:any) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );

      
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
    return (
      <AuthContext.Provider value={{authContext,state}}>
        {children}
      </AuthContext.Provider>
    );
  };
export default AuthContext;