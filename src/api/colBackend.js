/**
 * Backend API base URL for course/enrollment APIs.
 */
const BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  "https://api.chamberoflearning.com/v1";

export function getApiV1Base() {
  return BASE;
}

export function apiV1Url(path) {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
