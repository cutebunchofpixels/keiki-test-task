import type { Fact } from "@/facts/entities/Fact";
import { groupBy } from "@/utils/groupBy";

export interface FilteringStrategy {
  filter(facts: Fact[]): Fact[];
}

export class AllFilteringStrategy implements FilteringStrategy {
  filter(facts: Fact[]): Fact[] {
    return facts;
  }
}

export class ShortFirstFilteringStrategy implements FilteringStrategy {
  filter(facts: Fact[]): Fact[] {
    const result = new Array<Fact>(facts.length);
    const grouped = groupBy<Fact, "short" | "long">(facts, (fact) =>
      fact.isShort ? "short" : "long"
    );

    result.push(...grouped.short);
    result.push(...grouped.long);
    return result;
  }
}

export class LongFirstFilteringStrategy implements FilteringStrategy {
  filter(facts: Fact[]): Fact[] {
    const result = new Array<Fact>(facts.length);
    const grouped = groupBy<Fact, "short" | "long">(facts, (fact) =>
      fact.isShort ? "short" : "long"
    );

    result.push(...grouped.long);
    result.push(...grouped.short);
    return result;
  }
}

export class ShortOnlyFilteringStrategy implements FilteringStrategy {
  filter(facts: Fact[]): Fact[] {
    return facts.filter((fact) => fact.isShort);
  }
}

export class LongOnlyFilteringStrategy implements FilteringStrategy {
  filter(facts: Fact[]): Fact[] {
    return facts.filter((fact) => !fact.isShort);
  }
}
