// import { message } from "antd"
// import { jsPDF } from "jspdf"

// export const generateCertificate = ({ studentName, courseName, completionDate, instructorName }) => {
//   try {
//     // Create a new PDF document
//     const doc = new jsPDF({
//       orientation: "landscape",
//       unit: "mm",
//       format: "a4",
//     })

//     // Set background color
//     doc.setFillColor(240, 240, 240)
//     doc.rect(0, 0, 297, 210, "F")

//     // Add border
//     doc.setDrawColor(0, 102, 204)
//     doc.setLineWidth(5)
//     doc.rect(10, 10, 277, 190)

//     // Add header
//     doc.setFont("helvetica", "bold")
//     doc.setTextColor(0, 102, 204)
//     doc.setFontSize(40)
//     doc.text("CERTIFICATE OF COMPLETION", 148.5, 40, { align: "center" })

//     // Add logo placeholder
//     doc.setDrawColor(0, 102, 204)
//     doc.setLineWidth(1)
//     doc.setFillColor(255, 255, 255)
//     doc.roundedRect(124, 50, 50, 50, 3, 3, "FD")
//     doc.setFontSize(12)
//     doc.text("COL", 148.5, 75, { align: "center" })
//     doc.text("Chamber of Learning", 148.5, 85, { align: "center" })

//     // Add certificate text
//     doc.setFont("helvetica", "normal")
//     doc.setTextColor(68, 68, 68)
//     doc.setFontSize(16)
//     doc.text("This is to certify that", 148.5, 115, { align: "center" })

//     // Add student name
//     doc.setFont("helvetica", "bold")
//     doc.setTextColor(0, 0, 0)
//     doc.setFontSize(24)
//     doc.text(studentName, 148.5, 130, { align: "center" })

//     // Add course completion text
//     doc.setFont("helvetica", "normal")
//     doc.setTextColor(68, 68, 68)
//     doc.setFontSize(16)
//     doc.text("has successfully completed the course", 148.5, 145, { align: "center" })

//     // Add course name
//     doc.setFont("helvetica", "bold")
//     doc.setTextColor(0, 102, 204)
//     doc.setFontSize(20)
//     doc.text(courseName, 148.5, 160, { align: "center" })

//     // Add completion date
//     doc.setFont("helvetica", "normal")
//     doc.setTextColor(68, 68, 68)
//     doc.setFontSize(14)
//     doc.text(`Completion Date: ${completionDate}`, 148.5, 175, { align: "center" })

//     // Add instructor signature
//     doc.setFont("helvetica", "italic")
//     doc.setFontSize(12)
//     doc.text(`Instructor: ${instructorName}`, 75, 185)

//     // Add certificate ID
//     const certificateId = `COL-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
//     doc.text(`Certificate ID: ${certificateId}`, 220, 185)

//     // Save the PDF
//     doc.save(`${studentName.replace(/\s+/g, "_")}_${courseName.replace(/\s+/g, "_")}_Certificate.pdf`)

//     return true
//   } catch (error) {
//     console.error("Error generating certificate:", error)
//     message.error("Failed to generate certificate")
//     return false
//   }
// }

import { message } from "antd"
import { jsPDF } from "jspdf"

export const generateCertificate = ({ studentName, courseName, completionDate, instructorName }) => {
  try {
    // Create a new PDF document
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    })

    // Set background color
    doc.setFillColor(240, 240, 240)
    doc.rect(0, 0, 297, 210, "F")

    // Add border
    doc.setDrawColor(0, 102, 204)
    doc.setLineWidth(5)
    doc.rect(10, 10, 277, 190)

    // Add header
    doc.setFont("helvetica", "bold")
    doc.setTextColor(0, 102, 204)
    doc.setFontSize(40)
    doc.text("CERTIFICATE OF COMPLETION", 148.5, 40, { align: "center" })

    // Add logo placeholder
    doc.setDrawColor(0, 102, 204)
    doc.setLineWidth(1)
    doc.setFillColor(255, 255, 255)
    doc.roundedRect(124, 50, 50, 50, 3, 3, "FD")
    doc.setFontSize(12)
    doc.text("COL", 148.5, 75, { align: "center" })
    doc.text("Prefcol Edutech Solutions", 148.5, 85, { align: "center" })

    // Add certificate text
    doc.setFont("helvetica", "normal")
    doc.setTextColor(68, 68, 68)
    doc.setFontSize(16)
    doc.text("This is to certify that", 148.5, 115, { align: "center" })

    // Add student name
    doc.setFont("helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(24)
    doc.text(studentName, 148.5, 130, { align: "center" })

    // Add course completion text
    doc.setFont("helvetica", "normal")
    doc.setTextColor(68, 68, 68)
    doc.setFontSize(16)
    doc.text("has successfully completed the course", 148.5, 145, { align: "center" })

    // Add course name
    doc.setFont("helvetica", "bold")
    doc.setTextColor(0, 102, 204)
    doc.setFontSize(20)
    doc.text(courseName, 148.5, 160, { align: "center" })

    // Add completion date
    doc.setFont("helvetica", "normal")
    doc.setTextColor(68, 68, 68)
    doc.setFontSize(14)
    doc.text(`Completion Date: ${completionDate}`, 148.5, 175, { align: "center" })

    // Add instructor signature
    doc.setFont("helvetica", "italic")
    doc.setFontSize(12)
    doc.text(`Instructor: ${instructorName}`, 75, 185)

    // Add certificate ID
    const certificateId = `COL-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
    doc.text(`Certificate ID: ${certificateId}`, 220, 185)

    // Save the PDF
    doc.save(`${studentName.replace(/\s+/g, "_")}_${courseName.replace(/\s+/g, "_")}_Certificate.pdf`)

    return true
  } catch (error) {
    console.error("Error generating certificate:", error)
    message.error("Failed to generate certificate")
    return false
  }
}

