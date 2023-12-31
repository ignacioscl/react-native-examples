import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CustomInputProps {
  control: any;
  name: string;
  rules?: any;
  placeholder?: string;
  label?:string;
  labelStyles?:any;
  secureTextEntry?: boolean;
  IconComponent?: React.ReactNode;
  onChangeValue?: (value: string) => void;
  [key: string]: any; // Propiedades adicionales
}

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  IconComponent,
  onChangeValue,
  labelStyles,
  label,
  ...others
}:CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
        {label && <Text style={labelStyles ? labelStyles : styles.label}>{label}</Text>}
        <View
            style={[
              styles.searchSection,
              {borderColor: error ? 'red' : '#e8e8e8'},label ? {marginTop:2} : {marginTop:12}
            ]}>
              {IconComponent && <View style={{borderRightColor:"#EDEDED",borderRightWidth:1,paddingRight:9,height:35,justifyContent:"center"}}>{IconComponent}</View>}
            <TextInput
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (onChangeValue) {
                  onChangeValue(text); // Llamada a la función callback para obtener el valor del onChange
                }
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input,!IconComponent ? {paddingLeft:0} : {}]}
              secureTextEntry={secureTextEntry}
              {...others}
            />
          </View>
          
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical:2,
    marginTop: 5,
},
searchIcon: {
    padding: 10,
    color:"gray"
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize:16
},
label: {
  marginTop:10,
  marginBottom:0,
  marginLeft:3,
  fontWeight:"500",
fontSize:16}
});

export default CustomInput;
