import IAddress from "../types/response/IAddress";
import axiosInstance from "../utils/AxiosInstance";
import BackendResponse from "./BackendResponse";


class ExternalApisAxios {

    private statusOk : number;

    
    constructor() {
        this.statusOk = 200;
    }


    public async fetchPlacesByCoords(lat:number,lng:number,isOnlyLocality:boolean) : Promise<IAddress> {
        const obj : BackendResponse<IAddress> = await axiosInstance.get("externalApis/fetchPlacesByCoords?lat=" + lat + "&lng=" + lng + "&isOnlyLocality=" + (isOnlyLocality ? 1 : 0));
        return obj.data.data;
    }

}

export default ExternalApisAxios;