"use client";

import { apiClient } from "@/Hooks/apiClient";
import { City } from "@/Hooks/types";
import { useApiQuery } from "@/Hooks/useApiQuery";

export function useCities() {
  // Hent fuld byliste til filtre og adressedata.
  return useApiQuery<City[]>(() => apiClient.get<City[]>("/cities"), []);
}

export function useCityById(id?: number) {
  return useApiQuery<City>(
    () => apiClient.get<City>(`/cities/${id}`),
    [id],
    typeof id === "number",
  );
}
