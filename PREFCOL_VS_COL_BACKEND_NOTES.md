# prefcol-svc vs col-backend-svc — Comparison Notes

## 1. Role & Stack

| | **prefcol-svc** | **col-backend-svc-dev-codecorrection** |
|---|---|---|
| **Role** | Frontend (web app) | Backend API service |
| **Name / branding** | prefcol (Prefcol Edutech) | Chamber of Learning (COL) |
| **Tech** | React 18, Vite, JSX | Java 17, Spring Boot 3.3.x |
| **Build** | `npm run build` (Vite) | Maven (`pom.xml`), JAR + Lambda deployment |
| **Deploy** | Static (e.g. `gh-pages`, S3/CloudFront) | AWS Lambda + API Gateway (SAM `template.yml`) |

---

## 2. What Each Repo Does

### prefcol-svc (frontend)
- **Public site**: Home, Courses (IT / Non-IT), About, Contact, Careers, Enrollment, policies (Privacy, Refund, etc.).
- **Student portal**: Dashboard, courses, video player, quizzes, certificates, payments, support, profile, referrals, etc.
- **Admin panels**:
  - **Master admin**: User management (students, teachers, employees), enquiries, layout/sidebar.
  - **Teacher admin**: Dashboard, batches, classes, video management, assignments, employee portal (attendance, leave, payslips), Smart Institute (analytics, fees, tests).
- **Stack**: Chakra UI, MUI, Tailwind, React Router, Axios, React Query, Framer Motion, Monaco (Live Code), Razorpay, Recharts, etc.
- **API usage**: Calls backend via `VITE_API_URL` or fallback `https://api.chamberoflearning.com/v1`; teacher APIs under `/api/teacher/`, progress/certificates under `/api/progress/`, `/api/certificates/generate`.

### col-backend-svc (backend)
- **Public / website APIs** (`/api/v1`): Registration, login, forgot password, OTP, contact us, career applications, enroll now, courses (list, preview, enrolled).
- **Student APIs** (`/api/students`): Get courses by email.
- **Portal APIs** (in code but same app):
  - **Admin** (`/api/admin`): Auth, users, teacher applications, courses/videos, fees, payments, analytics, enquiries.
  - **Teacher** (`/api/teacher`): Auth, dashboard, batches, classes, attendance, assessments, videos, analytics, fees.
  - **Student** (`/api/student`): Auth, dashboard, courses, content, classes, assignments, tests, performance, certificates, payments, support tickets.
  - **User management** (flat): `/api/students`, `/api/teachers`, `/api/employees` (CRUD).
- **Infra**: DynamoDB, S3 (resumes), AWS SES (email). Optional: JWT (jjwt), Gson, captcha. Health: `/health`.

---

## 3. How They Relate

- **prefcol-svc** is the UI for both “Prefcol” and “Chamber of Learning” (same product/brand family).
- **col-backend-svc** is the backend for that product: website + student/teacher/admin portals.
- Frontend expects base URL like `https://api.chamberoflearning.com/v1` (or `VITE_API_URL`); backend exposes `/api/v1`, `/api/student`, `/api/teacher`, `/api/admin`, etc., so they are designed to work together.

---

## 4. API Alignment (high level)

- **Implemented and used**: Registration, login, OTP, contact, career, enroll, courses, student courses by email — backend has these; frontend uses them or is set up to use them.
- **Portal APIs**: Backend has full route sets for admin/teacher/student (auth, dashboard, batches, classes, assessments, videos, payments, analytics, etc.). Frontend has matching UIs and some API modules (e.g. `teacherApi.js` calling `/api/teacher/*`). Not every frontend button may call the backend yet (e.g. some mock data).
- **Gaps / not in backend**: e.g. `/api/progress/`, `/api/certificates/generate` are referenced in frontend (VideoPlayer) but not present in the backend controllers found — may be in another service or planned.

---

## 5. Repo / Deployment Differences

| Aspect | prefcol-svc | col-backend-svc |
|--------|-------------|------------------|
| **Git** | Git repo at prefcol-svc | Part of same workspace; backend is separate app (col-website-svc) |
| **Run locally** | `npm run dev` (Vite) | Spring Boot on port 8082 (`server.port: 8082`) |
| **Production** | Static hosting (e.g. gh-pages) | Lambda + API Gateway (Java 21 in `template.yml`) |
| **Config** | `import.meta.env.VITE_*` | `application.yml` (and env for Lambda) |

---

## 6. Security / Config Note

- **col-backend** `application.yml` contains hardcoded AWS `accessKey` and `secretKey`. These should be moved to environment variables or a secrets manager (especially if the repo is shared or in source control).

---

## 7. Summary Table

| | prefcol-svc | col-backend-svc |
|--|-------------|-----------------|
| **Type** | React SPA (frontend) | Spring Boot REST API (backend) |
| **Brand** | Prefcol / Chamber of Learning | Chamber of Learning backend |
| **Purpose** | Website + Student + Admin + Teacher UIs | Auth, courses, enrollment, portals (admin/teacher/student), storage, email |
| **Deploy** | Static (Vite build) | AWS Lambda (SAM) |
| **Connection** | Calls COL backend via `VITE_API_URL` or chamberoflearning.com | Serves prefcol-svc and other clients |

Use **prefcol-svc** for all UI work; use **col-backend-svc** for APIs, data, and business logic. Keep `VITE_API_URL` (or equivalent) pointing at the deployed col-backend base URL (e.g. API Gateway URL for the Lambda).
