"use client";

import { apiClient } from "@/Hooks/apiClient";
import { useApiMutation } from "@/Hooks/useApiMutation";
import { useApiQuery } from "@/Hooks/useApiQuery";
import {
  CreateReviewPayload,
  DeleteResponse,
  Review,
  UpdateReviewPayload,
} from "@/Hooks/types";

interface AuthPayload<TPayload> {
  payload: TPayload;
  token: string;
}

interface UpdateReviewArgs {
  id: number;
  payload: UpdateReviewPayload;
  token: string;
}

interface DeleteReviewArgs {
  id: number;
  token: string;
}

export function useReviews() {
  // Offentligt laese-endpoint til anmeldelser.
  return useApiQuery<Review[]>(() => apiClient.get<Review[]>("/reviews"), []);
}

export function useReviewById(id?: number) {
  return useApiQuery<Review>(
    () => apiClient.get<Review>(`/reviews/${id}`),
    [id],
    typeof id === "number",
  );
}

export function useCreateReview() {
  // Oprettelse kraever Authorization-token fra brugerens session.
  return useApiMutation<AuthPayload<CreateReviewPayload>, Review>(
    ({ payload, token }) => apiClient.post<Review>("/reviews", payload, token),
  );
}

export function useUpdateReview() {
  return useApiMutation<UpdateReviewArgs, Review>(({ id, payload, token }) =>
    apiClient.put<Review>(`/reviews/${id}`, payload, token),
  );
}

export function useDeleteReview() {
  return useApiMutation<DeleteReviewArgs, DeleteResponse>(({ id, token }) =>
    apiClient.delete<DeleteResponse>(`/reviews/${id}`, token),
  );
}
