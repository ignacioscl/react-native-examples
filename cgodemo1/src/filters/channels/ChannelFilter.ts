import EPages from "../../types/response/EPages";
import IUser from "../../types/users/IUser";
import Filter from "../Filter";

class ChannelFilter implements Filter {
    id?:number
    isActive: -1|0|1 ;
    title?: string;
    idAuthor?:number;
    idType?:number;
    /**
     * si es 1, la query devuelve si el usuario del token esta conectado al canal
     */
    isUserLoguedConnected?:null|undefined|0|1;
    /**
     * en caso que en la qry se quiera devolver datos del selects segun el usr logueado, se utiliza este campo
     */
    userLogued?:IUser
    orderBy: string;
    currentPage?: number;
    pageSize?: number;
    dontRemoveSensibleData: boolean;
    constructor() {
        this.isActive               = 1;
        this.orderBy                = " u.username ";
        this.dontRemoveSensibleData = false;
        this.pageSize               = EPages["pageSize"];
    }
}

export default ChannelFilter;