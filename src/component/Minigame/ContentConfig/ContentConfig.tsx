"use client";

import React, { useState } from "react";
import { Tabs, Input, Button, Space, Form } from "antd";

const { TextArea } = Input;

const ContentConfig = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState("thele");

  const onFinish = (values: any) => {
    console.log("Nội dung:", values.content);
  };

  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        background: '#fff',
        padding: 16,
        borderRadius: 4,
        margin: "0 auto",
      }}
    >
      <Tabs
        defaultActiveKey="thele"
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: "thele",
            label: (
              <span
                style={{ color: activeTab === "thele" ? "#722ED1" : "inherit" }}
              >
                Thể lệ
              </span>
            ),
          },
          { key: "luatchoi", label: "Luật chơi" },
        ]}
        tabBarStyle={{ marginBottom: 16 }}
      />

      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
        >
          <TextArea
            placeholder="Nhập nội dung"
            autoSize={{ minRows: 6 }}
            style={{ resize: "none", borderRadius: 4 }}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "right" }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
            <Button onClick={() => form.resetFields()}>Đóng</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContentConfig;
