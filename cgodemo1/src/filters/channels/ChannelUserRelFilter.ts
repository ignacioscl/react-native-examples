import Filter from "../Filter";

class ChannelUserRelFilter implements Filter {
    id?:number
    idChannel?:number;
    idUser?:number;
    removeAttr?:string[];
    orderBy: string;
    currentPage?: number;
    pageSize?: number;
    dontRemoveSensibleData:boolean;
    constructor() {
        this.orderBy = "c.title ";
        this.dontRemoveSensibleData=false;
    }
}

export default ChannelUserRelFilter;