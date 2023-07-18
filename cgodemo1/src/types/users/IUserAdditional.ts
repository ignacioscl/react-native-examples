import IGenericData from "../genericData/IGenericData";


export default interface IUserAdditional {
    id: number | null;
    work?:IGenericData;
    education?:IGenericData;
    aboutMe?: string;
    /**
     * IDTYPE:5
     */
    maritalStatus?:IGenericData;
    /**
     * IDTYPE:6
     */
    sexualOrientation?:IGenericData;
    /**
     * IDTYPE:7
     */
    eyesColor?:IGenericData;
    /**
     * IDTYPE:8
     */
    hairColor?:IGenericData;
    /**
     * IDTYPE:9
     */
    childrens?:IGenericData;
    /**
     * IDTYPE:10
     */
    smokingStatus?:IGenericData;
    /**
     * IDTYPE:11
     */
    drinkStatus?:IGenericData;
    height?:number
}