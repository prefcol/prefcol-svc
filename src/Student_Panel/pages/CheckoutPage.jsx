// // // src/pages/CheckoutPage.jsx
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Button, Card, Typography, Divider, message } from 'antd';
// // import { ArrowLeftOutlined } from '@ant-design/icons';
// // import { useGlobalStore } from "../contexts/GlobalStore";
// // import { useAuth } from "../../Contexts/AuthContext";

// // const { Title, Text } = Typography;
// // const TEAL_900 = "#004d4d";

// // export default function CheckoutPage() {
// //   const { courseId } = useParams();
// //   const navigate = useNavigate();
// //   const { courses, dispatch } = useGlobalStore();
// //   const { user} = useAuth();

// //   const course = courses.find(c => c.id === courseId);

// //   if (!course) {
// //     return (
// //       <div style={{ padding: '48px', textAlign: 'center' }}>
// //         <Title level={4}>Course not found</Title>
// //         <Button onClick={() => navigate('/Student-portal/courses')}>
// //           Browse Courses
// //         </Button>
// //       </div>
// //     );
// //   }

// //   const handlePayNow = () => {
// //     // ✅ Simulate successful payment → enroll user
// //     message.success("Payment successful! Enrolling you now...");
// //     dispatch({ type: "ENROLL_IN_COURSE", courseId: course.id });
// //     setTimeout(() => {
// //       navigate("/Student-portal/courses"); // or go to course player
// //     }, 1500);
// //   };

// //   return (
// //     <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
// //       {/* Back Button */}
// //       <Button
// //         icon={<ArrowLeftOutlined />}
// //         onClick={() => navigate(-1)}
// //         style={{ marginBottom: '24px' }}
// //       >
// //         Back to Course
// //       </Button>

// //       {/* Checkout Card */}
// //       <Card
// //         title={
// //           <Title level={3} style={{ margin: 0, color: TEAL_900 }}>
// //             Checkout
// //           </Title>
// //         }
// //         style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
// //       >
// //         {/* Course Summary */}
// //         <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
// //           <img
// //             src={course.thumbnail}
// //             alt={course.title}
// //             style={{
// //               width: '120px',
// //               height: '80px',
// //               objectFit: 'cover',
// //               borderRadius: '8px'
// //             }}
// //           />
// //           <div>
// //             <Title level={4} style={{ margin: '0 0 8px' }}>
// //               {course.title}
// //             </Title>
// //             <Text type="secondary">{course.instructor}</Text>
// //             <div style={{ marginTop: '8px' }}>
// //               <Text strong>Level:</Text> <Text>{course.level}</Text>
// //             </div>
// //           </div>
// //         </div>

// //         <Divider />

// //         {/* Pricing */}
// //         <div style={{ marginBottom: '24px' }}>
// //           {course.price > course.discountPrice && (
// //             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
// //               <Text>Original Price:</Text>
// //               <Text delete>₹{course.price.toFixed(2)}</Text>
// //             </div>
// //           )}
// //           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold' }}>
// //             <Text>Total Payable:</Text>
// //             <Text style={{ color: TEAL_900 }}>
// //               ₹{course.discountPrice.toFixed(2)}
// //             </Text>
// //           </div>
// //         </div>

// //         {/* User Info (Optional) */}
// //         {user && (
// //           <div style={{ marginBottom: '24px', padding: '12px', background: '#f9f9f9', borderRadius: '8px' }}>
// //             <Text strong>Billing Details</Text>
// //             <div style={{ marginTop: '8px' }}>
// //               <div><Text>Name:</Text> <Text strong>{user.userName} {user.lastName}</Text></div>
// //               <div><Text>Email:</Text> <Text>{user.mailId}</Text></div>
// //               {user.phone && <div><Text>Phone:</Text> <Text>{user.phone}</Text></div>}
// //             </div>
// //           </div>
// //         )}

// //         {/* Pay Now Button */}
// //         <Button
// //           type="primary"
// //           size="large"
// //           block
// //           onClick={handlePayNow}
// //           style={{
// //             backgroundColor: TEAL_900,
// //             borderColor: TEAL_900,
// //             height: '48px',
// //             fontSize: '16px'
// //           }}
// //         >
// //           Pay Now ₹{course.discountPrice.toFixed(2)}
// //         </Button>

// //         <div style={{ textAlign: 'center', marginTop: '16px' }}>
// //           <Text type="secondary">100% secure payment</Text>
// //         </div>
// //       </Card>
// //     </div>
// //   );
// // }

// // src/pages/CheckoutPage.jsx
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Card, Typography, Divider, message, Badge } from 'antd';
// import { ArrowLeftOutlined, CheckCircleOutlined, LockOutlined } from '@ant-design/icons';
// import { useGlobalStore } from '../contexts/GlobalStore';
// import { useAuth } from '../../Contexts/AuthContext';
// import { useState } from 'react';

// const { Title, Text } = Typography;
// const TEAL_900 = '#004d4d';
// const TEAL_700 = '#007a7a';
// const GRAY_200 = '#f5f5f5';

