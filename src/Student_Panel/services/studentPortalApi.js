/**
 * Student Portal API – connect handlers to backend or file storage.
 * Uses api.js (paymentsAPI, resourcesAPI, sessionsAPI, webinarsAPI, resumeAPI).
 * On failure or 404, callbacks can fall back to local/mock behavior.
 */

import {
  paymentsAPI,
  resourcesAPI,
  sessionsAPI,
  webinarsAPI,
  resumeAPI,
} from "./api";

const noop = () => Promise.resolve({ data: null });

/** Payment proofs: list, verify (get by id), download */
export async function fetchPaymentProofs() {
  try {
    const res = await paymentsAPI.getPaymentProofs();
    return res?.data ?? null;
  } catch (e) {
    if (e?.response?.status === 404 || !e?.response) return null;
    throw e;
  }
}

export async function downloadPaymentProofFile(proofId, fileName = "payment-proof") {
  try {
    const res = await paymentsAPI.downloadPaymentProof(proofId);
    const blob = res?.data;
    if (!blob) return false;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/** Invoices: list, download PDF */
export async function fetchInvoices() {
  try {
    const res = await paymentsAPI.getInvoices();
    return res?.data ?? null;
  } catch (e) {
    if (e?.response?.status === 404 || !e?.response) return null;
    throw e;
  }
}

export async function downloadInvoiceFile(invoiceId, fileName = "invoice") {
  try {
    const res = await paymentsAPI.downloadInvoice(invoiceId);
    const blob = res?.data;
    if (!blob) return false;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/** Resources: download (blob) */
export async function downloadResourceFile(resourceId, fileName = "resource") {
  try {
    const res = await resourcesAPI.downloadResource(resourceId);
    const blob = res?.data;
    if (!blob) return false;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/** Sessions: join, get recording URL, get notes URL */
export async function joinSession(sessionId) {
  try {
    await sessionsAPI.joinSession(sessionId);
    return true;
  } catch (e) {
    return false;
  }
}

export async function getSessionRecordingUrl(sessionId) {
  try {
    const res = await sessionsAPI.getRecordingUrl(sessionId);
    return res?.data?.url ?? null;
  } catch (e) {
    return null;
  }
}

export async function getSessionNotesUrl(sessionId) {
  try {
    const res = await sessionsAPI.getNotesUrl(sessionId);
    return res?.data?.url ?? null;
  } catch (e) {
    return null;
  }
}

/** Webinars: set reminder, get recording URL */
export async function setWebinarReminder(webinarId) {
  try {
    await webinarsAPI.setReminder(webinarId);
    return true;
  } catch (e) {
    return false;
  }
}

export async function getWebinarRecordingUrl(webinarId) {
  try {
    const res = await webinarsAPI.getRecordingUrl(webinarId);
    return res?.data?.url ?? null;
  } catch (e) {
    return null;
  }
}

/** Resume: upload, download */
export async function uploadResumeFile(formData) {
  try {
    const res = await resumeAPI.uploadResume(formData);
    return res?.data ?? null;
  } catch (e) {
    throw e;
  }
}

export async function downloadResumeFile(fileName = "my-resume.pdf") {
  try {
    const res = await resumeAPI.downloadResume();
    const blob = res?.data;
    if (!blob) return false;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (e) {
    return false;
  }
}

export default {
  fetchPaymentProofs,
  downloadPaymentProofFile,
  fetchInvoices,
  downloadInvoiceFile,
  downloadResourceFile,
  joinSession,
  getSessionRecordingUrl,
  getSessionNotesUrl,
  setWebinarReminder,
  getWebinarRecordingUrl,
  uploadResumeFile,
  downloadResumeFile,
};
