import axios from 'axios';
import CustomAsyncStorage from './CustomAsyncStorage';
import AppConfig from '../config/AppConfig';


const getToken = async () : Promise<string | null> => {
    const token = await CustomAsyncStorage().getToken();
    
    return token;
}

const getAxiosInstance = async () : Promise<any> => {

    let axiosInstance = null;

    const token = await getToken();
    console.log(token + " - " + AppConfig.conf.BACKEND_URL)
    if (token!=null) {
        axiosInstance = axios.create({
            baseURL: AppConfig.conf.BACKEND_URL,
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
          return axiosInstance;
    } else {
      axiosInstance = axios.create({
        baseURL: AppConfig.conf.BACKEND_URL,
      });
      (axiosInstance as any).hasToken = false;
      return axiosInstance;
    }
    return null;
}
export default getAxiosInstance;