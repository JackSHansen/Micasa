"use client";

import { apiClient } from "@/Hooks/apiClient";
import { Estate } from "@/Hooks/types";
import { useApiQuery } from "@/Hooks/useApiQuery";

export function useEstates() {
  // Primaert liste-endpoint brugt af boligoversigtssider.
  return useApiQuery<Estate[]>(() => apiClient.get<Estate[]>("/estates"), []);
}

export function useEstateById(id?: number) {
  return useApiQuery<Estate>(
    () => apiClient.get<Estate>(`/estates/${id}`),
    [id],
    typeof id === "number",
  );
}
