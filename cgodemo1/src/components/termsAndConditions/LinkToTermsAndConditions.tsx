import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { stylesText } from '../../../styles/styles';
import AppConfig from '../../config/AppConfig';
import { LanguageContext } from '../../context/LanguajeContext';

interface Props {}

const LinkToTermsAndConditions = ({}: Props) => {
  const { t, changeLanguage,state }           = React.useContext(LanguageContext);
  const handleOpenLinkTermins = () => {
    const url = AppConfig.conf.WEB_PAGE +  '/terms?lang=' + state.language; // Coloca aquí el enlace que deseas abrir
    Linking.openURL(url).catch((err) =>
      console.error('Error al abrir el enlace:', err)
    );
  };

  return (
    <View style={localStyles.container}>
      {state.language === 'en' &&
      <Text style={stylesText.text}>
        See our {' '}
          <Text style={[stylesText.link,{textDecorationLine:'underline'}]} onPress={handleOpenLinkTermins}>Terms of Use</Text>
        {' '}
        and{' '}
        <Text style={stylesText.link} onPress={() => {}}>
          Privacy Policy
        </Text>
      </Text>
      }
      {state.language === 'es' &&
      <Text style={stylesText.text}>
        Ver nuestros{' '}
          <Text style={[stylesText.link,{textDecorationLine:'underline'}]} onPress={handleOpenLinkTermins}>Terminos y condiciones</Text>
        {' '}
        y nuestras {' '}
        <Text style={[stylesText.link,{textDecorationLine:'underline'}]} onPress={() => {}}>
          Políticas de privacidad
        </Text>
      </Text>
      }
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkContainer: {
    alignItems: 'center', // Alineación vertical
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default LinkToTermsAndConditions;
