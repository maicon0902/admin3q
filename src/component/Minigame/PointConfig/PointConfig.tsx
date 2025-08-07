"use client";
import React from "react";
import { Form, InputNumber, Row, Col, Typography, Button } from "antd";

const { Title } = Typography;
const PointConfig = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted:", values);
  };

  const vip_list = [
    {
      label: "VIP 0",
      name: "vip0",
    },
    {
      label: "VIP 1",
      name: "vip1",
    },
    {
      label: "VIP 2",
      name: "vip2",
    },
    {
      label: "VIP 3",
      name: "vip3",
    },
    {
      label: "VIP 4",
      name: "vip4",
    },
    {
      label: "VIP 5",
      name: "vip5",
    },
    {
      label: "VIP 6",
      name: "vip6",
    },
    {
      label: "VIP 7",
      name: "vip7",
    },
  ];

  return (
    <Form
      form={form}
      layout="horizontal"
      onFinish={onFinish}
      style={{
        margin: "0 auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
      }}
    >
      <Row gutter={[24, 24]}>
        <Col span={2}>
        <Title level={5}>Vip</Title>
        </Col>
        <Col span={4}>
        <Title level={5}>Điểm max</Title>
        </Col>
        {vip_list.map((e, i) => (
          <Col span={24}>
            <Form.Item key={i} label={e.label} name={e.name} initialValue={10}>
              <InputNumber style={{ width: "30%" }} />
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PointConfig;
