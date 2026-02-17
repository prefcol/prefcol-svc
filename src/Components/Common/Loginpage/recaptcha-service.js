// Service to handle reCAPTCHA verification on the server side
export async function verifyRecaptchaToken(token) {
  try {
    const secretKey = (typeof import.meta !== "undefined" && import.meta.env?.VITE_RECAPTCHA_SECRET_KEY) || "6LfCV5MrAAAAAPMUAzfCxFW86_NpVqaXq-xgzNM4" // Default test secret key

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

