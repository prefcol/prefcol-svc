/**
 * Mock data for Employee Portal when backend is not connected.
 * Replace with real API responses when backend is ready.
 */

export const MOCK_EMPLOYEE = {
  empId: "EMP-2024-001",
  name: "John Doe",
  role: "Senior Teacher",
  department: "Mathematics",
  email: "john.doe@prefcol.com",
  joiningDate: "2022-06-01",
  workingStatus: "Working",
};

export const MOCK_ATTENDANCE_TODAY = {
  date: new Date().toISOString().split("T")[0],
  punchInTime: null,
  punchOutTime: null,
  totalHours: null,
  status: "Not punched in",
};

export const MOCK_ATTENDANCE_RECORDS = [
  {
    id: "1",
    date: "2025-02-07",
    inTime: "09:00",
    outTime: "18:00",
    totalHours: 9,
    status: "Present",
  },
  {
    id: "2",
    date: "2025-02-06",
    inTime: "09:15",
    outTime: "17:45",
    totalHours: 8.5,
    status: "Present",
  },
];

export const MOCK_ATTENDANCE_SUMMARY = {
  present: 18,
  absent: 1,
  leave: 1,
  month: "February",
  year: 2025,
};

export const MOCK_LEAVE_BALANCE = {
  casual: 8,
  sick: 6,
  paid: 12,
  total: 26,
};

export const MOCK_LEAVES = [
  {
    id: "1",
    leaveType: "Casual",
    fromDate: "2025-02-15",
    toDate: "2025-02-16",
    reason: "Personal work",
    status: "Approved",
    appliedOn: "2025-02-10",
  },
  {
    id: "2",
    leaveType: "Sick",
    fromDate: "2025-02-20",
    toDate: "2025-02-20",
    reason: "Medical",
    status: "Pending",
    appliedOn: "2025-02-12",
  },
];

export const MOCK_PAYSLIPS = [
  {
    id: "PS-2025-02",
    month: "February",
    year: 2025,
    basicSalary: 45000,
    allowances: 12000,
    deductions: 5500,
    netSalary: 51500,
    paidOn: "2025-02-01",
  },
  {
    id: "PS-2025-01",
    month: "January",
    year: 2025,
    basicSalary: 45000,
    allowances: 12000,
    deductions: 5500,
    netSalary: 51500,
    paidOn: "2025-01-01",
  },
];
