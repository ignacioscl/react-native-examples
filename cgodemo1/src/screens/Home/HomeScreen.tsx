import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState,useContext } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Dimensions, Platform, PermissionsAndroid, ActivityIndicator, Modal } from 'react-native';

import { faComments,faIdCard } from '@fortawesome/free-regular-svg-icons';
import ItemListUser from '../../components/items/ItemListUser';
import Geolocation from '@react-native-community/geolocation';
import userAxiosInstance from '../../axios/UserAxios';
import UserFilter from '../../filters/users/UserFilter';
import AppConfig from '../../config/AppConfig';
import IResponsePaginator from '../../types/response/IResponsePaginator';
import IUser from '../../types/users/IUser';
import CustomAsyncStorage from '../../utils/CustomAsyncStorage';
import CustomModal from '../../components/modal/CustomModal';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../components/CustomButton';
import { LanguageContext } from '../../context/LanguajeContext';
import externalApisAxiosInstance from '../../axios/ExternalApisAxios';
import ExternalApisAxios from '../../axios/ExternalApisAxios';
import LocationUtil from '../../utils/LocationUtil';
import UpdateFields from '../../types/genericData/UpdateFields';
import AuthContext from '../../context/AuthContext';

const DATA = Array.from({ length: 40 }, (_, index) => ({
  id: String(index + 1),
  image: 'https://conocegenteonline.com/imgs/img4.jpg',
  age: Math.floor(Math.random() * 50) + 20,
  name: `Usuario ${index + 1}`,
  distance: Math.floor(Math.random() * 50) + 20,
}));

const numColumns = 2;
let watchID:any;
const HomeScreen = ({isModalVisible,setModalVisible}:any) => {
  const itemWidth = Dimensions.get('window').width / numColumns;
  const [currentLocation, setCurrentLocation] = useState<{lat:number | null,lng:number | null} | null>();
  const [locationStatus, setLocationStatus] = useState('');
  const [data, setData]                     = useState<IUser[]>([]);
  const [page, setPage]                     = useState<number>(0);
  const [loading, setLoading]               = useState(false);
  const [refreshing, setRefreshing]         = useState(false);
  const [modalLocationVisibility, setModalLocationVisibility]         = useState<boolean>(false);
  const { t, changeLanguage }               = React.useContext(LanguageContext);
  const { state,authContext }               = useContext(AuthContext);
  const renderItem = (item:any) => <ItemListUser item={item as any} numColumns={numColumns} />;

  const ModalFilter = () => {
    return <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    onRequestClose={() => setModalVisible(!isModalVisible)}
  >
     <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <View style={{ flex: 1 }} />

        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 18, borderTopRightRadius: 18, height: '40%', alignSelf: 'flex-end', width: '100%' }}>
          {/* Contenido de los ajustes */}
          {/* Botón "Aplicar" para guardar cambios y cerrar la modal */}
          <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)} style={{ padding: 20 }}>
            <Text>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  </Modal>
  
  }
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const rest = await LocationUtil().getOneTimeLocation();
        setCurrentLocation(rest.position);
        CustomAsyncStorage().setItem('location','1').then ().catch((e:any) => {console.log(e)});
        const restLoc = await LocationUtil().subscribeLocationLocation();
        watchID = restLoc.watchID;
        if (restLoc.position && restLoc.position.lat && restLoc.position.lng) {
          setCurrentLocation(restLoc.position);
        }
      } catch (e) {
        console.error(e)

      }
      
      
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          } as any,
        );
        console.log("granted" + granted)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          const rest = await LocationUtil().getOneTimeLocation();
          setCurrentLocation(rest.position);
          const restLoc = await LocationUtil().subscribeLocationLocation();
          watchID = restLoc.watchID;
          if (restLoc.position && restLoc.position.lat && restLoc.position.lng) {
            setCurrentLocation(restLoc.position);
          }
          
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    if (state.user.lat && state.user.lng) {
      setCurrentLocation({lat:state.user.lat as any,lng:state.user.lng as any})
    } else {
      handleLocation();
    }
    
    return () => {
      Geolocation.clearWatch(watchID);
    };
    
  }, []);

const handleLocation = async () => {
  const loc = await CustomAsyncStorage().getItem('location');
  if (loc) {
    requestLocationPermission();
  } else {
    //setModalLocationVisibility(true);
  }
  
}
  const fetchData = async () => {
    //
    setLoading(true);
    const filter    = new UserFilter();
    if (currentLocation && currentLocation.lat && currentLocation.lng) {
      filter.near     = 1;
      filter.nearLat  = currentLocation.lat;
      filter.nearLng  = currentLocation.lng;
    }
    if (state.user.sexPreferencias) {
      filter.sexPreferences = state.user.sexPreferencias;
    }

    try {
      const response : IResponsePaginator<IUser[]> = await userAxiosInstance.fetchPaginated(filter,page,AppConfig.conf.PAGE_SIZE);
      setData(prevData => (page === 0 ? response.data : [...prevData, ...response.data]));
      setLoading(false);
      setRefreshing(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setRefreshing(false);
    }

  }
 

  

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleRefresh = () => {
    setPage(0);
    
    if (page !== 0) {
      setRefreshing(true);
    }
  };

  useEffect(() => {
      fetchData();

  }, [page,currentLocation]);
  useEffect(() => {
    const handleAddreess = async () => {
      if (currentLocation && currentLocation?.lat && currentLocation?.lng) {
        try {
          const externalApisAxios = new ExternalApisAxios();
          const address = await externalApisAxios.fetchPlacesByCoords(currentLocation?.lat,currentLocation?.lng,true);
          console.log("add",address,externalApisAxios);
          interface CombinedUser extends IUser, UpdateFields {
            // Aquí puedes agregar propiedades adicionales si es necesario
          }
          const user : CombinedUser  = {} as CombinedUser;
          user.city           = address.city;
          user.country        = address.country;
          user.state          = address.state;
          user.lat            = currentLocation.lat;
          user.lng            = currentLocation.lng;
          user.hasCoordManual = 0;
          user.updateFields   = "location"
          await userAxiosInstance.update(user);
        } catch (e) {

          console.error(e)
        }
        
      }
    }
    if (!state.user.lat && !state.user.lng) {
      handleAddreess();
    }
    
  },[currentLocation])
  const handleCloseModalLocation = (vis:boolean) => {
    setModalLocationVisibility(vis);
  }
  return (
    <>
    <ModalFilter/>
    <View style={styles.container}>
      <CustomModal onClose={handleCloseModalLocation} visibility={modalLocationVisibility} onAccept={requestLocationPermission} />
      {!currentLocation && <CustomButton label={t('labelFindNearPeople')} onPressSubmit={() => handleCloseModalLocation(true)} touchableStyle={{ marginHorizontal: 10,marginTop:0 }} icon={<FontAwesomeIcon icon={faLocationDot} style={{color:'white'}} />}/>}
      <Text>loc status : {locationStatus}</Text>
      <Text>lat : {currentLocation?.lat} lng {currentLocation?.lng}</Text>
      <FlatList
        data={data}
  
        renderItem={renderItem}
        keyExtractor={(item:any) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContent}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
  },
 

  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal:10
  },
  flatListContent: {
    flexGrow: 1,
  },
});

export default HomeScreen;
