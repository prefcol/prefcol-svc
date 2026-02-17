
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactInfo(props) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-10 h-10 bg-teal-800  rounded-full flex items-center justify-center flex-shrink-0">
        {React.cloneElement(props.icon, { className: "w-5 h-5 text-white" })}
      </div>
      <div>
        <p className="font-medium">{props.title}</p>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      errors: {},
    };
  }

  validateForm = () => {
    const errors = {};
    if (!this.state.firstName.trim())
      errors.firstName = "First name is required";
    if (!this.state.lastName.trim()) errors.lastName = "Last name is required";
    if (!this.state.phone.trim()) errors.phone = "Phone number is required";
    if (!this.state.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(this.state.email))
      errors.email = "Email is invalid";
    if (this.state.message.trim().split(/\s+/).length < 500)
      errors.message = "Message must be at least 500 words";
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log("Form submitted:", this.state);
      // Here you would typically send the form data to your backend
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePhoneChange = (phone) => {
    this.setState({ phone });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="bg-teal-700  text-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get In Touch!</h2>
        <form onSubmit={this.handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                className="w-full bg-transparent border border-gray-200 rounded p-2 placeholder-gray-300 text-sm sm:text-base"
              />
              {errors.firstName && (
                <p className="text-red-300 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                className="w-full bg-transparent border border-gray-200 rounded p-2 placeholder-gray-300 text-sm sm:text-base"
              />
              {errors.lastName && (
                <p className="text-red-300 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <PhoneInput
              country={"in"}
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              inputStyle={{
                width: "100%",
                height: "40px",
                fontSize: "14px",
                backgroundColor: "transparent",
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "0.25rem",
                color: "white",
              }}
              dropdownStyle={{
                width: "200px",
                color: "black",
              }}
              buttonStyle={{
                backgroundColor: "transparent",
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "0.25rem 0 0 0.25rem",
              }}
            />
            {errors.phone && (
              <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="w-full bg-transparent border border-gray-200 rounded p-2 placeholder-gray-300 text-sm sm:text-base"
            />
            {errors.email && (
              <p className="text-red-300 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message (minimum 500 words)"
              value={this.state.message}
              onChange={this.handleInputChange}
              className="w-full bg-transparent border border-gray-200 rounded p-2 placeholder-gray-300 min-h-[200px] text-sm sm:text-base"
            ></textarea>
            {errors.message && (
              <p className="text-red-300 text-xs mt-1">{errors.message}</p>
            )}
            <p className="text-xs mt-1">
              Word count: {this.state.message.trim().split(/\s+/).length}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-teal-800 py-2 rounded-full text-sm sm:text-base"
          >
            Submit Message
          </button>
        </form>
      </div>
    );
  }
}

function SocialButton({icon, href}) {
  return (
    <a href={href}
    target="_blank">
    <button className="p-2 sm:p-3 bg-teal-900 border border-gray-300 rounded-full hover:bg-teal-600 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-110">
      {React.cloneElement(icon, { className: "w-5 h-5 sm:w-9 sm:h-9 text-white transform transition-transform duration-300 hover:scale-110" })}
    </button>
    </a>
  );
}

function Newsletter() {
  return (
<>

{/* <div className="mt-8 sm:mt-12 md:mt-16 bg-teal-700 text-white p-4 sm:p-6 md:p-8 rounded-xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Our Newsletters
          </h2>
          <p className="text-gray-200 text-sm sm:text-base">
            Stay updated with our latest news and offers. Subscribe to our
            newsletter today!
          </p>
        </div>
        <div className="flex w-full sm:w-auto space-x-2">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow sm:flex-grow-0 bg-white text-gray-800 p-2 rounded text-sm"
          />
          <button className="bg-white text-teal-800 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div> */}


<div className="mt-8 sm:mt-12 md:mt-16 bg-teal-700 text-white p-4 sm:p-6 md:p-8 rounded-xl">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
    {/* Text Section */}
    <div className="text-center sm:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        Our Newsletters
      </h2>
      <p className="text-gray-200 text-sm sm:text-base">
        Stay updated with our latest news and offers. Subscribe to our
        newsletter today!
      </p>
    </div>
    {/* Form Section */}
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2 sm:gap-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full sm:flex-grow bg-white text-gray-800 px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <button className="bg-white text-teal-800 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
        Subscribe
      </button>
    </div>
  </div>
</div>


</>
  );
}

class ContactPage extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-white ">
        {/* Hero Section */}
        <div className="bg-teal-800  text-white p-6 sm:p-12 md:p-24 rounded-b-3xl">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Welcome to Prefcol!
            </h1>
            <p className="text-gray-200 max-w-xl text-sm sm:text-base">
              Get in touch with PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED.
              We're here to assist you with any inquiries or support you may
              need.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-6xl py-8 sm:py-12 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600  mb-6 text-sm sm:text-base">
                  Feel free to reach out to us using the following contact
                  details. We're always ready to help!
                </p>

                <div className="space-y-4">
                  <ContactInfo
                    icon={<FaPhone />}
                    color="red"
                    title="Contact Number"
                    description={
                      <a href="tel:+919445918818">+91 944-591-8818</a>
                    }
                  />
                  <ContactInfo
                    icon={<FaEnvelope />}
                    title="Email"
                    description={
                      <a href="mailto:info@prefcol.com">
                        info@prefcol.com
                      </a>
                    }
                  />
                  <ContactInfo
                    icon={<FaMapMarkerAlt />}
                    title="Address"
                    color="black"
                    description={
                      <React.Fragment>
                        PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED
                        <br />
                        Olympia Technology Park
                        <br />
                        Level 5, Fortius Tower, Olympia Tech Park,
                        <br />
                        Plot No.1 SIDCO Industrial Estate, Guindy,
                        <br />
                        Chennai, Tamil Nadu, 600032, India
                      </React.Fragment>
                    }
                  />
                   <ContactInfo
                    icon={<FaGlobe />}
                    title="Website"
                    description={
                      <a href="https://www.chamberoflearning.com" className="underline">
                        www.chamberoflearning.com
                      </a>
                    }
                  />
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Right Column */}
            <div className="space-y-8 shadow-xl rounded-lg p-4 bg-white  md:max-h-[850px]">
              <div className="relative h-[300px] sm:h-[500px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3220200827564!2d80.20131067463313!3d13.015153891767103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671455555557%3A0xc132a69138b8fdf6!2sOlympia%20Technology%20Park!5e0!3m2!1sen!2sin!4v1736798581566!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
              {/* Location Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Our Location
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  We are located in the heart of Chennai's technology hub. Our
                  office is easily accessible and equipped with modern
                  facilities to serve you better.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Connect With Us
                </h2>
                <div className="flex flex-wrap gap-4">
                  <SocialButton icon={<FaFacebook />} href="https://www.facebook.com/share/1DQCBRzxdo/?mibextid=wwXIfr" />
                  <SocialButton icon={<FaInstagram />} href="https://www.instagram.com/prefcol_edutech_official?igsh=ZnFvaXdpdWs5ZHJ2"/>
                  <SocialButton icon={<FaYoutube />} href="https://www.youtube.com/@ChamberOfLearningOfficial" />
                  {/* <SocialButton icon={<FaGlobe />} href="https://www.prefcol.com"/> */}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          {/* <Newsletter /> */}
        </div>
      </div>
    );
  }
}

export default ContactPage;