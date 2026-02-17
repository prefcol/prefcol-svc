/**
 * Employee Portal API – connect to backend (Spring Boot).
 * Base URL: REACT_APP_EMPLOYEE_API_URL or fallback to mock.
 * All endpoints require JWT (Authorization: Bearer <token>).
 * Role: TEACHER / EMPLOYEE only.
 */

const BASE =
  import.meta.env.REACT_APP_EMPLOYEE_API_URL ||
  import.meta.env.VITE_EMPLOYEE_API_URL ||
  ""; // Use "" so paths are same-origin and Vite proxies /api to backend

function getAuthHeaders() {
  const token =
    localStorage.getItem("auth_token") ||
    sessionStorage.getItem("auth_token") ||
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request(method, path, body = null) {
  const url = `${BASE}${path}`;
  const opts = { method, headers: getAuthHeaders() };
  if (body && method !== "GET") opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(res.statusText || "Request failed");
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ——— Attendance ———
export async function punchIn(payload = {}) {
  return request("POST", "/api/attendance/punch-in", payload);
}

export async function punchOut(payload = {}) {
  return request("POST", "/api/attendance/punch-out", payload);
}

export async function getMyAttendanceRecords(params = {}) {
  const q = new URLSearchParams(params).toString();
  return request("GET", `/api/attendance/my-records${q ? `?${q}` : ""}`);
}

// ——— Payslip ———
export async function getMyPayslips(params = {}) {
  const q = new URLSearchParams(params).toString();
  return request("GET", `/api/payslip/my-payslips${q ? `?${q}` : ""}`);
}

export async function getPayslipById(id) {
  return request("GET", `/api/payslip/${id}`);
}

/** Backend may return JSON; use getPayslipById + build file in UI, or call this for blob if backend sends PDF later. */
export async function downloadPayslipPdf(payslipId) {
  const token =
    localStorage.getItem("auth_token") ||
    sessionStorage.getItem("auth_token") ||
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken");
  const url = `${BASE}/api/payslip/${payslipId}/download`;
  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("Download failed");
  const contentType = res.headers.get("Content-Type") || "";
  if (contentType.includes("application/json")) {
    const json = await res.json();
    return { type: "json", data: json };
  }
  return res.blob();
}

// ——— Leave ———
export async function applyLeave(body) {
  return request("POST", "/api/leave/apply", body);
}

export async function getMyLeaves(params = {}) {
  const q = new URLSearchParams(params).toString();
  return request("GET", `/api/leave/my-leaves${q ? `?${q}` : ""}`);
}

export async function getLeaveBalance() {
  return request("GET", "/api/leave/balance");
}

// ——— Employee profile (for dashboard) ———
export async function getEmployeeProfile() {
  return request("GET", "/api/employees/me");
}

export default {
  punchIn,
  punchOut,
  getMyAttendanceRecords,
  getMyPayslips,
  downloadPayslipPdf,
  applyLeave,
  getMyLeaves,
  getLeaveBalance,
  getEmployeeProfile,
};
