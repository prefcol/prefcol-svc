// // // // // src/components/StudentPortal/PaymentsTab.jsx
// // // // import { List, Card, Tag, Button, Typography, Modal, Empty } from "antd";
// // // // import { useState } from "react";

// // // // const { Title, Text } = Typography;
// // // // const { confirm } = Modal;

// // // // // Mock data - Replace with API later
// // // // const paymentsData = [
// // // //   {
// // // //     id: 1,
// // // //     title: "Tuition Fee - Fall 2024",
// // // //     amount: 2500,
// // // //     status: "paid",
// // // //     date: "2024-10-01",
// // // //     receipt: "#REC1024",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: "Library Fine",
// // // //     amount: 15,
// // // //     status: "overdue",
// // // //     dueDate: "2024-09-15",
// // // //     receipt: null,
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "Lab Access Pass",
// // // //     amount: 50,
// // // //     status: "pending",
// // // //     dueDate: "2024-10-20",
// // // //     receipt: null,
// // // //   },
// // // // ];

// // // // export default function PaymentsTab() {
// // // //   const [modalVisible, setModalVisible] = useState(false);
// // // //   const [selectedPayment, setSelectedPayment] = useState(null);

// // // //   // Show confirmation modal
// // // //   const handlePayNow = (payment) => {
// // // //     setSelectedPayment(payment);
// // // //     confirm({
// // // //       title: `Pay $${payment.amount} for ${payment.title}?`,
// // // //       content: "This action cannot be undone.",
// // // //       okText: "Confirm Payment",
// // // //       cancelText: "Cancel",
// // // //       onOk() {
// // // //         // Simulate success
// // // //         setTimeout(() => {
// // // //           Modal.success({
// // // //             title: "Payment Successful",
// // // //             content: `You've successfully paid $${payment.amount}.`,
// // // //           });
// // // //         }, 300);
// // // //       },
// // // //       onCancel() {
// // // //         console.log("Payment canceled");
// // // //       },
// // // //     });
// // // //   };

// // // //   // Status tag renderer
// // // //   const getStatusTag = (status) => {
// // // //     const tagConfig = {
// // // //       paid: { color: "success", text: "Paid", icon: null },
// // // //       overdue: { color: "error", text: "Overdue", icon: null },
// // // //       pending: { color: "warning", text: "Pending", icon: null },
// // // //     };
// // // //     const config = tagConfig[status] || { color: "default", text: status };
// // // //     return <Tag color={config.color}>{config.text}</Tag>;
// // // //   };

// // // //   return (
// // // //     <div style={{ marginTop: 16 }}>
// // // //       <Title level={4}>💳 Payments & Fees</Title>
// // // //       <Text type="secondary" style={{ marginBottom: 24, display: "block" }}>
// // // //         View and manage your financial obligations
// // // //       </Text>

// // // //       {paymentsData.length === 0 ? (
// // // //         <Empty description="No payment records found." />
// // // //       ) : (
// // // //         <List
// // // //           dataSource={paymentsData}
// // // //           renderItem={(payment) => (
// // // //             <List.Item>
// // // //               <Card style={{ width: "100%", borderRadius: 8, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
// // // //                 <div
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     justifyContent: "space-between",
// // // //                     alignItems: "center",
// // // //                     flexWrap: "wrap",
// // // //                     gap: "16px",
// // // //                   }}
// // // //                 >
// // // //                   {/* Left side: Info */}
// // // //                   <div style={{ flex: 1, minWidth: "200px" }}>
// // // //                     <Title level={5} style={{ margin: 0 }}>
// // // //                       {payment.title}
// // // //                     </Title>
// // // //                     <Text type="secondary">
// // // //                       Due: {payment.dueDate || payment.date} • ID: {payment.receipt || "—"}
// // // //                     </Text>
// // // //                   </div>

// // // //                   {/* Middle: Amount */}
// // // //                   <div style={{ textAlign: "center", minWidth: "100px" }}>
// // // //                     <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1890ff" }}>
// // // //                       ${payment.amount}
// // // //                     </div>
// // // //                     {getStatusTag(payment.status)}
// // // //                   </div>

// // // //                   {/* Right: Action Button */}
// // // //                   <div>
// // // //                     {payment.status !== "paid" ? (
// // // //                       <Button type="primary" onClick={() => handlePayNow(payment)}>
// // // //                         Pay Now
// // // //                       </Button>
// // // //                     ) : (
// // // //                       <Button disabled>Paid</Button>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               </Card>
// // // //             </List.Item>
// // // //           )}
// // // //         />
// // // //       )}

// // // //       {/* Optional: Summary */}
// // // //       <div style={{ marginTop: 24, padding: "16px", background: "#f9f9f9", borderRadius: 8 }}>
// // // //         <Text strong>Total Due: </Text>
// // // //         <Text style={{ fontSize: 16, fontWeight: "bold" }}>
// // // //           ${paymentsData
// // // //             .filter((p) => p.status === "pending" || p.status === "overdue")
// // // //             .reduce((sum, p) => sum + p.amount, 0)}
// // // //         </Text>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // src/components/StudentPortal/PaymentsTab.jsx
// // // import { Card, List, Button, Typography, Divider, Tag, Modal, Table } from "antd";
// // // import { useState } from "react";
// // // import { useReactToPrint } from 'react-to-print';
// // // import { PrinterOutlined, DownloadOutlined, CheckCircleOutlined } from '@ant-design/icons';
// // // import React from "react";

// // // const { Title, Text } = Typography;
// // // const { confirm } = Modal;

// // // // 🔶 Mock Data: Enrolled Courses (IT & Non-IT) - Prices in INR
// // // const enrolledCourses = [
// // //   {
// // //     key: '1',
// // //     id: 101,
// // //     title: 'Web Development Bootcamp',
// // //     category: 'IT',
// // //     price: 24999,
// // //     status: 'paid',
// // //     enrollmentDate: '2024-10-01',
// // //     transactionId: 'TXN-101024-001',
// // //     access: 'Lifetime',
// // //   },
// // //   {
// // //     key: '2',
// // //     id: 102,
// // //     title: 'Data Science Fundamentals',
// // //     category: 'IT',
// // //     price: 17999,
// // //     status: 'pending',
// // //     enrollmentDate: '2024-10-05',
// // //     access: 'Lifetime',
// // //   },
// // //   {
// // //     key: '3',
// // //     id: 103,
// // //     title: 'Digital Marketing Mastery',
// // //     category: 'Non-IT',
// // //     price: 12999,
// // //     status: 'paid',
// // //     enrollmentDate: '2024-09-28',
// // //     transactionId: 'TXN-092824-005',
// // //     access: '1 Year',
// // //   },
// // //   {
// // //     key: '4',
// // //     id: 104,
// // //     title: 'UI/UX Design for Beginners',
// // //     category: 'Non-IT',
// // //     price: 0,
// // //     status: 'free',
// // //     enrollmentDate: '2024-10-03',
// // //     access: 'Lifetime',
// // //   },
// // // ];

