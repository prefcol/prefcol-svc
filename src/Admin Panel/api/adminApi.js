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
export const getTeachers = () => api("/api/teachers");
export const getTeacherById = (id) => api(`/api/teachers/${id}`);
export const createTeacher = (body) =>
  api("/api/teachers", { method: "POST", body: JSON.stringify(body) });
export const updateTeacher = (id, body) =>
  api(`/api/teachers/${id}`, { method: "PUT", body: JSON.stringify(body) });
export const deleteTeacher = (id) =>
  api(`/api/teachers/${id}`, { method: "DELETE" });

// Employees
export const getEmployees = () => api("/api/employees");
export const getEmployeeById = (id) => api(`/api/employees/${id}`);
export const createEmployee = (body) =>
  api("/api/employees", { method: "POST", body: JSON.stringify(body) });
export const updateEmployee = (id, body) =>
  api(`/api/employees/${id}`, { method: "PUT", body: JSON.stringify(body) });
export const deleteEmployee = (id) =>
  api(`/api/employees/${id}`, { method: "DELETE" });

export const adminHealth = () => api("/api/health");
