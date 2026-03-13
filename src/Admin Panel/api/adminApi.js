/**
 * Admin panel API client for prefcol-admin-api (Spring Boot).
 * Base URL: use relative /api in dev (Vite proxy to 8081) or VITE_ADMIN_API_URL in prod.
 */
const getBaseUrl = () => {
  const env = import.meta.env?.VITE_ADMIN_API_URL;
  if (env) return env.replace(/\/$/, "");
  return "";
};

const api = (path, options = {}) => {
  const url = `${getBaseUrl()}${path}`;
  return fetch(url, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  }).then(async (res) => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || `HTTP ${res.status}`);
    }
    if (res.status === 204) return null;
    return res.json();
  });
};

// Simple localStorage-backed mock store for dev when no admin API is configured
const isMockAdminApi = !getBaseUrl();

const mockCreate = (key, body) => {
  if (typeof window === "undefined") return Promise.resolve({ id: Date.now(), ...body });
  const raw = window.localStorage.getItem(key);
  const list = raw ? JSON.parse(raw) : [];
  const created = { id: Date.now(), ...body };
  window.localStorage.setItem(key, JSON.stringify([...list, created]));
  return Promise.resolve(created);
};

const mockReadAll = (key) => {
  if (typeof window === "undefined") return Promise.resolve([]);
  const raw = window.localStorage.getItem(key);
  return Promise.resolve(raw ? JSON.parse(raw) : []);
};

// Enquiries (student apply / enrolment)
export const getEnquiries = () => api("/api/enquiries");
export const getEnquiryById = (id) => api(`/api/enquiries/${id}`);
export const createEnquiry = (body) =>
  api("/api/enquiries", { method: "POST", body: JSON.stringify(body) });
export const updateEnquiryStatus = (id, status) =>
  api(`/api/enquiries/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });

// Students
export const getStudents = () => api("/api/students");
export const getStudentById = (id) => api(`/api/students/${id}`);
export const createStudent = (body) =>
  api("/api/students", { method: "POST", body: JSON.stringify(body) });
export const updateStudent = (id, body) =>
  api(`/api/students/${id}`, { method: "PUT", body: JSON.stringify(body) });
export const deleteStudent = (id) =>
  api(`/api/students/${id}`, { method: "DELETE" });

// Teachers
export const getTeachers = () => {
  if (isMockAdminApi) {
    return mockReadAll("mock_admin_teachers");
  }
  return api("/api/teachers");
};
export const getTeacherById = (id) => api(`/api/teachers/${id}`);
export const createTeacher = (body) => {
  if (isMockAdminApi) {
    return mockCreate("mock_admin_teachers", body);
  }
  return api("/api/teachers", { method: "POST", body: JSON.stringify(body) });
};
export const updateTeacher = (id, body) =>
  api(`/api/teachers/${id}`, { method: "PUT", body: JSON.stringify(body) });
export const deleteTeacher = (id) =>
  api(`/api/teachers/${id}`, { method: "DELETE" });

// Employees
export const getEmployees = () => {
  if (isMockAdminApi) {
    return mockReadAll("mock_admin_employees");
  }
  return api("/api/employees");
};
export const getEmployeeById = (id) => api(`/api/employees/${id}`);
export const createEmployee = (body) => {
  if (isMockAdminApi) {
    // No backend configured; store in localStorage so Admin + Teacher UIs can still work in dev
    return mockCreate("mock_admin_employees", body);
  }
  return api("/api/employees", { method: "POST", body: JSON.stringify(body) });
};
export const updateEmployee = (id, body) =>
  api(`/api/employees/${id}`, { method: "PUT", body: JSON.stringify(body) });
export const deleteEmployee = (id) => {
  if (isMockAdminApi) {
    return mockDeleteBy(
      "mock_admin_employees",
      (e) => e.id === id || e.code === id || e.employeeCode === id
    );
  }
  return api(`/api/employees/${id}`, { method: "DELETE" });
};

// Payroll / Payslips
export const sendPayslipEmail = (body) => {
  if (isMockAdminApi) {
    // Mock success in dev without hitting backend
    return Promise.resolve();
  }
  return api("/api/payslip/send-email", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const adminHealth = () => api("/api/health");
