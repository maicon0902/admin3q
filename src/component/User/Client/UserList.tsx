"use client";

import React, { useState } from "react";
import { Button, Form, Popover, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import EvoSearch from "@/component/common/EvoSearch/EvoSearch";
import EvoCard from "@/component/common/EvoCard/EvoCard";
import { MoreOutlined } from "@ant-design/icons";

const { Text } = Typography;

const columns: ColumnsType<any> = [
  { title: "STT", dataIndex: "key", key: "key" },
  { title: "Nhà điều hành", dataIndex: "operator", key: "operator" },
  { title: "Username", dataIndex: "username", key: "username" },
  { title: "Thời gian", dataIndex: "date", key: "date" },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <>
        <Tag
          color={status.toLowerCase() === "hoạt động" ? "geekblue" : "volcano"}
        >
          {status}
        </Tag>
      </>
    ),
  },
  {
    title: 'Hành động',
    key: 'action',
    render: (_, record) => {
      const content = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button type="link" onClick={() => console.log('Khoá', record)}>Khóa</Button>
          <Button type="link" onClick={() => console.log('Lịch sử chơi', record)}>Xem lịch sử chơi</Button>
        </div>
      );

      return (
        <Popover
          content={content}
          trigger="hover"
          placement="left"
        >
          <Button icon={<MoreOutlined />} />
        </Popover>
      );
    },
  },
];

const mockData = [
  {
    key: "1",
    username: "BCGDF",
    operator: "BCGDF",
    date: "06/02/2025",
    status: "hoạt động",
    numberOfViewRecive: "10",
    numberOfViewPlay: "10",
    numberOfTurnRenaming: "10",
  },
];


const UserList = () => {
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
        isUserPage={true}
      />

      <EvoCard>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ total: 227, pageSize: 10, showSizeChanger: true }}
          footer={() => <Text>Tổng cộng 227 tài khoản</Text>}
          bordered
          scroll={{ x: 'max-content' }}
        />
      </EvoCard>
    </div>
  )
}

export default UserList;