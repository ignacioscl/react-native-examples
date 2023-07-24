import React ,{useState}from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown'
import IBasicItem from '../../types/genericData/IBasicItem';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { inputIconBorderRightColor } from '../../../styles/colors';

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
  
  const CustomSelectDropdownPicker = ({
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
      //const [selectedValue, setSelectedValue] = useState("java");
      const countries : IBasicItem[] = [{id:1,text:"Egypt"}, {id:2,text:"Canada"},{id:3,text:"Australia"},{id:4,text:"Ireland2"}]
      const countriesWithFlags = [
        {title: 'Egypt', image: ''},
        {title: 'Canada', image: ''},
        {title: 'Australia', image: ''},
        {title: 'Ireland', image: ''},
        {title: 'Brazil', image: ''},
        {title: 'England', image: ''},
        {title: 'Dubai', image: ''},
      ];
    return (<>
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
        <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            defaultValue={value}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem.text, index);
              onChange(selectedItem)
            }}
            defaultButtonText={'Select country'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.text;
            }}
            rowTextForSelection={(item, index) => {
              return item.text;
            }}
         
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (isOpened ? <FontAwesomeIcon icon={faChevronUp} style={{color: "#788eec",marginLeft:5,padding:0,marginTop:4}}/>
                            : <FontAwesomeIcon icon={faChevronDown} style={{color: "#788eec",marginLeft:5,padding:0,marginTop:4}}/>);
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    <View style={{paddingRight:6,paddingVertical:6,marginLeft:5,marginRight:8,borderRightWidth:1,borderRightColor:inputIconBorderRightColor}}>
                     <Ionicons name="earth-outline" color={'gray'} size={16} />
                     </View>
                     <Text style={styles.dropdown1BtnTxtStyle}>{selectedItem ? selectedItem.text : 'Select country'}</Text>
                  </View>
                );
              }}
          />
        </>
      )}/>

<SelectDropdown
            data={countriesWithFlags}
            // defaultValueByIndex={1}
            // defaultValue={{
            //   title: 'England',
            //   image: require('./Images/England.jpg'),
            // }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <></>
                  ) : (
                    <Ionicons name="earth-outline" color={'#444'} size={32} />
                  )}
                  <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select country'}</Text>
                  <FontAwesomeIcon icon={faChevronDown} color={'#444'} size={18} />
                </View>
              );
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            rowStyle={styles.dropdown3RowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <FontAwesomeIcon icon={faChevronDown} />
                  <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                </View>
              );
            }}
          />
    </>)
  }
  const styles = StyleSheet.create({
   
    
  
    dropdown1BtnStyle: {
      width: '100%',
      height: 45,
      backgroundColor: '#FFF',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#e8e8e8',
      fontSize:14
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left',fontSize:16},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF',borderRadius:5},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown3BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
      },
      dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    
      },
      dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
      dropdown3BtnTxt: {
        color: '#444',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 12,
      },
      dropdown3DropdownStyle: {backgroundColor: 'slategray'},
      dropdown3RowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
      },
      dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
      },
      dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
      dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 12,
      },
  

  });
export default CustomSelectDropdownPicker;