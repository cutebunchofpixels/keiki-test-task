import type { Fact } from "@/facts/entities/Fact";

export type GetFactsResult = {
  facts: Fact[];
  hasNext: boolean;
};
