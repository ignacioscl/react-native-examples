
import React, { ReactNode, useState } from 'react';
import AppConfig from '../config/AppConfig';
import CustomAsyncStorage from '../utils/CustomAsyncStorage';
import IUser from '../types/users/IUser';
import userAxiosInstance from '../axios/UserAxios';

interface AuthContextData {
    authContext:AuthContextType
    state:AppState
}
export interface AppState {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
    user:IUser
  }
interface AuthProviderProps {
    children: ReactNode;
  }
const AuthContext = React.createContext<AuthContextData>({} as any);
export interface AuthContextType {
    signIn: (data: any) => void;
    signOut: () => void;
    signUp: (data: any) => void;
    reloadUser: () => void;
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
    const saveToken = async (token:string | null) => {
      await CustomAsyncStorage().saveToken(token);
    }

    const getToken = async () : Promise<string> => {
      return await CustomAsyncStorage().getToken() || '';
    }
    const [state, dispatch] = React.useReducer(
        (prevState:any, action:{type:string,token?:string,user?:IUser}) => {
        switch (action.type) {
            case 'RESTORE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
                user:action.user
            };
            case 'SIGN_IN':
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
                user:action.user
            };
            case 'SIGN_OUT':
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
                user:null,
                isLoading: false,
            };
            case 'RELOAD':
            return {
                ...prevState,
                user:action.user
            };
        }
        },
        {
        isLoading: true,
        isSignout: false,
        userToken: null,
        user:null
        }
    );
    
    const authContext = React.useMemo<AuthContextType>(
        () => ({
          signIn: async (data:{username: null,password:null}) : Promise<{code:number,result:string}> => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
            // In the example, we'll use a dummy token

            const response = await fetch(AppConfig.conf.BACKEND_URL + '/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email:data.username,password: data.password })
            });
      
            if (response.ok) {
              const  res  = await response.json();
              console.log(res.data.token)
              await saveToken(res.data.token)
              userAxiosInstance.cleanInstanceToken();
              const user = await userAxiosInstance.getUserLoguedFull()
              dispatch({ type: 'SIGN_IN', token: res.data.token,user:user });
            }
            
            return {code:1,result:""};
          },
          signOut: async () => {
            await saveToken(null);
            userAxiosInstance.cleanInstanceToken();
            dispatch({ type: 'SIGN_OUT' }
          )},
          signUp: async (data:any) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
            // In the example, we'll use a dummy token
            try {
              const res = await userAxiosInstance.createUser(data);
              await saveToken(res.token)
              userAxiosInstance.cleanInstanceToken();
              const user = await userAxiosInstance.getUserLoguedFull();
              console.log(user)
              dispatch({ type: 'SIGN_IN', token: res.token,user:user });
            } catch (r:any) {
              throw new Error(r);
            }
            
            
          },
          reloadUser: async () => {
            const user = await userAxiosInstance.getUserLoguedFull()
            dispatch({ type: 'RELOAD',user:user });
          }
        }),
        []
      );

      
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        const token = await getToken() || '';
        console.log("restore token:" + token)
        const user = await userAxiosInstance.getUserLoguedFull()
        console.log(user)
        dispatch({ type: 'RESTORE_TOKEN', token: token ,user:user });
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        authContext.signOut();
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
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