"use client";

import { apiClient } from "@/Hooks/apiClient";
import { useApiMutation } from "@/Hooks/useApiMutation";
import { useApiQuery } from "@/Hooks/useApiQuery";
import {
  CreateUserPayload,
  DeleteResponse,
  UpdateUserPayload,
  User,
} from "@/Hooks/types";

interface UpdateUserArgs {
  id: number;
  payload: UpdateUserPayload;
}

export function useUsers() {
  // Administrations-endpoint til liste over alle brugere.
  return useApiQuery<User[]>(() => apiClient.get<User[]>("/users"), []);
}

export function useUserById(id?: number) {
  return useApiQuery<User>(
    () => apiClient.get<User>(`/users/${id}`),
    [id],
    typeof id === "number",
  );
}

export function useCreateUser() {
  // Opret bruger-konto.
  return useApiMutation<CreateUserPayload, User>((payload) =>
    apiClient.post<User>("/users", payload),
  );
}

export function useUpdateUser() {
  return useApiMutation<UpdateUserArgs, User>(({ id, payload }) =>
    apiClient.put<User>(`/users/${id}`, payload),
  );
}

export function useDeleteUser() {
  // Slet via id og returner API-statusbesked.
  return useApiMutation<number, DeleteResponse>((id) =>
    apiClient.delete<DeleteResponse>(`/users/${id}`),
  );
}
