import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import CustomSwitchSelector from './CustomSwitchSelector';


const options = [
    { label: "Español", value: "es" },
    { label: "English", value: "en" },
  ];
interface LoginScreenProps {
    onPress:Function,
    [key: string]: any; // Propiedades adicionales
}
const LanguajeSelector = ({onPress,...props}:LoginScreenProps) => {
    return (<CustomSwitchSelector onPress={onPress} options={options} {...props} />);
}

export default LanguajeSelector;