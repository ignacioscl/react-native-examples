import Filter from "../Filter";

interface IGenericFilter extends Filter {
    idCompany? : number;
    type?: number;
    idChannel?:number;
    idParentNull?:boolean;
    idParent?:number;
}

export default IGenericFilter;