import IUser from "./IUser";

export default interface IUserPhoto {
    
    id: number | null;

    user: IUser;

    photoName: string;

    photoType: number;
}