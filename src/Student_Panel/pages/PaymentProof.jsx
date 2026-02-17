import { useState, useEffect } from "react";
import { Card, Table, Tag, Button, Space, Empty, Modal, message, Spin } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { fetchPaymentProofs, downloadPaymentProofFile } from "../services/studentPortalApi";

const MOCK_PROOFS = [
  { id: "1", date: "2024-01-15", amount: "$499", course: "Web Development Bootcamp", status: "Verified", receiptId: "REC-001" },
  { id: "2", date: "2024-02-20", amount: "$299", course: "Advanced JavaScript", status: "Verified", receiptId: "REC-002" },
];

const PaymentProof = () => {
  const [payments, setPayments] = useState(MOCK_PROOFS);
  const [loading, setLoading] = useState(true);
  const [viewModal, setViewModal] = useState({ open: false, record: null });

  useEffect(() => {
    fetchPaymentProofs()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setPayments(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleVerify = (record) => {
    setViewModal({ open: true, record });
  };

  const handleDownload = async (record) => {
    const proofId = record.id || record.receiptId;
    const ok = await downloadPaymentProofFile(proofId, `payment-proof-${record.receiptId || proofId}`);
    if (ok) {
      message.success("Download started");
      return;
    }
    const text = `Payment Proof - ${record.receiptId}\nDate: ${record.date}\nAmount: ${record.amount}\nCourse: ${record.course}\nStatus: ${record.status}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `payment-proof-${record.receiptId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    message.success("Download started");
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Verified" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button icon={<EyeOutlined />} type="primary" size="small" onClick={() => handleVerify(record)}>
            Verify
          </Button>
          <Button icon={<DownloadOutlined />} size="small" onClick={() => handleDownload(record)}>
            Download
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Card title="Payment Proofs" bordered={false}>
        {loading ? (
          <div style={{ textAlign: "center", padding: 24 }}><Spin /></div>
        ) : payments.length > 0 ? (
          <Table dataSource={payments} columns={columns} rowKey="id" pagination={false} />
        ) : (
          <Empty description="No payment proofs found" />
        )}
      </Card>
      <Modal
        title="Payment Details"
        open={viewModal.open}
        onCancel={() => setViewModal({ open: false, record: null })}
        footer={[
          <Button key="close" onClick={() => setViewModal({ open: false, record: null })}>Close</Button>,
          viewModal.record && (
            <Button key="download" type="primary" icon={<DownloadOutlined />} onClick={() => handleDownload(viewModal.record)}>
              Download
            </Button>
          ),
        ]}
      >
        {viewModal.record && (
          <div>
            <p><strong>Receipt ID:</strong> {viewModal.record.receiptId}</p>
            <p><strong>Date:</strong> {viewModal.record.date}</p>
            <p><strong>Amount:</strong> {viewModal.record.amount}</p>
            <p><strong>Course:</strong> {viewModal.record.course}</p>
            <p><strong>Status:</strong> <Tag color={viewModal.record.status === "Verified" ? "green" : "orange"}>{viewModal.record.status}</Tag></p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PaymentProof;
