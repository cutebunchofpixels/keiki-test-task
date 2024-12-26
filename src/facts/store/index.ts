import { computed, ref } from "vue";
import { useInfiniteQuery } from "@tanstack/vue-query";
import { defineStore } from "pinia";

import { factsApi } from "@/facts/api/FactsApi";
import { FilteringOption } from "@/facts/types/FilteringOption";
import { filteringStrategyFactory } from "@/facts/strategies/filtering/factory";
import { Fact } from "@/facts/entities/Fact";

export const useFactsStore = defineStore("facts", () => {
  const search = ref<string>("");
  const filteringOption = ref<FilteringOption>(FilteringOption.All);

  const {
    data: queryData,
    fetchNextPage: loadMore,
    hasNextPage: hasNext,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["facts"],
    queryFn: ({ pageParam: page }) => factsApi.getFacts(page),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _pages, lastPageParam) => {
      if (!lastPage.hasNext) {
        return null;
      }

      return (lastPageParam += 1);
    },
  });

  const filteringStrategy = computed(() =>
    filteringStrategyFactory.getStrategy(filteringOption.value)
  );

  const facts = computed(() => {
    if (!queryData.value) {
      return [];
    }

    const pages = queryData.value.pages.map((page) => page.facts);
    const facts: Fact[] = [];
    pages.forEach((page) => facts.push(...page));
    return facts;
  });

  const isEmpty = computed(() => {
    return facts.value?.length === 0;
  });

  function searchFacts(facts: Fact[], term: string) {
    return facts.filter((fact) =>
      fact.text.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }

  function getFactById(id: number) {
    return facts.value.find((fact) => fact.id === id);
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
    isFetching,
    isError,
    loadMore,
    search,
    filteringOption,
    getFactById,
  };
});
