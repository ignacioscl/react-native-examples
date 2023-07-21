import React from 'react';
import { View, StyleSheet } from 'react-native';

const HrSeparator = ({customStyles} : any) => {
  return <View style={customStyles ? [styles.separator, customStyles] : styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#F58200', // Cambia el color de la línea según tus preferencias
    marginVertical: 10, // Puedes ajustar el margen vertical según tus necesidades
  },
});

export default HrSeparator;