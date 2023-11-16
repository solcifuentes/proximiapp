import { useState } from 'react'
import { useInfiniteData } from '@/presentation/utils/useInfiniteData.ts'
import { UiStateStatus, useUiStatus } from '@/presentation/utils/useUiStatus.ts'
import { emptyPaginatedData } from '@/resources/repositories/common/emptyPaginatedData.ts'
import { PaginatedData } from '@/resources/repositories/common/types.ts'
import { District, QueryDistrictInput } from '@/resources/repositories/district/types.ts'
import { useDistrictsRepository } from '@/resources/repositories/district/useDistrictsRepository.ts'

export const useDistrict = () => {
  const { queryDistricts } = useDistrictsRepository()
  const status = useUiStatus()
  const { items: allItems, addPage, clear } = useInfiniteData()
  const [ items, setItems ] = useState<PaginatedData<District>>()

  const query = async (params: QueryDistrictInput) => {
    status.resetStatus()

    if (params.page === 1) {
      clear()
    }

    try {
      status.setStatus(UiStateStatus.LOADING)
      status.setMessage('Obteniendo barrios')

      const itemsResult = await queryDistricts(params)
      status.setStatus(UiStateStatus.SUCCESS)
      status.setMessage('Barrios cargados correctamente')
      setItems(itemsResult)
      addPage(itemsResult)
      return itemsResult
    }
    catch (error) {
      status.setStatus(UiStateStatus.ERROR)
      status.setMessage('Error al cargar los barrios')
      setItems(emptyPaginatedData as PaginatedData<District>)
    }
  }

  return {
    message    : status.message,
    isLoading  : status.isLoading,
    isSuccess  : status.isSuccess,
    isError    : status.isError,
    characters : allItems,
    page       : items?.page || 1,
    nextPage   : items?.page ? items.page + 1 : 1,
    totalPages : items?.totalPages || 0,
    query,
  }
}