// // // // 🔶 Payment History
// // // const paymentHistory = [
// // //   {
// // //     date: '1 Oct, 2024',
// // //     description: 'Web Dev Bootcamp',
// // //     amount: 24999,
// // //     method: 'UPI ••••1234',
// // //     transactionId: 'TXN-101024-001',
// // //   },
// // //   {
// // //     date: '28 Sep, 2024',
// // //     description: 'Digital Marketing',
// // //     amount: 12999,
// // //     method: 'Paytm',
// // //     transactionId: 'TXN-092824-005',
// // //   },
// // // ];

// // // // 🔶 Receipt Ref for printing
// // // const receiptRef = React.createRef();

// // // // 🔶 Status Tag Renderer
// // // const getStatusTag = (status) => {
// // //   const map = {
// // //     paid: { color: 'success', text: 'Paid', icon: <CheckCircleOutlined /> },
// // //     pending: { color: 'warning', text: 'Pending' },
// // //     free: { color: 'default', text: 'Free' },
// // //   };
// // //   const { color, text, icon } = map[status] || { color: 'default', text: 'Unknown' };
// // //   return <Tag color={color} icon={icon}>{text}</Tag>;
// // // };

// // // // 🔶 Custom Button Style: Dark Teal + White Text
// // // const TealButton = ({ children, onClick, loading, disabled, style, ...props }) => (
// // //   <Button
// // //     onClick={onClick}
// // //     loading={loading}
// // //     disabled={disabled}
// // //     style={{
// // //       backgroundColor: '#004d4d',
// // //       borderColor: '#004d4d',
// // //       color: 'white',
// // //       fontWeight: '500',
// // //       ...style,
// // //     }}
// // //     {...props}
// // //   >
// // //     {children}
// // //   </Button>
// // // );

// // // export default function PaymentsTab() {
// // //   const [printingReceipt, setPrintingReceipt] = useState(null);

// // //   // Handle Pay Now
// // //   const handlePayNow = (course) => {
// // //     confirm({
// // //       title: `Pay ₹${course.price.toLocaleString()} for ${course.title}?`,
// // //       content: 'You will gain immediate access upon payment.',
// // //       okText: 'Proceed to Payment',
// // //       cancelText: 'Cancel',
// // //       onOk() {
// // //         alert(`Redirecting to payment gateway for ₹${course.price.toLocaleString()}`);
// // //         // In real app: open Stripe/Razorpay modal
// // //       },
// // //     });
// // //   };

// // //   // Print Receipt
// // //   const handlePrintReceipt = (course) => {
// // //     setPrintingReceipt(course);
// // //     setTimeout(() => {
// // //       if (useReactToPrint) {
// // //         reactToPrintInstance.print();
// // //       }
// // //     }, 100);
// // //   };

// // //   const reactToPrintInstance = useReactToPrint({
// // //     content: () => receiptRef.current,
// // //     documentTitle: `Receipt-${printingReceipt?.id}`,
// // //     onAfterPrint: () => setPrintingReceipt(null),
// // //   });

// // //   // Calculate totals
// // //   const totalPaid = enrolledCourses
// // //     .filter(c => c.status === 'paid')
// // //     .reduce((sum, c) => sum + c.price, 0);

// // //   const totalDue = enrolledCourses
// // //     .filter(c => c.status === 'pending')
// // //     .reduce((sum, c) => sum + c.price, 0);

// // //   return (
// // //     <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif', color: '#fff', background: '#003333', minHeight: '100vh' }}>
// // //       <Title level={4} style={{ color: '#a8d8d8' }}>💳 Payments</Title>
// // //       <Text type="secondary" style={{ color: '#d0f0f0', display: 'block', marginBottom: '24px' }}>
// // //         Manage your course payments and receipts
// // //       </Text>

// // //       {/* Summary Cards */}
// // //       <div style={{ display: 'flex', gap: '16px', margin: '24px 0', flexWrap: 'wrap' }}>
// // //         <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
// // //           <Text strong style={{ color: '#e0f7fa' }}>Total Paid</Text>
// // //           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#a8d8d8', marginTop: '4px' }}>
// // //             ₹{totalPaid.toLocaleString()}
// // //           </div>
// // //         </Card>
// // //         <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
// // //           <Text strong style={{ color: '#e0f7fa' }}>Amount Due</Text>
// // //           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffcc80', marginTop: '4px' }}>
// // //             ₹{totalDue.toLocaleString()}
// // //           </div>
// // //         </Card>
// // //       </div>

// // //     {/* Course Invoices */}
// // //     <Title level={5} style={{ color: '#a8e6cf' }}>🎓 My Course Invoices</Title>

// // //     <List
// // //         dataSource={enrolledCourses}
// // //         renderItem={(course) => (
// // //             <List.Item key={course.id}>
// // //                 <Card
// // //                     style={{
// // //                         width: '100%',
// // //                         borderRadius: 8,
// // //                         backgroundColor: '#004040',
// // //                         borderColor: '#006064',
// // //                     }}
// // //                 >
// // //                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
// // //                         <div style={{ flex: 1, color: '#e0f7fa' }}>
// // //                             <Title level={5} style={{ margin: 0, color: '#a8e6cf' }}>{course.title}</Title>
// // //                             <Text type="secondary" style={{ color: '#b2dfdb' }}>
// // //                                 {course.category} • Enrolled: {course.enrollmentDate} • Access: {course.access}
// // //                             </Text>
// // //                             {course.transactionId && (
// // //                                 <div style={{ marginTop: 8 }}>
// // //                                     <Text type="secondary" style={{ color: '#b2dfdb' }}>
// // //                                         Transaction ID: {course.transactionId}
// // //                                     </Text>
// // //                                 </div>
// // //                             )}
// // //                         </div>

