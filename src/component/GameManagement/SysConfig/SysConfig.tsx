"use client";

import React, { useState } from "react";
import { Table, Input, Switch, Button, Typography, Form, Row, Col } from "antd";
import EvoCard from "@/component/common/EvoCard/EvoCard";

const { Title, Text } = Typography;

export default function GridSettings() {
  const [form] = Form.useForm();
  const [isGameOn, setIsGameOn] = useState(true);
  const [grid, setGrid] = useState({
    col: 5,
    row: 4,
    combo: 1024,
  });

  const data = [
    {
      key: "1",
      column: grid.col,
      row: grid.row,
      combination: grid.combo,
    },
  ];

  return (
    <EvoCard>
      <Form form={form}>
        <Row>
          <Col>
            <Form.Item name="isGameOn" label="Bật tắt game">
              <Switch checked={isGameOn} onChange={setIsGameOn} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Title level={4}>Cài đặt lưới</Title>
          </Col>
          <Col span={24}>
            <Table
              pagination={false}
              bordered
              columns={[
                {
                  title: "Cột",
                  dataIndex: "column",
                  align: "center",
                  render: (value) => (
                    <Input defaultValue={value} type="number" step="0.01" />
                  ),
                },
                {
                  title: "Hàng",
                  dataIndex: "row",
                  align: "center",
                  render: (value) => (
                    <Input defaultValue={value} type="number" step="0.01" />
                  ),
                },
                {
                  title: "Tổ hợp",
                  dataIndex: "combination",
                  align: "center",
                  render: (value) => (
                    <Input defaultValue={value} type="number" step="0.01" />
                  ),
                },
              ]}
              dataSource={data}
              size="small"
            />
          </Col>
          <Col span={24}>
            <Button type="primary">Lưu</Button>
          </Col>
        </Row>
      </Form>
    </EvoCard>
  );
}
