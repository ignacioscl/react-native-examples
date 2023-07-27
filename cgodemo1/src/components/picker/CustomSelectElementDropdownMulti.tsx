import React ,{useState}from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser,faEdit, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';
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
    IconComponent?: React.ReactNode;
    data:IBasicItem[];
    onChangeValue?: (value: string) => void;
    [key: string]: any; // Propiedades adicionales
  }
  
  const CustomSelectElementDropdownMulti = ({
    control,
    name,
    rules = {},
    placeholder,
    IconComponent,
    onChangeValue,
    labelStyles,
    label,
    data,
    ...others
  }:Props) => {
      


    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {

        return (
          <Text style={[styles.label,[labelStyles]]}>
            {label}
          </Text>
        );

    };
const handleClean = (onChange:any) => {

onChange(null)
}
    return (
      
      <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (

        <View>
          {renderLabel()}
          <View style={[styles.container,[error ? {borderColor:"red",borderWidth:1} : {}]]}>
            <Dropdown
            {...others}
              showsVerticalScrollIndicator={true}
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              itemTextStyle={{fontSize:14,marginVertical:-6}}
              search={false}
              maxHeight={300}
              labelField="text"
              valueField="id"
              placeholder={!isFocus ? placeholder : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => {onBlur();setIsFocus(false)}}
              onChange={(item:any) => {
                onChange(item)
                setValue(item);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <View style={{paddingRight:7,marginLeft:4,paddingVertical:8,borderRightWidth:1,borderRightColor:inputIconBorderRightColor,marginRight:8}}>{IconComponent}</View>
              )}
              renderRightIcon={(item) => {
                return <>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {value && <Text onPress={() => {handleClean(onChange)}} style={{padding:10}}><FontAwesomeIcon icon={faClose} color={"red"}/></Text>}
                            <Text onPress={() => {console.log("clickdown")}} style={{marginRight:10}}>
                              <FontAwesomeIcon icon={faChevronDown} />
                            </Text>
                          </View></>;
              }}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </View>
        )}/>

      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderColor: inputIconBorderRightColor,
      borderWidth: 0.6,
      backgroundColor: 'white'/*,
      padding: 16,*/
    },
    dropdown: {
      height: 49,
      borderWidth: 0,
      borderRadius: 4,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {

        marginTop:10,
        marginBottom:1,
        marginLeft:3,
        fontWeight:"500",
      fontSize:16,
      
 
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      color:"black"
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