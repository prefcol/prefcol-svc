import { useState, useEffect } from "react";
import { Card, Table, Tag, Button, Space, Empty, message, Spin } from "antd";
import { DownloadOutlined, PrinterOutlined } from "@ant-design/icons";
import { fetchInvoices, downloadInvoiceFile } from "../services/studentPortalApi";

const MOCK_INVOICES = [
  { id: "INV-001", date: "2024-01-15", amount: "$499", course: "Web Development Bootcamp", status: "Paid", dueDate: "2024-01-20" },
  { id: "INV-002", date: "2024-02-20", amount: "$299", course: "Advanced JavaScript", status: "Paid", dueDate: "2024-02-25" },
];

const Invoice = () => {
  const [invoices, setInvoices] = useState(MOCK_INVOICES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvoices()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setInvoices(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleDownload = async (record) => {
    const ok = await downloadInvoiceFile(record.id, `invoice-${record.id}`);
    if (ok) {
      message.success("Invoice download started");
      return;
    }
    const text = `Invoice ${record.id}\nDate: ${record.date}\nAmount: ${record.amount}\nCourse: ${record.course}\nStatus: ${record.status}\nDue: ${record.dueDate}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `invoice-${record.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    message.success("Invoice download started");
  };

  const handlePrint = () => {
    window.print();
    message.success("Print dialog opened");
  };

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "id",
      key: "id",
    },
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
        <Tag color={status === "Paid" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button icon={<DownloadOutlined />} size="small" onClick={() => handleDownload(record)}>
            Download
          </Button>
          <Button icon={<PrinterOutlined />} size="small" onClick={handlePrint}>
            Print
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Card title="Invoices" bordered={false}>
        {loading ? (
          <div style={{ textAlign: "center", padding: 24 }}><Spin /></div>
        ) : invoices.length > 0 ? (
          <Table dataSource={invoices} columns={columns} rowKey="id" pagination={false} />
        ) : (
          <Empty description="No invoices found" />
        )}
      </Card>
    </div>
  );
};

export default Invoice;
