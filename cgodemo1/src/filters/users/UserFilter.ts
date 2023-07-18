import Filter from "../Filter";

class UserFilter implements Filter {
    id?:number
    password? : string;
    email?: string;
    userCode?:string;
    isActive: -1|0|1 ;
    isOnline?: null|undefined|0|1;
    near?: null|undefined|0|1;
    nearLat?:number;
    nearLng?:number;
    username?: string;
    usernameLike?:string;
    rol?: 1|2;
    orderBy: string;
    currentPage?: number;
    pageSize?: number;
    /**
     * si es null, undefined o false => remueve la info sensible
     * si es true, no remueve
     */
    dontRemoveSensibleData: boolean;
    fullInfo:boolean;
    constructor() {
        this.isActive               = 1;
        this.orderBy                = " u.username ";
        this.dontRemoveSensibleData = false;
        this.fullInfo               = false;
    }
}

export default UserFilter;