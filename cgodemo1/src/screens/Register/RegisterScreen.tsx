import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import { styles } from '../../../styles/styles';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      // Lógica para manejar el registro de usuario
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
  
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
  
        <Button title="Register" onPress={handleRegister} />
  
        <TouchableOpacity>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default RegisterScreen;