/**
 * Teacher Panel API – Spring Boot backend.
 * Uses same auth token as employee portal (auth_token or authToken).
 */

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
  const url = `${path.startsWith("http") ? "" : ""}${path}`;
  const opts = { method, headers: getAuthHeaders() };
  if (body && method !== "GET") opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(res.statusText || "Request failed");
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export async function getTeacherDashboard() {
  return request("GET", "/api/teacher/dashboard");
}

// ——— Classes ———
export async function getMyClasses() {
  return request("GET", "/api/teacher/classes");
}
export async function getClassById(id) {
  return request("GET", `/api/teacher/classes/${id}`);
}
export async function createClass(body) {
  return request("POST", "/api/teacher/classes", body);
}
export async function updateClass(id, body) {
  return request("PUT", `/api/teacher/classes/${id}`, body);
}
export async function deleteClass(id) {
  const res = await fetch(`/api/teacher/classes/${id}`, { method: "DELETE", headers: getAuthHeaders() });
  if (!res.ok) throw new Error(res.statusText || "Delete failed");
}

// ——— Students (assigned to me) ———
export async function getMyStudents() {
  return request("GET", "/api/teacher/students");
}

// ——— Assignments ———
export async function getMyAssignments() {
  return request("GET", "/api/teacher/assignments");
}
export async function getAssignmentById(id) {
  return request("GET", `/api/teacher/assignments/${id}`);
}
export async function createAssignment(body) {
  return request("POST", "/api/teacher/assignments", body);
}
export async function updateAssignment(id, body) {
  return request("PUT", `/api/teacher/assignments/${id}`, body);
}
export async function deleteAssignment(id) {
  const res = await fetch(`/api/teacher/assignments/${id}`, { method: "DELETE", headers: getAuthHeaders() });
  if (!res.ok) throw new Error(res.statusText || "Delete failed");
}

// ——— Placement tasks ———
export async function getMyPlacementTasks() {
  return request("GET", "/api/teacher/placement-tasks");
}
export async function getPlacementTaskById(id) {
  return request("GET", `/api/teacher/placement-tasks/${id}`);
}
export async function createPlacementTask(body) {
  return request("POST", "/api/teacher/placement-tasks", body);
}
export async function updatePlacementTask(id, body) {
  return request("PUT", `/api/teacher/placement-tasks/${id}`, body);
}
export async function deletePlacementTask(id) {
  const res = await fetch(`/api/teacher/placement-tasks/${id}`, { method: "DELETE", headers: getAuthHeaders() });
  if (!res.ok) throw new Error(res.statusText || "Delete failed");
}

export default {
  getTeacherDashboard,
  getMyClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
  getMyStudents,
  getMyAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment,
  getMyPlacementTasks,
  getPlacementTaskById,
  createPlacementTask,
  updatePlacementTask,
  deletePlacementTask,
};
