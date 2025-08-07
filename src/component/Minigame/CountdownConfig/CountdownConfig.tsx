"use client";

import React from "react";
import {
  Form,
  Switch,
  DatePicker,
  Button,
  Row,
  Col,
  InputNumber,
} from "antd";

const CountdownConfig = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted:", values);
  };

  return (
    <div
      style={{
        background: "#fff",
        margin: "0 auto",
        padding: 24,
        border: "1px solid #d9d9d9",
        borderRadius: 4,
      }}
    >
      <Form
        form={form}
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{ countdown: 20, gameEnabled: true }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col span={12}>
            <Form.Item label="Điều chỉnh thời gian đếm ngược" name="countdown">
              <InputNumber
                placeholder="Nhập thời gian"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Bật tắt game"
              name="gameEnabled"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Thời gian bắt đầu sự kiện" name="startTime">
              <DatePicker format="DD/MM/YYYY" style={{ width: "30%" }} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Thời gian kết thúc sự kiện" name="endTime">
              <DatePicker format="DD/MM/YYYY" style={{ width: "30%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CountdownConfig;
