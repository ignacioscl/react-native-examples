import IGenericData from "../genericData/IGenericData";
import IUser from "../users/IUser";

export default interface IChannel {
    id: number;
    author?: IUser;//ConstGenericData
    title:string;
    thumbnail:string;
    description:string;
    lastMessage:string;
    lastMessageDate:Date;
    dateCreated:Date;
    type:number;//1=channel,2=chat
    privacySetting:number;//ConstGenericData.PRIVACY_SETTING_PUBLIC Y PRIVATE
    isActive:0|1;
    usersOnlineInChannel?:number;
    tags:IGenericData[];
    /**
     * se utiliza para devolver si el usr logueado pasado en isUserLoguedConnected y userLogued esta logueado en el canal o no
     */
    isUserLoguedConnected?:null|undefined|0|1
}
