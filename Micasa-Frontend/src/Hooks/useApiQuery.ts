"use client";

import useSWR from "swr";

interface UseApiQueryResult<TData> {
  data: TData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useApiQuery<TData>(
  queryFn: () => Promise<TData>,
  dependencies: readonly unknown[],
  enabled = true,
): UseApiQueryResult<TData> {
  // SWR-noeglen styrer cache-identitet og revalidering pa tvaers af komponenter.
  const key = enabled ? ["api-query", ...dependencies] : null;

  const { data, error, isLoading, mutate } = useSWR<TData>(key, queryFn, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    data: data ?? null,
    isLoading,
    error:
      error instanceof Error
        ? error.message
        : error
          ? "Unexpected error while fetching data"
          : null,
    refetch: async () => {
      // Manuel opdatering til brugerudloeste reloads.
      await mutate();
    },
  };
}
