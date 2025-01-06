import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Type definitions for API responses
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Utility function for handling API errors
export function handleApiError(error: any): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}

// Utility function for formatting API URLs
export function formatApiUrl(path: string): string {
  const baseUrl = import.meta.env.VITE_API_URL || '/api';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}