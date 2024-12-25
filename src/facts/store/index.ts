import { computed, ref } from "vue";
import { defineStore } from "pinia";

import useLazyQuery from "@/utils/tanstack";
import { factsApi } from "@/facts/api/FactsApi";
import { FilteringOption } from "@/facts/types/FilteringOption";
import { filteringStrategyFactory } from "@/facts/strategies/filtering/factory";
import type { GetFactsResult } from "@/facts/types/GetFactsResult";
import { Fact } from "@/facts/entities/Fact";

export const useFactsStore = defineStore("facts", () => {
  const page = ref<number>(0);
  const search = ref<string>("");
  const facts = ref<Fact[]>([]);
  const filteringOption = ref<FilteringOption>(FilteringOption.All);
  const [getFacts, { isLoading, data, isError }] = useLazyQuery<
    GetFactsResult,
    typeof factsApi.getFacts
  >({
    queryKey: ["facts"],
    queryFn: () => factsApi.getFacts(page.value),
  });

  const filteringStrategy = computed(() =>
    filteringStrategyFactory.getStrategy(filteringOption.value)
  );

  const hasNext = computed(() => {
    return data.value?.hasNext;
  });

  const isEmpty = computed(() => {
    return facts.value?.length === 0;
  });

  async function loadMore() {
    page.value += 1;
    await getFacts(page.value);
    const newFacts = data.value?.facts || [];
    facts.value.push(...newFacts);
  }

  function searchFacts(facts: Fact[], term: string) {
    return facts.filter((fact) =>
      fact.text.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }

  const displayFacts = computed(() => {
    if (!facts.value) {
      return [];
    }
    let result = facts.value;

    result = searchFacts(facts.value, search.value);
    result = filteringStrategy.value.filter(result);

    return result;
  });

  return {
    facts,
    displayFacts,
    hasNext,
    isEmpty,
    isLoading,
    isError,
    loadMore,
  };
});
