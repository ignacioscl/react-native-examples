import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image, GestureResponderEvent  } from 'react-native';
import { styles } from '../../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { iconColor } from '../../styles/colors';

interface CustomInputProps {
    onPress: (event:GestureResponderEvent) => void;
    touchableStyle?: any;
    viewStyle?: any;
    textStyle?: any;
    label: string;
    icon?:React.ReactNode;
    [key: string]: any; // Propiedades adicionales
  }
  
const CustomButton = ({onPress,touchableStyle,viewStyle,textStyle,label,icon,...others}:CustomInputProps) => {
    return (
        <TouchableHighlight onPress={onPress} style={touchableStyle ? touchableStyle : {borderRadius:7,marginTop:10}} {...others}>
            <View style={viewStyle ? viewStyle : [styles.button, { flexDirection: 'row', justifyContent: 'center' }]}>
                {icon}
                <Text style={textStyle ? textStyle : icon ? { color: 'white',marginLeft:5 } : { color: 'white'}}>{label}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default CustomButton;