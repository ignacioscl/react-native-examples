import IGenericData from "../genericData/IGenericData";
import IUserAdditional from "./IUserAdditional";
import IUserPhoto from "./IUserPhoto";

export default interface IUser {
    id: number | null;
    userCode:string;
    /**
     * solo si se logueo con cuenta google
     */
    idGoogle?:string;
    userAdditional?:IUserAdditional
    preferences:IGenericData[];
    idFacebook?:string
    password: string | null;
    username:string;
    email:string;
    phone?:string;
    thumbnail?:string;
    country?:string;
    city?:string;
    state?:string;
    lat?:number;
    lng?:number;
    hasCoordManual?:0|1|null;
    rol: number;
    isActive: 1 | 0;
    age:number;
    googlePicture?:string;
    birthDate?: Date;
    ageInput?: number;
    accept: 1 | 0;
    genero?: 1|2|3;//1=M,2=F,3=indefinido
    sexPreferencias?:1|2|3;//1=hetero,2=homo,3=bi
    photos?:IUserPhoto[];
}


/*
email
: 
"ignaciosc@gmail.com"
family_name
: 
"Sclar"
given_name
: 
"Ignacio"
id
: 
"109279872556728717135"
locale
: 
"es-419"
name
: 
"Ignacio Sclar"
picture
: 
"https://lh3.googleusercontent.com/a/AGNmyxZ0dlQ_xcYmdpebWNF-dxt_HVA9K5KRxNArjobw=s96-c"
verified_email
: 
true
*/
export const ROL_USER = 2;
export const ROL_ADMIN = 1;