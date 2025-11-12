// src/services/courseService.js
const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1";

export const fetchAllCourses = async () => {
  const [itRes, nonItRes] = await Promise.all([
    fetch(`${BASE_URL}/listOfCourses?typeOfCourse=IT`),
    fetch(`${BASE_URL}/listOfCourses?typeOfCourse=Non-IT`)
  ]);
  const [itData, nonItData] = await Promise.all([itRes.json(), nonItRes.json()]);
  return [...(itData.courseEntity || []), ...(nonItData.courseEntity || [])];
};

export const fetchEnrolledCourses = async (studentId) => {
  const res = await fetch(`${BASE_URL}/student/enrolledCourses?studentId=${encodeURIComponent(studentId)}`);
  const data = await res.json();
  return data.courseEntity || [];
};