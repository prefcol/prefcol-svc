

import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

//  API endpoint
async function submitContactForm(formData) {
  try {
    const response = await fetch("https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mailId: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        mobileNumber: formData.phone,
        message: formData.message,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to submit form")
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        setIsSubmitting(true)
        // Submit form 
        const result = await submitContactForm(formData)

        setSubmitSuccess(true)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } catch (error) {
        setErrors({ form: error.message || "An error occurred. Please try again." })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({ ...prev, phone }))
  }

  return (
    <div className="bg-teal-900 text-white p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get In Touch!</h2>
      {submitSuccess && (
        <div className="bg-green-600 text-white p-3 rounded-lg mb-4">
          Thank you for contacting us. We will get back to you soon.
        </div>
      )}
      {errors.form && <div className="bg-red-600 text-white p-3 rounded-lg mb-4">{errors.form}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-200 rounded-2xl p-2 placeholder-gray-300 text-sm sm:text-base"
            />
            {errors.firstName && <p className="text-red-300 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-200 rounded-2xl p-2 placeholder-gray-300 text-sm sm:text-base"
            />
            {errors.lastName && <p className="text-red-300 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{
              width: "100%",
              height: "40px",
              fontSize: "14px",
              backgroundColor: "transparent",
              border: "1px solid rgb(255, 255, 255)",
              borderRadius: "1rem",
              color: "white",
            }}
            dropdownStyle={{
              width: "200px",
              color: "black",
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              border: "1px solid rgb(255, 255, 255)",
              borderRadius: "1rem 0 0 1rem",
            }}
          />
          {errors.phone && <p className="text-red-300 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-transparent border border-gray-200 rounded-2xl p-2 placeholder-gray-300 text-sm sm:text-base"
          />
          {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-transparent border border-gray-200 rounded-2xl p-2 placeholder-gray-300 min-h-[200px] text-sm sm:text-base overflow-hidden"
          ></textarea>
          {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-teal-800 py-2 rounded-full text-sm sm:text-base disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Message"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm

