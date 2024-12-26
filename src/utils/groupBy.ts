export function groupBy<TItem, TCriteria extends string | number>(
  items: TItem[],
  criteria: (item: TItem) => TCriteria
) {
  const result: Record<TCriteria, TItem[]> = {} as Record<TCriteria, TItem[]>;

  for (const item of items) {
    const key = criteria(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}
