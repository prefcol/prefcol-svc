import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GoogleRecaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [verificationMessage, setVerificationMessage] = useState("");

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify reCAPTCHA!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: captchaValue }),
      });

      const data = await response.json();
      if (data.success) {
        setVerificationMessage("✅ Captcha Verified! Form submitted successfully!");
      } else {
        setVerificationMessage("❌ Captcha Verification Failed! Please try again.");
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      setVerificationMessage("⚠️ Error verifying reCAPTCHA. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Google reCAPTCHA Demo</h2>
        <ReCAPTCHA
          sitekey="6LfCV5MrAAAAAFMAewmA0gz7YVXslW1Gd92ovv6a"
          onChange={handleRecaptchaChange}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
        {verificationMessage && (
          <p className="mt-4 text-center text-sm">{verificationMessage}</p>
        )}
      </form>
    </div>
  );
};

export default GoogleRecaptcha;