// // //                         <div style={{ textAlign: 'right', minWidth: '120px' }}>
// // //                             <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#a8d8d8' }}>
// // //                                 {course.price === 0 ? 'Free' : `₹${course.price.toLocaleString()}`}
// // //                             </div>
// // //                             {getStatusTag(course.status)}
// // //                             {course.status === 'paid' ? (
// // //                                 <TealButton
// // //                                     size="small"
// // //                                     icon={<PrinterOutlined />}
// // //                                     style={{ marginTop: 8 }}
// // //                                     onClick={() => handlePrintReceipt(course)}
// // //                                 >
// // //                                     Receipt
// // //                                 </TealButton>
// // //                             ) : course.status === 'pending' && (
// // //                                 <TealButton
// // //                                     type="primary"
// // //                                     size="small"
// // //                                     style={{ marginTop: 8 }}
// // //                                     onClick={() => handlePayNow(course)}
// // //                                 >
// // //                                     Pay Now
// // //                                 </TealButton>
// // //                             )}
// // //                         </div>
// // //                     </div>
// // //                 </Card>
// // //             </List.Item>
// // //         )}
// // //     />
// // //       <Divider style={{ borderColor: '#006064', margin: '24px 0' }} />
// // //       <Title level={5} style={{ color: '#a8e6cf' }}>📒 Payment History</Title>
// // //       <Table
// // //         dataSource={paymentHistory}
// // //         columns={[
// // //           { title: 'Date', dataIndex: 'date', render: text => <span style={{ color: '#003333',fontWeight: 'bold' }}>{text}</span> },
// // //           { title: 'Description', dataIndex: 'description', render: text => <span style={{ color: '#003333',fontWeight: 'bold' }}>{text}</span> },
// // //           {
// // //             title: 'Amount',
// // //             dataIndex: 'amount',
// // //             render: val => <strong style={{ color: '#003333', fontWeight: 'bold' }}>₹{val.toLocaleString()}</strong>
// // //           },
// // //           {
// // //             title: 'Method',
// // //             dataIndex: 'method',
// // //             render: text => <span style={{ color: '#003333', fontWeight: 'bold' }}>{text}</span>
// // //           },
// // //           {
// // //             title: 'Receipt',
// // //             render: (_, record) => (
// // //               <TealButton
// // //                 type="link"
// // //                 icon={<DownloadOutlined />}
// // //                 onClick={() => {
// // //                   setPrintingReceipt({ 
// // //                     title: record.description, 
// // //                     amount: record.amount, 
// // //                     date: record.date, 
// // //                     transactionId: record.transactionId 
// // //                   });
// // //                   setTimeout(() => reactToPrintInstance.print(), 100);
// // //                 }}
// // //               >
// // //                 Download
// // //               </TealButton>
// // //             ),
// // //           },
// // //         ]}
// // //         pagination={false}
// // //         style={{ background: '#004040', borderRadius: '8px' }}
// // //         bordered={false}
// // //       />

// // //       {/* Hidden Receipt for Printing */}
// // //       <div style={{ display: 'none' }}>
// // //         <ReceiptTemplate ref={receiptRef} data={printingReceipt} />
// // //       </div>

// // //       {/* Footer */}
// // //       <div style={{
// // //         marginTop: '32px',
// // //         padding: '16px',
// // //         background: '#003333',
// // //         borderRadius: '8px',
// // //         fontSize: '14px',
// // //         color: '#b2dfdb',
// // //         textAlign: 'center',
// // //       }}>
// // //         <p><strong>Need help?</strong> Contact <a href="mailto:billing@yourplatform.com" style={{ color: '#a8e6cf' }}>billing@yourplatform.com</a></p>
// // //         <p>
// // //           <a href="#refund" style={{ color: '#a8e6cf', margin: '0 8px' }}>Refund Policy</a> •
// // //           <a href="#terms" style={{ color: '#a8e6cf', margin: '0 8px' }}>Terms</a> •
// // //           <a href="#privacy" style={{ color: '#a8e6cf', margin: '0 8px' }}>Privacy</a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // 🧾 Receipt Template for Printing (Styled for INR)
// // // const ReceiptTemplate = React.forwardRef((props, ref) => {
// // //   const { data } = props;
// // //   if (!data) return null;

// // //   return (
// // //     <div ref={ref} style={{
// // //       padding: '40px',
// // //       fontFamily: 'Arial',
// // //       maxWidth: '600px',
// // //       margin: '0 auto',
// // //       border: '1px solid #006064',
// // //       backgroundColor: '#fff',
// // //       color: '#003333',
// // //     }}>
// // //       <h2 style={{ textAlign: 'center', color: '#004d4d' }}>🎓 LearnX Academy</h2>
// // //       <h3 style={{ textAlign: 'center', color: '#006064' }}>Payment Receipt</h3>
// // //       <hr style={{ border: '1px dashed #008080' }} />

// // //       <table width="100%" style={{ margin: '20px 0', fontSize: '16px' }}>
// // //         <tr><td><strong>Course:</strong></td><td>{data.title || data.description}</td></tr>
// // //         <tr><td><strong>Date:</strong></td><td>{data.date || new Date().toLocaleDateString('en-IN')}</td></tr>
// // //         <tr><td><strong>Transaction ID:</strong></td><td>{data.transactionId}</td></tr>
// // //         <tr>
// // //           <td><strong>Amount Paid:</strong></td>
// // //           <td><strong style={{ color: '#004d4d' }}>₹{data.amount.toLocaleString('en-IN')}</strong></td>
// // //         </tr>
// // //       </table>

// // //       <hr style={{ border: '1px dashed #008080' }} />
// // //       <p style={{ fontSize: '12px', color: '#555', textAlign: 'center' }}>
// // //         Thank you for learning with us! This is a digital receipt. No signature required.
// // //       </p>
// // //     </div>
// // //   );
// // // });

// // import { Card, List, Button, Typography, Divider, Tag, Modal, Table } from "antd";
// // import { useState, useRef } from "react";
// // import { useReactToPrint } from 'react-to-print';
// // import { PrinterOutlined, DownloadOutlined, CheckCircleOutlined } from '@ant-design/icons';
// // import React from "react";

// // const { Title, Text } = Typography;
// // const { confirm } = Modal;

// // // 🔶 Mock Data: Enrolled Courses (IT & Non-IT) - Prices in INR
// // const enrolledCourses = [
// //   {
// //     key: '1',
// //     id: 101,
// //     title: 'Web Development Bootcamp',
// //     category: 'IT',
// //     price: 24999,
// //     status: 'paid',
// //     enrollmentDate: '2024-10-01',
// //     transactionId: 'TXN-101024-001',
// //     access: 'Lifetime',
// //   },
// //   {
// //     key: '2',
// //     id: 102,
// //     title: 'Data Science Fundamentals',
// //     category: 'IT',
// //     price: 17999,
// //     status: 'pending',
// //     enrollmentDate: '2024-10-05',
// //     access: 'Lifetime',
// //   },
// //   {
// //     key: '3',
// //     id: 103,
// //     title: 'Digital Marketing Mastery',
// //     category: 'Non-IT',
// //     price: 12999,
// //     status: 'paid',
// //     enrollmentDate: '2024-09-28',
// //     transactionId: 'TXN-092824-005',
// //     access: '1 Year',
// //   },
// //   {
// //     key: '4',
// //     id: 104,
// //     title: 'UI/UX Design for Beginners',
// //     category: 'Non-IT',
// //     price: 0,
// //     status: 'free',
// //     enrollmentDate: '2024-10-03',
// //     access: 'Lifetime',
// //   },
// // ];

