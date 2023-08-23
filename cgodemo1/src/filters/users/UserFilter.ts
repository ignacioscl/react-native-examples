import Filter from "../Filter";

class UserFilter implements Filter {
    id?:number
    password? : string;
    email?: string;
    userCode?:string;
    isActive: -1|0|1 ;
    isOnline?: null|undefined|0|1;
    near?: null|undefined|0|1;
    nearLat?:number|null;
    nearLng?:number|null;
    username?: string;
    usernameLike?:string;
    rol?: 1|2;
    orderBy: string;
    currentPage?: number;
    pageSize?: number;
    sexPreferences?:1|2|3;//1=H,2 M 3 Ind
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