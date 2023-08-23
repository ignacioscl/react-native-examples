import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';

import { faComments,faIdCard } from '@fortawesome/free-regular-svg-icons';
import { iconColorGray, veryLightGray } from '../../../styles/colors';
import IUser from '../../types/users/IUser';
import AppConfig, { AppSetting } from '../../config/AppConfig';
import { getPathImage } from '../../utils/GeneralUtils';
interface Props {
  item :{index:number,item:IUser},
  numColumns:number
}
const ItemListUser = ({item,numColumns}:Props) => {
  
    const stylesLocal = StyleSheet.create({
      iconContainer: {
        width: "50%", // Establece el ancho deseado para cada contenedor de icono
        justifyContent: 'center',
        alignItems: 'center',
    
        
      },
    });
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop:10
        },
        itemMain: {
          width: '47%',
          height: Dimensions.get('window').width / numColumns * 1.7,
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderColor:veryLightGray,
          borderWidth:1,
          borderBottomRightRadius:15,
          borderBottomLeftRadius:15,
          borderTopRightRadius:15,
          borderTopLeftRadius:15,
          
          marginBottom:15
        },
        item: {
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection:'row'
        },
        image: {
          width: '100%',
          height: '80%',
          resizeMode: 'cover',
          borderTopRightRadius:15,
          borderTopLeftRadius:15
        },
        name: {
          fontSize: 16,
          color: iconColorGray
        },
        distance: {
            fontSize: 12,
            color: iconColorGray
          },
          bottomItem: {
            borderBottomRightRadius:15,
          borderBottomLeftRadius:15,

          }
      });
      return (<View style={[styles.itemMain,{backgroundColor:'white'}]}>
        {item.item.thumbnail && <Image source={{ uri: getPathImage(item.item.id as any,item.item.thumbnail as any) }} style={styles.image} />}
        {!item.item.thumbnail && <Image source={{ uri: AppConfig.conf.BACKEND_URL + AppSetting.thumbnail }} style={styles.image} />}
        <View style={[styles.item]}>
          <Text style={styles.name}>{item.item.username} ({item.item.age})</Text>
        </View>
        <View style={[styles.item]}>
          {item.item.distance && item.item.distance>0 ? <Text style={styles.distance}>{item.item.distance} km</Text>
            : <Text style={styles.distance}>your location is unknow</Text>
          }
        </View>
        <View  style={[styles.bottomItem,{flexDirection:'row',justifyContent:'space-between',alignContent:'center',alignItems:'center',marginTop:5,backgroundColor:'white'}]}>
          <View style={[stylesLocal.iconContainer,{borderRightWidth:1,borderRightColor:veryLightGray}]}>
          <FontAwesomeIcon icon={faComments} size={22} color={iconColorGray} />
          </View>
          <View style={stylesLocal.iconContainer}>
          <FontAwesomeIcon icon={faIdCard} size={22} color={iconColorGray}/>
          </View>
        </View>
        
      </View>)
    };

    
export default ItemListUser;