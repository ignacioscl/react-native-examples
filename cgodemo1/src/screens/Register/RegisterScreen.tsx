import React, { useState ,useRef,useContext } from 'react';
import { View, Text,Alert, TextInput, Button, TouchableOpacity,Image  } from 'react-native';
import { styles } from '../../../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEnvelope, faLock, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
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

const RegisterScreen = ({navigation}:any) => {
    const [email, setEmail]               = useState('');
    const [password, setPassword]         = useState('');
    const { t, changeLanguage }           = React.useContext(LanguageContext);
    const {control, handleSubmit, watch}  = useForm<LocalIUser>();
    const refRePass                       = useRef(null);
    const [rePass,setRePass]              = useState();
    const { state,authContext }           = useContext(AuthContext);
    interface LocalIUser extends IUser {
        repass:string
    }
    const onSubmit = async (data:any) => {
      //console.log(data);
      try {
        await authContext.signUp(data)
      } catch (e:any) {

        Alert.alert(
          'Error',
          e.toString().replaceAll("Error: ","") ,
          [
            { text: t('labelAccept'), onPress: () => console.log('Aceptar presionado') },
          ]
        );
      }
      
    
      
      /*userAxiosInstance.createUser(data).then(r => {
        console.log(r)
      }).catch (r => {
        Alert.alert(
          'Error',
          r,
          [
            { text: t('labelAccept'), onPress: () => console.log('Aceptar presionado') },
          ]
        );
      })*/
    }
    const handleChange = (a:any) => {
      setRePass(a)
    }
    const passValidate = (iText :string) => {
      
      //console.log(watch('password') + " - " + rePass);
      
        if (watch('password') !== rePass && rePass !== '') {
          return "Las contraseñas deben coincidir";
        }
      
        return true;
        // return iText[0].toUpperCase() === iText[0];
    }
    return (
      <>
      <View style={styles.containerScroll}>
        
        <KeyboardAwareScrollView   enableOnAndroid keyboardShouldPersistTaps={'handled'}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.containerPadding}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.createAccountButton}>
                <Text style={styles.toggleButtonText}><FontAwesomeIcon icon={faChevronLeft} style={styles.toggleButtonText}/><Text>{t('labelBackToLogin')}</Text></Text>
              </TouchableOpacity>
              <Image source={require('../../../assets/logo2.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>{t('labelRegister')}</Text>
        
              <CustomInput
                secureTextEntry={false}
                name="username"
                placeholder={t('labelYourName')}
                control={control}
                rules={{required: t('messageRequired')}}
                autoCapitalize="none"
                keyboardType="default"
                IconComponent={<FontAwesomeIcon icon={faUser} style={{color:iconColor}}/>}
                
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


              <CustomInput
                secureTextEntry={true}
                name="repass"
                placeholder={t('labelRePassword')}
                control={control}
                rules={{required: t('messageRequired'),validate: { value:passValidate }}}
                autoCapitalize="none"
                keyboardType="default"
                IconComponent={<FontAwesomeIcon icon={faLock} style={{color:iconColor}}/>}
                onChangeValue={handleChange}
              />

              <CustomButton label={t('labelRegister')} onPressSubmit={handleSubmit(onSubmit)} icon={<FontAwesomeIcon icon={faSignIn} style={{ color: "white" }} />}/>
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

  export default RegisterScreen;