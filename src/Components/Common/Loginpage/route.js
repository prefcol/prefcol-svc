// import { NextResponse } from "next/server"
// import { verifyRecaptchaToken } from "../../recaptcha-service"

// export async function POST(request) {
//   try {
//     const { token } = await request.json()

//     if (!token) {
//       return NextResponse.json({ success: false, message: "reCAPTCHA token is required" }, { status: 400 })
//     }

//     const isValid = await verifyRecaptchaToken(token)

//     if (!isValid) {
//       return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" }, { status: 400 })
//     }

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Error verifying reCAPTCHA:", error)
//     return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
//   }
// }

