"use client";

import React, { useState } from "react";
import { Button, Form, Popover, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import EvoSearch from "@/component/common/EvoSearch/EvoSearch";
import EvoCard from "@/component/common/EvoCard/EvoCard";
import { MoreOutlined } from "@ant-design/icons";
import AdminDialog from "../AdminDialog/AdminDialog";

const { Text } = Typography;

const mockData = [
  {
    key: "1",
    username: "BCGDF",
    operator: "BCGDF",
    status: "hoạt động",
    role: 'admin',
    createTime: '06/02/2025',
    updateTime: '06/02/2025',
    userUpdate: 'admin',
  },
];


const AdminList = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(mockData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editUser, setEditUser] = useState<any>(null);
  

  const columns: ColumnsType<any> = [
    { title: "STT", dataIndex: "key", key: "key" },
    { title: "Nhà điều hành", dataIndex: "operator", key: "operator" },
    { title: "Username", dataIndex: "username", key: "username" },
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
    { title: "Vai trò", dataIndex: "role", key: "role" },
    { title: "Thời gian tạo", dataIndex: "createTime", key: "createTime" },
    { title: "Thời gian cập nhật", dataIndex: "updateTime", key: "updateTime" },
    { title: "Người cập nhật", dataIndex: "userUpdate", key: "userUpdate" },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => {
        const content = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Button type="link" onClick={() => console.log('Khoá', record)}>Khóa</Button>
            <Button type="link" onClick={() => handleEdit(record)}>Đổi vai trò</Button>
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

  const handleCreate = (data: any) => {
    console.log('Tạo admin với dữ liệu:', data);
    setIsModalVisible(false);
  };

  const handleSearch = () => {
    console.log("Searching with filters:");
  };

  const handleExport = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (record: any) => {
    setEditUser(record);
    setIsModalVisible(true);
  };

  return (
    <div>
      <EvoSearch
        form={form}
        handleExport={handleExport}
        handleSearch={handleSearch}
        isShowStatus={true}
        isUserPage={true}
        isAdminPage={true}
      />
      <AdminDialog
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onCreate={handleCreate}
        editUser={editUser}
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

export default AdminList;