// // // 🔶 Payment History
// // const paymentHistory = [
// //   {
// //     date: '1 Oct, 2024',
// //     description: 'Web Dev Bootcamp',
// //     amount: 24999,
// //     method: 'UPI ••••1234',
// //     transactionId: 'TXN-101024-001',
// //   },
// //   {
// //     date: '28 Sep, 2024',
// //     description: 'Digital Marketing',
// //     amount: 12999,
// //     method: 'Paytm',
// //     transactionId: 'TXN-092824-005',
// //   },
// // ];

// // // 🔶 Receipt Ref for printing
// // const receiptRef = React.createRef();

// // // 🔶 Status Tag Renderer
// // const getStatusTag = (status) => {
// //   const map = {
// //     paid: { color: 'success', text: 'Paid', icon: <CheckCircleOutlined /> },
// //     pending: { color: 'warning', text: 'Pending' },
// //     free: { color: 'default', text: 'Free' },
// //   };
// //   const { color, text, icon } = map[status] || { color: 'default', text: 'Unknown' };
// //   return <Tag color={color} icon={icon}>{text}</Tag>;
// // };

// // // 🔶 Custom Button Style: Dark Teal + White Text
// // const TealButton = ({ children, onClick, loading, disabled, style, ...props }) => (
// //   <Button
// //     onClick={onClick}
// //     loading={loading}
// //     disabled={disabled}
// //     style={{
// //       backgroundColor: '#004d4d',
// //       borderColor: '#004d4d',
// //       color: 'white',
// //       fontWeight: '500',
// //       ...style,
// //     }}
// //     {...props}
// //   >
// //     {children}
// //   </Button>
// // );

// // export default function PaymentsTab() {
// //   const [printingReceipt, setPrintingReceipt] = useState(null);

// //   // Handle Pay Now
// //   const handlePayNow = (course) => {
// //     confirm({
// //       title: `Pay ₹${course.price.toLocaleString()} for ${course.title}?`,
// //       content: 'You will gain immediate access upon payment.',
// //       okText: 'Proceed to Payment',
// //       cancelText: 'Cancel',
// //       onOk() {
// //         alert(`Redirecting to payment gateway for ₹${course.price.toLocaleString()}`);
// //         // In real app: open Stripe/Razorpay modal
// //       },
// //     });
// //   };

// //   // Print Receipt
// //   const handlePrintReceipt = (course) => {
// //     setPrintingReceipt(course);
// //     setTimeout(() => {
// //       if (reactToPrintInstance) {
// //         reactToPrintInstance.print();
// //       }
// //     }, 100);
// //   };

// //   const reactToPrintInstance = useReactToPrint({
// //     content: () => receiptRef.current,
// //     documentTitle: `Receipt-${printingReceipt?.id}`,
// //     onAfterPrint: () => setPrintingReceipt(null),
// //   });

// //   // Calculate totals
// //   const totalPaid = enrolledCourses
// //     .filter(c => c.status === 'paid')
// //     .reduce((sum, c) => sum + c.price, 0);

// //   const totalDue = enrolledCourses
// //     .filter(c => c.status === 'pending')
// //     .reduce((sum, c) => sum + c.price, 0);

// //   return (
// //     <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif', color: '#fff', background: '#003333', minHeight: '100vh' }}>
// //       <Title level={4} style={{ color: '#a8d8d8' }}>💳 Payments</Title>
// //       <Text type="secondary" style={{ color: '#d0f0f0', display: 'block', marginBottom: '24px' }}>
// //         Manage your course payments and receipts
// //       </Text>

// //       {/* Summary Cards */}
// //       <div style={{ display: 'flex', gap: '16px', margin: '24px 0', flexWrap: 'wrap' }}>
// //         <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
// //           <Text strong style={{ color: '#e0f7fa' }}>Total Paid</Text>
// //           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#a8d8d8', marginTop: '4px' }}>
// //             ₹{totalPaid.toLocaleString()}
// //           </div>
// //         </Card>
// //         <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
// //           <Text strong style={{ color: '#e0f7fa' }}>Amount Due</Text>
// //           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffcc80', marginTop: '4px' }}>
// //             ₹{totalDue.toLocaleString()}
// //           </div>
// //         </Card>
// //       </div>

// //       {/* Course Invoices */}
// //       <Title level={5} style={{ color: '#a8e6cf' }}>🎓 My Course Invoices</Title>

// //       <List
// //         dataSource={enrolledCourses}
// //         renderItem={(course) => (
// //           <List.Item key={course.id}>
// //             <Card
// //               style={{
// //                 width: '100%',
// //                 borderRadius: 8,
// //                 backgroundColor: '#004040',
// //                 borderColor: '#006064',
// //               }}
// //             >
// //               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
// //                 <div style={{ flex: 1, color: '#e0f7fa' }}>
// //                   <Title level={5} style={{ margin: 0, color: '#a8e6cf' }}>{course.title}</Title>
// //                   <Text type="secondary" style={{ color: '#b2dfdb' }}>
// //                     {course.category} • Enrolled: {course.enrollmentDate} • Access: {course.access}
// //                   </Text>
// //                   {course.transactionId && (
// //                     <div style={{ marginTop: 8 }}>
// //                       <Text type="secondary" style={{ color: '#b2dfdb' }}>
// //                         Transaction ID: {course.transactionId}
// //                       </Text>
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div style={{ textAlign: 'right', minWidth: '120px' }}>
// //                   <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#a8d8d8' }}>
// //                     {course.price === 0 ? 'Free' : `₹${course.price.toLocaleString()}`}
// //                   </div>
// //                   {getStatusTag(course.status)}
// //                   {course.status === 'paid' ? (
// //                     <TealButton
// //                       size="small"
// //                       icon={<PrinterOutlined />}
// //                       style={{ marginTop: 8 }}
// //                       onClick={() => handlePrintReceipt(course)}
// //                     >
// //                       Receipt
// //                     </TealButton>
// //                   ) : course.status === 'pending' && (
// //                     <TealButton
// //                       type="primary"
// //                       size="small"
// //                       style={{ marginTop: 8 }}
// //                       onClick={() => handlePayNow(course)}
// //                     >
// //                       Pay Now
// //                     </TealButton>
// //                   )}
// //                 </div>
// //               </div>
// //             </Card>
// //           </List.Item>
// //         )}
// //       />
// //       <Divider style={{ borderColor: '#006064', margin: '24px 0' }} />

// //       {/* Payment History */}
// //       <Title level={5} style={{ color: '#a8e6cf' }}>📒 Payment History</Title>

