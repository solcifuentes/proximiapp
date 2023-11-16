import { PaginatedData } from '@/resources/repositories/common/types.ts'
import { District, QueryDistricts } from '@/resources/repositories/district/types.ts'

export const queryDistricts: QueryDistricts = async () => {
  return {
    totalItems : 5,
    page       : 1,
    totalPages : 1,
    limit      : 10,
    items      : [
      { id: 1, name: 'Barrio A' },
    ] as District[],
  } as PaginatedData<District>
}
