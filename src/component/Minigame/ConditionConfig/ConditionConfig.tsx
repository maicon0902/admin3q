"use client";

import React from "react";
import {
  Form,
  InputNumber,
  DatePicker,
  Button,
  Typography,
  Row,
  Col,
} from "antd";

const { Title } = Typography;

const betTypes = ["BẮN CÁ", "SLOTS", "CASINO", "GAME VIỆT", "THỂ THAO"];

const ConditionConfig = () => {
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
        <Col span={12}>
          <Form.Item
            label="Số lượt trong ngày"
            name="dailyAttempts"
            initialValue={10}
          >
            <InputNumber min={0} max={10} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Giới hạn nạp trong ngày"
            name="dailyDepositLimit"
            initialValue={500}
          >
            <InputNumber min={0} max={10} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Title level={5}>Doanh thu cược</Title>
      <Row gutter={16}>
        {betTypes.map((type) => (
          <Col span={12} key={type}>
            <Form.Item
              label={type}
              name={["betLimits", type]}
              initialValue={500}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Form.Item label="Thời gian bắt đầu get dữ liệu" name="startDate">
            <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Thời gian kết thúc get dữ liệu" name="endDate">
            <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item style={{ textAlign: "right" }}>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConditionConfig;
