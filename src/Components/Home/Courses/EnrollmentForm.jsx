import React, { useState } from "react";
import { Form, Input, Select, Checkbox, Upload, Modal } from "antd";
import { Button as AntButton } from "antd";
import { Button as ChakraButton } from "@chakra-ui/react";
import { UploadOutlined } from "@ant-design/icons";
import { useAuth } from "../../../Contexts/AuthContext";
import { createEnquiry } from "../../../Admin Panel/api/adminApi";

const { Option } = Select;

const EnrollmentForm = () => {
  const [form] = Form.useForm();
  const [profession, setProfession] = useState("");
  const { user, setShowForm, setRedirect, isModalOpen, setIsModalOpen } = useAuth();

  const handleFormSubmit = async (values) => {
    const formData = new FormData();

    // Handle file upload
    const uploadedFile = values.resume?.[0]?.originFileObj || values.resume?.file?.originFileObj;
    if (!uploadedFile) {
      alert("Please upload a valid resume file.");
      return;
    }

    // Append resume
    formData.append("resume", uploadedFile);

    // Prepare content object
    const content = {
      firstName: values.firstName,
      lastName: values.lastName,
      mobileNumber: values.mobile,
      mailId: values.email,
      courses: Array.isArray(values.courses) ? values.courses.join(", ") : values.courses,
      profession: values.profession,
      yearOfPassedOut: values.passedOutYear,
      pursuingYear: values.pursuingYear,
      field: values.field,
      experience: values.experience,
      message: "Hi",
    };

    // Convert content object to JSON string
    const jsonContent = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });

    formData.append("content", jsonContent);

    // Send to admin panel backend so enquiry appears in Master Admin
    const enquiryPayload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobileNumber: values.mobile,
      courses: Array.isArray(values.courses) ? values.courses.join(", ") : values.courses,
      profession: values.profession,
      yearOfPassedOut: values.passedOutYear,
      pursuingYear: values.pursuingYear,
      field: values.field,
      experience: values.experience,
      message: "Enrollment / enquiry from site",
    };
    try {
      await createEnquiry(enquiryPayload);
    } catch (e) {
      console.warn("Admin enquiry sync failed:", e);
    }

    try {
      const response = await fetch(
        "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/enrollNow", 
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setIsModalOpen(false);
        form.resetFields();
        alert("✅ Enrollment submitted successfully!");
      } else {
        throw new Error(result.message || "❌ Failed to submit enrollment");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("🚨 Submission failed: " + error.message);
    }
  };

  const handleProfessionChange = (value) => {
    setProfession(value);
    form.setFieldsValue({
      passedOutYear: undefined,
      pursuingYear: undefined,
      field: undefined,
      experience: undefined,
    });
  };

  const handleEnroll = () => {
    if (user !== null) {
      setIsModalOpen(true);
    } else {
      setRedirect("/enroll");
      setShowForm(true);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ChakraButton bg="white" size={{ base: "sm", md: "md" }} onClick={handleEnroll}>
        Enroll Now
      </ChakraButton>

      {/* Custom Modal */}
      <Modal
        title="Enrollment Form"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
        style={{ top: 50 }}
        bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter your first name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[{ required: true, message: "Please enter your mobile number" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Courses"
            name="courses"
            rules={[{ required: true, message: "Please select at least one course" }]}
          >
            <Select mode="multiple" placeholder="Select your courses" optionLabelProp="label">
              {[
                "DevOps & Cloud",
                "Data science and machine learning",
                "Cybersecurity",
                "Business Analysis",
                "Product Management",
                "Python Automation",
                "Java Development",
                "Python Programming",
                "Manual Testing",
                "Java Automation",
                "API Testing",
                "Mobile Development",
                "Creative writing",
                "Digital Marketing",
                "Health Care Management",
                "Business law",
                "Environmental science",
                "Human Resources",
                "Basic Photography Syllabus",
                "Public speaking",
                "Theatre arts",
                "Sustainable Agriculture",
                "Culinary arts",
                "Graphic Design",
              ].map((course) => (
                <Option key={course} value={course} label={course}>
                  <Checkbox>{course}</Checkbox>
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Profession"
            name="profession"
            rules={[{ required: true, message: "Please select your profession" }]}
          >
            <Select onChange={handleProfessionChange}>
              <Option value="jobSeeker">Job Seeker</Option>
              <Option value="student">Student</Option>
              <Option value="professional">Professional</Option>
            </Select>
          </Form.Item>

          {profession === "jobSeeker" && (
            <Form.Item
              label="Passed Out Year"
              name="passedOutYear"
              rules={[{ required: true, message: "Please enter your passed out year" }]}
            >
              <Input />
            </Form.Item>
          )}

          {profession === "student" && (
            <Form.Item
              label="Pursuing Year"
              name="pursuingYear"
              rules={[{ required: true, message: "Please enter your pursuing year" }]}
            >
              <Input />
            </Form.Item>
          )}

          {profession === "professional" && (
            <>
              <Form.Item
                label="Field"
                name="field"
                rules={[{ required: true, message: "Please select your field" }]}
              >
                <Select>
                  <Option value="IT">IT</Option>
                  <Option value="Non-IT">Non-IT</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Years of Experience"
                name="experience"
                rules={[{ required: true, message: "Please enter your experience in years" }]}
              >
                <Input />
              </Form.Item>
            </>
          )}

          <Form.Item
            label="Upload Resume"
            name="resume"
            rules={[{ required: true, message: "Please upload your resume" }]}
            valuePropName="fileList"
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              listType="text"
              onChange={({ fileList }) => {
                form.setFieldsValue({ resume: fileList });
              }}
            >
              <AntButton icon={<UploadOutlined />}>Click to Upload</AntButton>
            </Upload>
          </Form.Item>

          <Form.Item>
            <AntButton
              type="primary"
              htmlType="submit"
              className="bg-teal-900 text-white px-4 py-2 rounded"
            >
              Submit
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EnrollmentForm;


// import React, { useState } from "react";
// import { Form, Input, Select, Checkbox, Upload,  Modal } from "antd";
// import { Button as AntButton } from "antd";
// import { Button as ChakraButton } from "@chakra-ui/react";
// import { UploadOutlined } from "@ant-design/icons";
// import { useAuth } from "../../../Contexts/AuthContext";

// const { Option } = Select;

// const EnrollmentForm = () => {
//   const [form] = Form.useForm();
//   const [profession, setProfession] = useState("");
//   // const [isModalOpen, setIsModalOpen] = useState(false);
//  const { user, setShowForm, setRedirect,isModalOpen, setIsModalOpen} = useAuth();
// //  const [preventNavigation, setPreventNavigation] = useState(false); 

// // const handleFormSubmit = async (values) => {
// //   const formData = new FormData();

// //   // Handle file upload
// //   const uploadedFile = values.resume?.[0];
// //   const file = uploadedFile?.originFileObj || uploadedFile?.file || uploadedFile;

// //   if (!file || !file.name) {
// //     alert("Please upload a valid resume file.");
// //     return;
// //   }

// //   formData.append("resume", file);

// //   // Convert array fields to strings if backend expects String
// //   const { resume: _, courses, ...otherFields } = values;

// //   const modifiedData = {
// //     ...otherFields,
// //     courses: Array.isArray(courses) ? courses.join(", ") : courses,
// //   };

// //   const jsonBlob = new Blob([JSON.stringify(modifiedData)], {
// //     type: "application/json",
// //   });

// //   formData.append("content", jsonBlob);

// //   try {
// //     const response = await fetch(
// //       "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/enrollNow ",
// //       {
// //         method: "POST",
// //         body: formData,
// //       }
// //     );

// //     const result = await response.json();

// //     if (response.ok) {
// //       setIsModalOpen(false);
// //       form.resetFields();
// //       alert("✅ Enrollment submitted successfully!");
// //     } else {
// //       throw new Error(result.message || "❌ Failed to submit enrollment");
// //     }
// //   } catch (error) {
// //     console.error("Submission error:", error);
// //     alert("🚨 Submission failed: " + error.message);
// //   }
// // };

// const handleFormSubmit = async (values) => {
//   const formData = new FormData();

//   // Handle file upload
//   const uploadedFile = values.resume?.[0];
//   const file = uploadedFile?.originFileObj || uploadedFile?.file || uploadedFile;

//   if (!file || !file.name) {
//     alert("Please upload a valid resume file.");
//     return;
//   }

//   formData.append("resume", file);

//   // Convert array fields to strings if backend expects String
//   const { resume: _, courses, ...otherFields } = values;

//   const modifiedData = {
//     ...otherFields,
//     courses: Array.isArray(courses) ? courses.join(", ") : courses,
//   };

//   const jsonBlob = new Blob([JSON.stringify(modifiedData)], {
//     type: "application/json",
//   });

//   formData.append("content", jsonBlob);

//   try {
//     const response = await fetch(
//       "https://y7ltnmncrd.execute-api.ap-south-1.amazonaws.com/Test/api/v1/enrollNow ",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const result = await response.json();

//     if (response.ok) {
//       setIsModalOpen(false);
//       form.resetFields();
//       alert("✅ Enrollment submitted successfully!");
//     } else {
//       throw new Error(result.message || "❌ Failed to submit enrollment");
//     }
//   } catch (error) {
//     console.error("Submission error:", error);
//     alert("🚨 Submission failed: " + error.message);
//   }
// };
// const handleProfessionChange = (value) => {
//     setProfession(value);
//     form.setFieldsValue({ passedOutYear: undefined, pursuingYear: undefined, field: undefined, experience: undefined });
//   };

//   // const handleEnroll = () => {
//   //   if (user!==null) {

//   //     setIsModalOpen(true);
//   //   } else {
      
//   //     setShowForm(true); 
//   //   }
//   // };

//   const handleEnroll = () => {
//     debugger
//     if (user !== null) {
//       setIsModalOpen(true);
//     } else {
//       setRedirect("/enroll");
//       setShowForm(true);
//       //setPreventNavigation(true); // Step 2: Block navigation for this case
//     }
//   };


//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* Button to open modal */}
//         <ChakraButton bg="white   "  size={{ base: "sm", md: "md" }} onClick={handleEnroll} >
//         Enroll Now
//       </ChakraButton>

//       {/* Custom Modal with width & height */}
//       <Modal
//         title="Enrollment Form"
//         open={isModalOpen}
//         onCancel={handleCancel}
//         footer={null}
//         width={600} // Customize width
//         style={{ top: 50 }} // Adjust position
//         bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }} // Limit height & enable scrolling
//       >
//         <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
//           <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please enter your first name" }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please enter your last name" }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true, message: "Please enter your mobile number" }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
//             <Input />
//           </Form.Item>

//           {/* <Form.Item label="Courses" name="courses" rules={[{ required: true, message: "Please select at least one course" }]}>
//             <Checkbox.Group options={["React", "Angular", "Vue", "Node.js"]} />
//           </Form.Item> */}

// <Form.Item
//   label="Courses"
//   name="courses"
//   rules={[{ required: true, message: "Please select at least one course" }]}
// >
//   <Select
//     mode="multiple"
//     placeholder="Select your courses"
//     optionLabelProp="label"
//   >
//     {["DevOps & Cloud", "Data science and mechine learning", "Cybersecurity", "Business Analysis", "Product Management", "Python Automation", "Java Development", "Python Programming", "Manual Testing", "Java Automation", "API Testing", "Mobile Development", "Creative writing", "Digital Marketing", "Health Care Management", "Business law", "Environmental science", "Human Resources", "Basic Photography Syllabus", "Public speaking", "Theatre arts", "Sustainable Agriculture", "Culinary arts", "Graphic Design"].map((course) => (
//       <Option key={course} value={course} label={course}>
//         <Checkbox>{course}</Checkbox>
//       </Option>
//     ))}
//   </Select>
// </Form.Item>

//           <Form.Item label="Profession" name="profession" rules={[{ required: true, message: "Please select your profession" }]}>
//             <Select onChange={handleProfessionChange}>
//               <Option value="jobSeeker">Job Seeker</Option>
//               <Option value="student">Student</Option>
//               <Option value="professional">Professional</Option>
//             </Select>
//           </Form.Item>

//           {profession === "jobSeeker" && (
//             <Form.Item label="Passed Out Year" name="passedOutYear" rules={[{ required: true, message: "Please enter your passed out year" }]}>
//               <Input />
//             </Form.Item>
//           )}

//           {profession === "student" && (
//             <Form.Item label="Pursuing Year" name="pursuingYear" rules={[{ required: true, message: "Please enter your pursuing year" }]}>
//               <Input />
//             </Form.Item>
//           )}

//           {profession === "professional" && (
//             <>
//               <Form.Item label="Field" name="field" rules={[{ required: true, message: "Please select your field" }]}>
//                 <Select>
//                   <Option value="IT">IT</Option>
//                   <Option value="Non-IT">Non-IT</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item label="Years of Experience" name="experience" rules={[{ required: true, message: "Please enter your experience in years" }]}>
//                 <Input />
//               </Form.Item>
//             </>
//           )}

//           {/* <Form.Item label="Upload Resume" name="resume" rules={[{ required: true, message: "Please upload your resume" }]}>
//             <Upload beforeUpload={() => false} // Prevent auto-upload
//     maxCount={1}
//     accept=".pdf,.doc,.docx" // optional: restrict file types
//     valuePropName="fileList"
//     listType="text"
//     onChange={({ fileList }) => {
//       console.log("Uploaded files:", fileList); // Debug
//     }}>
//               <AntButton icon={<UploadOutlined />}>Click to Upload</AntButton>
//             </Upload>
//           </Form.Item> */}
//           <Form.Item
//   label="Upload Resume"
//   name="resume"
//   rules={[{ required: true, message: "Please upload your resume" }]}
//   valuePropName="fileList" // 👈 Move here for clarity
// >
//   <Upload
//     beforeUpload={() => false} // Prevent auto-upload
//     maxCount={1}
//     listType="text"
//     onChange={({ fileList }) => {
//       form.setFieldsValue({ resume: fileList });
//       if (fileList.length > 0 && fileList[0].originFileObj) {
//         console.log("Uploaded file:", fileList[0].originFileObj.name);
//       }
//     }}
//   >
//     <AntButton icon={<UploadOutlined />}>Click to Upload</AntButton>
//   </Upload>
// </Form.Item>

//           <Form.Item >
//             <AntButton type="primary" htmlType="submit" className="bg-teal-900 text-white px-4 py-2 rounded">Submit</AntButton>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default EnrollmentForm;

//file and reamining code json blob

// const handleFormSubmit = async (values) => {
//   const formData = new FormData();

//   // 1. Extract the file (resume)
//   const file = values.resume?.[0]?.originFileObj;
//   if (file) {
//     formData.append("resume", file);
//   }

//   // 2. Prepare the rest of the data as a JSON object
//   const { resume, ...otherFields } = values;

//   // Convert to JSON string
//   const jsonBlob = new Blob([JSON.stringify(otherFields)], {
//     type: "application/json",
//   });

//   formData.append("data", jsonBlob);

//   try {
//     const response = await fetch("http://localhost:5000/submit-form", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     console.log("Upload success:", result);
//   } catch (error) {
//     console.error("Error submitting form:", error);
//   }
// };


//string and file
// for my reference
// <Form
//   form={form}
//   layout="vertical"
//   onFinish={handleFormSubmit}
// ></Form>
// const handleFormSubmit = async (values) => {
//   const formData = new FormData();

//   // Append text fields
//   for (const key in values) {
//     if (key !== 'resume') {
//       if (Array.isArray(values[key])) {
//         values[key].forEach((item) => formData.append(`${key}[]`, item));
//       } else {
//         formData.append(key, values[key]);
//       }
//     }
//   }

//   // Append the resume file
//   const file = values.resume?.[0]?.originFileObj;
//   if (file) {
//     formData.append("resume", file);
//   }

//   try {
//     const response = await fetch("http://localhost:5000/submit-form", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     console.log("Upload success:", result);
//   } catch (error) {
//     console.error("Error submitting form:", error);
//   }
// };


// import React, { useState } from "react";
// import { Form, Input, Select, Checkbox, Upload, Button } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

// const { Option } = Select;

// const EnrollmentForm = () => {
//   const [form] = Form.useForm();
//   const [profession, setProfession] = useState("");

//   const handleProfessionChange = (value) => {
//     setProfession(value);
//     form.setFieldsValue({ passedOutYear: undefined, pursuingYear: undefined, field: undefined, experience: undefined });
//   };

//   return (
//     <Form form={form} layout="vertical" className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
//       <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please enter your first name" }]}> 
//         <Input />
//       </Form.Item>
      
//       <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please enter your last name" }]}> 
//         <Input />
//       </Form.Item>
      
//       <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true, message: "Please enter your mobile number" }]}> 
//         <Input />
//       </Form.Item>
      
//       <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}> 
//         <Input />
//       </Form.Item>
      
//       <Form.Item label="Courses" name="courses" rules={[{ required: true, message: "Please select at least one course" }]}> 
//         <Checkbox.Group options={["React", "Angular", "Vue", "Node.js"]} />
//       </Form.Item>
      
//       <Form.Item label="Profession" name="profession" rules={[{ required: true, message: "Please select your profession" }]}> 
//         <Select onChange={handleProfessionChange}>
//           <Option value="jobSeeker">Job Seeker</Option>
//           <Option value="student">Student</Option>
//           <Option value="professional">Professional</Option>
//         </Select>
//       </Form.Item>

//       {profession === "jobSeeker" && (
//         <Form.Item label="Passed Out Year" name="passedOutYear" rules={[{ required: true, message: "Please enter your passed out year" }]}> 
//           <Input />
//         </Form.Item>
//       )}
      
//       {profession === "student" && (
//         <Form.Item label="Pursuing Year" name="pursuingYear" rules={[{ required: true, message: "Please enter your pursuing year" }]}> 
//           <Input />
//         </Form.Item>
//       )}
      
//       {profession === "professional" && (
//         <>
//           <Form.Item label="Field" name="field" rules={[{ required: true, message: "Please select your field" }]}> 
//             <Select>
//               <Option value="IT">IT</Option>
//               <Option value="Non-IT">Non-IT</Option>
//             </Select>
//           </Form.Item>
          
//           <Form.Item label="Years of Experience" name="experience" rules={[{ required: true, message: "Please enter your experience in years" }]}> 
//             <Input />
//           </Form.Item>
//         </>
//       )}

//       <Form.Item label="Upload Resume" name="resume" rules={[{ required: true, message: "Please upload your resume" }]}> 
//         <Upload beforeUpload={() => false} maxCount={1}>
//           <Button icon={<UploadOutlined />}>Click to Upload</Button>
//         </Upload>
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit">Submit</Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default EnrollmentForm; 

// import React, { useState } from "react";
// import { Form, Input, Select, Checkbox, Upload, Button, Modal } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

// const { Option } = Select;

// const EnrollmentForm = ({ isModalOpen, closeModal }) => {
//   const [form] = Form.useForm();
//   const [profession, setProfession] = useState("");
    
  

//   const handleProfessionChange = (value) => {
//     setProfession(value);
//     form.setFieldsValue({ passedOutYear: undefined, pursuingYear: undefined, field: undefined, experience: undefined });
//   };

//   return (
//     <Modal
//       title="Enrollment Form"
//       open={isModalOpen}
//       onCancel={closeModal}
//       footer={null}
//       width={600}
//       style={{ top: 50 }}
//       bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please enter your first name" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please enter your last name" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true, message: "Please enter your mobile number" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Courses" name="courses" rules={[{ required: true, message: "Please select at least one course" }]}>
//           <Checkbox.Group options={["React", "Angular", "Vue", "Node.js"]} />
//         </Form.Item>

//         <Form.Item label="Profession" name="profession" rules={[{ required: true, message: "Please select your profession" }]}>
//           <Select onChange={handleProfessionChange}>
//             <Option value="jobSeeker">Job Seeker</Option>
//             <Option value="student">Student</Option>
//             <Option value="professional">Professional</Option>
//           </Select>
//         </Form.Item>

//         {profession === "jobSeeker" && (
//           <Form.Item label="Passed Out Year" name="passedOutYear" rules={[{ required: true, message: "Please enter your passed out year" }]}>
//             <Input />
//           </Form.Item>
//         )}

//         {profession === "student" && (
//           <Form.Item label="Pursuing Year" name="pursuingYear" rules={[{ required: true, message: "Please enter your pursuing year" }]}>
//             <Input />
//           </Form.Item>
//         )}

//         {profession === "professional" && (
//           <>
//             <Form.Item label="Field" name="field" rules={[{ required: true, message: "Please select your field" }]}>
//               <Select>
//                 <Option value="IT">IT</Option>
//                 <Option value="Non-IT">Non-IT</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item label="Years of Experience" name="experience" rules={[{ required: true, message: "Please enter your experience in years" }]}>
//               <Input />
//             </Form.Item>
//           </>
//         )}

//         <Form.Item label="Upload Resume" name="resume" rules={[{ required: true, message: "Please upload your resume" }]}>
//           <Upload beforeUpload={() => false} maxCount={1}>
//             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//           </Upload>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">Submit</Button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default EnrollmentForm;

// import React, { useState} from "react";
// import { Form, Input, Select, Checkbox, Upload, Button, Modal } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { useAuth } from "../../../Contexts/AuthContext";

// const { Option } = Select;

// const EnrollmentForm = () => {
//   const { showEnrollForm, setShowEnrollForm } = useAuth(); // Updated to use new state
  
//   React.useEffect(() => {
//     setShowEnrollForm(true);
//   }, [setShowEnrollForm]);

//   const [form] = Form.useForm();
//   const [profession, setProfession] = useState("");

//   const handleProfessionChange = (value) => {
//     setProfession(value);
//     form.setFieldsValue({
//       passedOutYear: undefined,
//       pursuingYear: undefined,
//       field: undefined,
//       experience: undefined,
//     });
//   };

//   return (
//     <Modal
//       title="Enrollment Form"
//       open={showEnrollForm} // Controlled by updated state
//       onCancel={() => setShowEnrollForm(false)} // Close modal
//       footer={null}
//       width={600}
//       style={{ top: 50 }}
//       bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
//     >
//       <Form form={form} layout="vertical">
//         <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please enter your first name" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please enter your last name" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true, message: "Please enter your mobile number" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item label="Courses" name="courses" rules={[{ required: true, message: "Please select at least one course" }]}>
//           <Checkbox.Group options={["React", "Angular", "Vue", "Node.js"]} />
//         </Form.Item>

//         <Form.Item label="Profession" name="profession" rules={[{ required: true, message: "Please select your profession" }]}>
//           <Select onChange={handleProfessionChange}>
//             <Option value="jobSeeker">Job Seeker</Option>
//             <Option value="student">Student</Option>
//             <Option value="professional">Professional</Option>
//           </Select>
//         </Form.Item>

//         {profession === "jobSeeker" && (
//           <Form.Item label="Passed Out Year" name="passedOutYear" rules={[{ required: true, message: "Please enter your passed-out year" }]}>
//             <Input />
//           </Form.Item>
//         )}

//         {profession === "student" && (
//           <Form.Item label="Pursuing Year" name="pursuingYear" rules={[{ required: true, message: "Please enter your pursuing year" }]}>
//             <Input />
//           </Form.Item>
//         )}

//         {profession === "professional" && (
//           <>
//             <Form.Item label="Field" name="field" rules={[{ required: true, message: "Please select your field" }]}>
//               <Select>
//                 <Option value="IT">IT</Option>
//                 <Option value="Non-IT">Non-IT</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item label="Years of Experience" name="experience" rules={[{ required: true, message: "Please enter your experience in years" }]}>
//               <Input />
//             </Form.Item>
//           </>
//         )}

//         <Form.Item label="Upload Resume" name="resume" rules={[{ required: true, message: "Please upload your resume" }]}>
//           <Upload beforeUpload={() => false} maxCount={1}>
//             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//           </Upload>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">Submit</Button>
//         </Form.Item>
//       </Form>
//       <EnrollmentForm />
//     </Modal>
//   );
// };

// export default EnrollmentForm;

