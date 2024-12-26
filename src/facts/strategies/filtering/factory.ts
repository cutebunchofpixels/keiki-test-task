import {
  AllFilteringStrategy,
  LongFirstFilteringStrategy,
  LongOnlyFilteringStrategy,
  ShortFirstFilteringStrategy,
  ShortOnlyFilteringStrategy,
  type FilteringStrategy,
} from "@/facts/strategies/filtering";
import { FilteringOption } from "@/facts/types/FilteringOption";

const filteringOptionsToStrategies = {
  [FilteringOption.All]: AllFilteringStrategy,
  [FilteringOption.ShortFirst]: ShortFirstFilteringStrategy,
  [FilteringOption.LongFirst]: LongFirstFilteringStrategy,
  [FilteringOption.OnlyShort]: ShortOnlyFilteringStrategy,
  [FilteringOption.OnlyLong]: LongOnlyFilteringStrategy,
};

class FilteringStrategyFactory {
  public getStrategy(filteringOption: FilteringOption): FilteringStrategy {
    const strategy = filteringOptionsToStrategies[filteringOption];
    return new strategy();
  }
}

export const filteringStrategyFactory = new FilteringStrategyFactory();
