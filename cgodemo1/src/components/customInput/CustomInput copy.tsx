import React from 'react';
import {View, Text, TextInput, StyleSheet,Platform } from 'react-native';
import {Controller} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CustomInputProps {
  control: any;
  name: string;
  rules?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  iconComponent?: React.ReactNode;
  onChangeValue?: (value: string) => void;
  [key: string]: any; // Propiedades adicionales
}

const ViewMain = ({error,iconComponent,value,onChange,onChangeValue,onBlur,placeholder,secureTextEntry,...others}:any) => {
  return (
    <View
            style={[
              styles.searchSection,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
              {iconComponent && <View style={{borderRightColor:"#EDEDED",borderRightWidth:1,paddingRight:9,height:35,justifyContent:"center"}}>{iconComponent}</View>}
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
              style={[styles.input,iconComponent ? {paddingLeft:0} : {}]}
              secureTextEntry={secureTextEntry}
              {...others}
            />
          </View>
  );
}
const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  iconComponent,
  onChangeValue,
  ...others
}:CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          {Platform.OS == 'ios' &&
            <TouchableOpacity onPress={() => {}}>
              <ViewMain error={error} iconComponent={iconComponent} value={value} onChange={onChange} onChangeValue={onChangeValue} 
                  onBlur={onBlur} placeholder={placeholder} secureTextEntry={secureTextEntry} {...others}/>
            </TouchableOpacity>
          }
          {Platform.OS != 'ios' &&
              <ViewMain error={error} iconComponent={iconComponent} value={value} onChange={onChange} onChangeValue={onChangeValue} 
                  onBlur={onBlur} placeholder={placeholder} secureTextEntry={secureTextEntry} {...others}/>
          }
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
    marginVertical: 5,
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
},
});


