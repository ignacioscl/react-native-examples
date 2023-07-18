import React, { useState ,useRef,useContext, useLayoutEffect } from 'react';
import { View, Text,Alert, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import { styles } from '../../../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faChevronLeft, faEnvelope, faLock, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../../context/LanguajeContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import IUser from '../../types/users/IUser';
import CustomInput from '../../components/customInput/CustomInput';
import { iconColor } from '../../../styles/colors';
import CustomButton from '../../components/CustomButton';
import userAxiosInstance from '../../axios/UserAxios';
import AuthContext from '../../context/AuthContext';
import DatePicker from "react-native-modal-datetime-picker";
const AdditionalInfoRegisterScreen = ({navigation}:any) => {
  const { t, changeLanguage }           = React.useContext(LanguageContext);
    const {control, handleSubmit, watch}  = useForm<LocalIUser>();

    const [isVisible, setVisible] = useState(false);
const [value, setValue] = useState('');

    const { state,authContext }           = useContext(AuthContext);
    interface LocalIUser extends IUser {
        
    }
    const onSubmit = async (data:any) => {
      //console.log(data);
      try {
        //await authContext.signUp(data)
      } catch (e:any) {

        Alert.alert(
          'Error',
          e.toString().replaceAll("Error: ","") ,
          [
            { text: t('labelAccept'), onPress: () => console.log('Aceptar presionado') },
          ]
        );
      }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => (
          <View style={localStyles.headerTitleContainer}>
            <Text style={localStyles.headerTitle}>{t('titleCompleteRegistration')}</Text>
          </View>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} style={styles.toggleButtonText}/>
          </TouchableOpacity>
        ),
      });
    }, [navigation]);
    return (
      <>
      <View style={styles.containerScroll}>
        
        <KeyboardAwareScrollView   enableOnAndroid keyboardShouldPersistTaps={'handled'}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.containerPadding}>
              <Image source={require('../../../assets/logo2.png')} style={localStyles.logo} resizeMode="contain" />
        
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setVisible(true)}>
                <CustomInput
                secureTextEntry={false}
                name="birthDate"
                value={value}
                placeholder={t('labelEmail')}
                control={control}
                rules={{required: t('messageRequired')}}
                autoCapitalize="none"
                editable={false} // optional
                IconComponent={<FontAwesomeIcon icon={faCalendar} style={{color:iconColor}}/>}
                
              />
              </TouchableOpacity>
              <DatePicker
                isVisible={isVisible}
                onConfirm={(date) => {
                  setVisible(false); // <- first thing
                  setValue(date.toISOString());
                }}
                onCancel={() => setVisible(false)}
              />
        
              <CustomInput
                secureTextEntry={false}
                name="email"
                placeholder={t('labelEmail')}
                control={control}
                rules={{required: t('messageRequired')}}
                autoCapitalize="none"
                keyboardType="email-address"
                IconComponent={<FontAwesomeIcon icon={faEnvelope} style={{color:iconColor}}/>}
                
              />

              <CustomInput
                secureTextEntry={true}
                name="password"
                placeholder={t('labelPassword')}
                control={control}
                rules={{required: t('messageRequired')}}
                autoCapitalize="none"
                keyboardType="default"
                IconComponent={<FontAwesomeIcon icon={faLock} style={{color:iconColor}}/>}
                
              />



              <CustomButton label={t('labelRegister')} onPress={handleSubmit(onSubmit)} icon={<FontAwesomeIcon icon={faSignIn} style={{ color: "white" }} />}/>
              {/*<TouchableOpacity>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>*/}
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
      </>
    );
  };

  const localStyles = StyleSheet.create({
    headerTitleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -38, 
    },
    headerTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
    logo: {
      width: 300, // Ajusta el ancho de la imagen según tus necesidades
     height:200,
      alignSelf: 'center',
      marginTop:5,
      marginBottom: 16,
    },
  });
  export default AdditionalInfoRegisterScreen;