// //       <div
// //         style={{
// //           overflowX: 'auto',
// //           borderRadius: '8px',
// //           background: '#004040',
// //           padding: '8px 0',
// //           WebkitOverflowScrolling: 'touch', // Smoother scrolling on iOS
// //         }}
// //       >
// //         <Table
// //           dataSource={paymentHistory}
// //           columns={[
// //             {
// //               title: 'Date',
// //               dataIndex: 'date',
// //               render: (text) => (
// //                 <span style={{ color: '#e0f7fa', fontWeight: 'bold' }}>{text}</span>
// //               ),
// //               width: 120,
// //             },
// //             {
// //               title: 'Description',
// //               dataIndex: 'description',
// //               render: (text) => (
// //                 <span style={{ color: '#e0f7fa', fontWeight: 'bold' }}>{text}</span>
// //               ),
// //               width: 160,
// //             },
// //             {
// //               title: 'Amount',
// //               dataIndex: 'amount',
// //               render: (val) => (
// //                 <strong style={{ color: '#a8d8d8', fontWeight: 'bold' }}>
// //                   ₹{val.toLocaleString()}
// //                 </strong>
// //               ),
// //               width: 100,
// //               align: 'right',
// //             },
// //             {
// //               title: 'Method',
// //               dataIndex: 'method',
// //               render: (text) => (
// //                 <span style={{ color: '#e0f7fa', fontWeight: 'bold' }}>{text}</span>
// //               ),
// //               width: 140,
// //             },
// //             {
// //               title: 'Receipt',
// //               key: 'receipt',
// //               render: (_, record) => (
// //                 <TealButton
// //                   type="link"
// //                   icon={<DownloadOutlined />}
// //                   onClick={() => {
// //                     setPrintingReceipt({
// //                       title: record.description,
// //                       amount: record.amount,
// //                       date: record.date,
// //                       transactionId: record.transactionId,
// //                     });
// //                     setTimeout(() => reactToPrintInstance.print(), 100);
// //                   }}
// //                   style={{ padding: 0, color: '#a8e6cf' }}
// //                 >
// //                   Download
// //                 </TealButton>
// //               ),
// //               width: 100,
// //             },
// //           ]}
// //           pagination={false}
// //           style={{ minWidth: 600 }}
// //           bordered={false}
// //         />
// //       </div>

// //       {/* Hidden Receipt for Printing */}
// //       <div style={{ display: 'none' }}>
// //         <ReceiptTemplate ref={receiptRef} data={printingReceipt} />
// //       </div>

// //       {/* Footer */}
// //       <div style={{
// //         marginTop: '32px',
// //         padding: '16px',
// //         background: '#003333',
// //         borderRadius: '8px',
// //         fontSize: '14px',
// //         color: '#b2dfdb',
// //         textAlign: 'center',
// //       }}>
// //         <p><strong>Need help?</strong> Contact <a href="mailto:billing@yourplatform.com" style={{ color: '#a8e6cf' }}>billing@yourplatform.com</a></p>
// //         <p>
// //           <a href="#refund" style={{ color: '#a8e6cf', margin: '0 8px' }}>Refund Policy</a> •
// //           <a href="#terms" style={{ color: '#a8e6cf', margin: '0 8px' }}>Terms</a> •
// //           <a href="#privacy" style={{ color: '#a8e6cf', margin: '0 8px' }}>Privacy</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // // 🧾 Receipt Template for Printing (Styled for INR)
// // const ReceiptTemplate = React.forwardRef((props, ref) => {
// //   const { data } = props;
// //   if (!data) return null;

// //   return (
// //     <div ref={ref} style={{
// //       padding: '40px',
// //       fontFamily: 'Arial',
// //       maxWidth: '600px',
// //       margin: '0 auto',
// //       border: '1px solid #006064',
// //       backgroundColor: '#fff',
// //       color: '#003333',
// //     }}>
// //       <h2 style={{ textAlign: 'center', color: '#004d4d' }}>🎓 LearnX Academy</h2>
// //       <h3 style={{ textAlign: 'center', color: '#006064' }}>Payment Receipt</h3>
// //       <hr style={{ border: '1px dashed #008080' }} />

// //       <table width="100%" style={{ margin: '20px 0', fontSize: '16px' }}>
// //         <tbody>
// //           <tr><td><strong>Course:</strong></td><td>{data.title || data.description}</td></tr>
// //           <tr><td><strong>Date:</strong></td><td>{data.date || new Date().toLocaleDateString('en-IN')}</td></tr>
// //           <tr><td><strong>Transaction ID:</strong></td><td>{data.transactionId}</td></tr>
// //           <tr>
// //             <td><strong>Amount Paid:</strong></td>
// //             <td><strong style={{ color: '#004d4d' }}>₹{data.amount.toLocaleString('en-IN')}</strong></td>
// //           </tr>
// //         </tbody>
// //       </table>

// //       <hr style={{ border: '1px dashed #008080' }} />
// //       <p style={{ fontSize: '12px', color: '#555', textAlign: 'center' }}>
// //         Thank you for learning with us! This is a digital receipt. No signature required.
// //       </p>
// //     </div>
// //   );
// // });

// import { Card, List, Button, Typography, Divider, Tag, Modal, Table } from "antd";
// import { useState } from "react";
// import { useReactToPrint } from 'react-to-print';
// import { PrinterOutlined, DownloadOutlined, CheckCircleOutlined } from '@ant-design/icons';
// import React from "react";

// const { Title, Text } = Typography;
// const { confirm } = Modal;

// // 🔶 Mock Data
// const enrolledCourses = [
//   {
//     key: '1',
//     id: 101,
//     title: 'Web Development Bootcamp',
//     category: 'IT',
//     price: 24999,
//     status: 'paid',
//     enrollmentDate: '2024-10-01',
//     transactionId: 'TXN-101024-001',
//     access: 'Lifetime',
//   },
//   {
//     key: '2',
//     id: 102,
//     title: 'Data Science Fundamentals',
//     category: 'IT',
//     price: 17999,
//     status: 'pending',
//     enrollmentDate: '2024-10-05',
//     access: 'Lifetime',
//   },
//   {
//     key: '3',
//     id: 103,
//     title: 'Digital Marketing Mastery',
//     category: 'Non-IT',
//     price: 12999,
//     status: 'paid',
//     enrollmentDate: '2024-09-28',
//     transactionId: 'TXN-092824-005',
//     access: '1 Year',
//   },
//   {
//     key: '4',
//     id: 104,
//     title: 'UI/UX Design for Beginners',
//     category: 'Non-IT',
//     price: 0,
//     status: 'free',
//     enrollmentDate: '2024-10-03',
//     access: 'Lifetime',
//   },
// ];

