import axios from "axios";

import type { FactsResponse } from "@/facts/types/FactsResponse";
import { factsMapper } from "@/facts/mapper/FactsMapper";
import { configService } from "@/utils/ConfigService";

class FactsApi {
  private http = axios.create({
    baseURL: configService.getOrThrow("VITE_FACTS_API_BASE_URL"),
  });

  async getFacts(page: number) {
    const params = { page };
    const response = await this.http.get<FactsResponse>("facts", { params });
    const data = response.data;

    const facts = factsMapper.mapFacts(data);

    return {
      facts,
      hasNext: data.page !== data.last_page,
    };
  }
}

export const factsApi = new FactsApi();
