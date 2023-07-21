import React ,{useState}from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import IBasicItem from '../../types/genericData/IBasicItem';
interface CustomInputProps {
  control: any;
  name: string;
  rules?: any;
  placeholder?: string;
  label?:string;
  labelStyles?:any;
  secureTextEntry?: boolean;
  IconComponent?: React.ReactNode;
  items:IBasicItem[];
  emptyText?:string;
  onChangeValue?: (value: string) => void;
  [key: string]: any; // Propiedades adicionales
}

const CustomPicker = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  IconComponent,
  onChangeValue,
  labelStyles,
  label,
  items,
  emptyText,
  ...others
}:CustomInputProps) => {
    //const [selectedValue, setSelectedValue] = useState("java");
    

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
              {borderColor: error ? 'red' : '#e8e8e8'},label ? {marginTop:2} : {}
            ]}>
              {IconComponent && <View style={{borderRightColor:"#EDEDED",borderRightWidth:1,paddingRight:9,height:35,justifyContent:"center"}}>{IconComponent}</View>}
              <Picker
                selectedValue={value}
                style={{ height: 50, flex:1 }}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            >
                {emptyText && <Picker.Item label={emptyText} value={undefined} />}
                {items.map((item) => (
                <Picker.Item key={item.id} label={item.text} value={item.id} />
              ))}
            </Picker>
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
    paddingVertical:0,
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
    fontSize:20
},
label: {
  marginTop:10,
  marginBottom:0,
  marginLeft:3,
  fontWeight:"500",
fontSize:16}
});

export default CustomPicker;
/*
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

const CustomPicker = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

export default CustomPicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});*/