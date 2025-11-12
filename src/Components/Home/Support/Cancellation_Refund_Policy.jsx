import React from 'react';

import { Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;
const Cancellation_Refund_Policy = () => {
  return (
    <div style={{
      minHeight: '80vh',
      backgroundColor: '#f0f2f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
      
 <Title level={2} style={{ color: "#006666" }}>Cancellation and Refund Policy</Title>
      <p className="text-gray-600 mb-4">
        We understand that plans can change. That’s why we offer a flexible cancellation policy:
      </p>

      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
        <li>
          <span className="font-semibold text-gray-700">Free Cancellation:</span> You may cancel your booking up to 1 day (24 hours) before the scheduled start time and receive a full refund.
        </li>
        <li>
          <span className="font-semibold text-gray-700">No Refunds for Late Cancellations:</span> Cancellations made less than 24 hours before the scheduled start time are not eligible for a refund.
        </li>
        <li>
          <span className="font-semibold text-gray-700">How to Cancel:</span> To cancel your booking, please contact us via <span className="italic">[insert contact method, e.g., email, phone, or website]</span> and provide your booking details.
        </li>
      </ul>

      <p className="text-gray-600">
        Thank you for choosing us. We look forward to serving you!
      </p>
      </div>
      </div>
    
  );
};

export default Cancellation_Refund_Policy;
