"use client";

import { apiClient } from "@/Hooks/apiClient";
import { Staff } from "@/Hooks/types";
import { useApiQuery } from "@/Hooks/useApiQuery";

export function useStaff() {
  // Bruges pa kontakt-/om-os-sider med medarbejderkort.
  return useApiQuery<Staff[]>(() => apiClient.get<Staff[]>("/staff"), []);
}

export function useStaffById(id?: number) {
  return useApiQuery<Staff>(
    () => apiClient.get<Staff>(`/staff/${id}`),
    [id],
    typeof id === "number",
  );
}
