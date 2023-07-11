import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text,TouchableOpacity  } from 'react-native';

const SecondPage = () => {
  const navigation = useNavigation();

  
 React.useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: false,
    });
    return () =>
      navigation.getParent()?.setOptions({
        headerShown: true,
      });
  }, [navigation]);
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={styles.backButton}>{'< Back'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            How to Hide Navigation Option from Navigation Drawer
            {'\n\n'}
            This is Second Page
          </Text>
        </View>
        <Text style={styles.footerHeading}>
          Hide Navigation Option from Navigation Drawer
        </Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
export default SecondPage;
