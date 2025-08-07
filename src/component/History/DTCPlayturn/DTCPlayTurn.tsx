"use client";

import React, { useState } from "react";
import { Form, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import EvoSearch from "@/component/common/EvoSearch/EvoSearch";
import EvoCard from "@/component/common/EvoCard/EvoCard";

const { Text } = Typography;

const columns: ColumnsType<any> = [
  { title: "STT", dataIndex: "key", key: "key" },
  { title: "Nhà điều hành", dataIndex: "operator", key: "operator" },
  { title: "Username", dataIndex: "username", key: "username" },
  {
    title: "Giá trị nạp trong ngày",
    dataIndex: "dailyRecharge",
    key: "dailyRecharge",
  },
  { title: "DTC bắn cá", dataIndex: "dtcFish", key: "dtcFish" },
  { title: "DTC SLOT", dataIndex: "dtcSLOT", key: "dtcSLOT" },
  { title: "DTC Casino", dataIndex: "dtcCasino", key: "dtcCasino" },
  {
    title: "DTC game việt",
    dataIndex: "dtcVietnameseGame",
    key: "dtcVietnameseGame",
  },
  { title: "DTC thể thao", dataIndex: "dtcSport", key: "dtcSport" },
  {
    title: "DTC còn lại sau khi cộng lượt (Bắn cá)",
    dataIndex: "dtcRenamingFish",
    key: "dtcRenamingFish",
  },
  {
    title: "DTC còn lại sau khi cộng lượt (SLOT)",
    dataIndex: "dtcRenamingFishSlot",
    key: "dtcRenamingFishSlot",
  },
  {
    title: "DTC còn lại sau khi cộng lượt (Casino)",
    dataIndex: "dtcRenamingCasino",
    key: "dtcRenamingCasino",
  },
  {
    title: "DTC còn lại sau khi cộng lượt (Game Việt)",
    dataIndex: "dtcRenamingVietnameseGame",
    key: "dtcRenamingVietnameseGame",
  },
  {
    title: "DTC còn lại sau khi cộng lượt (Thể thao)",
    dataIndex: "dtcRenamingSport",
    key: "dtcRenamingSport",
  },
  { title: "Lượt chơi được cộng", dataIndex: "playAdded", key: "playAdded" },
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

const mockData = [
  {
    key: "1",
    operator: "abc",
    username: "BCGDF",
    dailyRecharge: "10",
    dtcFish: "10",
    dtcSLOT: "10",
    dtcCasino: "10",
    dtcVietnameseGame: "10",
    dtcSport: "10",
    dtcRenamingFish: "10",
    dtcRenamingFishSlot: "10",
    dtcRenamingCasino: "10",
    dtcRenamingVietnameseGame: "10",
    dtcRenamingSport: "10",
    playAdded: "10",
    date: "06/02/2025",
    status: "Thành công",
  },
];

const DTCPlayturn = () => {
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
          scroll={{ x: 'max-content' }}
        />
      </EvoCard>
    </div>
  );
};

export default DTCPlayturn;
