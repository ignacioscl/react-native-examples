import React, { useContext, useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TextInput, Button, TouchableOpacity,TouchableHighlight , StyleSheet,Image  } from 'react-native';
import { styles } from '../../../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faSign, faSignIn, faUnlock, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import CustomInput from '../../components/customInput/CustomInput';
import { useForm } from 'react-hook-form';
import { LanguageContext } from '../../context/LanguajeContext';
import CustomSwitchSelector from '../../components/selector/CustomSwitchSelector';
import LanguajeSelector from '../../components/selector/LanguajeSelector';
import { iconColor } from '../../../styles/colors';
import AuthContext from '../../context/AuthContext';
import CustomButton from '../../components/CustomButton';


const LoginScreen = ({navigation}:any) => {
    const [err, setErr]         = useState<string | null>();
    const { t, changeLanguage } = React.useContext(LanguageContext);
    const { state,authContext }  = useContext(AuthContext);
    const {control, handleSubmit, watch} = useForm({
      defaultValues: {username: null,password:null},
    });
    const onSubmit = async (data:any) => {
      // Lógica para manejar el inicio de sesión
      //console.log(data);
      const ret = await authContext.signIn(data);
      if (ret.code === -1) {
        setErr(ret.result)
      } else {
        setErr(null)
      }
    };
  
    const handleForgotPassword = () => {
      // Lógica para manejar el restablecimiento de contraseña
      console.log('Forgot Password');
    };
    // Función para restablecer err a null cuando la pantalla recibe el enfoque
  const handleScreenFocus = () => {
    setErr(null);
  };

  useEffect(() => {
    // Agregar el listener cuando el componente monta
    const focusListener = navigation.addListener('focus', handleScreenFocus);

    // Eliminar el listener cuando el componente desmonta
    return () => {
      focusListener();
    };
  }, [navigation]);
    return (
      <>
      <View style={styles.containerScroll}>
        
        <KeyboardAwareScrollView   enableOnAndroid keyboardShouldPersistTaps={'handled'}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.containerPadding}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.createAccountButton}>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.toggleButtonText}>{t('labelCreateAccount')}</Text>
                <FontAwesomeIcon icon={faUserPlus} style={{color: "#788eec",marginLeft:7,padding:10,marginTop:4}}/>
                </View>
              </TouchableOpacity>  
              <Image source={require('../../../assets/logo2.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>{t('titleAccessScreen')}</Text>

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

        
              <CustomInput
                secureTextEntry={true}
                name="password"
                label={t('labelPassword')}
                placeholder={t('labelPassword')}
                control={control}
                rules={{required: t('labelPassRequired')}}
                autoCapitalize="none"
                IconComponent={<FontAwesomeIcon icon={faUnlock} style={{color:iconColor}}/>}
              />
              {err && <Text style={{textAlign:'center',color:"red"}}>{err}</Text>}
              <CustomButton label={t('buttonSignIn')} onPress={handleSubmit(onSubmit)} icon={<FontAwesomeIcon icon={faSignIn} style={{ color: "white" }} />}/>
              
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>{t('forgotPassword')}</Text>
              </TouchableOpacity>
              <View style={{alignItems:"center",marginTop:16}}>
                <LanguajeSelector onPress={(val:string) => changeLanguage(val) }/>
              </View>
              
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
      </>
    );
  };
  
  export default LoginScreen;