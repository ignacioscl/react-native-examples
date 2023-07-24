import React, { useState ,useEffect,useContext, useLayoutEffect } from 'react';
import { View, Text,Alert, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import { styles, stylesText } from '../../../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faChevronLeft, faEdit, faEnvelope, faLock, faRectangleList, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
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
import { fechaScreen } from '../../utils/GeneralUtils';
import HrSeparator from '../../components/hr/HrSeparator';
import CustomPicker from '../../components/picker/CustomPicker';
import TermsAndConditions from '../../components/termsAndConditions/TermsAndConditions';
import IBasicItem from '../../types/genericData/IBasicItem';
import { genderOptions, sexualPreferencesOptions } from '../../utils/SelectOptions';
import LinkToTermsAndConditions from '../../components/termsAndConditions/LinkToTermsAndConditions';
import { Platform } from 'react-native';
import CustomSelectDropdownPicker from '../../components/picker/CustomSelectDropdownPicker';
import CustomSelectElementDropdownMulti from '../../components/picker/CustomSelectElementDropdownMulti';

interface LocalIUser extends IUser {
  updateFields:string;
}
const AdditionalInfoRegisterScreen = ({navigation}:any) => {
  const { t, changeLanguage }           = React.useContext(LanguageContext);
    const {control, handleSubmit, watch,setValue,trigger}  = useForm<LocalIUser>();
    const [isVisible, setVisible] = useState(false);
    const [isChecked, setChecked] = useState<boolean>(false);
    const ageOptions: IBasicItem[] = Array.from({ length: 80 - 18 + 1 }, (_, index) => {
      const age = 18 + index;
      return { id: age, text: age.toString() };
    });
    const genderList    = genderOptions();
    const sexPrefList   = sexualPreferencesOptions();
    const { state,authContext }           = useContext(AuthContext);
    
    const onSubmit = async (data:LocalIUser) => {
      if (!isChecked) {
        Alert.alert(
          t('titleTerms'),
          t('textTerms') ,
          [
            { text: t('labelAccept'), onPress: () => console.log('Aceptar presionado') },
          ]
        );
        return;
      } 
      try {
        data.updateFields="ageInput,genero,sexPreferencias"
        const res = await userAxiosInstance.update(data);
        authContext.reloadUser();
        console.log(res)
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
            <TouchableOpacity onPress={() => {console.log('press'); authContext.signOut()}} style={localStyles.headerLeftContainer}>
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
        
              {Platform.OS === 'android' && <CustomPicker 
                  emptyText="Seleccionar" 
                  rules={{required: t('messageRequired')}} 
                  items={ageOptions} label={t('labelAge')} 
                  control={control} 
                  name="ageInput" 
                  IconComponent={<FontAwesomeIcon 
                    icon={faEdit} 
                  style={{color:iconColor}}/>}/>
              }
              {Platform.OS === 'android' && <CustomPicker 
                  emptyText="Seleccionar" 
                  rules={{required: t('messageRequired')}} 
                  items={genderList as IBasicItem[]} 
                  label={t('labelGender')} 
                  control={control} 
                  name="genero" 
                  IconComponent={<FontAwesomeIcon 
                  icon={faEdit} 
                  style={{color:iconColor}}/>}/>
              }
              {Platform.OS === 'android' && <CustomPicker 
                  emptyText="Seleccionar" 
                  rules={{required: t('messageRequired')}} 
                  items={sexPrefList as IBasicItem[]} 
                  label={t('labelSexPreferences')} 
                  control={control} 
                  name="sexPreferencias" 
                  IconComponent={<FontAwesomeIcon 
                  icon={faEdit} 
                  style={{color:iconColor}}/>}/>
              }

              <CustomInput
                secureTextEntry={false}
                name="username"
                label={t('labelEmail')}
                placeholder={t('labelEmail')}
                control={control}
                rules={{required: t('labelEmailRequired')}}
                autoCapitalize="none"
                keyboardType="email-address"
                IconComponent={<FontAwesomeIcon icon={faUser} style={{color:iconColor}}/>}
                
              />
              {/*{Platform.OS === 'ios' &&  <CustomSelectDropdownPicker emptyText="Seleccionar" 
                  rules={{required: t('messageRequired')}} 
                  items={sexPrefList as IBasicItem[]} 
                  label={t('labelSexPreferences')} 
                  control={control} 
                  name="sexPreferencias" 
                  IconComponent={<FontAwesomeIcon 
                  icon={faEdit} 
                  style={{color:iconColor}}/>}/>
              }*/}
              {Platform.OS === 'ios' && <CustomSelectElementDropdownMulti emptyText="Seleccionar" 
                  rules={{required: t('messageRequired')}} 
                  items={sexPrefList as IBasicItem[]} 
                  label={t('labelSexPreferences')} 
                  control={control} 
                  name="sexPreferencias" 
                  IconComponent={<FontAwesomeIcon 
                  icon={faEdit} 
                  style={{color:iconColor}}/>}/>
              }
              {/*
              COMO DE FECHA
              <CustomButton viewStyle={localStyles.buttonGray} label='Prefiero ingresar mi edad' touchableStyle={localStyles.touchableStyle}  onPress={handleSubmit(onSubmit)} />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setVisible(true)}>
                <CustomInput
                  secureTextEntry={false}
                  name="birthDate"
                  value={fechaScreen(value)}
                  placeholder={t('labelBirthDate')}
                  control={control}
                  onPress={() => setVisible(true)}
                  label={t('labelBirthDate')}
                  rules={{required: t('messageRequired')}}
                  autoCapitalize="none"
                  editable={false} // optional
                  onFocus={() => setVisible(true)}
                  IconComponent={<FontAwesomeIcon icon={faCalendar} style={{color:iconColor}}/>}
                
                />
              </TouchableOpacity>
              <DatePicker
              date={value ? new Date(value) : new Date()}
                isVisible={isVisible}
                onConfirm={(date) => {
                  setVisible(false); // <- first thing
                  setValue(date);
                }}
                onCancel={() => setVisible(false)}
              />
              <HrSeparator customStyles={{marginTop:30,marginBottom:30}}/>
              
              <CustomInput
                secureTextEntry={false}
                name="email"
                label={t('labelEmail')}
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
              */}
              

              
              <TermsAndConditions containerStyle={{marginTop:7}} check={{isChecked, setChecked}}/>
              
              <CustomButton viewStyle={{marginTop:0}} label={t('labelRegister')} onPress={handleSubmit(onSubmit)} icon={<FontAwesomeIcon icon={faSignIn} style={{ color: "white" }} />}/>
              <LinkToTermsAndConditions/>
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
      marginLeft: -44, 
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
    buttonGray: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F58200',
      borderRadius: 7,
      padding: 4,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0,
      shadowRadius: 7,
      elevation: 5,
    },
    touchableStyle: {
      borderRadius:7,
      marginTop:7,
      marginBottom:7
    },
    headerLeftContainer: {
      paddingVertical: 10, // Adjust the padding to increase the touchable area
      paddingHorizontal:4
    },
  });
  export default AdditionalInfoRegisterScreen;