import { RestPaginatedDataResponse } from '@/resources/repositories/common/rest/types.ts'

export type DistrictRestSchema = {
    id: number;
    nameBarrio: string;
}

export type QueryDistrictsRestResponse = RestPaginatedDataResponse<DistrictRestSchema>
