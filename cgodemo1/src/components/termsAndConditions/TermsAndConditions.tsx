import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { stylesText } from '../../../styles/styles';
import { LanguageContext } from '../../context/LanguajeContext';

interface Porps {
  containerStyle?:any
  check:{isChecked:boolean, setChecked:(a:boolean) => void }
}
const TermsAndConditions = ({containerStyle,check}:Porps) => {
  const { t, changeLanguage,state }           = React.useContext(LanguageContext);

  

  const handlePress = () => {
    check.setChecked(!check.isChecked);
  };

  return (
    <View style={[styles.container,containerStyle]}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={check.isChecked}
          onPress={handlePress}
          containerStyle={{ marginRight: 10, padding: 0 }}
        />
        <TouchableWithoutFeedback  onPress={handlePress} style={{flexWrap:'wrap',alignItems:"flex-start",alignContent:'flex-start',alignSelf:'flex-start'}}>
          <View style={{alignItems:"flex-start",alignContent:'flex-start'}}>
            {state.language === 'en' &&
          <Text style={styles.text}>
            By registering, you confirm that you accept{'\n'}our{' '}
            <Text style={stylesText.link}>Terms of Use</Text> and{' '}
            <Text style={stylesText.link}>Privacy Policy</Text>
          </Text>}
          {state.language === 'es' &&
          <Text style={styles.text}>
            Al registrarse, está aceptando nuestros{'\n'}
            <Text style={stylesText.link}>Terminos y condiciones</Text> y{' '}
            <Text style={stylesText.link}>Políticas de privacidad</Text>
          </Text>}
          </View>
        </TouchableWithoutFeedback >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    /*flexWrap: 'wrap', // Permitir que el texto haga un salto de línea*/
    maxWidth: '90%', // Ajusta el ancho máximo del contenedor del texto y el checkbox
  },
  text: {
    color: 'gray',
    
    flex: 1, // Asegura que el texto ocupe el espacio restante en la fila
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default TermsAndConditions;
