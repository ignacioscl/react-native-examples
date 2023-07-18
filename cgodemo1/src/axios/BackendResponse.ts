import IUser from "../types/users/IUser";

export default interface BackendResponse<T> {
    data:{data:T},
    status: number,
    errorResponse: {message:string} | null
}