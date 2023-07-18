interface IResponsePaginator<T> {
    data: T;
    totalRecords: number;
    actualPage:number;
}

export default IResponsePaginator;

