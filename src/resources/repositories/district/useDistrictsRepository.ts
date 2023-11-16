import { queryDistricts } from '@/resources/repositories/district/mock/queryDistricts.ts'
import { DistrictRepository } from '@/resources/repositories/district/types.ts'

export const useDistrictsRepository: DistrictRepository = () => {
  return {
    queryDistricts: queryDistricts,
  }
}
