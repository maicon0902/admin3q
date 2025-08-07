"use client";
import EvoCard from "@/component/common/EvoCard/EvoCard";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
const { RangePicker } = DatePicker;

const OrderSearch = () => {
  return (
    <EvoCard>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Form.Item name="operator" label="Nhà điều hành">
            <Select placeholder="Chọn nhà điều hành">
              <Option value="1">Operator 1</Option>
              <Option value="2">Operator 2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="game" label="Game">
            <Select placeholder="Chọn game" >
              <Option value="game1">Game 1</Option>
              <Option value="game2">Game 2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="hvName" label="Tên HV mã hoá">
            <Input placeholder="Nhập tên HV mã hoá" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="dateRange" label="Thời gian">
            <RangePicker format="DD/MM/YYYY" style={{ width: "50%" }} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item>
            <Button onClick={() => {}}>Xuất file excel</Button>
          </Form.Item>
        </Col>
      </Row>
    </EvoCard>
  );
};

export default OrderSearch;
