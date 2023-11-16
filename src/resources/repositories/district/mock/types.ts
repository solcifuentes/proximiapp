import { RestPaginatedDataResponse } from "@/resources/repositories/common/rest/types.ts";

export type DistrictRestSchema = {
  neighbourhood: string;
  activity: string;
  counter: number;
};

export type QueryDistrictsRestResponse =
  RestPaginatedDataResponse<DistrictRestSchema>;
