import { QueryClient } from "@tanstack/react-query";
import type { ApiResponse } from "./utils";
import { formatApiUrl, handleApiError } from "./utils";

// Base URL for API requests - can be configured based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }): Promise<any> => {
        const endpoint = Array.isArray(queryKey) ? queryKey.join('/') : queryKey;
        const url = formatApiUrl(endpoint, API_BASE_URL);

        try {
          const res = await fetch(url, {
            credentials: "include",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });

          const data = await res.json();

          // Handle FastAPI response format
          if (!res.ok) {
            throw new Error(data.detail || `HTTP error! status: ${res.status}`);
          }

          return data;
        } catch (error) {
          throw new Error(handleApiError(error));
        }
      },
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
    },
    mutations: {
      mutationFn: async ({ endpoint, method, data }: { endpoint: string; method?: string; data?: any }): Promise<any> => {
        const url = formatApiUrl(endpoint, API_BASE_URL);

        try {
          const res = await fetch(url, {
            method: method || 'POST',
            credentials: "include",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          const responseData = await res.json();

          // Handle FastAPI response format
          if (!res.ok) {
            throw new Error(responseData.detail || `HTTP error! status: ${res.status}`);
          }

          return responseData;
        } catch (error) {
          throw new Error(handleApiError(error));
        }
      },
      retry: false,
    }
  },
});


// utils.ts
export type ApiResponse<T> = {
  data: T;
  detail?: string;
};

export const formatApiUrl = (endpoint: string, baseUrl: string = '/api'): string => {
  return endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};

export const handleApiError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.detail) {
    return error.response.data.detail;
  } else if (error.message) {
    return error.message;
  } else {
    return "An unexpected error occurred.";
  }
};