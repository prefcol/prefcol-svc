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
import AnimatedMap from "./map";
import ContactForm from "./contactform";

function ContactInfo(props) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-10 h-10 bg-teal-900  rounded-full flex items-center justify-center flex-shrink-0">
        {React.cloneElement(props.icon, { className: "w-5 h-5 text-white" })}
      </div>
      <div>
        <p className="font-medium">{props.title}</p>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

function SocialButton({ icon, href }) {
  return (
    <a href={href} target="_blank">
      <button className="p-2 sm:p-3 bg-teal-900 border border-gray-300 rounded-full hover:bg-teal-600 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-110">
        {React.cloneElement(icon, {
          className:
            "w-5 h-5 sm:w-9 sm:h-9 text-white transform transition-transform duration-300 hover:scale-110",
        })}
      </button>
    </a>
  );
}

class ContactPage extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-white ">
        {/* Hero Section */}
        {/* <div className="bg-teal-900  text-white p-6 sm:p-12 md:p-24 mt-12 rounded-b-3xl">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-gray-200 max-w-xl text-sm sm:text-base">
              Get in touch with PREFCOL EDUTECH SOLUTIONS (OPC) PRIVATE LIMITED.
              We're here to assist you with any inquiries or support you may
              need.
            </p>
          </div>
        </div> */}
        <div className="bg-teal-900 text-white px-4 py-8 sm:px-12 sm:py-12 md:px-24 md:py-24 mt-12 rounded-b-3xl">
          <div className="container mx-auto max-w-6xl text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-gray-200 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
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
                      <a href="https://prefcol.com/" className="underline">
                        www.prefcol.com
                      </a>
                    }
                  />
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Right Column */}
            <div className="space-y-8 shadow-md  rounded-3xl p-4 bg-white  md:max-h-[1100px]">
              {/* map section as shown  */}
              <div className="bg-gray-200 p-3 rounded-xl">
                {" "}
                <AnimatedMap />
              </div>

              {/* /* Location Section */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mt-24">
                  Our Location
                </h2>
                <p className="text-gray-600 mt-6 text-sm sm:text-base">
                  We are located in the heart of Chennai's technology hub. Our
                  office is easily accessible and equipped with modern
                  facilities to serve you better.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-2xl text-center sm:text-3xl font-bold mb-8">
                  Connect With Us
                </h2>
                <div className="flex justify-center item-center flex-wrap gap-4">
                  <SocialButton
                    icon={<FaFacebook />}
                    href="https://www.facebook.com/share/1DQCBRzxdo/?mibextid=wwXIfr"
                  />
                  <SocialButton
                    icon={<FaInstagram />}
                    href="https://www.instagram.com/chamber_of_learning?igsh=ZnFvaXdpdWs5ZHJ2"
                  />
                  <SocialButton
                    icon={<FaYoutube />}
                    href="https://www.youtube.com/@ChamberOfLearningOfficial"
                  />
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
