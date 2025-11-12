

// src/contexts/GlobalStore.js
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { allCourses } from "../data/mockData";


// src/contexts/GlobalStore.js

const USER_ACTIVITY_KEY = "user_activity_v1";

const loadUserActivity = () => {
  try {
    const data = localStorage.getItem(USER_ACTIVITY_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.warn("Failed to load user activity from localStorage", e);
    return {};
  }
};

const saveUserActivity = (activity) => {
  try {
    localStorage.setItem(USER_ACTIVITY_KEY, JSON.stringify(activity));
  } catch (e) {
    console.warn("Failed to save user activity to localStorage", e);
  }
};
const GlobalContext = createContext();

// Map mock courses by their ID (should match "IT-101", etc.)
const mockCourseMap = new Map(allCourses.map(course => [course.id, course]));

function globalReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      const isWishlisted = state.wishlist.includes(action.courseId);
      return {
        ...state,
        wishlist: isWishlisted
          ? state.wishlist.filter(id => id !== action.courseId)
          : [...state.wishlist, action.courseId],
      };

    case "ENROLL_IN_COURSE":
      if (state.enrolledCourses.includes(action.courseId)) return state;
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.courseId],
        progress: {
          ...state.progress,
          [action.courseId]: {
            completedVideos: [],
            lastAccessed: new Date().toISOString(),
          },
        },
      };

    case "COMPLETE_VIDEO":
      const current = state.progress[action.courseId] || { completedVideos: [] };
      if (current.completedVideos.includes(action.videoId)) return state;
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.courseId]: {
            completedVideos: [...current.completedVideos, action.videoId],
            lastAccessed: new Date().toISOString(),
          },
        },
      };

    case "SUBMIT_ASSIGNMENT":
      const existing = state.assignments.find(a => a.id === action.assignmentId);
      if (existing && existing.status !== "pending") return state;
      const updatedAssignments = existing
        ? state.assignments.map(a =>
            a.id === action.assignmentId
              ? { ...a, status: "submitted", submittedAt: new Date().toISOString() }
              : a
          )
        : [
            ...state.assignments,
            {
              id: action.assignmentId,
              courseId: action.courseId,
              videoId: action.videoId,
              status: "submitted",
              submittedAt: new Date().toISOString(),
            },
          ];
      return { ...state, assignments: updatedAssignments };

    case "MARK_ASSIGNMENT_GRADED":
      return {
        ...state,
        assignments: state.assignments.map(a =>
          a.id === action.assignmentId
            ? { ...a, status: "graded", grade: action.grade, feedback: action.feedback }
            : a
        ),
      };

    case "ENQUIRE_COURSE":
      if (state.enquiries.some(e => e.courseId === action.courseId)) return state;
      return {
        ...state,
        enquiries: [
          ...state.enquiries,
          { courseId: action.courseId, enquiredAt: new Date().toISOString() }
        ],
      };

    case "REMOVE_ENQUIRY":
      return {
        ...state,
        enquiries: state.enquiries.filter(enq => enq.courseId !== action.courseId),
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(id => id !== action.courseId),
      };

    case "INITIALIZE_FROM_API":
      return {
        ...state,
        courses: action.payload.courses,
        enrolledCourses: action.payload.enrolledCourses,
        progress: action.payload.progress,
        loading: false,
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}

// const createInitialState = () => ({
//   courses: allCourses,
//   enrolledCourses: [],
//   progress: {},
//   wishlist: [],
//   enquiries: [],
//   assignments: [],
//   loading: true,
// });

const createInitialState = () => {
  const saved = loadUserActivity();

  return {
    courses: allCourses, // keep mock courses for now
    enrolledCourses: saved.enrolledCourses || [],
    progress: saved.progress || {},
    wishlist: saved.wishlist || [],
    enquiries: saved.enquiries || [],
    assignments: saved.assignments || [],
    loading: false,
    
  };
};

// ✅ Fixed URL (no trailing space)
const BASE_URL = "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1";

const fetchAllCourses = async () => {
  try {
    const [itResponse, nonItResponse] = await Promise.all([
      fetch(`${BASE_URL}/listOfCourses?typeOfCourse=IT`),
      fetch(`${BASE_URL}/listOfCourses?typeOfCourse=Non-IT`)
    ]);

    if (!itResponse.ok || !nonItResponse.ok) throw new Error("Course fetch failed");

    const itData = await itResponse.json();
    const nonItData = await nonItResponse.json();

    return [...(itData.courseEntity || []), ...(nonItData.courseEntity || [])];
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
};

const fetchEnrolledCourses = async (studentId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/student/enrolledCourses?studentId=${encodeURIComponent(studentId)}`
    );
    if (!response.ok) throw new Error("Enrolled courses fetch failed");
    const data = await response.json();
    return data.courseEntity || [];
  } catch (error) {
    console.error("Failed to fetch enrolled courses:", error);
    return [];
  }
};

export function GlobalProvider({ children, studentId }) {
  const [state, dispatch] = useReducer(globalReducer, createInitialState());

  // ✅ Auto-save user activity to localStorage
  useEffect(() => {
    const activityToSave = {
      wishlist: state.wishlist,
      enquiries: state.enquiries,
      assignments: state.assignments,
      enrolledCourses: state.enrolledCourses,
      progress: state.progress,
    };
    saveUserActivity(activityToSave);
  }, [state.wishlist, state.enquiries, state.assignments, state.enrolledCourses, state.progress]);

  useEffect(() => {
    if (!studentId) {
      dispatch({ type: "SET_LOADING", payload: false });
      return;
    }

    const initializeData = async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });

        // Fetch all courses
        const apiCourses = await fetchAllCourses();
        const mergedCourses = apiCourses.map(apiCourse => {
          const mock = mockCourseMap.get(apiCourse.courseId); // ✅ string ID match
          return {
            id: apiCourse.courseId, // "IT-101"
            title: apiCourse.courseName || "Untitled",
            category: apiCourse.typeOfCourse || "General",
            description: apiCourse.description || "",
            available: apiCourse.available === "true",
            price: mock?.price || 0,
            discountPrice: mock?.discountPrice || 0,
            thumbnail: mock?.thumbnail || "/default-course.jpg",
            instructor: mock?.instructor || "Instructor TBA",
            totalLessons: mock?.totalLessons || 0,
            totalDuration: mock?.totalDuration || 0,
            certificate: mock?.certificate || false,
            bestseller: mock?.bestseller || false,
            featured: mock?.featured || false,
            level: mock?.level || "Beginner",
            videos: mock?.videos || [],
            subcategory: mock?.subcategory || "",
            students: mock?.students || 0,
            rating: mock?.rating || 4.0,
            progress: mock?.progress || 0,
            syllabus: mock?.syllabus || [],
            assignments: mock?.assignments || [],
          };
        });

        // Fetch enrolled courses
        const enrolledApi = await fetchEnrolledCourses(studentId);
        const enrolledIds = enrolledApi.map(c => c.courseId); // ["IT-101"]

        // Initialize progress
        const progress = {};
        enrolledIds.forEach(id => {
          progress[id] = {
            completedVideos: [],
            lastAccessed: new Date().toISOString(),
          };
        });

        dispatch({
          type: "INITIALIZE_FROM_API",
          payload: { courses: mergedCourses, enrolledCourses: enrolledIds, progress },
        });
      } catch (error) {
        console.error("GlobalStore init failed:", error);
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    initializeData();
  }, [studentId]);

  return <GlobalContext.Provider value={{ ...state, dispatch }}>{children}</GlobalContext.Provider>;
}

export function useGlobalStore() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalStore must be used within GlobalProvider");
  }
  return context;
}