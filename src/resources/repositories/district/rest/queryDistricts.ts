import { emptyPaginatedData } from '@/resources/repositories/common/emptyPaginatedData.ts'
import { catchResponse } from '@/resources/repositories/common/rest/catchResponse.ts'
import { client } from '@/resources/repositories/common/rest/client.ts'
import { mapPaginatedData } from '@/resources/repositories/common/rest/mapPaginatedData.ts'
import { PaginatedData } from '@/resources/repositories/common/types.ts'
import { DistrictRestSchema, QueryDistrictsRestResponse } from '@/resources/repositories/district/rest/types.ts'
import { District, QueryDistrictOutput, QueryDistricts } from '@/resources/repositories/district/types.ts'

export const queryDistricts: QueryDistricts = async (params) => {
  const { data, error } = await catchResponse<QueryDistrictsRestResponse>(
    async () => client.get('/district', { params }),
  )

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return emptyPaginatedData as QueryDistrictOutput
  }

  const mappedData = mapPaginatedData(data, params.page) as PaginatedData<DistrictRestSchema>

  return {
    ...mappedData,
    items: mappedData.items.map((district) => ({
      ...district,
    })) as District[],
  }
}
