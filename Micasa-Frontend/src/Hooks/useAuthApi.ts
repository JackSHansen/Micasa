"use client";

import { apiClient } from "@/Hooks/apiClient";
import { useApiMutation } from "@/Hooks/useApiMutation";
import { useApiQuery } from "@/Hooks/useApiQuery";
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  VerifyTokenResponse,
} from "@/Hooks/types";

export function useLogin() {
  // Offentligt login-endpoint returnerer access- og refresh-token.
  return useApiMutation<LoginRequest, LoginResponse>((payload) =>
    apiClient.post<LoginResponse>("/auth/login", payload),
  );
}

export function useRefreshToken() {
  return useApiMutation<RefreshTokenRequest, RefreshTokenResponse>((payload) =>
    apiClient.post<RefreshTokenResponse>("/auth/refresh", payload),
  );
}

export function useVerifyToken(token?: string) {
  // Tokenkontrol kaldes kun, naar et token er tilgaengeligt.
  return useApiQuery<VerifyTokenResponse>(
    () => apiClient.get<VerifyTokenResponse>("/auth/verify", token),
    [token],
    Boolean(token),
  );
}
