import type { ServerFact } from "@/facts/types/ServerFact";

export type FactsResponse = {
  data: ServerFact[];
  page: number;
  last_page: number;
};
