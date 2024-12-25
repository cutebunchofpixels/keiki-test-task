import { Fact } from "@/facts/entities/Fact";
import type { FactsResponse } from "@/facts/types/FactsResponse";

class FactsMapper {
  public mapFacts(serverResponse: FactsResponse) {
    const serverFacts = serverResponse.data;

    const facts = serverFacts.map(({ fact, length }) => new Fact(fact, length));

    return facts;
  }
}

export const factsMapper = new FactsMapper();
