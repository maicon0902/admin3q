"use client";

import React from "react";
import { Table, Input, Card, Row, Col, Button, Form } from "antd";

const symbols = [
  {
    name: "Tượng thần Anubis",
    payouts: [
      { combo: 5, rate: 2.5 },
      { combo: 4, rate: 1.5 },
      { combo: 3, rate: 0.5 },
    ],
  },
  {
    name: "Bình vàng",
    payouts: [
      { combo: 5, rate: 1.5 },
      { combo: 4, rate: 0.9 },
      { combo: 3, rate: 0.3 },
    ],
  },
  {
    name: "Q",
    payouts: [
      { combo: 5, rate: 0.25 },
      { combo: 4, rate: 0.15 },
      { combo: 3, rate: 0.05 },
    ],
  },
  {
    name: "Xu Ai Cập",
    payouts: [
      { combo: 5, rate: 0.25 },
      { combo: 4, rate: 0.15 },
      { combo: 3, rate: 0.05 },
    ],
  },
  {
    name: "Mắt thần Horus",
    payouts: [
      { combo: 5, rate: 0.25 },
      { combo: 4, rate: 0.15 },
      { combo: 3, rate: 0.05 },
    ],
  },
  {
    name: "Bọ hung",
    payouts: [
      { combo: 5, rate: 0.25 },
      { combo: 4, rate: 0.15 },
      { combo: 3, rate: 0.05 },
    ],
  },
  {
    name: "K",
    payouts: [
      { combo: 5, rate: 0.25 },
      { combo: 4, rate: 0.15 },
      { combo: 3, rate: 0.05 },
    ],
  },
  {
    name: "J",
    payouts: [
      { combo: 5, rate: 0.25 },
      { combo: 4, rate: 0.15 },
      { combo: 3, rate: 0.05 },
    ],
  },
];

const scatter = {
  appearanceRate: 0.01,
  dailyCount: 5,
  combo: 3,
  freeSpins: 12,
  extraPerScatter: 2,
};

const extraRates = {
  gold: 0.8,
  wild: 0.5,
};

const profits = {
  system: 0.1,
  min: 0.05,
};

const WheelOfFortune: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <Row gutter={[16, 16]}>
        {symbols.map((symbol, index) => (
          <Col span={8} key={index}>
            <Card title={symbol.name}>
              <Table
                pagination={false}
                bordered
                columns={[
                  {
                    title: "TỔ HỢP XUẤT HIỆN",
                    dataIndex: "combo",
                    align: "center",
                  },
                  {
                    title: "TỶ LỆ CƯỢC",
                    dataIndex: "rate",
                    align: "center",
                    render: (value) => (
                      <Input defaultValue={value} type="number" step="0.01" />
                    ),
                  },
                ]}
                dataSource={symbol.payouts.map((p) => ({
                  key: p.combo,
                  combo: p.combo,
                  rate: p.rate,
                }))}
                size="small"
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Scatter">
            <Table
              pagination={false}
              bordered
              columns={[
                { title: "Tỉ lệ xuất hiện", dataIndex: "appearanceRate", render: (v) => <Input defaultValue={v} type="number" step="0.01" /> },
                { title: "Số lần xuất hiện trong ngày", dataIndex: "dailyCount", render: (v) => <Input defaultValue={v} type="number" /> },
                { title: "Tổ hợp xuất hiện", dataIndex: "combo", render: (v) => <Input defaultValue={v} type="number" /> },
                { title: "Số lượt quay free", dataIndex: "freeSpins", render: (v) => <Input defaultValue={v} type="number" /> },
                { title: "Số lượt thêm cho mỗi Scatter xuất hiện", dataIndex: "extraPerScatter", render: (v) => <Input defaultValue={v} type="number" /> },
              ]}
              dataSource={[{ key: 1, ...scatter }]}
              size="small"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}>
          <Card title="Vàng">
            <Input defaultValue={extraRates.gold} type="number" step="0.01" />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Wild">
            <Input defaultValue={extraRates.wild} type="number" step="0.01" />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}>
          <Card title="Lợi nhuận">
            <Table
              pagination={false}
              bordered
              columns={[
                { title: "Lợi nhuận hệ thống", dataIndex: "system", render: (v) => <Input defaultValue={v} type="number" step="0.01" /> },
                { title: "Lợi nhuận tối thiểu", dataIndex: "min", render: (v) => <Input defaultValue={v} type="number" step="0.01" /> },
              ]}
              dataSource={[{ key: 1, ...profits }]}
              size="small"
            />
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: 20, textAlign: "center" }}>
        <Button type="primary">Lưu</Button>
      </div>
    </Form>
  );
};

export default WheelOfFortune;
