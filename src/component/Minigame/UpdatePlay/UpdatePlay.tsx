'use client';

import React from 'react';
import { Form, Input, Button, Typography, Row, Col, InputNumber } from 'antd';

const { Title } = Typography;

const UpdatePlay = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div
      style={{
        background: '#fff',
        padding: 24,
        borderRadius: 4,
        margin: '0 auto',
      }}
    >
      <Title level={5} style={{ marginBottom: 24 }}>
        Cập nhật lượt chơi
      </Title>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập username' }]}
            >
              <Input placeholder="Nhập username" />
            </Form.Item>
          </Col>

          <Col span={12}>
          <Form.Item name='playCount' initialValue={10}>
              <InputNumber placeholder='Nhập lượt chơi' style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePlay;
