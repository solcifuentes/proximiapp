import { PaginatedData } from "@/resources/repositories/common/types.ts";

export type District = {
  neighbourhood: string;
  activity: string;
  counter: number;
};

export type QueryDistrictInput = {
  page: number;
};

export type QueryDistrictOutput = PaginatedData<District>;

export type QueryDistricts = (
  input: QueryDistrictInput
) => Promise<QueryDistrictOutput>;

export type DistrictRepository = () => {
  queryDistricts: QueryDistricts;
};
