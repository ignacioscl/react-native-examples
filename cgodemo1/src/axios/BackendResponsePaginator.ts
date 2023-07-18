import IResponsePaginator from "../types/response/IResponsePaginator";


export default interface BackendResponsePaginator<T> {
    data:{data:IResponsePaginator<T>},
    status: number,
    errorResponse: {message:string} | null
}