// const paymentHistory = [
//   {
//     date: '1 Oct, 2024',
//     description: 'Web Dev Bootcamp',
//     amount: 24999,
//     method: 'UPI ••••1234',
//     transactionId: 'TXN-101024-001',
//   },
//   {
//     date: '28 Sep, 2024',
//     description: 'Digital Marketing',
//     amount: 12999,
//     method: 'Paytm',
//     transactionId: 'TXN-092824-005',
//   },
// ];

// const receiptRef = React.createRef();

// const getStatusTag = (status) => {
//   const map = {
//     paid: { color: 'success', text: 'Paid', icon: <CheckCircleOutlined /> },
//     pending: { color: 'warning', text: 'Pending' },
//     free: { color: 'default', text: 'Free' },
//   };
//   const { color, text, icon } = map[status] || { color: 'default', text: 'Unknown' };
//   return <Tag color={color} icon={icon}>{text}</Tag>;
// };

// const TealButton = ({ children, onClick, loading, disabled, style, ...props }) => (
//   <Button
//     onClick={onClick}
//     loading={loading}
//     disabled={disabled}
//     style={{
//       backgroundColor: '#004d4d',
//       borderColor: '#004d4d',
//       color: 'white',
//       fontWeight: '500',
//       ...style,
//     }}
//     {...props}
//   >
//     {children}
//   </Button>
// );

// export default function PaymentsTab() {
//   const [printingReceipt, setPrintingReceipt] = useState(null);

//   const handlePayNow = (course) => {
//     confirm({
//       title: `Pay ₹${course.price.toLocaleString()} for ${course.title}?`,
//       content: 'You will gain immediate access upon payment.',
//       okText: 'Proceed to Payment',
//       cancelText: 'Cancel',
//       onOk() {
//         alert(`Redirecting to payment gateway for ₹${course.price.toLocaleString()}`);
//       },
//     });
//   };

//   const handlePrintReceipt = (course) => {
//     setPrintingReceipt(course);
//     setTimeout(() => {
//       if (reactToPrintInstance) {
//         reactToPrintInstance.print();
//       }
//     }, 100);
//   };

//   const reactToPrintInstance = useReactToPrint({
//     content: () => receiptRef.current,
//     documentTitle: `Receipt-${printingReceipt?.id}`,
//     onAfterPrint: () => setPrintingReceipt(null),
//   });

//   const totalPaid = enrolledCourses
//     .filter(c => c.status === 'paid')
//     .reduce((sum, c) => sum + c.price, 0);

//   const totalDue = enrolledCourses
//     .filter(c => c.status === 'pending')
//     .reduce((sum, c) => sum + c.price, 0);

//   return (
//     <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif', color: '#fff', background: '#003333', minHeight: '100vh' }}>
//       <Title level={4} style={{ color: '#a8d8d8' }}>💳 Payments</Title>
//       <Text type="secondary" style={{ color: '#d0f0f0', display: 'block', marginBottom: '24px' }}>
//         Manage your course payments and receipts
//       </Text>

//       {/* Summary Cards */}
//       <div style={{ display: 'flex', gap: '16px', margin: '24px 0', flexWrap: 'wrap' }}>
//         <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
//           <Text strong style={{ color: '#e0f7fa' }}>Total Paid</Text>
//           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#a8d8d8', marginTop: '4px' }}>
//             ₹{totalPaid.toLocaleString()}
//           </div>
//         </Card>
//         <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
//           <Text strong style={{ color: '#e0f7fa' }}>Amount Due</Text>
//           <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffcc80', marginTop: '4px' }}>
//             ₹{totalDue.toLocaleString()}
//           </div>
//         </Card>
//       </div>

//       <Title level={5} style={{ color: '#a8e6cf' }}>🎓 My Course Invoices</Title>

//       <List
//         dataSource={enrolledCourses}
//         renderItem={(course) => (
//           <List.Item key={course.id}>
//             <Card
//               style={{
//                 width: '100%',
//                 borderRadius: 8,
//                 backgroundColor: '#004040',
//                 borderColor: '#006064',
//               }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
//                 <div style={{ flex: 1, color: '#e0f7fa' }}>
//                   <Title level={5} style={{ margin: 0, color: '#a8e6cf' }}>{course.title}</Title>
//                   <Text type="secondary" style={{ color: '#b2dfdb' }}>
//                     {course.category} • Enrolled: {course.enrollmentDate} • Access: {course.access}
//                   </Text>
//                   {course.transactionId && (
//                     <div style={{ marginTop: 8 }}>
//                       <Text type="secondary" style={{ color: '#b2dfdb' }}>
//                         Transaction ID: {course.transactionId}
//                       </Text>
//                     </div>
//                   )}
//                 </div>

//                 <div style={{ textAlign: 'right', minWidth: '120px' }}>
//                   <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#a8d8d8' }}>
//                     {course.price === 0 ? 'Free' : `₹${course.price.toLocaleString()}`}
//                   </div>
//                   {getStatusTag(course.status)}
//                   {course.status === 'paid' ? (
//                     <TealButton
//                       size="small"
//                       icon={<PrinterOutlined />}
//                       style={{ marginTop: 8 }}
//                       onClick={() => handlePrintReceipt(course)}
//                     >
//                       Receipt
//                     </TealButton>
//                   ) : course.status === 'pending' && (
//                     <TealButton
//                       type="primary"
//                       size="small"
//                       style={{ marginTop: 8 }}
//                       onClick={() => handlePayNow(course)}
//                     >
//                       Pay Now
//                     </TealButton>
//                   )}
//                 </div>
//               </div>
//             </Card>
//           </List.Item>
//         )}
//       />
//       <Divider style={{ borderColor: '#006064', margin: '24px 0' }} />

//      <Title level={5} style={{ color: '#a8e6cf' }}>📒 Payment History</Title>

