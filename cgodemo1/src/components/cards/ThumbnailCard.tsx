import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

interface Props {
  image: string;
  name: string;
  age: number;
}

const ThumbnailCard = ({ image, name, age, ...others }: Props) => {
  //const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.thumbnailContainer}>
      <Image source={{ uri: image }} style={styles.thumbnailImage} resizeMode="cover" />
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default ThumbnailCard;

const styles = StyleSheet.create({
  thumbnailContainer: {
    width: 150, // Puedes ajustar estos valores según tus necesidades
    height: 150,

    alignItems: 'center', // Alinear elementos al centro horizontalmente
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
});
