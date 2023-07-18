export default interface IGenericData {
    id: number;
    parent?:IGenericData;
    idType: number;//ConstGenericData
    description:string;
    isActive:number;
    attr1:string;
    attr2:string;
}