// {/* ✅ Scrollable wrapper: constrained to parent width */}
// <div
//   className="responsive-payment-table"
//   style={{
//     width: '100%',
//     maxWidth: '100%',
//     overflowX: 'auto',
//     borderRadius: '8px',
//     background: '#004040',
//     padding: '8px 0',
//     WebkitOverflowScrolling: 'touch',
//     boxSizing: 'border-box',
//   }}
// >
//   <Table
//     dataSource={paymentHistory}
//     columns={[
//       {
//         title: 'Date',
//         dataIndex: 'date',
//         render: (text) => <span className="payment-cell-text">{text}</span>,
//         width: 100, // reduced
//       },
//       {
//         title: 'Description',
//         dataIndex: 'description',
//         render: (text) => <span className="payment-cell-text">{text}</span>,
//         width: 130, // reduced
//       },
//       {
//         title: 'Amount',
//         dataIndex: 'amount',
//         render: (val) => (
//           <strong className="payment-cell-amount">₹{val.toLocaleString()}</strong>
//         ),
//         width: 80,
//         align: 'right',
//       },
//       {
//         title: 'Method',
//         dataIndex: 'method',
//         render: (text) => <span className="payment-cell-text">{text}</span>,
//         width: 110, // reduced
//       },
//       {
//         title: 'Receipt',
//         key: 'receipt',
//         render: (_, record) => (
//           <TealButton
//             type="link"
//             icon={<DownloadOutlined />}
//             onClick={() => {
//               setPrintingReceipt({
//                 title: record.description,
//                 amount: record.amount,
//                 date: record.date,
//                 transactionId: record.transactionId,
//               });
//               setTimeout(() => reactToPrintInstance.print(), 100);
//             }}
//             style={{ padding: 0, fontSize: '12px', height: 'auto' }}
//           >
//             Download
//           </TealButton>
//         ),
//         width: 85,
//       },
//     ]}
//     pagination={false}
//     // ❌ Remove minWidth or set to something reasonable
//     style={{ 
//       minWidth: 'auto', // ← key change!
//       width: '100%',
//     }}
//     bordered={false}
//   />
// </div>

//       {/* Hidden Receipt */}
//       <div style={{ display: 'none' }}>
//         <ReceiptTemplate ref={receiptRef} data={printingReceipt} />
//       </div>

//       {/* Footer */}
//       <div style={{
//         marginTop: '32px',
//         padding: '16px',
//         background: '#003333',
//         borderRadius: '8px',
//         fontSize: '14px',
//         color: '#b2dfdb',
//         textAlign: 'center',
//       }}>
//         <p><strong>Need help?</strong> Contact: <a href="mailto:info@prefcol.com" style={{ color: '#a8e6cf' }}>info@prefcol.com</a></p>
//         <p>
//           <a href="#refund" style={{ color: '#a8e6cf', margin: '0 8px' }}>Refund Policy</a> •
//           <a href="#terms" style={{ color: '#a8e6cf', margin: '0 8px' }}>Terms</a> •
//           <a href="#privacy" style={{ color: '#a8e6cf', margin: '0 8px' }}>Privacy</a>
//         </p>
//       </div>

//       {/* Responsive Styles */}
//      <style>{`
//   /* Table container background */
//   .responsive-payment-table .ant-table {
//     background: transparent !important;
//   }

//   /* Table header row */
//   .responsive-payment-table .ant-table-thead > tr > th {
//     background: #004040 !important;
//     color: #e0f7fa !important;
//     font-weight: bold !important;
//     font-size: 13px !important;
//     padding: 8px 12px !important;
//     border-bottom: 1px solid #006064 !important;
//   }

//   /* Table body cells */
//   .responsive-payment-table .ant-table-tbody > tr > td {
//     background: #004040 !important;
//     color: #e0f7fa !important;
//     padding: 6px 12px !important;
//     border-bottom: 1px solid #005050 !important;
//   }

//   /* 🔹 Remove white background on hover & click */
//   .responsive-payment-table .ant-table-tbody > tr.ant-table-row:hover > td,
//   .responsive-payment-table .ant-table-tbody > tr.ant-table-row-active > td {
//     background: #005050 !important; /* Light teal on hover */
//   }

//   /* Optional: If row is selected (e.g., via rowSelection), keep consistent */
//   .responsive-payment-table .ant-table-tbody > tr.ant-table-row-selected > td {
//     background: #005555 !important;
//   }

//   /* Compact mobile view */
//   @media (max-width: 768px) {
//     .responsive-payment-table .ant-table-thead > tr > th,
//     .responsive-payment-table .ant-table-tbody > tr > td {
//       padding: 5px 8px !important;
//       font-size: 11px !important;
      
//     }
//     .responsive-payment-table .ant-btn-link {
//       font-size: 11px !important;
//       padding: 0 !important;
//       line-height: 1 !important;
//     }
//   }
// `}</style>
//     </div>
//   );
// }

// const ReceiptTemplate = React.forwardRef((props, ref) => {
//   const { data } = props;
//   if (!data) return null;

//   return (
//     <div ref={ref} style={{
//       padding: '40px',
//       fontFamily: 'Arial',
//       maxWidth: '600px',
//       margin: '0 auto',
//       border: '1px solid #006064',
//       backgroundColor: '#fff',
//       color: '#003333', 
//     }}>
//       <h2 style={{ textAlign: 'center', color: '#004d4d' }}>🎓 LearnX Academy</h2>
//       <h3 style={{ textAlign: 'center', color: '#006064' }}>Payment Receipt</h3>
//       <hr style={{ border: '1px dashed #008080' }} />

//       <table width="100%" style={{ margin: '20px 0', fontSize: '16px'}}>
//         <tbody>
//           <tr><td><strong>Course:</strong></td><td>{data.title || data.description}</td></tr>
//           <tr><td><strong>Date:</strong></td><td>{data.date || new Date().toLocaleDateString('en-IN')}</td></tr>
//           <tr><td><strong>Transaction ID:</strong></td><td>{data.transactionId}</td></tr>
//           <tr>
//             <td><strong>Amount Paid:</strong></td>
//             <td><strong style={{ color: '#004d4d' }}>₹{data.amount.toLocaleString('en-IN')}</strong></td>
//           </tr>
//         </tbody>
//       </table>

//       <hr style={{ border: '1px dashed #008080' }} />
//       <p style={{ fontSize: '12px', color: '#555', textAlign: 'center' }}>
//         Thank you for learning with us! This is a digital receipt. No signature required.
//       </p>
//     </div>
//   );
// });

// src/Student_Panel/pages/PaymentsTab.jsx
"use client";

import { Card, List, Button, Typography, Divider, Tag, Modal, Table } from "antd";
import { useState } from "react";
import { useReactToPrint } from 'react-to-print';
import { PrinterOutlined, DownloadOutlined, CheckCircleOutlined } from '@ant-design/icons';
import React from "react";
import {useGlobalStore}  from "../contexts/GlobalStore"; // ✅ NEW: import global store

const { Title, Text } = Typography;
const { confirm } = Modal;

