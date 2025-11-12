import React from 'react';
import { Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

const Shipping_Delivery_Policy = () => {
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
      <Title level={2} style={{ color: "#006666" }}>Shipping and Delivery Policy</Title>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Delivery Method:</h2>
        <p className="text-gray-600 mt-1">
          All our content is delivered digitally. No physical shipping is required.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Delivery Time:</h2>
        <p className="text-gray-600 mt-1">
          Once your payment has been successfully completed, access to the pre-recorded video content will be granted immediately or within a few minutes. You will receive an email confirmation with access details.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Access Instructions:</h2>
        <p className="text-gray-600 mt-1">
          You will be able to access the content via our Student Portal Dashboard. Please ensure your email address is entered correctly at the time of purchase.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700">Support:</h2>
        <p className="text-gray-600 mt-1">
          If you do not receive your access email or experience any issues, please contact us at <a href="mailto:info@prefcol.com" className="text-blue-600 hover:underline">info@prefcol.com</a> and we will assist you promptly.
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default Shipping_Delivery_Policy;
