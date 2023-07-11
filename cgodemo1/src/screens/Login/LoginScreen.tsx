import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import { styles } from '../../../styles/styles';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Lógica para manejar el inicio de sesión
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    const handleForgotPassword = () => {
      // Lógica para manejar el restablecimiento de contraseña
      console.log('Forgot Password');
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/logo2.png')} style={styles.logo} resizeMode="contain" />
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
  
        <TouchableHighlight onPress={handleLogin} style={{borderRadius:7,marginTop:10}}>
          <View style={styles.button}>
            <Text style={{color:"white"}}>Acceder</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
  
      </View>
    );
  };
  
  export default LoginScreen;