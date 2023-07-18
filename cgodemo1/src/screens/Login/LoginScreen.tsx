import React, { useContext, useState } from 'react';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { t, changeLanguage } = React.useContext(LanguageContext);
    const { state,authContext }  = useContext(AuthContext);
    const {control, handleSubmit, watch} = useForm({
      defaultValues: {username: null,password:null},
    });
    const onSubmit = (data:any) => {
      // Lógica para manejar el inicio de sesión
      //console.log(data);
      authContext.signIn(data);
    };
  
    const handleForgotPassword = () => {
      // Lógica para manejar el restablecimiento de contraseña
      console.log('Forgot Password');
    };
  
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
                placeholder={t('labelPassword')}
                control={control}
                rules={{required: t('labelPassRequired')}}
                autoCapitalize="none"
                IconComponent={<FontAwesomeIcon icon={faUnlock} style={{color:iconColor}}/>}
              />

              <CustomButton label={t('buttonSignIn')} onPress={handleSubmit(onSubmit)} icon={<FontAwesomeIcon icon={faSignIn} style={{ color: "white" }} />}/>
              
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>{t('forgotPassword')}</Text>
              </TouchableOpacity>
              <View style={{alignItems:"center",marginTop:20}}>
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