// export default function CheckoutPage() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const { courses, dispatch } = useGlobalStore();
//   const { user } = useAuth();
//   const [isProcessing, setIsProcessing] = useState(false);

//   const course = courses.find(c => c.id === courseId);

//   if (!course) {
//     return (
//       <div style={{ padding: '48px', textAlign: 'center' }}>
//         <Title level={4}>Course not found</Title>
//         <Button type="primary" onClick={() => navigate('/Student-portal/courses')}>
//           Browse Courses
//         </Button>
//       </div>
//     );
//   }

//   const handlePayNow = () => {
//     setIsProcessing(true);
//     // ✅ Simulate successful payment → enroll user
//     message.success('Payment successful! Enrolling you now...');
//     dispatch({ type: 'ENROLL_IN_COURSE', courseId: course.id });
//     setTimeout(() => {
//       setIsProcessing(false);
//       navigate('/Student-portal/courses');
//     }, 1500);
//   };

//   return (
//     <div style={{ padding: '24px', maxWidth: '720px', margin: '0 auto' }}>
//       {/* Back Button */}
//       <Button
//         icon={<ArrowLeftOutlined />}
//         onClick={() => navigate(-1)}
//         type="text"
//         style={{ marginBottom: '24px', color: TEAL_900 }}
//       >
//         Back to Course
//       </Button>

//       {/* Checkout Card */}
//       <Card
//         title={
//           <Title level={3} style={{ margin: 0, color: TEAL_900 }}>
//             Complete Your Purchase
//           </Title>
//         }
//         style={{
//           borderRadius: '16px',
//           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
//           border: '1px solid #e8e8e8',
//         }}
//       >
//         {/* Course Summary */}
//         <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
//           <img
//             src={course.thumbnail}
//             alt={course.title}
//             style={{
//               width: '120px',
//               height: '80px',
//               objectFit: 'cover',
//               borderRadius: '8px',
//               flexShrink: 0,
//             }}
//           />
//           <div style={{ minWidth: 0 }}>
//             <Title level={4} style={{ margin: '0 0 6px', fontSize: '18px' }}>
//               {course.title}
//             </Title>
//             <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
//               by {course.instructor}
//             </Text>
//             <div>
//               <Badge
//                 status="processing"
//                 text={course.level}
//                 style={{ fontSize: '13px' }}
//               />
//             </div>
//           </div>
//         </div>

//         <Divider style={{ margin: '16px 0' }} />

//         {/* Pricing Section */}
//         <div style={{ marginBottom: '24px' }}>
//           {course.price > course.discountPrice && (
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 marginBottom: '10px',
//                 color: '#8c8c8c',
//               }}
//             >
//               <Text>Original Price</Text>
//               <Text delete>₹{course.price.toFixed(2)}</Text>
//             </div>
//           )}
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               padding: '12px 0',
//               borderBottom: '2px solid #f0f0f0',
//             }}
//           >
//             <Text strong style={{ fontSize: '16px' }}>
//               Total Payable
//             </Text>
//             <Text
//               strong
//               style={{
//                 fontSize: '22px',
//                 color: TEAL_900,
//                 letterSpacing: '-0.5px',
//               }}
//             >
//               ₹{course.discountPrice.toFixed(2)}
//             </Text>
//           </div>
//         </div>

//         {/* User Info */}
//         {user && (
//           <div
//             style={{
//               marginBottom: '24px',
//               padding: '16px',
//               background: GRAY_200,
//               borderRadius: '12px',
//               border: '1px solid #e8e8e8',
//             }}
//           >
//             <Text strong style={{ fontSize: '15px', color: '#333' }}>
//               Billing Details
//             </Text>
//             <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
//               <div>
//                 <Text type="secondary">Name:</Text>{' '}
//                 <Text strong>{user.userName} {user.lastName}</Text>
//               </div>
//               <div>
//                 <Text type="secondary">Email:</Text> <Text>{user.mailId}</Text>
//               </div>
//               {user.phone && (
//                 <div>
//                   <Text type="secondary">Phone:</Text> <Text>{user.phone}</Text>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Pay Now Button */}
//         <Button
//           type="primary"
//           size="large"
//           block
//           loading={isProcessing}
//           onClick={handlePayNow}
//           icon={<CheckCircleOutlined />}
//           style={{
//             backgroundColor: TEAL_900,
//             borderColor: TEAL_900,
//             height: '52px',
//             fontSize: '17px',
//             fontWeight: '600',
//             boxShadow: '0 4px 12px rgba(0, 77, 77, 0.25)',
//             transition: 'all 0.2s ease',
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = TEAL_700)}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = TEAL_900)}
//         >
//           Pay Now ₹{course.discountPrice.toFixed(2)}
//         </Button>

//         {/* Security Note */}
//         <div style={{ textAlign: 'center', marginTop: '20px' }}>
//           <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#52c41a' }}>
//             <LockOutlined />
//             <Text type="secondary" style={{ fontSize: '13px' }}>
//               100% secure payment • SSL encrypted
//             </Text>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

