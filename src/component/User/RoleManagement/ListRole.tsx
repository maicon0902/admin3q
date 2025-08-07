import EvoCard from "@/component/common/EvoCard/EvoCard";
import { Button, Pagination, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";

interface RoleData {
  key: string;
  operator: string;
  roleName: string;
  updatedAt: string;
  updatedBy: string;
}

interface Props {
  setEdit: any;
  setIsOpenModal: any;
}
const ListRole = ({setEdit, setIsOpenModal}: Props) => {
  const [data, setData] = useState<RoleData[]>([
    {
      key: "1",
      operator: "okwin",
      roleName: "Xuất excel",
      updatedAt: "27/06/2025",
      updatedBy: "admin",
    },
    {
      key: "2",
      operator: "okvip",
      roleName: "Khoá user",
      updatedAt: "02/06/2025",
      updatedBy: "admin",
    },
    {
      key: "3",
      operator: "fb88",
      roleName: "Khoá admin",
      updatedAt: "30/05/2025",
      updatedBy: "admin",
    },
    {
      key: "4",
      operator: "f8",
      roleName: "Tạo mới",
      updatedAt: "27/05/2025",
      updatedBy: "admin",
    },

  ]);

  const columns: ColumnsType<RoleData> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: 60,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Nhà điều hành",
      dataIndex: "operator",
      key: "operator",
    },
    {
      title: "Tên vai trò",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "Thời gian cập nhật",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Người cập nhật",
      dataIndex: "updatedBy",
      key: "updatedBy",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => {
        return (
          <Space>
            <Button type="primary" size="small" onClick={() => handleEdit(record)}>
              Chỉnh sửa
            </Button>
            <Button type="default" size="small" onClick={() => handleEdit(record)}>
              Xem
            </Button>
          </Space>
        )
      } 
    },
  ];

  const handleEdit = (record: any) => {
    setEdit(record);
    setIsOpenModal(true);
  };

  return (
    <EvoCard>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
        bordered
      />

      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Tổng cộng {data.length} tài khoản</span>
        <Pagination defaultCurrent={1} total={227} pageSize={10} />
      </div>
    </EvoCard>
  );
};

export default ListRole;
