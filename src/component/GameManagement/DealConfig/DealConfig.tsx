'use client';
import EvoCard from '@/component/common/EvoCard/EvoCard';
import { Button, Form, Row, Select } from 'antd'
import React from 'react'

const DealConfig = () => {
  const [form] = Form.useForm();

  const dealOptions = [
    { label: "2,000", value: "2000" },
    { label: "3,000", value: "3000" },
    { label: "4,000", value: "4000" },
    { label: "6,000", value: "6000" },
    { label: "8,000", value: "8000" },
    { label: "10,000", value: "10000" },
    { label: "12,000", value: "12000" },
    { label: "14,000", value: "14000" },
    { label: "16,000", value: "16000" },
    { label: "20,000", value: "20000" },
    { label: "30,000", value: "30000" },
    { label: "40,000", value: "40000" },
    { label: "50,000", value: "50000" },
    { label: "80,000", value: "80000" },
    { label: "100,000", value: "100000" },
    { label: "150,000", value: "150000" },
    { label: "200,000", value: "200000" },
    { label: "250,000", value: "250000" },
    { label: "300,000", value: "300000" },
    { label: "350,000", value: "350000" },
    { label: "400,000", value: "400000" },
    { label: "450,000", value: "450000" },
    { label: "500,000", value: "500000" },
  ];

  return (
    <EvoCard>
      <Form form={form} layout="vertical">
      <Row>
        <Form.Item
          label="Mức cược"
          name="operator"
          style={{ width: "100%" }}
          rules={[
            { required: true, message: "Vui lòng chọn mức cược" },
          ]}
        >
          <Select options={dealOptions} />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item>
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              Lưu
            </Button>
        </Form.Item>
      </Row>
      </Form>
    </EvoCard>
  )
}

export default DealConfig