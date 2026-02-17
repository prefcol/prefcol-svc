/**
 * Vite-compatible env: use import.meta.env (process.env is not defined in Vite).
 * Optional .env: VITE_API_URL, VITE_RECAPTCHA_SECRET_KEY
 */
export const API_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  "https://api.chamberoflearning.com/v1";

export const IS_DEV =
  typeof import.meta !== "undefined" && import.meta.env?.MODE === "development";
