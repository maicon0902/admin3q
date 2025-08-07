"use client";

import React, { useState } from "react";
import { Form, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import EvoSearch from "@/component/common/EvoSearch/EvoSearch";
import EvoCard from "@/component/common/EvoCard/EvoCard";

const { Text } = Typography;

const mockData = [
  {
    key: "1",
    operator: "2q",
    username: "BCGDF",
    amount: "500đ",
    date: "06/02/2025",
    status: "Thành công",
  },
];

const columns: ColumnsType<any> = [
  { title: "STT", dataIndex: "key", key: "key" },
  { title: "Nhà điều hành", dataIndex: "operator", key: "operator" },
  { title: "Username", dataIndex: "username", key: "username" },
  { title: "Số điểm nhận được", dataIndex: "amount", key: "amount" },
  { title: "Thời gian", dataIndex: "date", key: "date" },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <>
        <Tag
          color={status.toLowerCase() === "thành công" ? "geekblue" : "volcano"}
        >
          {status}
        </Tag>
      </>
    ),
  },
];

const PlayHistory = () => {
  const [form] = Form.useForm();


  const [data, setData] = useState(mockData);

  const handleSearch = () => {
    console.log("Searching with filters:");
  };

  const handleExport = () => {
    console.log("Exporting to Excel...");
  };

  return (
    <div>
      <EvoSearch
        form={form}
        handleExport={handleExport}
        handleSearch={handleSearch}
        isShowStatus={true}
      />

      <EvoCard>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ total: 227, pageSize: 10, showSizeChanger: true }}
          footer={() => <Text>Tổng cộng 227 tài khoản</Text>}
          bordered
        />
      </EvoCard>
    </div>
  );
};

export default PlayHistory;
