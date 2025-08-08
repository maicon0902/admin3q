"use client";

import React, { useState } from "react";
import { Table, Button, Space, Pagination, Form } from "antd";
import type { ColumnsType } from "antd/es/table";
import EvoCard from "../common/EvoCard/EvoCard";
import OperatorModal from "./OperatorModal";

interface DataType {
  key: number;
  operator: string;
  registerTime: string;
  updateTime: string;
  updatedBy: string;
}

const OperatorManagement: React.FC = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<DataType[]>([
    {
      key: 1,
      operator: "ABC",
      registerTime: "25/04/2025",
      updateTime: "25/04/2025",
      updatedBy: "superadmin",
    },
  ]);

  const [page, setPage] = useState(1);

  const columns: ColumnsType<DataType> = [
    { title: "STT", dataIndex: "key", key: "key", width: 60 },
    { title: "Nhà điều hành", dataIndex: "operator", key: "operator" },
    {
      title: "Thời gian đăng ký",
      dataIndex: "registerTime",
      key: "registerTime",
    },
    { title: "Thời gian cập nhật", dataIndex: "updateTime", key: "updateTime" },
    { title: "Người cập nhật", dataIndex: "updatedBy", key: "updatedBy" },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button size="small" type="default" danger={false} onClick={() => setVisible(true)}>
            Edit
          </Button>
          <Button size="small" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Form form={form}>
      <OperatorModal
        visible={visible}
        onCancel={() => setVisible(false)}
        edit={null}
      />
      <EvoCard>
        {/* Nút tạo mới */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 16,
          }}
        >
          <Button
            type="primary"
            onClick={() => setVisible(true)}
          >
            Tạo mới
          </Button>
        </div>

        {/* Bảng dữ liệu */}
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          locale={{ emptyText: "Không có dữ liệu" }}
        />

        {/* Phân trang */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Tổng cộng 227 tài khoản</div>
          <Pagination
            current={page}
            total={227}
            pageSize={10}
            onChange={(p) => setPage(p)}
            showSizeChanger
            pageSizeOptions={["10", "20", "50"]}
          />
        </div>
      </EvoCard>
    </Form>
  );
};

export default OperatorManagement;