// src/pages/CheckoutPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Typography, Divider, message, Badge } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, LockOutlined } from '@ant-design/icons';
import { useGlobalStore } from '../contexts/GlobalStore';
import { useAuth } from '../../Contexts/AuthContext';
import { useState, useEffect } from 'react';

const { Title, Text } = Typography;
const TEAL_900 = '#004d4d';
const TEAL_700 = '#007a7a';
const GRAY_200 = '#f5f5f5';

export default function CheckoutPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses, dispatch } = useGlobalStore();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    // Trigger fade-in on mount
    setIsLoaded(true);
  }, []);

  if (!course) {
    return (
      <div style={{ padding: '48px', textAlign: 'center' }}>
        <Title level={4}>Course not found</Title>
        <Button type="primary" onClick={() => navigate('/Student-portal/courses')}>
          Browse Courses
        </Button>
      </div>
    );
  }

  const handlePayNow = () => {
    setIsProcessing(true);
    message.success('Payment successful! Enrolling you now...');
    dispatch({ type: 'ENROLL_IN_COURSE', courseId: course.id });
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/Student-portal/courses');
    }, 1500);
  };

  return (
    <div
      style={{
        padding: '24px',
        maxWidth: '720px',
        margin: '0 auto',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* Back Button */}
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        type="text"
        style={{
          marginBottom: '24px',
          color: TEAL_900,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease 0.1s',
        }}
      >
        Back to Course
      </Button>

      {/* Checkout Card */}
      <Card
        title={
          <Title
            level={3}
            style={{
              margin: 0,
              color: TEAL_900,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease 0.2s',
            }}
          >
            Complete Your Purchase
          </Title>
        }
        style={{
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e8e8e8',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
          transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
        }}
      >
        {/* Course Summary */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '24px',
            flexWrap: 'wrap',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease 0.2s',
          }}
        >
          <img
            src={course.thumbnail}
            alt={course.title}
            style={{
              width: '120px',
              height: '80px',
              objectFit: 'cover',
              borderRadius: '8px',
              flexShrink: 0,
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
          <div style={{ minWidth: 0 }}>
            <Title level={4} style={{ margin: '0 0 6px', fontSize: '18px' }}>
              {course.title}
            </Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
              by {course.instructor}
            </Text>
            <Badge status="processing" text={course.level} style={{ fontSize: '13px' }} />
          </div>
        </div>

        <Divider style={{ margin: '16px 0' }} />

        {/* Pricing */}
        <div
          style={{
            marginBottom: '24px',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease 0.3s',
          }}
        >
          {course.price > course.discountPrice && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                color: '#8c8c8c',
              }}
            >
              <Text>Original Price</Text>
              <Text delete>₹{course.price.toFixed(2)}</Text>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '2px solid #f0f0f0',
            }}
          >
            <Text strong style={{ fontSize: '16px' }}>
              Total Payable
            </Text>
            <Text
              strong
              style={{
                fontSize: '22px',
                color: TEAL_900,
                letterSpacing: '-0.5px',
                transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
                transition: 'transform 0.4s ease, color 0.2s',
              }}
            >
              ₹{course.discountPrice.toFixed(2)}
            </Text>
          </div>
        </div>

        {/* User Info */}
        {user && (
          <div
            style={{
              marginBottom: '24px',
              padding: '16px',
              background: GRAY_200,
              borderRadius: '12px',
              border: '1px solid #e8e8e8',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s',
            }}
          >
            <Text strong style={{ fontSize: '15px', color: '#333' }}>
              Billing Details
            </Text>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <Text type="secondary">Name:</Text> <Text strong>{user.userName} {user.lastName}</Text>
              </div>
              <div>
                <Text type="secondary">Email:</Text> <Text>{user.mailId}</Text>
              </div>
              {user.phone && (
                <div>
                  <Text type="secondary">Phone:</Text> <Text>{user.phone}</Text>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pay Button */}
        <Button
          type="primary"
          size="large"
          block
          loading={isProcessing}
          onClick={handlePayNow}
          icon={<CheckCircleOutlined />}
          style={{
            backgroundColor: TEAL_900,
            borderColor: TEAL_900,
            height: '52px',
            fontSize: '17px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0, 77, 77, 0.25)',
            transition: 'all 0.3s ease',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '0.4s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = TEAL_700;
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 16px rgba(0, 77, 77, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = TEAL_900;
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 77, 77, 0.25)';
          }}
        >
          Pay Now ₹{course.discountPrice.toFixed(2)}
        </Button>

        {/* Security Note */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease 0.5s',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#52c41a' }}>
            <LockOutlined style={{ animation: 'pulse 2s infinite' }} />
            <Text type="secondary" style={{ fontSize: '13px' }}>
              100% secure payment • SSL encrypted
            </Text>
          </div>
        </div>
      </Card>

      {/* Optional: Add keyframes for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}