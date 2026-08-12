"use client";

import { useState } from "react";

interface UseApiMutationResult<TPayload, TResult> {
  mutate: (payload: TPayload) => Promise<TResult | null>;
  isLoading: boolean;
  error: string | null;
}

export function useApiMutation<TPayload, TResult>(
  mutationFn: (payload: TPayload) => Promise<TResult>,
): UseApiMutationResult<TPayload, TResult> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function mutate(payload: TPayload): Promise<TResult | null> {
    // Nulstil forrige mutationstilstand foer hver ny request.
    setIsLoading(true);
    setError(null);

    try {
      const result = await mutationFn(payload);
      return result;
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unexpected error while running mutation";
      // Eksponer fejlarsag og behold en forudsigelig returtype.
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    mutate,
    isLoading,
    error,
  };
}
