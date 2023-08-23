import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomAsyncStorage = () => {

    // Guardar el token en AsyncStorage
    const saveToken = async (token:string | null) => {
        try {
          if (token) {
            await AsyncStorage.setItem('token', token);
          } else {
            await AsyncStorage.removeItem('token');
          }
        
        console.log('Token guardado correctamente');
        } catch (error) {
        console.log('Error al guardar el token:', error);
        }
    };
  
  // Obtener el token de AsyncStorage
    const getToken = async () : Promise<string | null> => {
        try {
        const token = await AsyncStorage.getItem('token');
        return token as string;
        } catch (error) {
        console.log('Error al obtener el token:', error);
        return null;
        }
    };

  const setItem = async (item:string,value:string) : Promise<void> => {
    try {
      if (item && value) {
        await AsyncStorage.setItem(item, value);
      } else if (item) {
        await AsyncStorage.removeItem(item);
      }
    } catch (error) {
      console.log('Error al guardar el token:', error);
    }
  }

  const getItem = async (item:string) : Promise<string | null> => {
    try {
    const token = await AsyncStorage.getItem(item);
    return token as string;
    } catch (error) {
    console.log('Error al obtener el token:', error);
    return null;
    }
};
  return {saveToken,getToken,setItem,getItem}
}
export default CustomAsyncStorage;