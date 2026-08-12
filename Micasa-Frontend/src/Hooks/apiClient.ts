export class ApiError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api";

function getAccessToken(): string | null {
  // localStorage er kun tilgaengelig i browseren.
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem("access_token");
}

function getErrorMessage(data: unknown, fallback: string): string {
  if (typeof data === "object" && data !== null) {
    const details = data as { message?: unknown; error?: unknown };

    if (typeof details.message === "string") {
      return details.message;
    }

    if (typeof details.error === "string") {
      return details.error;
    }
  }

  return fallback;
}

async function request<TResponse>(
  path: string,
  options: RequestInit & { token?: string } = {},
): Promise<TResponse> {
  // Tillad eksplicit token, ellers bruges token fra localStorage.
  const token = options.token ?? getAccessToken();
  const headers = new Headers(options.headers);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (options.body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  // Fortolk JSON naar muligt, men understoet stadig tekstsvar.
  const contentType = response.headers.get("content-type") ?? "";
  const isJson = contentType.includes("application/json");
  const responseBody = isJson ? await response.json().catch(() => null) : await response.text();

  if (!response.ok) {
    const fallbackMessage = `Request failed with status ${response.status}`;
    throw new ApiError(
      getErrorMessage(responseBody, fallbackMessage),
      response.status,
      responseBody,
    );
  }

  return responseBody as TResponse;
}

export const apiClient = {
  // Tynde wrappers omkring request holder call-sites korte og typed.
  get: <TResponse>(path: string, token?: string) =>
    request<TResponse>(path, { method: "GET", token }),

  post: <TResponse>(path: string, body?: unknown, token?: string) =>
    request<TResponse>(path, {
      method: "POST",
      body: body === undefined ? undefined : JSON.stringify(body),
      token,
    }),

  put: <TResponse>(path: string, body?: unknown, token?: string) =>
    request<TResponse>(path, {
      method: "PUT",
      body: body === undefined ? undefined : JSON.stringify(body),
      token,
    }),

  delete: <TResponse>(path: string, token?: string) =>
    request<TResponse>(path, { method: "DELETE", token }),
};
