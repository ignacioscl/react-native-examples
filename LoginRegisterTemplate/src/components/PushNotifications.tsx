import messaging from '@react-native-firebase/messaging';

export const requestPermission = async () => {
  try {
    await messaging().requestPermission();
    console.log('Permission granted');
  } catch (error) {
    console.log('Permission denied', error);
  }
};