export default function PaymentsTab() {
  const { courses, enrolledCourses } = useGlobalStore();
  const [printingReceipt, setPrintingReceipt] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const enrolledCourseData = enrolledCourses.map(id => {
    const course = courses.find(c => c.id === id);
    return {
      key: id,
      id,
      title: course?.title || "Unknown",
      category: course?.category || "Unknown",
      price: course?.price || 0,
      status: "paid",
      enrollmentDate: new Date().toISOString().split('T')[0],
      transactionId: `TXN-${Date.now()}`,
      access: "Lifetime",
    };
  });

  const totalPaid = enrolledCourseData.reduce((sum, c) => sum + c.price, 0);
  const totalDue = 0; // no pending in this model

  const handlePayNow = (course) => {
    confirm({
      title: `Pay ₹${course.price.toLocaleString()} for ${course.title}?`,
      content: 'You will gain immediate access upon payment.',
      okText: 'Proceed to Payment',
      cancelText: 'Cancel',
      onOk() {
        alert(`Redirecting to payment gateway for ₹${course.price.toLocaleString()}`);
      },
    });
  };

  const reactToPrintInstance = useReactToPrint({
    content: () => receiptRef.current,
    documentTitle: `Receipt-${printingReceipt?.id}`,
    onAfterPrint: () => setPrintingReceipt(null),
  });

  const getStatusTag = (status) => {
    const map = {
      paid: { color: 'success', text: 'Paid', icon: <CheckCircleOutlined /> },
      pending: { color: 'warning', text: 'Pending' },
      free: { color: 'default', text: 'Free' },
    };
    const { color, text, icon } = map[status] || { color: 'default', text: 'Unknown' };
    return <Tag color={color} icon={icon}>{text}</Tag>;
  };

  const TealButton = ({ children, onClick, loading, disabled, style, ...props }) => (
    <Button
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      style={{ backgroundColor: '#004d4d', borderColor: '#004d4d', color: 'white', fontWeight: '500', ...style }}
      {...props}
    >
      {children}
    </Button>
  );

  const receiptRef = React.createRef();

  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif', color: '#fff', background: '#003333', minHeight: '100vh' }}>
      <Title level={4} style={{ color: '#a8d8d8' }}>💳 Payments</Title>
      <Text type="secondary" style={{ color: '#d0f0f0', display: 'block', marginBottom: '24px' }}>Manage your course payments and receipts</Text>

      <div style={{ display: 'flex', gap: '16px', margin: '24px 0', flexWrap: 'wrap' }}>
        <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
          <Text strong style={{ color: '#e0f7fa' }}>Total Paid</Text>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#a8d8d8', marginTop: '4px' }}>
            ₹{totalPaid.toLocaleString()}
          </div>
        </Card>
        <Card style={{ minWidth: '180px', backgroundColor: '#005c5c', borderColor: '#008080' }}>
          <Text strong style={{ color: '#e0f7fa' }}>Amount Due</Text>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffcc80', marginTop: '4px' }}>
            ₹{totalDue.toLocaleString()}
          </div>
        </Card>
      </div>

      <Title level={5} style={{ color: '#a8e6cf' }}>🎓 My Course Invoices</Title>

<List
  dataSource={enrolledCourseData}
  renderItem={(course) => (
    <List.Item key={course.id}>
      <Card style={{ width: '100%', borderRadius: 8, backgroundColor: '#004040', borderColor: '#006064' }}>
        {/* ✅ Responsive container */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: windowWidth < 768 ? 'column' : 'row', // 👈 Stack on mobile
            justifyContent: 'space-between', 
            alignItems: windowWidth < 768 ? 'flex-start' : 'center',
            flexWrap: 'wrap', 
            gap: '16px',
            width: '100%'
          }}
        >
          {/* Course Info */}
          <div style={{ 
            flex: windowWidth < 768 ? '1 1 100%' : '1', 
            color: '#e0f7fa',
            minWidth: windowWidth < 768 ? '100%' : 'auto'
          }}>
            <Title level={5} style={{ margin: 0, color: '#a8e6cf', fontSize: '18px' }}>
              {course.title}
            </Title>
            <Text type="secondary" style={{ color: '#b2dfdb', display: 'block', marginTop: '4px' }}>
              {course.category} • Enrolled: {course.enrollmentDate} • Access: {course.access}
            </Text>
            {course.transactionId && (
              <div style={{ marginTop: 8 }}>
                <Text type="secondary" style={{ color: '#b2dfdb' }}>
                  Transaction ID: {course.transactionId}
                </Text>
              </div>
            )}
          </div>

          {/* Payment Actions */}
          <div style={{ 
            textAlign: windowWidth < 768 ? 'left' : 'right', 
            minWidth: windowWidth < 768 ? '100%' : '120px',
            display: 'flex',
            flexDirection: windowWidth < 768 ? 'column' : 'column',
            alignItems: windowWidth < 768 ? 'flex-start' : 'flex-end',
            gap: '8px'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#a8d8d8' }}>
              {course.price === 0 ? 'Free' : `₹${course.price.toLocaleString()}`}
            </div>
            {getStatusTag(course.status)}
            {course.status === 'paid' ? (
              <TealButton 
                size="small" 
                icon={<PrinterOutlined />} 
                style={{ marginTop: 4 }} 
                onClick={() => {
                  setPrintingReceipt(course);
                  setTimeout(() => reactToPrintInstance.print(), 100);
                }}
              >
                Receipt
              </TealButton>
            ) : course.status === 'pending' && (
              <TealButton 
                type="primary" 
                size="small" 
                style={{ marginTop: 4 }} 
                onClick={() => handlePayNow(course)}
              >
                Pay Now
              </TealButton>
            )}
          </div>
        </div>
      </Card>
    </List.Item>
  )}
/>

      {/* Hidden Receipt */}
      <div style={{ display: 'none' }}>
        <ReceiptTemplate ref={receiptRef} data={printingReceipt} />
      </div>
    </div>
  );
}

const ReceiptTemplate = React.forwardRef((props, ref) => {
  const { data } = props;
  if (!data) return null;

  return (
    <div ref={ref} style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto', border: '1px solid #006064', backgroundColor: '#fff', color: '#003333' }}>
      <h2 style={{ textAlign: 'center', color: '#004d4d' }}>🎓 LearnX Academy</h2>
      <h3 style={{ textAlign: 'center', color: '#006064' }}>Payment Receipt</h3>
      <hr style={{ border: '1px dashed #008080' }} />
      <table width="100%" style={{ margin: '20px 0', fontSize: '16px'}}>
        <tbody>
          <tr><td><strong>Course:</strong></td><td>{data.title}</td></tr>
          <tr><td><strong>Date:</strong></td><td>{data.enrollmentDate}</td></tr>
          <tr><td><strong>Transaction ID:</strong></td><td>{data.transactionId}</td></tr>
          <tr><td><strong>Amount Paid:</strong></td><td><strong style={{ color: '#004d4d' }}>₹{data.price.toLocaleString()}</strong></td></tr>
        </tbody>
      </table>
      <hr style={{ border: '1px dashed #008080' }} />
      <p style={{ fontSize: '12px', color: '#555', textAlign: 'center' }}>Thank you for learning with us!</p>
    </div>
  );
});