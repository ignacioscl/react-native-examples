import React ,{useState}from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser,faEdit } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import IBasicItem from '../../types/genericData/IBasicItem';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { iconColor, inputIconBorderRightColor } from '../../../styles/colors';

interface Props {
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
  
  const CustomSelectElementDropdownMulti = ({
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
  }:Props) => {
      
    const data = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
      { label: 'Item 6', value: '6' },
      { label: 'Item 7', value: '7' },
      { label: 'Item 8', value: '8' },
    ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {/*renderLabel()*/}
        <Dropdown
          showsVerticalScrollIndicator={true}
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item:any) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <View style={{paddingRight:7,marginLeft:4,paddingVertical:8,borderRightWidth:1,borderRightColor:inputIconBorderRightColor,marginRight:8}}><FontAwesomeIcon icon={faEdit} style={{color:iconColor}}/></View>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      backgroundColor: 'white'/*,
      padding: 16,*/
    },
    dropdown: {
      height: 45,
      borderColor: inputIconBorderRightColor,
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
export default CustomSelectElementDropdownMulti;