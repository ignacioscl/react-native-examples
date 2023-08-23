import AppConfig, { AppSetting } from "../config/AppConfig";
import IGenericData from "../types/genericData/IGenericData";

export const fechaScreen = (date : Date | undefined) => {
    if (date === undefined) {
        return "";
    }
  if (date && !(date instanceof Date)) {
    date = new Date(date)
  }
    if (date && date instanceof Date) {
      return addCero(date.getDate()) + "/" + addCero(date.getMonth()+1) + "/" + date.getFullYear();
    }
    return "";
  }
  
export const addCero = (str : string | number) => {
    str = (str.toString())
    if (str.length==1) {
      return "0" + str;
    } else if (str.length==0) {
      return "00";
    }
    return str;
  }



  export function differenceInSeconds(date1: Date, date2: Date): number {
    const differenceInSeconds: number = Math.abs(date1.getTime() - date2.getTime()) / 1000; // Diferencia en segundos
    return differenceInSeconds;
  }

  export const formatTimeDifference = (date: Date): string => {
    if (date === null) {
      return "N/A";
    }
    date = new Date(date)
    const now = new Date();
    const diffMilliseconds = Math.abs(now.getTime() - date.getTime());
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
  
    if (diffMonths > 0) {
      return `${diffMonths} ${diffMonths === 1 ? 'mes' : 'meses'}`;
    } else if (diffDays > 0) {
      return `${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    } else if (diffHours > 0) {
      const remainingMinutes = diffMinutes % 60;
      return `${diffHours} ${diffHours === 1 ? 'hora' : 'horas'} ${remainingMinutes} ${remainingMinutes === 1 ? 'minuto' : 'minutos'}`;
    } else {
      return `${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`;
    }
  }
  
  /**
  * Formatea una fecha en un string en el formato "DD Mes" o "DD Mes, AAAA".
  * Si la fecha es del mismo año actual, no se incluye el año en la salida.
  * Los primeros tres caracteres del mes están en mayúscula.
  * 
  * @param date La fecha a formatear.
  * @returns El string formateado de la fecha.
  */
  export const formatDate = (date: Date): string => {
   const currentDate = new Date();
   date = new Date(date)
   const options: Intl.DateTimeFormatOptions = {
     day: "numeric",
     month: "short",
     year: "numeric",
   };
 
   if (date.getFullYear() === currentDate.getFullYear()) {
     options.year = undefined;
   }
 
   const formattedDate = date.toLocaleDateString(undefined, options);
   const [day, month, year] = formattedDate.split(" ");
   const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
 
   return year ? `${day} ${formattedMonth}, ${year}` : `${day} ${formattedMonth}`;
 };
 export const getFormErrorMessage = (errors : any,name:string) => {
  console.log(errors,name,errors[name] && <small className="p-error">{errors[name].message}</small>)
  return errors[name] && <small className="p-error">{errors[name].message}</small>
};
/**
 * 
 * @param dateString en bas a una fecha iso en string, devuelve la edad
 * @returns 
 */
export const getAgeFromDate = (dateString : string) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export function isNull(valor:any) {
  return (valor === null || valor === '' || typeof valor === 'undefined');
}

export const parsePreferences = (t: IGenericData): IGenericData => {
  const parsedData: IGenericData = {
    ...t, // Copia todas las propiedades del objeto original
    attr1: "bg-teal-600",
    attr2: "text-white",
    description: (t.parent?.description || "") + " > " + t.description,
  };
  return parsedData;
};

export const getPathImage = (id:number,image:string) : string => {
  return AppConfig.conf.BACKEND_URL + AppSetting.pathProfileImages.replace("{id}", id.toString()).replace("{image}", image);
}
