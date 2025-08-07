"use client";

import React, { useState } from "react";
import { Form, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import EvoSearch from "@/component/common/EvoSearch/EvoSearch";
import EvoCard from "@/component/common/EvoCard/EvoCard";

const { Text } = Typography;

const columns: ColumnsType<any> = [
  { title: "STT", dataIndex: "key", key: "key" },
  { title: "Username", dataIndex: "username", key: "username" },
  { title: "Thời gian", dataIndex: "date", key: "date" },
  { title: "số lượt đã nhận", dataIndex: "numberOfViewRecive", key: "numberOfViewRecive" },
  { title: "Số lượt đã chơi", dataIndex: "numberOfViewPlay", key: "numberOfViewPlay" },
  { title: "Số lượt còn lại", dataIndex: "numberOfTurnRenaming", key: "numberOfTurnRenaming" },
];

const mockData = [
  {
    key: "1",
    username: "BCGDF",
    date: "06/02/2025",
    numberOfViewRecive: "10",
    numberOfViewPlay: "10",
    numberOfTurnRenaming: "10",
  },
];


const CurrentPlay = () => {
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
        isShowStatus={false}
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
  )
}

export default CurrentPlay