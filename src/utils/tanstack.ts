import {
  useQuery,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryReturnType,
} from "@tanstack/vue-query";

export default function useLazyQuery<TData, TQueryFn>(
  options: UseQueryOptions<TData>
): [TQueryFn, UseQueryReturnType<TData, Error>] {
  const query = useQuery<any, Error, TData, QueryKey>({
    ...options,
    enabled: false,
  });

  return [query.refetch as TQueryFn, query];
}
