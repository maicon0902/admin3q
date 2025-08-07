"use client";

import React from "react";
import { Form, Button, Row, Col, InputNumber } from "antd";

const QuantityConfig = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        margin: "0 auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
      }}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Form.Item
            label="Số lượt bóng mỗi lượt"
            name="quantityBall"
            initialValue={10}
          >
            <InputNumber style={{ width: "30%" }} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Tốc độ rơi" name="fallingSpeed" initialValue={500}>
            <InputNumber style={{ width: "30%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuantityConfig;
