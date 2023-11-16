import {PaginatedData} from '@/resources/repositories/common/types.ts'

export interface HttpErrorResponse {
    statusCode: number;
    message: string;
}

export type CatchResponse = <Response>(fn: Awaited<ReturnType<any>>) => Promise<{
    data: Response | null,
    error: HttpErrorResponse | null,
}>

export type RestPaginatedDataResponse<T> = {
    info: {
        count: number,
        pages: number,
        page: number,
        limit: number,
    },
    results: T[],
}

export type MapPaginatedData = (data: RestPaginatedDataResponse<unknown>, page: number) => PaginatedData<unknown>
