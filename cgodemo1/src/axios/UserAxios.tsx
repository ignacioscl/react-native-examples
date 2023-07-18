import { pathImagesProfile } from "../config/AppConfig";
import UserFilter from "../filters/users/UserFilter";
import UpdateFields from "../types/genericData/UpdateFields";
import IResponsePaginator from "../types/response/IResponsePaginator";
import IUser from "../types/users/IUser";
import getAxiosInstance from "../utils/AxiosUtil";
import BackendResponse from "./BackendResponse";


class UserAxios {

    private axiosInstance : any;
    private statusOk : number;
    private initiated: boolean;
    constructor() {
        this.initiated = false;
        this.statusOk = 200;
    }
/*
    public async init() {
        if (!this.initiated) {
            this.axiosInstance = await getAxiosInstance();
        }        
    }*/
    /*public async createUser(user : IUser) : Promise<IUser> {
        try {
            const result : BackendResponse | any = await this.getAxios().post("/login/create",user);
        
            if (result.status != this.statusOk) {
                console.log(result.result)
                throw new Error(result.errorResponse?.message);
            }
            return result.data.data;
        } catch (e : any) {
            throw new Error(e.response.data.errorResponse.message);
        }
        
    }*/
    public async getUserLoguedFull () {
        const response : {data:{data: IUser}} = await ((await this.getAxios())).get("/api/user/getUserLoguedFull");
        response.data.data.thumbnail = response.data.data.thumbnail != null ? pathImagesProfile + response.data.data.id + '/' + response.data.data.thumbnail : '/img/get/-1/-1/foto-perfil.jpg'

        return response.data.data;
    }
    public async loginWithFacebook(token:string) {
        return new Promise<string>((resolve, reject) => {
            this.getAxios().then (a => {
                a.post("/login/facebook", {token:token})
              .then((data: BackendResponse<any> | any) => {
                  if (data.data.data.token) {
                    resolve(data.data.data.token);
                  } else {
                    reject();
                  }
                  

              })
              .catch((e: any) => {
                console.log(e)
                reject(e.response.data.errorResponse.message);
              });
            })
              
          });
    }

    public async loginWithGoogle(token:string) {
        return new Promise<string>(async (resolve, reject) => {
            (await this.getAxios())
              .post("/login/google", {token:token})
              .then((data: BackendResponse<any> | any) => {
                  if (data.data.data.token) {
                    resolve(data.data.data.token);
                  } else {
                    reject();
                  }
                  

              })
              .catch((e: any) => {
                console.log(e)
                reject(e.response.data.errorResponse.message);
              });
          });
    }
    public async createUser(user: IUser): Promise<any> {
        return new Promise<IUser>((resolve, reject) => {
          this.getAxios().then(a => {a.post("/login/create", user)
          .then((result: BackendResponse<IUser> | any) => {
            if (result.status !== this.statusOk) {
              console.log(result.result);
              reject(result.errorResponse?.message);
            } else {
              resolve(result.data.data);
            }
          })
          .catch((e: any) => {
            reject(e.response.data.errorResponse.message);
          });})
            
        });
      }
    
    public async update(user: IUser & UpdateFields) : Promise<IUser[]> {
        try {
            const result : BackendResponse<IUser> | any = await (await this.getAxios()).put("/api/user" ,user);

            if (result.status != this.statusOk) {
                throw new Error(result.errorResponse?.message);
            }
            return result.data.data;
        } catch (e : any) {
            throw new Error(e.response.data.errorResponse.message);
        }
        
    }
    public async fetch(filter : UserFilter) : Promise<IUser[]> {
        try {
            const result : BackendResponse<IUser[]> | any = await this.axiosInstance.post("/api/user/fetch" ,filter);

            if (result.status != this.statusOk) {
                console.log(result.result)
                throw new Error(result.errorResponse?.message);
            }
            return result.data.data.data;
        } catch (e : any) {
            throw new Error(e.response.data.errorResponse.message);
        }
        
    }
    public async fetchPaginated(filter : UserFilter,page: number, pageSize: number) : Promise<IResponsePaginator<IUser[]>> {
        try {
            filter.currentPage  = page;
            filter.pageSize     = pageSize
            const result : BackendResponse<IUser[]> | any = await this.axiosInstance.post("/api/user/fetch" ,filter);

            if (result.status != this.statusOk) {
                console.log(result.result)
                throw new Error(result.errorResponse?.message);
            }
            return result.data.data;
        } catch (e : any) {
            throw new Error(e.response.data.errorResponse.message);
        }
        
    }
    public async delete(id : number) : Promise<void> {
        console.log(id)
        try {
            if (id == null || id<1) {
                throw new Error("Id incorrecto");
            }
            await (await this.getAxios()).delete("/api/user/" + id);
        
        } catch (e : any) {
            console.error(e)
            throw new Error(e.response.data.errorResponse.message);
        }
    }

    public async changePassword(user : IUser) : Promise<void> {
        try {
            await (await this.getAxios()).put("/api/user/changePassword",user);
        
            
        } catch (e : any) {
            throw new Error(e.response.data.errorResponse.message);
        }
        
    }

    public async deleteImage(id:number) : Promise<void> {
        try {
            await (await this.getAxios()).delete('/api/user/image/' + id);

        } catch (e : any) {
            throw new Error(e.response.data.errorResponse.message);
        }
      }
    private async getAxios() {
        if (!this.axiosInstance) {
            this.axiosInstance = await getAxiosInstance();
        }
        return this.axiosInstance;
    }

    public cleanInstanceToken() {
        this.axiosInstance = null;
    }
}

const userAxiosInstance = new UserAxios();

export default userAxiosInstance;