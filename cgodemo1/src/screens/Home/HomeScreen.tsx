import React, { useContext, useState } from 'react';
import { View, Text, Button  } from 'react-native';
import { LanguageContext } from '../../context/LanguajeContext';
import AuthContext from '../../context/AuthContext';


const HomeScreen = ({navigation}:any) => {
    const { t, changeLanguage } = React.useContext(LanguageContext);
    const { state,authContext }  = useContext(AuthContext);

  
    return (
      <>
      <View>
            <Text>Signed in!</Text>
            <Text>{state.user.username}</Text>
            <Button title="Sign out" onPress={() => {authContext.signOut()} }/>
        </View>
      </>
    );
  };
  
  export default HomeScreen;