import { RestPaginatedDataResponse } from '@/resources/repositories/common/rest/types.ts'

export type DistrictRestSchema = {
    id: number;
    name: string;
}

export type QueryDistrictsRestResponse = RestPaginatedDataResponse<DistrictRestSchema>
